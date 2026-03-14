import sys, json, re, time, urllib.request, urllib.parse, os
sys.stdout.reconfigure(encoding='utf-8')

API_KEY = 'XFz9YAlbSWPWcrd9hVQTvrZ2KGkDENFb4BSCHFaXCYaKNYqpvTSKReFR'
BASE_DIR = r'C:\Users\Manon\Desktop\Claude code\histamine'
CACHE_FILE = os.path.join(BASE_DIR, 'recipe_photos_cache.json')

# Load cache
with open(CACHE_FILE, encoding='utf-8') as f:
    cache = json.load(f)

# Extract recipe id+name pairs from all JS files
id_to_name = {}
js_files = [
    'js/data-recipes.js',
    'js/recipes-batch-1.js', 'js/recipes-batch-2.js', 'js/recipes-batch-3.js',
    'js/recipes-batch-4.js', 'js/recipes-batch-5.js', 'js/recipes-batch-6.js',
    'js/recipes-batch-7.js', 'js/recipes-batch-8.js', 'js/recipes-batch-9.js',
]
for fname in js_files:
    path = os.path.join(BASE_DIR, fname)
    if not os.path.exists(path):
        continue
    content = open(path, encoding='utf-8').read()
    # Extract id: "...", name: "..." pairs
    pairs = re.findall(r'id:\s*["\']([^"\']+)["\'].*?name:\s*["\']([^"\']+)["\']', content, re.DOTALL)
    for rid, name in pairs:
        id_to_name[rid] = name

print(f'Found {len(id_to_name)} recipes in JS files')

# French food word translations for better Pexels results
FR_TO_EN = {
    'poulet': 'chicken', 'dinde': 'turkey', 'boeuf': 'beef', 'veau': 'veal',
    'agneau': 'lamb', 'porc': 'pork', 'canard': 'duck', 'lapin': 'rabbit',
    'saumon': 'salmon', 'cabillaud': 'cod', 'sole': 'sole fish', 'truite': 'trout',
    'bar': 'sea bass', 'daurade': 'sea bream', 'thon': 'tuna', 'crevettes': 'shrimp',
    'oeuf': 'egg', 'oeufs': 'eggs', 'fromage': 'cheese', 'ricotta': 'ricotta',
    'creme': 'cream', 'beurre': 'butter', 'lait': 'milk',
    'courgette': 'zucchini', 'carotte': 'carrot', 'poireau': 'leek',
    'brocoli': 'broccoli', 'choufleur': 'cauliflower', 'epinards': 'spinach',
    'champignons': 'mushrooms', 'asperges': 'asparagus', 'fenouil': 'fennel',
    'potiron': 'pumpkin', 'butternut': 'butternut squash', 'patate': 'sweet potato',
    'pomme': 'apple', 'poire': 'pear', 'mangue': 'mango', 'peche': 'peach',
    'myrtilles': 'blueberries', 'cerise': 'cherry',
    'riz': 'rice', 'pates': 'pasta', 'quinoa': 'quinoa', 'lentilles': 'lentils',
    'soupe': 'soup', 'veloute': 'cream soup', 'gratin': 'gratin', 'tarte': 'tart',
    'gateau': 'cake', 'crepes': 'crepes', 'omelette': 'omelette',
    'smoothie': 'smoothie bowl', 'salade': 'salad', 'wok': 'stir fry',
    'tajine': 'tagine', 'couscous': 'couscous', 'curry': 'curry',
    'roti': 'roasted', 'grille': 'grilled', 'mijoté': 'stew', 'poêlée': 'pan fried',
    'blanquette': 'white stew veal', 'bourguignon': 'beef stew', 'pot': 'pot au feu',
    'quiche': 'quiche', 'flamiche': 'leek pie', 'tourte': 'savory pie',
    'terrine': 'terrine', 'mousse': 'mousse', 'flan': 'flan',
    'energy': 'energy balls', 'porridge': 'porridge', 'bowl': 'bowl',
    'gaufres': 'waffles', 'pancakes': 'pancakes',
}

def name_to_query(name):
    """Convert French recipe name to English Pexels search query."""
    # Remove accents for matching
    import unicodedata
    norm = unicodedata.normalize('NFD', name.lower())
    norm = ''.join(c for c in norm if unicodedata.category(c) != 'Mn')

    words = re.split(r'[\s\-,\'àâéèêëîïôùûüç]+', norm)
    words = [w for w in words if len(w) > 3 and w not in ('avec', 'aux', 'les', 'des', 'dans', 'pour', 'sans', 'sur', 'son', 'ses', 'une', 'mais', 'tres', 'frais', 'fraiche', 'maison', 'classique', 'leger', 'legere', 'douce', 'doux')]

    translated = []
    for w in words[:4]:
        if w in FR_TO_EN:
            translated.append(FR_TO_EN[w])
        else:
            # Keep the word as-is (many are understood by Pexels)
            translated.append(w)

    query = 'food ' + ' '.join(translated[:3]) if translated else 'food dish'
    return query

def search_pexels(query, page=1):
    params = urllib.parse.urlencode({'query': query, 'per_page': 5, 'page': page, 'orientation': 'landscape'})
    req = urllib.request.Request(
        f'https://api.pexels.com/v1/search?{params}',
        headers={'Authorization': API_KEY, 'User-Agent': 'Mozilla/5.0'}
    )
    try:
        with urllib.request.urlopen(req, timeout=12) as resp:
            data = json.loads(resp.read())
            photos = data.get('photos', [])
            if photos:
                # Avoid using a photo if it's already in cache many times
                used = list(cache.values())
                for p in photos:
                    base = p['src']['large'].split('?')[0]
                    url = f'{base}?auto=compress&cs=tinysrgb&w=640&h=400&fit=crop'
                    if used.count(url) == 0:
                        return url
                # If all photos already used, just take first
                base = photos[0]['src']['large'].split('?')[0]
                return f'{base}?auto=compress&cs=tinysrgb&w=640&h=400&fit=crop'
    except Exception as e:
        if '429' in str(e):
            print('  Rate limit hit, waiting 30s...')
            time.sleep(30)
        else:
            print(f'  ERROR: {e}')
    return None

# Only fetch missing ones
missing = [rid for rid, url in cache.items() if not url]
print(f'Fetching {len(missing)} missing photos...')

ok = 0
for i, rid in enumerate(missing):
    name = id_to_name.get(rid, '')
    query = name_to_query(name) if name else f'food {rid.replace("-", " ")}'
    print(f'[{i+1}/{len(missing)}] {rid[:40]} | query: {query}')

    url = search_pexels(query)
    if not url:
        # Try simpler fallback
        simple = query.split()[:3]
        url = search_pexels(' '.join(simple))

    cache[rid] = url or ''
    if url:
        ok += 1
        print(f'  OK')
    else:
        print(f'  NONE')

    # Save every 10
    if (i + 1) % 10 == 0:
        with open(CACHE_FILE, 'w', encoding='utf-8') as f:
            json.dump(cache, f, ensure_ascii=False)
        print(f'  [saved {i+1}]')

    time.sleep(0.35)

with open(CACHE_FILE, 'w', encoding='utf-8') as f:
    json.dump(cache, f, ensure_ascii=False)

total_ok = sum(1 for v in cache.values() if v)
print(f'\nDone: {ok}/{len(missing)} new | Total: {total_ok}/{len(cache)}')

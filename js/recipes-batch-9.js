const RECIPES_BATCH_9 = [

  // ══════ PETIT-DÉJEUNER ══════

  {
    id: "pdej9-bouillie-millet-pomme",
    name: "Bouillie de millet à la pomme",
    category: "petit-dej",
    mealType: ["petit-dej"],
    prepTime: 5,
    cookTime: 15,
    servings: 2,
    difficulty: "facile",
    histamineScore: 0,
    ingredients: [
      { food: "Millet", qty: 100, unit: "g", optional: false },
      { food: "Lait frais", qty: 300, unit: "ml", optional: false },
      { food: "Pomme", qty: 1, unit: "pièce", optional: false },
      { food: "Miel", qty: 1, unit: "c.à.s", optional: true },
      { food: "Vanille", qty: 1, unit: "pincée", optional: false }
    ],
    steps: [
      "Rincer le millet à l'eau froide.",
      "Porter le lait à frémissement avec la vanille.",
      "Verser le millet, baisser le feu et cuire 15 min en remuant régulièrement.",
      "Râper la pomme et incorporer en fin de cuisson.",
      "Servir dans des bols avec un filet de miel."
    ],
    nutrition: { calories: 290, protein: 9, carbs: 52, fat: 5, fiber: 4 },
    tips: "Le millet est une céréale ancienne sans gluten, douce et facilement digérée. Idéal pour démarrer la journée sans risque.",
    isCustom: false
  },

  {
    id: "pdej9-crepes-farine-riz",
    name: "Crêpes légères à la farine de riz",
    category: "petit-dej",
    mealType: ["petit-dej", "gouter"],
    prepTime: 10,
    cookTime: 20,
    servings: 2,
    difficulty: "facile",
    histamineScore: 1,
    ingredients: [
      { food: "Farine (blé, riz, maïs)", qty: 150, unit: "g", optional: false },
      { food: "Lait frais", qty: 300, unit: "ml", optional: false },
      { food: "Oeufs", qty: 2, unit: "pièces", optional: false },
      { food: "Beurre", qty: 20, unit: "g", optional: false },
      { food: "Miel", qty: 1, unit: "c.à.s", optional: true }
    ],
    steps: [
      "Mélanger la farine, le lait et les oeufs au fouet jusqu'à obtenir une pâte lisse.",
      "Ajouter le beurre fondu et laisser reposer 10 min.",
      "Cuire les crêpes dans une poêle légèrement beurrée.",
      "Servir avec du miel ou de la confiture maison."
    ],
    nutrition: { calories: 380, protein: 14, carbs: 55, fat: 12, fiber: 1 },
    tips: "Préparer la pâte avec du lait très frais. Consommer les crêpes immédiatement pour éviter toute accumulation.",
    isCustom: false
  },

  {
    id: "pdej9-quinoa-lait-poire",
    name: "Quinoa chaud au lait et à la poire",
    category: "petit-dej",
    mealType: ["petit-dej"],
    prepTime: 5,
    cookTime: 15,
    servings: 2,
    difficulty: "facile",
    histamineScore: 0,
    ingredients: [
      { food: "Quinoa", qty: 100, unit: "g", optional: false },
      { food: "Lait frais", qty: 250, unit: "ml", optional: false },
      { food: "Eau", qty: 100, unit: "ml", optional: false },
      { food: "Poire", qty: 1, unit: "pièce", optional: false },
      { food: "Sirop d'érable", qty: 1, unit: "c.à.s", optional: true },
      { food: "Amandes", qty: 10, unit: "g", optional: true }
    ],
    steps: [
      "Rincer le quinoa abondamment.",
      "Le cuire dans l'eau et le lait mélangés à feu doux 12-15 min.",
      "Couper la poire en petits dés.",
      "Verser le quinoa dans les bols, ajouter la poire et les amandes effilées.",
      "Arroser de sirop d'érable."
    ],
    nutrition: { calories: 310, protein: 11, carbs: 50, fat: 7, fiber: 5 },
    tips: "Le quinoa est une excellente source de protéines complètes. Bien rincer pour enlever les saponines qui peuvent irriter.",
    isCustom: false
  },

  {
    id: "pdej9-tartines-beurre-miel-poire",
    name: "Tartines beurre, miel et poire fraîche",
    category: "petit-dej",
    mealType: ["petit-dej", "gouter"],
    prepTime: 5,
    cookTime: 0,
    servings: 1,
    difficulty: "facile",
    histamineScore: 1,
    ingredients: [
      { food: "Pain frais simple", qty: 2, unit: "tranches", optional: false },
      { food: "Beurre", qty: 20, unit: "g", optional: false },
      { food: "Miel", qty: 1, unit: "c.à.s", optional: false },
      { food: "Poire", qty: 1, unit: "pièce", optional: false }
    ],
    steps: [
      "Couper les tranches de pain en deux si nécessaire.",
      "Tartiner généreusement de beurre.",
      "Ajouter un filet de miel.",
      "Trancher finement la poire et disposer sur les tartines."
    ],
    nutrition: { calories: 290, protein: 6, carbs: 46, fat: 10, fiber: 3 },
    tips: "Choisir du pain frais du jour (ni au levain, ni de la veille) pour limiter la fermentation.",
    isCustom: false
  },

  {
    id: "pdej9-smoothie-mangue-coco",
    name: "Smoothie mangue et lait de coco",
    category: "petit-dej",
    mealType: ["petit-dej", "gouter"],
    prepTime: 5,
    cookTime: 0,
    servings: 1,
    difficulty: "facile",
    histamineScore: 0,
    ingredients: [
      { food: "Mangue", qty: 150, unit: "g", optional: false },
      { food: "Lait de coco", qty: 150, unit: "ml", optional: false },
      { food: "Poire", qty: 1, unit: "pièce", optional: false },
      { food: "Gingembre frais", qty: 5, unit: "g", optional: true }
    ],
    steps: [
      "Peler et couper la mangue et la poire en morceaux.",
      "Placer tous les ingrédients dans un blender.",
      "Mixer jusqu'à obtenir une texture lisse et crémeuse.",
      "Servir immédiatement bien frais."
    ],
    nutrition: { calories: 220, protein: 2, carbs: 38, fat: 9, fiber: 4 },
    tips: "Un smoothie sans fruits rouges ni agrumes, parfait pour un début de journée sans risque histamine.",
    isCustom: false
  },

  {
    id: "pdej9-porridge-sarrasin-myrtilles",
    name: "Porridge de sarrasin aux myrtilles",
    category: "petit-dej",
    mealType: ["petit-dej"],
    prepTime: 5,
    cookTime: 10,
    servings: 2,
    difficulty: "facile",
    histamineScore: 0,
    ingredients: [
      { food: "Sarrasin", qty: 100, unit: "g", optional: false },
      { food: "Lait frais", qty: 300, unit: "ml", optional: false },
      { food: "Myrtilles", qty: 80, unit: "g", optional: false },
      { food: "Miel", qty: 1, unit: "c.à.s", optional: true },
      { food: "Graines de chia", qty: 1, unit: "c.à.s", optional: true }
    ],
    steps: [
      "Mixer grossièrement les grains de sarrasin (ou utiliser de la farine de sarrasin).",
      "Faire chauffer le lait et verser le sarrasin, cuire 8-10 min en remuant.",
      "Servir avec les myrtilles, un filet de miel et les graines de chia."
    ],
    nutrition: { calories: 310, protein: 10, carbs: 54, fat: 6, fiber: 6 },
    tips: "Le sarrasin est sans gluten et riche en flavonoïdes anti-inflammatoires. Les myrtilles sont parmi les fruits les mieux tolérés.",
    isCustom: false
  },

  {
    id: "pdej9-oeufs-brouilles-ciboulette",
    name: "Œufs brouillés à la ciboulette",
    category: "petit-dej",
    mealType: ["petit-dej", "dejeuner"],
    prepTime: 3,
    cookTime: 5,
    servings: 1,
    difficulty: "facile",
    histamineScore: 1,
    ingredients: [
      { food: "Oeufs", qty: 3, unit: "pièces", optional: false },
      { food: "Beurre", qty: 15, unit: "g", optional: false },
      { food: "Ciboulette", qty: 5, unit: "g", optional: false },
      { food: "Sel", qty: 1, unit: "pincée", optional: false }
    ],
    steps: [
      "Battre les oeufs en omelette avec une pincée de sel.",
      "Faire fondre le beurre à feu très doux.",
      "Verser les oeufs et remuer doucement sans arrêt.",
      "Retirer du feu quand les oeufs sont encore légèrement coulants.",
      "Parsemer de ciboulette ciselée et servir aussitôt."
    ],
    nutrition: { calories: 240, protein: 18, carbs: 1, fat: 18, fiber: 0 },
    tips: "La cuisson à feu doux est essentielle pour des oeufs brouillés soyeux. Consommer immédiatement.",
    isCustom: false
  },

  {
    id: "pdej9-bowl-avoine-peche-graines",
    name: "Bowl d'avoine froid à la pêche",
    category: "petit-dej",
    mealType: ["petit-dej"],
    prepTime: 5,
    cookTime: 0,
    servings: 1,
    difficulty: "facile",
    histamineScore: 0,
    ingredients: [
      { food: "Avoine / flocons", qty: 60, unit: "g", optional: false },
      { food: "Lait frais", qty: 150, unit: "ml", optional: false },
      { food: "Pêche", qty: 1, unit: "pièce", optional: false },
      { food: "Graines de tournesol", qty: 10, unit: "g", optional: true },
      { food: "Sirop d'agave", qty: 1, unit: "c.à.c", optional: true }
    ],
    steps: [
      "Verser les flocons d'avoine dans un bol avec le lait.",
      "Laisser gonfler 5 minutes (ou toute la nuit au réfrigérateur).",
      "Couper la pêche en lamelles.",
      "Disposer la pêche sur les flocons et parsemer de graines.",
      "Sucrer légèrement avec le sirop d'agave."
    ],
    nutrition: { calories: 270, protein: 9, carbs: 44, fat: 7, fiber: 5 },
    tips: "La pêche fraîche est parmi les fruits bien tolérés. Consommer rapidement après préparation.",
    isCustom: false
  },

  // ══════ SOUPES ══════

  {
    id: "soupe9-veloute-carotte-gingembre",
    name: "Velouté de carotte au gingembre",
    category: "soupe",
    mealType: ["dejeuner", "diner"],
    prepTime: 10,
    cookTime: 25,
    servings: 4,
    difficulty: "facile",
    histamineScore: 0,
    ingredients: [
      { food: "Carotte", qty: 600, unit: "g", optional: false },
      { food: "Oignon", qty: 1, unit: "pièce", optional: false },
      { food: "Gingembre frais", qty: 15, unit: "g", optional: false },
      { food: "Huile d'olive", qty: 2, unit: "c.à.s", optional: false },
      { food: "Eau", qty: 600, unit: "ml", optional: false },
      { food: "Sel", qty: 1, unit: "pincée", optional: false },
      { food: "Coriandre fraîche", qty: 5, unit: "g", optional: true }
    ],
    steps: [
      "Éplucher et couper les carottes en rondelles, émincer l'oignon.",
      "Faire revenir l'oignon dans l'huile d'olive 3 min.",
      "Ajouter les carottes et le gingembre râpé, couvrir d'eau.",
      "Cuire 25 min à couvert.",
      "Mixer jusqu'à obtenir un velouté lisse.",
      "Assaisonner et servir avec la coriandre fraîche."
    ],
    nutrition: { calories: 95, protein: 2, carbs: 15, fat: 4, fiber: 4 },
    tips: "La carotte est très bien tolérée. Le gingembre apporte des propriétés anti-inflammatoires bénéfiques.",
    isCustom: false
  },

  {
    id: "soupe9-veloute-poireau-pomme-de-terre",
    name: "Velouté poireau-pomme de terre",
    category: "soupe",
    mealType: ["dejeuner", "diner"],
    prepTime: 10,
    cookTime: 25,
    servings: 4,
    difficulty: "facile",
    histamineScore: 0,
    ingredients: [
      { food: "Poireau", qty: 3, unit: "pièces", optional: false },
      { food: "Pommes de terre", qty: 400, unit: "g", optional: false },
      { food: "Oignon", qty: 1, unit: "pièce", optional: false },
      { food: "Beurre", qty: 20, unit: "g", optional: false },
      { food: "Eau", qty: 700, unit: "ml", optional: false },
      { food: "Sel", qty: 1, unit: "pincée", optional: false },
      { food: "Ciboulette", qty: 5, unit: "g", optional: true }
    ],
    steps: [
      "Laver et émincer les poireaux, éplucher et couper les pommes de terre.",
      "Faire fondre le beurre et faire suer l'oignon et les poireaux 5 min.",
      "Ajouter les pommes de terre et l'eau, cuire 20 min.",
      "Mixer finement, assaisonner.",
      "Parsemer de ciboulette au moment de servir."
    ],
    nutrition: { calories: 130, protein: 3, carbs: 22, fat: 4, fiber: 3 },
    tips: "Classique indémodable, tous les ingrédients sont très bien tolérés. Consommer chaud et frais.",
    isCustom: false
  },

  {
    id: "soupe9-creme-brocoli-fromage-frais",
    name: "Crème de brocoli au fromage frais",
    category: "soupe",
    mealType: ["dejeuner", "diner"],
    prepTime: 10,
    cookTime: 20,
    servings: 3,
    difficulty: "facile",
    histamineScore: 0,
    ingredients: [
      { food: "Brocoli", qty: 500, unit: "g", optional: false },
      { food: "Pommes de terre", qty: 200, unit: "g", optional: false },
      { food: "Oignon", qty: 1, unit: "pièce", optional: false },
      { food: "Fromage frais / cottage", qty: 100, unit: "g", optional: false },
      { food: "Eau", qty: 600, unit: "ml", optional: false },
      { food: "Huile d'olive", qty: 1, unit: "c.à.s", optional: false },
      { food: "Sel", qty: 1, unit: "pincée", optional: false }
    ],
    steps: [
      "Couper le brocoli en fleurettes, éplucher et couper les pommes de terre.",
      "Faire revenir l'oignon dans l'huile d'olive.",
      "Ajouter les légumes et l'eau, cuire 20 min.",
      "Mixer avec le fromage frais.",
      "Rectifier l'assaisonnement et servir."
    ],
    nutrition: { calories: 160, protein: 9, carbs: 22, fat: 5, fiber: 5 },
    tips: "Le fromage frais non affiné donne une onctuosité sans risque histamine. Servir aussitôt mixé.",
    isCustom: false
  },

  {
    id: "soupe9-soupe-fenouil-aneth",
    name: "Soupe de fenouil à l'aneth",
    category: "soupe",
    mealType: ["dejeuner", "diner"],
    prepTime: 10,
    cookTime: 25,
    servings: 3,
    difficulty: "facile",
    histamineScore: 0,
    ingredients: [
      { food: "Fenouil", qty: 2, unit: "pièces", optional: false },
      { food: "Pommes de terre", qty: 300, unit: "g", optional: false },
      { food: "Oignon", qty: 1, unit: "pièce", optional: false },
      { food: "Huile d'olive", qty: 2, unit: "c.à.s", optional: false },
      { food: "Eau", qty: 600, unit: "ml", optional: false },
      { food: "Aneth frais", qty: 5, unit: "g", optional: false },
      { food: "Sel", qty: 1, unit: "pincée", optional: false }
    ],
    steps: [
      "Émincer le fenouil et l'oignon, éplucher les pommes de terre.",
      "Faire suer l'oignon et le fenouil dans l'huile 5 min.",
      "Ajouter les pommes de terre et l'eau, cuire 20 min.",
      "Mixer, assaisonner.",
      "Servir avec l'aneth frais ciselé."
    ],
    nutrition: { calories: 120, protein: 2, carbs: 20, fat: 4, fiber: 4 },
    tips: "Le fenouil est excellent pour la digestion et très bien toléré. L'aneth apporte fraîcheur sans risque.",
    isCustom: false
  },

  {
    id: "soupe9-veloute-chou-fleur-curcuma",
    name: "Velouté de chou-fleur au curcuma",
    category: "soupe",
    mealType: ["dejeuner", "diner"],
    prepTime: 10,
    cookTime: 20,
    servings: 4,
    difficulty: "facile",
    histamineScore: 0,
    ingredients: [
      { food: "Chou-fleur", qty: 600, unit: "g", optional: false },
      { food: "Oignon", qty: 1, unit: "pièce", optional: false },
      { food: "Curcuma", qty: 1, unit: "c.à.c", optional: false },
      { food: "Huile de coco", qty: 2, unit: "c.à.s", optional: false },
      { food: "Eau", qty: 600, unit: "ml", optional: false },
      { food: "Sel", qty: 1, unit: "pincée", optional: false },
      { food: "Persil frais", qty: 5, unit: "g", optional: true }
    ],
    steps: [
      "Couper le chou-fleur en fleurettes, émincer l'oignon.",
      "Faire revenir l'oignon dans l'huile de coco avec le curcuma.",
      "Ajouter le chou-fleur et l'eau, couvrir et cuire 20 min.",
      "Mixer jusqu'à texture lisse.",
      "Servir avec le persil frais."
    ],
    nutrition: { calories: 100, protein: 3, carbs: 12, fat: 5, fiber: 4 },
    tips: "Le curcuma est anti-inflammatoire, idéal pour les personnes sensibles à l'histamine. L'huile de coco améliore l'absorption.",
    isCustom: false
  },

  {
    id: "soupe9-bouillon-poulet-legumes",
    name: "Bouillon de poulet aux légumes",
    category: "soupe",
    mealType: ["dejeuner", "diner"],
    prepTime: 15,
    cookTime: 35,
    servings: 4,
    difficulty: "facile",
    histamineScore: 0,
    ingredients: [
      { food: "Poulet frais", qty: 400, unit: "g", optional: false },
      { food: "Carotte", qty: 2, unit: "pièces", optional: false },
      { food: "Poireau", qty: 1, unit: "pièce", optional: false },
      { food: "Céleri", qty: 1, unit: "branche", optional: false },
      { food: "Oignon", qty: 1, unit: "pièce", optional: false },
      { food: "Laurier", qty: 1, unit: "feuille", optional: false },
      { food: "Thym", qty: 1, unit: "branche", optional: false },
      { food: "Eau", qty: 1200, unit: "ml", optional: false },
      { food: "Sel", qty: 1, unit: "pincée", optional: false }
    ],
    steps: [
      "Mettre le poulet, les légumes coupés grossièrement et les herbes dans une grande casserole.",
      "Couvrir d'eau froide et porter à ébullition.",
      "Écumer puis baisser le feu et mijoter 30 min à couvert.",
      "Retirer le poulet, l'effilocher.",
      "Filtrer le bouillon si désiré et servir avec le poulet et les légumes."
    ],
    nutrition: { calories: 180, protein: 24, carbs: 8, fat: 6, fiber: 2 },
    tips: "Utiliser du poulet très frais et consommer le bouillon immédiatement. Ne pas conserver plus de 24h.",
    isCustom: false
  },

  {
    id: "soupe9-veloute-panais-poire",
    name: "Velouté de panais à la poire",
    category: "soupe",
    mealType: ["dejeuner", "diner"],
    prepTime: 10,
    cookTime: 25,
    servings: 3,
    difficulty: "facile",
    histamineScore: 0,
    ingredients: [
      { food: "Panais", qty: 400, unit: "g", optional: false },
      { food: "Poire", qty: 1, unit: "pièce", optional: false },
      { food: "Oignon", qty: 1, unit: "pièce", optional: false },
      { food: "Huile d'olive", qty: 2, unit: "c.à.s", optional: false },
      { food: "Eau", qty: 500, unit: "ml", optional: false },
      { food: "Sel", qty: 1, unit: "pincée", optional: false },
      { food: "Gingembre frais", qty: 5, unit: "g", optional: true }
    ],
    steps: [
      "Éplucher et couper le panais en dés, émincer l'oignon.",
      "Faire revenir l'oignon dans l'huile avec le gingembre râpé.",
      "Ajouter le panais et l'eau, cuire 20 min.",
      "Ajouter la poire épluchée et cuire encore 5 min.",
      "Mixer finement, assaisonner et servir."
    ],
    nutrition: { calories: 140, protein: 2, carbs: 25, fat: 5, fiber: 5 },
    tips: "Association originale et douce. Le panais est riche en fibres et très bien toléré.",
    isCustom: false
  },

  {
    id: "soupe9-soupe-pois-casses-carotte",
    name: "Soupe aux pois cassés et carottes",
    category: "soupe",
    mealType: ["dejeuner", "diner"],
    prepTime: 10,
    cookTime: 45,
    servings: 4,
    difficulty: "facile",
    histamineScore: 1,
    ingredients: [
      { food: "Pois cassés", qty: 200, unit: "g", optional: false },
      { food: "Carotte", qty: 3, unit: "pièces", optional: false },
      { food: "Oignon", qty: 1, unit: "pièce", optional: false },
      { food: "Ail", qty: 1, unit: "gousse", optional: false },
      { food: "Huile d'olive", qty: 2, unit: "c.à.s", optional: false },
      { food: "Eau", qty: 1000, unit: "ml", optional: false },
      { food: "Cumin", qty: 1, unit: "c.à.c", optional: false },
      { food: "Sel", qty: 1, unit: "pincée", optional: false }
    ],
    steps: [
      "Rincer les pois cassés.",
      "Faire revenir l'oignon et l'ail dans l'huile avec le cumin.",
      "Ajouter les carottes en rondelles et les pois cassés.",
      "Couvrir d'eau et cuire 40-45 min à feu doux.",
      "Mixer partiellement pour une texture rustique ou totalement pour un velouté."
    ],
    nutrition: { calories: 200, protein: 11, carbs: 32, fat: 5, fiber: 9 },
    tips: "Les pois cassés sont modérément tolérés. Bien cuire pour améliorer la digestibilité.",
    isCustom: false
  },

  // ══════ PLATS ══════

  {
    id: "plat9-poulet-four-herbes-provence",
    name: "Poulet rôti aux herbes de Provence",
    category: "plat",
    mealType: ["dejeuner", "diner"],
    prepTime: 10,
    cookTime: 40,
    servings: 3,
    difficulty: "facile",
    histamineScore: 0,
    ingredients: [
      { food: "Poulet frais", qty: 600, unit: "g", optional: false },
      { food: "Huile d'olive", qty: 3, unit: "c.à.s", optional: false },
      { food: "Romarin", qty: 2, unit: "branches", optional: false },
      { food: "Thym", qty: 2, unit: "branches", optional: false },
      { food: "Ail", qty: 3, unit: "gousses", optional: false },
      { food: "Sel", qty: 1, unit: "pincée", optional: false },
      { food: "Pommes de terre", qty: 500, unit: "g", optional: true }
    ],
    steps: [
      "Préchauffer le four à 200°C.",
      "Masser le poulet avec l'huile d'olive, le sel et les herbes.",
      "Disposer dans un plat avec l'ail en chemise.",
      "Ajouter les pommes de terre coupées en quartiers autour.",
      "Enfourner 40 min en arrosant régulièrement.",
      "Servir chaud, consommer immédiatement."
    ],
    nutrition: { calories: 430, protein: 38, carbs: 30, fat: 17, fiber: 3 },
    tips: "Le poulet rôti est excellent si consommé immédiatement et non réchauffé. Ne pas conserver les restes.",
    isCustom: false
  },

  {
    id: "plat9-dinde-courgette-quinoa",
    name: "Émincé de dinde, courgette et quinoa",
    category: "plat",
    mealType: ["dejeuner", "diner"],
    prepTime: 10,
    cookTime: 20,
    servings: 2,
    difficulty: "facile",
    histamineScore: 0,
    ingredients: [
      { food: "Dinde fraîche", qty: 300, unit: "g", optional: false },
      { food: "Quinoa", qty: 150, unit: "g", optional: false },
      { food: "Courgette", qty: 2, unit: "pièces", optional: false },
      { food: "Ail", qty: 2, unit: "gousses", optional: false },
      { food: "Huile d'olive", qty: 2, unit: "c.à.s", optional: false },
      { food: "Persil frais", qty: 5, unit: "g", optional: false },
      { food: "Sel", qty: 1, unit: "pincée", optional: false }
    ],
    steps: [
      "Rincer et cuire le quinoa dans le double de son volume d'eau salée 12 min.",
      "Émincer la dinde en lamelles, couper les courgettes en demi-lunes.",
      "Saisir la dinde dans l'huile avec l'ail haché.",
      "Ajouter les courgettes et cuire 7 min.",
      "Mélanger avec le quinoa, parsemer de persil."
    ],
    nutrition: { calories: 460, protein: 42, carbs: 42, fat: 12, fiber: 5 },
    tips: "La dinde fraîche est une excellente source de protéines maigres, très bien tolérée.",
    isCustom: false
  },

  {
    id: "plat9-veau-champignons-creme",
    name: "Blanquette de veau aux champignons",
    category: "plat",
    mealType: ["dejeuner", "diner"],
    prepTime: 15,
    cookTime: 40,
    servings: 3,
    difficulty: "moyen",
    histamineScore: 1,
    ingredients: [
      { food: "Veau frais", qty: 500, unit: "g", optional: false },
      { food: "Champignons", qty: 200, unit: "g", optional: false },
      { food: "Carotte", qty: 2, unit: "pièces", optional: false },
      { food: "Oignon", qty: 1, unit: "pièce", optional: false },
      { food: "Crème fraîche", qty: 100, unit: "ml", optional: false },
      { food: "Beurre", qty: 20, unit: "g", optional: false },
      { food: "Persil frais", qty: 5, unit: "g", optional: false },
      { food: "Sel", qty: 1, unit: "pincée", optional: false },
      { food: "Riz", qty: 200, unit: "g", optional: true }
    ],
    steps: [
      "Couper le veau en cubes et les carottes en rondelles.",
      "Dans une cocotte, faire revenir l'oignon dans le beurre.",
      "Ajouter le veau, dorer légèrement.",
      "Ajouter les carottes et les champignons, couvrir d'eau.",
      "Mijoter 35 min à feu doux.",
      "Incorporer la crème fraîche, laisser épaissir 5 min.",
      "Servir sur du riz avec le persil."
    ],
    nutrition: { calories: 480, protein: 40, carbs: 35, fat: 18, fiber: 3 },
    tips: "Consommer les champignons très frais. La crème fraîche est modérément tolérée, à surveiller individuellement.",
    isCustom: false
  },

  {
    id: "plat9-agneau-carotte-romarin",
    name: "Agneau mijoté aux carottes et romarin",
    category: "plat",
    mealType: ["dejeuner", "diner"],
    prepTime: 15,
    cookTime: 50,
    servings: 3,
    difficulty: "moyen",
    histamineScore: 0,
    ingredients: [
      { food: "Agneau frais", qty: 500, unit: "g", optional: false },
      { food: "Carotte", qty: 4, unit: "pièces", optional: false },
      { food: "Oignon", qty: 1, unit: "pièce", optional: false },
      { food: "Ail", qty: 3, unit: "gousses", optional: false },
      { food: "Romarin", qty: 2, unit: "branches", optional: false },
      { food: "Huile d'olive", qty: 2, unit: "c.à.s", optional: false },
      { food: "Eau", qty: 300, unit: "ml", optional: false },
      { food: "Sel", qty: 1, unit: "pincée", optional: false }
    ],
    steps: [
      "Couper l'agneau en morceaux et les carottes en tronçons.",
      "Faire dorer l'agneau dans l'huile d'olive de tous les côtés.",
      "Ajouter l'oignon et l'ail, faire revenir 2 min.",
      "Ajouter les carottes, le romarin et l'eau.",
      "Couvrir et mijoter 45 min à feu doux.",
      "Servir avec de la semoule ou du riz."
    ],
    nutrition: { calories: 430, protein: 36, carbs: 12, fat: 26, fiber: 3 },
    tips: "Utiliser de l'agneau très frais et consommer immédiatement. Le romarin est bien toléré.",
    isCustom: false
  },

  {
    id: "plat9-boeuf-patate-douce-mijote",
    name: "Mijoté de boeuf à la patate douce",
    category: "plat",
    mealType: ["dejeuner", "diner"],
    prepTime: 15,
    cookTime: 60,
    servings: 3,
    difficulty: "moyen",
    histamineScore: 0,
    ingredients: [
      { food: "Boeuf frais", qty: 450, unit: "g", optional: false },
      { food: "Patate douce", qty: 400, unit: "g", optional: false },
      { food: "Carotte", qty: 2, unit: "pièces", optional: false },
      { food: "Oignon", qty: 1, unit: "pièce", optional: false },
      { food: "Ail", qty: 2, unit: "gousses", optional: false },
      { food: "Curcuma", qty: 1, unit: "c.à.c", optional: false },
      { food: "Cumin", qty: 1, unit: "c.à.c", optional: false },
      { food: "Huile d'olive", qty: 2, unit: "c.à.s", optional: false },
      { food: "Eau", qty: 300, unit: "ml", optional: false },
      { food: "Sel", qty: 1, unit: "pincée", optional: false }
    ],
    steps: [
      "Couper le boeuf en cubes et les légumes en morceaux.",
      "Saisir le boeuf sur toutes les faces dans l'huile chaude.",
      "Ajouter l'oignon, l'ail et les épices, mélanger.",
      "Ajouter les légumes et l'eau.",
      "Couvrir et cuire à feu doux 55 min.",
      "Servir avec du riz ou de la semoule."
    ],
    nutrition: { calories: 450, protein: 35, carbs: 38, fat: 18, fiber: 5 },
    tips: "La patate douce apporte une douceur naturelle. Le curcuma et le cumin sont bien tolérés.",
    isCustom: false
  },

  {
    id: "plat9-cabillaud-poireau-beurre",
    name: "Cabillaud poêlé sur fondue de poireaux",
    category: "plat",
    mealType: ["dejeuner", "diner"],
    prepTime: 10,
    cookTime: 20,
    servings: 2,
    difficulty: "facile",
    histamineScore: 1,
    ingredients: [
      { food: "Cabillaud frais", qty: 400, unit: "g", optional: false },
      { food: "Poireau", qty: 3, unit: "pièces", optional: false },
      { food: "Beurre", qty: 30, unit: "g", optional: false },
      { food: "Aneth frais", qty: 5, unit: "g", optional: true },
      { food: "Sel", qty: 1, unit: "pincée", optional: false }
    ],
    steps: [
      "Émincer finement les poireaux.",
      "Faire fondre 20 g de beurre et cuire les poireaux à feu doux 15 min.",
      "Assaisonner la fondue de sel.",
      "Dans une autre poêle, faire fondre le reste du beurre et saisir le cabillaud 3-4 min de chaque côté.",
      "Disposer la fondue de poireaux dans les assiettes, poser le cabillaud dessus.",
      "Parsemer d'aneth."
    ],
    nutrition: { calories: 300, protein: 38, carbs: 8, fat: 13, fiber: 3 },
    tips: "Le cabillaud doit être consommé le jour même d'achat. La fondue de poireaux peut se préparer à l'avance.",
    isCustom: false
  },

  {
    id: "plat9-truite-amandes-beurre",
    name: "Truite aux amandes",
    category: "plat",
    mealType: ["dejeuner", "diner"],
    prepTime: 5,
    cookTime: 15,
    servings: 2,
    difficulty: "facile",
    histamineScore: 1,
    ingredients: [
      { food: "Truite fraîche", qty: 400, unit: "g", optional: false },
      { food: "Amandes", qty: 50, unit: "g", optional: false },
      { food: "Beurre", qty: 40, unit: "g", optional: false },
      { food: "Persil frais", qty: 5, unit: "g", optional: false },
      { food: "Sel", qty: 1, unit: "pincée", optional: false }
    ],
    steps: [
      "Saler légèrement les filets de truite.",
      "Faire fondre la moitié du beurre et cuire la truite 4 min côté peau, puis retourner 2 min.",
      "Réserver la truite au chaud.",
      "Dans la même poêle, faire dorer les amandes effilées dans le reste du beurre.",
      "Verser les amandes sur la truite, parsemer de persil et servir."
    ],
    nutrition: { calories: 380, protein: 36, carbs: 4, fat: 25, fiber: 2 },
    tips: "Classique français simple et délicieux. La truite doit être très fraîche. Les amandes effilées se colorent vite, surveiller la cuisson.",
    isCustom: false
  },

  {
    id: "plat9-pates-courgette-ricotta",
    name: "Pâtes à la ricotta et courgette",
    category: "plat",
    mealType: ["dejeuner", "diner"],
    prepTime: 10,
    cookTime: 15,
    servings: 2,
    difficulty: "facile",
    histamineScore: 0,
    ingredients: [
      { food: "Pâtes nature", qty: 200, unit: "g", optional: false },
      { food: "Courgette", qty: 2, unit: "pièces", optional: false },
      { food: "Ricotta", qty: 150, unit: "g", optional: false },
      { food: "Ail", qty: 1, unit: "gousse", optional: false },
      { food: "Huile d'olive", qty: 2, unit: "c.à.s", optional: false },
      { food: "Basilic frais", qty: 5, unit: "g", optional: false },
      { food: "Sel", qty: 1, unit: "pincée", optional: false }
    ],
    steps: [
      "Cuire les pâtes al dente dans de l'eau salée.",
      "Râper les courgettes grossièrement.",
      "Faire revenir l'ail dans l'huile, ajouter les courgettes râpées, cuire 5 min.",
      "Mélanger les pâtes égouttées avec les courgettes et la ricotta.",
      "Assaisonner, parsemer de basilic frais."
    ],
    nutrition: { calories: 490, protein: 18, carbs: 65, fat: 17, fiber: 4 },
    tips: "La ricotta est un fromage frais non affiné, excellente alternative au parmesan pour les personnes sensibles.",
    isCustom: false
  },

  {
    id: "plat9-couscous-dinde-legumes",
    name: "Couscous de dinde aux légumes",
    category: "plat",
    mealType: ["dejeuner", "diner"],
    prepTime: 15,
    cookTime: 30,
    servings: 3,
    difficulty: "facile",
    histamineScore: 0,
    ingredients: [
      { food: "Dinde fraîche", qty: 400, unit: "g", optional: false },
      { food: "Semoule / couscous", qty: 200, unit: "g", optional: false },
      { food: "Courgette", qty: 2, unit: "pièces", optional: false },
      { food: "Carotte", qty: 2, unit: "pièces", optional: false },
      { food: "Oignon", qty: 1, unit: "pièce", optional: false },
      { food: "Ail", qty: 2, unit: "gousses", optional: false },
      { food: "Cumin", qty: 1, unit: "c.à.c", optional: false },
      { food: "Coriandre moulue", qty: 1, unit: "c.à.c", optional: false },
      { food: "Huile d'olive", qty: 2, unit: "c.à.s", optional: false },
      { food: "Eau", qty: 400, unit: "ml", optional: false },
      { food: "Sel", qty: 1, unit: "pincée", optional: false }
    ],
    steps: [
      "Couper la dinde en morceaux et les légumes en gros dés.",
      "Faire revenir l'oignon et l'ail avec les épices.",
      "Ajouter la dinde et dorer 5 min.",
      "Ajouter les légumes et l'eau, mijoter 25 min.",
      "Préparer la semoule en la couvrant d'eau bouillante salée, laisser gonfler 5 min.",
      "Servir la semoule avec le ragoût de dinde."
    ],
    nutrition: { calories: 480, protein: 38, carbs: 55, fat: 12, fiber: 5 },
    tips: "Le couscous est réconfortant et bien toléré. Bien cuire les légumes pour faciliter la digestion.",
    isCustom: false
  },

  {
    id: "plat9-riz-legumes-curcuma",
    name: "Riz pilaf aux légumes et curcuma",
    category: "plat",
    mealType: ["dejeuner", "diner"],
    prepTime: 10,
    cookTime: 25,
    servings: 2,
    difficulty: "facile",
    histamineScore: 0,
    ingredients: [
      { food: "Riz", qty: 200, unit: "g", optional: false },
      { food: "Carotte", qty: 2, unit: "pièces", optional: false },
      { food: "Petits pois", qty: 100, unit: "g", optional: false },
      { food: "Oignon", qty: 1, unit: "pièce", optional: false },
      { food: "Ail", qty: 1, unit: "gousse", optional: false },
      { food: "Curcuma", qty: 1, unit: "c.à.c", optional: false },
      { food: "Beurre", qty: 20, unit: "g", optional: false },
      { food: "Eau", qty: 400, unit: "ml", optional: false },
      { food: "Sel", qty: 1, unit: "pincée", optional: false }
    ],
    steps: [
      "Faire revenir l'oignon et l'ail dans le beurre avec le curcuma.",
      "Ajouter le riz et nacrer 2 min.",
      "Ajouter les carottes en petits dés et l'eau.",
      "Cuire à couvert 15 min.",
      "Incorporer les petits pois en fin de cuisson, couvrir 5 min.",
      "Égrener avec une fourchette et servir."
    ],
    nutrition: { calories: 380, protein: 8, carbs: 70, fat: 7, fiber: 5 },
    tips: "Le curcuma donne une belle couleur dorée et ses vertus anti-inflammatoires sont bien documentées.",
    isCustom: false
  },

  {
    id: "plat9-lapin-thym-romarin",
    name: "Lapin au thym et romarin",
    category: "plat",
    mealType: ["dejeuner", "diner"],
    prepTime: 10,
    cookTime: 50,
    servings: 3,
    difficulty: "moyen",
    histamineScore: 0,
    ingredients: [
      { food: "Lapin frais", qty: 600, unit: "g", optional: false },
      { food: "Oignon", qty: 2, unit: "pièces", optional: false },
      { food: "Ail", qty: 3, unit: "gousses", optional: false },
      { food: "Thym", qty: 3, unit: "branches", optional: false },
      { food: "Romarin", qty: 2, unit: "branches", optional: false },
      { food: "Huile d'olive", qty: 3, unit: "c.à.s", optional: false },
      { food: "Eau", qty: 200, unit: "ml", optional: false },
      { food: "Sel", qty: 1, unit: "pincée", optional: false }
    ],
    steps: [
      "Couper le lapin en morceaux.",
      "Faire dorer dans l'huile sur toutes les faces.",
      "Ajouter l'oignon émincé et l'ail.",
      "Ajouter le thym, le romarin et l'eau.",
      "Couvrir et mijoter 45 min à feu doux.",
      "Servir avec des pommes de terre vapeur."
    ],
    nutrition: { calories: 360, protein: 38, carbs: 5, fat: 20, fiber: 1 },
    tips: "Le lapin est une viande maigre excellente dans un régime pauvre en histamine. Consommer immédiatement.",
    isCustom: false
  },

  {
    id: "plat9-porc-fenouil-four",
    name: "Filet de porc au fenouil rôti",
    category: "plat",
    mealType: ["dejeuner", "diner"],
    prepTime: 10,
    cookTime: 35,
    servings: 2,
    difficulty: "facile",
    histamineScore: 0,
    ingredients: [
      { food: "Porc frais", qty: 400, unit: "g", optional: false },
      { food: "Fenouil", qty: 2, unit: "pièces", optional: false },
      { food: "Oignon", qty: 1, unit: "pièce", optional: false },
      { food: "Huile d'olive", qty: 3, unit: "c.à.s", optional: false },
      { food: "Thym", qty: 2, unit: "branches", optional: false },
      { food: "Ail", qty: 2, unit: "gousses", optional: false },
      { food: "Sel", qty: 1, unit: "pincée", optional: false }
    ],
    steps: [
      "Préchauffer le four à 190°C.",
      "Couper le fenouil en quartiers et l'oignon en lamelles.",
      "Disposer les légumes dans un plat avec l'huile et le thym.",
      "Poser le filet de porc assaisonné sur les légumes.",
      "Enfourner 35 min en retournant le filet à mi-cuisson.",
      "Laisser reposer 5 min avant de trancher."
    ],
    nutrition: { calories: 380, protein: 36, carbs: 10, fat: 22, fiber: 4 },
    tips: "Le fenouil caramélise à la cuisson et adoucit sa saveur anisée. Très bien toléré.",
    isCustom: false
  },

  {
    id: "plat9-sole-vapeur-herbes",
    name: "Filets de sole vapeur aux herbes fraîches",
    category: "plat",
    mealType: ["dejeuner", "diner"],
    prepTime: 5,
    cookTime: 10,
    servings: 2,
    difficulty: "facile",
    histamineScore: 1,
    ingredients: [
      { food: "Sole fraîche", qty: 400, unit: "g", optional: false },
      { food: "Persil frais", qty: 5, unit: "g", optional: false },
      { food: "Aneth frais", qty: 5, unit: "g", optional: false },
      { food: "Ciboulette", qty: 5, unit: "g", optional: false },
      { food: "Beurre", qty: 20, unit: "g", optional: false },
      { food: "Sel", qty: 1, unit: "pincée", optional: false }
    ],
    steps: [
      "Saler légèrement les filets de sole.",
      "Cuire à la vapeur 8-10 min.",
      "Mélanger le beurre fondu avec les herbes finement ciselées.",
      "Déposer les filets dans les assiettes et napper de beurre aux herbes."
    ],
    nutrition: { calories: 220, protein: 34, carbs: 0, fat: 9, fiber: 0 },
    tips: "La cuisson vapeur préserve toutes les qualités de la sole fraîche. Consommer le jour même.",
    isCustom: false
  },

  // ══════ ACCOMPAGNEMENTS ══════

  {
    id: "acc9-puree-patate-douce-coco",
    name: "Purée de patate douce au lait de coco",
    category: "accompagnement",
    mealType: ["dejeuner", "diner"],
    prepTime: 10,
    cookTime: 20,
    servings: 3,
    difficulty: "facile",
    histamineScore: 0,
    ingredients: [
      { food: "Patate douce", qty: 500, unit: "g", optional: false },
      { food: "Lait de coco", qty: 100, unit: "ml", optional: false },
      { food: "Beurre", qty: 20, unit: "g", optional: false },
      { food: "Curcuma", qty: 1, unit: "pincée", optional: false },
      { food: "Sel", qty: 1, unit: "pincée", optional: false }
    ],
    steps: [
      "Éplucher et couper la patate douce en cubes.",
      "Cuire à l'eau bouillante salée 20 min.",
      "Égoutter et écraser avec le beurre et le lait de coco.",
      "Ajouter le curcuma, assaisonner et fouetter jusqu'à texture lisse."
    ],
    nutrition: { calories: 190, protein: 2, carbs: 32, fat: 7, fiber: 4 },
    tips: "Une purée douce et réconfortante, excellente avec du poulet ou du cabillaud.",
    isCustom: false
  },

  {
    id: "acc9-haricots-verts-amandes",
    name: "Haricots verts sautés aux amandes",
    category: "accompagnement",
    mealType: ["dejeuner", "diner"],
    prepTime: 5,
    cookTime: 12,
    servings: 3,
    difficulty: "facile",
    histamineScore: 0,
    ingredients: [
      { food: "Haricots verts", qty: 400, unit: "g", optional: false },
      { food: "Amandes", qty: 30, unit: "g", optional: false },
      { food: "Ail", qty: 1, unit: "gousse", optional: false },
      { food: "Beurre", qty: 15, unit: "g", optional: false },
      { food: "Sel", qty: 1, unit: "pincée", optional: false }
    ],
    steps: [
      "Blanchir les haricots verts 5 min dans de l'eau bouillante salée.",
      "Les refroidir à l'eau froide et égoutter.",
      "Faire dorer l'ail dans le beurre.",
      "Ajouter les haricots et les amandes effilées.",
      "Faire sauter 5 min jusqu'à légère coloration."
    ],
    nutrition: { calories: 130, protein: 5, carbs: 10, fat: 8, fiber: 4 },
    tips: "Accompagnement croquant et savoureux, parfait avec les viandes blanches ou le poisson.",
    isCustom: false
  },

  {
    id: "acc9-gratin-courgette-bechamel",
    name: "Gratin de courgettes à la béchamel légère",
    category: "accompagnement",
    mealType: ["dejeuner", "diner"],
    prepTime: 15,
    cookTime: 30,
    servings: 3,
    difficulty: "moyen",
    histamineScore: 0,
    ingredients: [
      { food: "Courgette", qty: 600, unit: "g", optional: false },
      { food: "Lait frais", qty: 300, unit: "ml", optional: false },
      { food: "Farine (blé, riz, maïs)", qty: 30, unit: "g", optional: false },
      { food: "Beurre", qty: 30, unit: "g", optional: false },
      { food: "Noix de muscade", qty: 1, unit: "pincée", optional: false },
      { food: "Sel", qty: 1, unit: "pincée", optional: false }
    ],
    steps: [
      "Préchauffer le four à 180°C.",
      "Couper les courgettes en rondelles et les disposer dans un plat beurré.",
      "Préparer la béchamel : faire fondre le beurre, ajouter la farine, mélanger, verser le lait progressivement en fouettant.",
      "Cuire la béchamel en remuant jusqu'à épaississement.",
      "Assaisonner de sel et muscade, verser sur les courgettes.",
      "Enfourner 25-30 min jusqu'à légère dorure."
    ],
    nutrition: { calories: 170, protein: 6, carbs: 18, fat: 8, fiber: 2 },
    tips: "Gratin léger sans fromage affiné. La noix de muscade est modérément tolérée, utiliser en petite quantité.",
    isCustom: false
  },

  {
    id: "acc9-couscous-herbes-fraiches",
    name: "Semoule fraîche aux herbes",
    category: "accompagnement",
    mealType: ["dejeuner", "diner"],
    prepTime: 10,
    cookTime: 5,
    servings: 3,
    difficulty: "facile",
    histamineScore: 0,
    ingredients: [
      { food: "Semoule / couscous", qty: 200, unit: "g", optional: false },
      { food: "Persil frais", qty: 10, unit: "g", optional: false },
      { food: "Menthe fraîche", qty: 5, unit: "g", optional: false },
      { food: "Ciboulette", qty: 5, unit: "g", optional: false },
      { food: "Huile d'olive", qty: 3, unit: "c.à.s", optional: false },
      { food: "Sel", qty: 1, unit: "pincée", optional: false },
      { food: "Eau", qty: 200, unit: "ml", optional: false }
    ],
    steps: [
      "Verser la semoule dans un saladier.",
      "Arroser d'eau bouillante salée, couvrir et laisser gonfler 5 min.",
      "Égrener avec une fourchette en ajoutant l'huile d'olive.",
      "Ciseler finement les herbes fraîches.",
      "Mélanger les herbes à la semoule et servir tiède ou froid."
    ],
    nutrition: { calories: 240, protein: 6, carbs: 42, fat: 6, fiber: 2 },
    tips: "Fraîche et légère, cette semoule accompagne parfaitement les viandes grillées et les poissons.",
    isCustom: false
  },

  {
    id: "acc9-polee-legumes-automne",
    name: "Poêlée de légumes d'automne",
    category: "accompagnement",
    mealType: ["dejeuner", "diner"],
    prepTime: 15,
    cookTime: 20,
    servings: 3,
    difficulty: "facile",
    histamineScore: 0,
    ingredients: [
      { food: "Courge / butternut", qty: 300, unit: "g", optional: false },
      { food: "Panais", qty: 2, unit: "pièces", optional: false },
      { food: "Carotte", qty: 2, unit: "pièces", optional: false },
      { food: "Oignon", qty: 1, unit: "pièce", optional: false },
      { food: "Romarin", qty: 1, unit: "branche", optional: false },
      { food: "Huile d'olive", qty: 3, unit: "c.à.s", optional: false },
      { food: "Sel", qty: 1, unit: "pincée", optional: false }
    ],
    steps: [
      "Couper tous les légumes en cubes de taille similaire.",
      "Faire chauffer l'huile dans une grande poêle.",
      "Faire revenir l'oignon 2 min.",
      "Ajouter les légumes et le romarin.",
      "Cuire 18-20 min en remuant régulièrement jusqu'à tendreté."
    ],
    nutrition: { calories: 140, protein: 2, carbs: 22, fat: 6, fiber: 5 },
    tips: "Les légumes d'automne sont parmi les mieux tolérés. Varier selon la saison.",
    isCustom: false
  },

  {
    id: "acc9-asperges-vapeur-beurre",
    name: "Asperges vapeur au beurre et persil",
    category: "accompagnement",
    mealType: ["dejeuner", "diner"],
    prepTime: 5,
    cookTime: 15,
    servings: 2,
    difficulty: "facile",
    histamineScore: 0,
    ingredients: [
      { food: "Asperges", qty: 400, unit: "g", optional: false },
      { food: "Beurre", qty: 25, unit: "g", optional: false },
      { food: "Persil frais", qty: 5, unit: "g", optional: false },
      { food: "Sel", qty: 1, unit: "pincée", optional: false }
    ],
    steps: [
      "Éplucher les asperges et couper les extrémités dures.",
      "Cuire à la vapeur 12-15 min selon l'épaisseur.",
      "Faire fondre le beurre et y faire revenir brièvement le persil.",
      "Napper les asperges du beurre persillé."
    ],
    nutrition: { calories: 120, protein: 4, carbs: 6, fat: 9, fiber: 3 },
    tips: "Les asperges sont généralement très bien tolérées. Choisir des asperges fraîches et fermes.",
    isCustom: false
  },

  // ══════ DESSERTS ══════

  {
    id: "dessert9-compote-poire-vanille",
    name: "Compote de poire à la vanille",
    category: "dessert",
    mealType: ["gouter", "dejeuner", "diner"],
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    difficulty: "facile",
    histamineScore: 0,
    ingredients: [
      { food: "Poire", qty: 4, unit: "pièces", optional: false },
      { food: "Vanille", qty: 1, unit: "gousse", optional: false },
      { food: "Sucre blanc", qty: 2, unit: "c.à.s", optional: true },
      { food: "Eau", qty: 50, unit: "ml", optional: false }
    ],
    steps: [
      "Éplucher et couper les poires en morceaux.",
      "Mettre dans une casserole avec l'eau et la vanille fendue.",
      "Sucrer si besoin.",
      "Cuire à feu doux 15 min.",
      "Mixer ou laisser en morceaux selon goût."
    ],
    nutrition: { calories: 90, protein: 1, carbs: 22, fat: 0, fiber: 3 },
    tips: "La poire est parmi les fruits les mieux tolérés, nature et douce, idéale pour les desserts.",
    isCustom: false
  },

  {
    id: "dessert9-sorbet-mangue-maison",
    name: "Sorbet mangue maison",
    category: "dessert",
    mealType: ["gouter", "diner"],
    prepTime: 10,
    cookTime: 0,
    servings: 4,
    difficulty: "facile",
    histamineScore: 0,
    ingredients: [
      { food: "Mangue", qty: 500, unit: "g", optional: false },
      { food: "Sirop d'agave", qty: 2, unit: "c.à.s", optional: true },
      { food: "Eau", qty: 50, unit: "ml", optional: false },
      { food: "Menthe fraîche", qty: 3, unit: "feuilles", optional: true }
    ],
    steps: [
      "Couper la mangue en cubes et congeler 2h minimum.",
      "Mettre la mangue congelée dans un blender avec l'eau et le sirop.",
      "Mixer jusqu'à texture crémeuse.",
      "Servir immédiatement ou remettre au congélateur.",
      "Décorer de menthe fraîche."
    ],
    nutrition: { calories: 80, protein: 1, carbs: 20, fat: 0, fiber: 2 },
    tips: "Sans sorbetière, simple et délicieux. La mangue est bien tolérée et naturellement sucrée.",
    isCustom: false
  },

  {
    id: "dessert9-panna-cotta-vanille",
    name: "Panna cotta à la vanille",
    category: "dessert",
    mealType: ["gouter", "diner"],
    prepTime: 10,
    cookTime: 10,
    servings: 4,
    difficulty: "moyen",
    histamineScore: 1,
    ingredients: [
      { food: "Crème fraîche", qty: 400, unit: "ml", optional: false },
      { food: "Lait frais", qty: 100, unit: "ml", optional: false },
      { food: "Vanille", qty: 1, unit: "gousse", optional: false },
      { food: "Sucre blanc", qty: 40, unit: "g", optional: false }
    ],
    steps: [
      "Faire tremper la gélatine dans l'eau froide 5 min (ou utiliser de l'agar-agar 2g).",
      "Chauffer la crème, le lait, la vanille fendue et le sucre.",
      "Hors du feu, incorporer la gélatine essorée.",
      "Verser dans des ramequins et réfrigérer 3h minimum.",
      "Démouler et servir nature ou avec une compote de poire."
    ],
    nutrition: { calories: 250, protein: 3, carbs: 15, fat: 20, fiber: 0 },
    tips: "La crème fraîche est modérément tolérée. Servir le jour même de préparation.",
    isCustom: false
  },

  {
    id: "dessert9-tarte-poire-mascarpone",
    name: "Tarte poire et mascarpone",
    category: "dessert",
    mealType: ["gouter", "diner"],
    prepTime: 20,
    cookTime: 30,
    servings: 6,
    difficulty: "moyen",
    histamineScore: 1,
    ingredients: [
      { food: "Farine (blé, riz, maïs)", qty: 200, unit: "g", optional: false },
      { food: "Beurre", qty: 80, unit: "g", optional: false },
      { food: "Mascarpone", qty: 200, unit: "g", optional: false },
      { food: "Poire", qty: 3, unit: "pièces", optional: false },
      { food: "Oeufs", qty: 1, unit: "pièce", optional: false },
      { food: "Sucre blanc", qty: 60, unit: "g", optional: false },
      { food: "Vanille", qty: 1, unit: "pincée", optional: false }
    ],
    steps: [
      "Préparer la pâte : mélanger farine, beurre froid en dés et une pincée de sel, ajouter 3 c.à.s d'eau froide.",
      "Laisser reposer 30 min au frais, puis étaler et foncer un moule.",
      "Précuire à blanc 10 min à 180°C.",
      "Mélanger le mascarpone, l'oeuf, le sucre et la vanille.",
      "Éplucher et trancher les poires finement.",
      "Verser la crème dans le fond de tarte, disposer les poires.",
      "Enfourner 20-25 min jusqu'à légère dorure."
    ],
    nutrition: { calories: 340, protein: 5, carbs: 38, fat: 19, fiber: 2 },
    tips: "Le mascarpone est non affiné et bien toléré. Les poires apportent douceur et légèreté.",
    isCustom: false
  },

  // ══════ COLLATIONS ══════

  {
    id: "colla9-pudding-chia-lait-coco",
    name: "Pudding de chia au lait de coco",
    category: "collation",
    mealType: ["petit-dej", "gouter"],
    prepTime: 5,
    cookTime: 0,
    servings: 2,
    difficulty: "facile",
    histamineScore: 0,
    ingredients: [
      { food: "Graines de chia", qty: 40, unit: "g", optional: false },
      { food: "Lait de coco", qty: 300, unit: "ml", optional: false },
      { food: "Mangue", qty: 100, unit: "g", optional: false },
      { food: "Sirop d'érable", qty: 1, unit: "c.à.s", optional: true }
    ],
    steps: [
      "Mélanger les graines de chia avec le lait de coco.",
      "Laisser gonfler au réfrigérateur au moins 2h (idéalement une nuit).",
      "Au moment de servir, couper la mangue en dés.",
      "Disposer la mangue sur le pudding et arroser de sirop d'érable."
    ],
    nutrition: { calories: 230, protein: 5, carbs: 22, fat: 14, fiber: 10 },
    tips: "Préparer la veille pour un petit-déjeuner rapide et nutritif. Les graines de chia sont excellentes pour la digestion.",
    isCustom: false
  },

  {
    id: "colla9-galettes-riz-ricotta-miel",
    name: "Galettes de riz à la ricotta et au miel",
    category: "collation",
    mealType: ["gouter", "petit-dej"],
    prepTime: 3,
    cookTime: 0,
    servings: 1,
    difficulty: "facile",
    histamineScore: 0,
    ingredients: [
      { food: "Galettes de riz", qty: 3, unit: "pièces", optional: false },
      { food: "Ricotta", qty: 60, unit: "g", optional: false },
      { food: "Miel", qty: 1, unit: "c.à.c", optional: true },
      { food: "Myrtilles", qty: 30, unit: "g", optional: true }
    ],
    steps: [
      "Tartiner chaque galette de ricotta.",
      "Disposer quelques myrtilles.",
      "Arroser d'un filet de miel."
    ],
    nutrition: { calories: 190, protein: 7, carbs: 30, fat: 6, fiber: 1 },
    tips: "Collation rapide et légère. La ricotta fraîche est bien tolérée et apporte des protéines.",
    isCustom: false
  },

  {
    id: "colla9-smoothie-poire-gingembre",
    name: "Smoothie poire-gingembre apaisant",
    category: "collation",
    mealType: ["gouter", "petit-dej"],
    prepTime: 5,
    cookTime: 0,
    servings: 1,
    difficulty: "facile",
    histamineScore: 0,
    ingredients: [
      { food: "Poire", qty: 2, unit: "pièces", optional: false },
      { food: "Lait végétal (riz, avoine)", qty: 200, unit: "ml", optional: false },
      { food: "Gingembre frais", qty: 5, unit: "g", optional: false },
      { food: "Miel", qty: 1, unit: "c.à.c", optional: true }
    ],
    steps: [
      "Éplucher et couper les poires.",
      "Mettre tous les ingrédients dans le blender.",
      "Mixer jusqu'à consistance lisse.",
      "Servir frais immédiatement."
    ],
    nutrition: { calories: 200, protein: 2, carbs: 44, fat: 2, fiber: 6 },
    tips: "Le lait végétal de riz ou d'avoine est excellent pour les personnes sensibles à l'histamine.",
    isCustom: false
  },

  {
    id: "colla9-compote-pomme-abricot",
    name: "Compote pomme-abricot maison",
    category: "collation",
    mealType: ["gouter", "dejeuner", "diner"],
    prepTime: 10,
    cookTime: 20,
    servings: 4,
    difficulty: "facile",
    histamineScore: 0,
    ingredients: [
      { food: "Pomme", qty: 3, unit: "pièces", optional: false },
      { food: "Abricot", qty: 4, unit: "pièces", optional: false },
      { food: "Sucre roux / cassonade", qty: 1, unit: "c.à.s", optional: true },
      { food: "Cardamome", qty: 1, unit: "pincée", optional: true },
      { food: "Eau", qty: 50, unit: "ml", optional: false }
    ],
    steps: [
      "Éplucher et couper les pommes en dés.",
      "Dénoyauter et couper les abricots.",
      "Mettre les fruits dans une casserole avec l'eau.",
      "Ajouter la cardamome et le sucre si désiré.",
      "Cuire 20 min à feu doux, écraser grossièrement."
    ],
    nutrition: { calories: 80, protein: 1, carbs: 20, fat: 0, fiber: 3 },
    tips: "L'abricot frais est bien toléré. La cardamome apporte une note douce et exotique.",
    isCustom: false
  }

];

if (typeof RECIPE_DB !== 'undefined') {
  RECIPE_DB.push(...RECIPES_BATCH_9);
}

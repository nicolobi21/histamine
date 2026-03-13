// ═══════════════════════════════════════════
// RECIPE DATABASE — 66 Low-Histamine Recipes
// All ingredients use score 0-1 from FOOD_DB
// ═══════════════════════════════════════════
const RECIPE_DB = [
  // ══════ PETIT-DÉJEUNER (5) ══════
  {
    id:"porridge-pomme-cannelle", name:"Porridge pomme-cannelle",
    category:"petit-dej", mealType:["petit-dej"],
    prepTime:5, cookTime:10, servings:1, difficulty:"facile", histamineScore:1,
    ingredients:[
      {food:"Avoine / flocons",qty:50,unit:"g",optional:false},
      {food:"Lait frais",qty:200,unit:"ml",optional:false},
      {food:"Pomme",qty:1,unit:"pièce",optional:false},
      {food:"Cannelle",qty:1,unit:"pincée",optional:false},
      {food:"Miel",qty:1,unit:"c.à.s",optional:true}
    ],
    steps:["Couper la pomme en petits dés.","Faire chauffer le lait avec les flocons d'avoine à feu doux 8 minutes en remuant.","Ajouter les dés de pomme et la cannelle.","Servir tiède avec un filet de miel."],
    nutrition:{calories:320,protein:10,carbs:55,fat:7,fiber:6},
    tips:"Les flocons d'avoine sont une base sûre pour le petit-déjeuner. Choisir du lait très frais.",
    isCustom:false
  },
  {
    id:"tartines-ricotta-poire", name:"Tartines ricotta-poire",
    category:"petit-dej", mealType:["petit-dej","gouter"],
    prepTime:5, cookTime:0, servings:1, difficulty:"facile", histamineScore:1,
    ingredients:[
      {food:"Pain frais simple",qty:2,unit:"tranches",optional:false},
      {food:"Ricotta",qty:60,unit:"g",optional:false},
      {food:"Poire",qty:1,unit:"pièce",optional:false},
      {food:"Miel",qty:1,unit:"c.à.c",optional:true},
      {food:"Graines de courge",qty:1,unit:"c.à.s",optional:true}
    ],
    steps:["Toaster légèrement le pain.","Tartiner de ricotta.","Disposer des tranches fines de poire.","Parsemer de graines de courge et d'un filet de miel."],
    nutrition:{calories:340,protein:14,carbs:48,fat:10,fiber:4},
    tips:"La ricotta est un fromage frais non affiné, bien toléré. Éviter le pain au levain.",
    isCustom:false
  },
  {
    id:"smoothie-mangue-coco", name:"Smoothie mangue-coco",
    category:"petit-dej", mealType:["petit-dej","gouter"],
    prepTime:5, cookTime:0, servings:1, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Mangue",qty:150,unit:"g",optional:false},
      {food:"Lait de coco",qty:150,unit:"ml",optional:false},
      {food:"Avoine / flocons",qty:20,unit:"g",optional:true},
      {food:"Miel",qty:1,unit:"c.à.c",optional:true}
    ],
    steps:["Couper la mangue en morceaux.","Mixer tous les ingrédients jusqu'à obtenir une texture lisse.","Servir frais."],
    nutrition:{calories:250,protein:4,carbs:42,fat:8,fiber:3},
    tips:"Les fruits frais comme la mangue sont généralement bien tolérés.",
    isCustom:false
  },
  {
    id:"galettes-sarrasin-oeuf", name:"Galettes de sarrasin aux oeufs",
    category:"petit-dej", mealType:["petit-dej","dejeuner"],
    prepTime:10, cookTime:15, servings:2, difficulty:"facile", histamineScore:1,
    ingredients:[
      {food:"Sarrasin",qty:100,unit:"g",optional:false},
      {food:"Oeufs",qty:2,unit:"pièces",optional:false},
      {food:"Eau",qty:200,unit:"ml",optional:false},
      {food:"Beurre",qty:10,unit:"g",optional:false},
      {food:"Sel",qty:1,unit:"pincée",optional:false}
    ],
    steps:["Mixer le sarrasin en farine (ou utiliser de la farine de sarrasin).","Mélanger avec l'eau et le sel pour obtenir une pâte fluide.","Faire cuire les galettes dans une poêle beurrée.","Casser un oeuf sur chaque galette, replier et servir."],
    nutrition:{calories:280,protein:14,carbs:38,fat:8,fiber:3},
    tips:"Le sarrasin est sans gluten et généralement bien toléré. L'oeuf est modéré, à tester.",
    isCustom:false
  },
  {
    id:"bowl-quinoa-fruits", name:"Bowl quinoa, myrtilles et amandes",
    category:"petit-dej", mealType:["petit-dej"],
    prepTime:5, cookTime:15, servings:1, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Quinoa",qty:60,unit:"g",optional:false},
      {food:"Lait frais",qty:150,unit:"ml",optional:false},
      {food:"Myrtilles",qty:80,unit:"g",optional:false},
      {food:"Amandes",qty:15,unit:"g",optional:true},
      {food:"Miel",qty:1,unit:"c.à.c",optional:true}
    ],
    steps:["Rincer le quinoa et le cuire dans le lait 12 minutes à feu doux.","Laisser reposer 3 minutes.","Garnir de myrtilles et d'amandes concassées.","Arroser de miel."],
    nutrition:{calories:380,protein:14,carbs:52,fat:12,fiber:5},
    tips:"Le quinoa est riche en protéines et bien toléré. Les myrtilles sont parmi les fruits les plus sûrs.",
    isCustom:false
  },

  // ══════ SOUPES (4) ══════
  {
    id:"soupe-butternut-gingembre", name:"Velouté de butternut au gingembre",
    category:"soupe", mealType:["dejeuner","diner"],
    prepTime:10, cookTime:25, servings:4, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Courge / butternut",qty:600,unit:"g",optional:false},
      {food:"Oignon",qty:1,unit:"pièce",optional:false},
      {food:"Gingembre frais",qty:10,unit:"g",optional:false},
      {food:"Huile d'olive",qty:1,unit:"c.à.s",optional:false},
      {food:"Eau",qty:500,unit:"ml",optional:false},
      {food:"Sel",qty:1,unit:"pincée",optional:false},
      {food:"Crème fraîche",qty:2,unit:"c.à.s",optional:true}
    ],
    steps:["Éplucher et couper la butternut en cubes.","Faire revenir l'oignon émincé dans l'huile d'olive.","Ajouter la butternut, le gingembre râpé et l'eau.","Cuire 25 minutes puis mixer.","Assaisonner et ajouter la crème fraîche si souhaitée."],
    nutrition:{calories:120,protein:3,carbs:22,fat:3,fiber:4},
    tips:"Le gingembre a des propriétés anti-inflammatoires bénéfiques pour le SAMA.",
    isCustom:false
  },
  {
    id:"soupe-poireau-pomme-de-terre", name:"Soupe poireau-pommes de terre",
    category:"soupe", mealType:["dejeuner","diner"],
    prepTime:10, cookTime:25, servings:4, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Poireau",qty:3,unit:"pièces",optional:false},
      {food:"Pommes de terre",qty:400,unit:"g",optional:false},
      {food:"Oignon",qty:1,unit:"pièce",optional:false},
      {food:"Beurre",qty:15,unit:"g",optional:false},
      {food:"Eau",qty:800,unit:"ml",optional:false},
      {food:"Sel",qty:1,unit:"pincée",optional:false},
      {food:"Persil frais",qty:1,unit:"c.à.s",optional:true}
    ],
    steps:["Émincer les poireaux et l'oignon, couper les pommes de terre en cubes.","Faire fondre le beurre et y faire revenir poireaux et oignon 5 minutes.","Ajouter les pommes de terre et l'eau.","Cuire 20 minutes, mixer et parsemer de persil."],
    nutrition:{calories:150,protein:4,carbs:28,fat:3,fiber:4},
    tips:"Recette de base très sûre, les poireaux et pommes de terre sont bien tolérés.",
    isCustom:false
  },
  {
    id:"soupe-carotte-curcuma", name:"Soupe carotte-curcuma",
    category:"soupe", mealType:["dejeuner","diner"],
    prepTime:10, cookTime:20, servings:4, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Carotte",qty:500,unit:"g",optional:false},
      {food:"Oignon",qty:1,unit:"pièce",optional:false},
      {food:"Curcuma",qty:1,unit:"c.à.c",optional:false},
      {food:"Huile d'olive",qty:1,unit:"c.à.s",optional:false},
      {food:"Eau",qty:600,unit:"ml",optional:false},
      {food:"Lait de coco",qty:100,unit:"ml",optional:true},
      {food:"Sel",qty:1,unit:"pincée",optional:false}
    ],
    steps:["Éplucher et couper les carottes en rondelles.","Faire revenir l'oignon dans l'huile 3 minutes.","Ajouter carottes, curcuma et eau.","Cuire 20 minutes, mixer et ajouter le lait de coco."],
    nutrition:{calories:110,protein:2,carbs:18,fat:4,fiber:5},
    tips:"Le curcuma est un anti-inflammatoire naturel, souvent recommandé dans le SAMA.",
    isCustom:false
  },
  {
    id:"soupe-brocoli-chou-fleur", name:"Velouté brocoli-chou-fleur",
    category:"soupe", mealType:["dejeuner","diner"],
    prepTime:10, cookTime:20, servings:4, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Brocoli",qty:300,unit:"g",optional:false},
      {food:"Chou-fleur",qty:300,unit:"g",optional:false},
      {food:"Ail",qty:2,unit:"gousses",optional:false},
      {food:"Huile d'olive",qty:1,unit:"c.à.s",optional:false},
      {food:"Eau",qty:600,unit:"ml",optional:false},
      {food:"Sel",qty:1,unit:"pincée",optional:false}
    ],
    steps:["Détailler le brocoli et le chou-fleur en bouquets.","Faire revenir l'ail émincé dans l'huile.","Ajouter les légumes et l'eau.","Cuire 20 minutes et mixer finement."],
    nutrition:{calories:90,protein:6,carbs:12,fat:3,fiber:5},
    tips:"Le brocoli et le chou-fleur sont des légumes crucifères bien tolérés et riches en nutriments.",
    isCustom:false
  },

  // ══════ PLATS — VOLAILLE (6) ══════
  {
    id:"poulet-riz-courgette", name:"Poulet grillé, riz et courgettes sautées",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:10, cookTime:25, servings:2, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Poulet frais",qty:250,unit:"g",optional:false},
      {food:"Riz",qty:150,unit:"g",optional:false},
      {food:"Courgette",qty:2,unit:"pièces",optional:false},
      {food:"Huile d'olive",qty:2,unit:"c.à.s",optional:false},
      {food:"Ail",qty:1,unit:"gousse",optional:false},
      {food:"Sel",qty:1,unit:"pincée",optional:false},
      {food:"Thym",qty:1,unit:"pincée",optional:true}
    ],
    steps:["Cuire le riz dans de l'eau salée 12 minutes.","Couper le poulet en morceaux et les courgettes en rondelles.","Faire chauffer l'huile et cuire le poulet 8 minutes avec l'ail.","Ajouter les courgettes et cuire 5 minutes.","Servir sur le riz."],
    nutrition:{calories:450,protein:35,carbs:48,fat:12,fiber:3},
    tips:"Recette de base très sûre. Utiliser du poulet très frais pour minimiser l'histamine.",
    isCustom:false
  },
  {
    id:"dinde-patate-douce-haricots", name:"Dinde rôtie, patate douce et haricots verts",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:15, cookTime:30, servings:2, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Dinde fraîche",qty:250,unit:"g",optional:false},
      {food:"Patate douce",qty:300,unit:"g",optional:false},
      {food:"Haricots verts",qty:200,unit:"g",optional:false},
      {food:"Huile d'olive",qty:2,unit:"c.à.s",optional:false},
      {food:"Romarin",qty:1,unit:"branche",optional:true},
      {food:"Sel",qty:1,unit:"pincée",optional:false}
    ],
    steps:["Préchauffer le four à 200°C.","Couper la patate douce en cubes, arroser d'huile et enfourner 20 min.","Cuire les haricots verts à la vapeur 10 minutes.","Poêler les morceaux de dinde avec le romarin 8 minutes de chaque côté.","Dresser l'assiette."],
    nutrition:{calories:420,protein:38,carbs:42,fat:10,fiber:7},
    tips:"La dinde fraîche est une excellente source de protéines bien tolérée.",
    isCustom:false
  },
  {
    id:"poulet-curry-doux-riz", name:"Poulet curry doux et riz basmati",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:10, cookTime:25, servings:2, difficulty:"facile", histamineScore:1,
    ingredients:[
      {food:"Poulet frais",qty:300,unit:"g",optional:false},
      {food:"Riz",qty:160,unit:"g",optional:false},
      {food:"Oignon",qty:1,unit:"pièce",optional:false},
      {food:"Crème fraîche",qty:100,unit:"ml",optional:false},
      {food:"Curry (mélange)",qty:1,unit:"c.à.c",optional:false},
      {food:"Huile d'olive",qty:1,unit:"c.à.s",optional:false},
      {food:"Sel",qty:1,unit:"pincée",optional:false}
    ],
    steps:["Cuire le riz.","Couper le poulet en dés et l'oignon en lamelles.","Faire revenir l'oignon puis le poulet dans l'huile 5 minutes.","Ajouter le curry et la crème fraîche, laisser mijoter 15 minutes.","Servir avec le riz."],
    nutrition:{calories:520,protein:38,carbs:50,fat:16,fiber:2},
    tips:"Le curry est modéré — commencer par une petite quantité pour tester la tolérance.",
    isCustom:false
  },
  {
    id:"poulet-basilic-pates", name:"Pâtes au poulet et basilic frais",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:10, cookTime:20, servings:2, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Pâtes nature",qty:200,unit:"g",optional:false},
      {food:"Poulet frais",qty:200,unit:"g",optional:false},
      {food:"Courgette",qty:1,unit:"pièce",optional:false},
      {food:"Basilic frais",qty:10,unit:"feuilles",optional:false},
      {food:"Ail",qty:1,unit:"gousse",optional:false},
      {food:"Huile d'olive",qty:2,unit:"c.à.s",optional:false},
      {food:"Sel",qty:1,unit:"pincée",optional:false}
    ],
    steps:["Cuire les pâtes al dente.","Couper le poulet en lamelles et la courgette en demi-rondelles.","Faire sauter le poulet avec l'ail 6 minutes.","Ajouter la courgette 4 minutes.","Mélanger avec les pâtes, ajouter le basilic ciselé et l'huile."],
    nutrition:{calories:480,protein:32,carbs:55,fat:14,fiber:3},
    tips:"Le basilic frais est bien toléré et apporte beaucoup de saveur.",
    isCustom:false
  },
  {
    id:"blanquette-dinde-legumes", name:"Blanquette de dinde aux légumes",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:15, cookTime:35, servings:4, difficulty:"moyen", histamineScore:1,
    ingredients:[
      {food:"Dinde fraîche",qty:500,unit:"g",optional:false},
      {food:"Carotte",qty:3,unit:"pièces",optional:false},
      {food:"Poireau",qty:2,unit:"pièces",optional:false},
      {food:"Navet",qty:1,unit:"pièce",optional:false},
      {food:"Crème fraîche",qty:100,unit:"ml",optional:false},
      {food:"Beurre",qty:20,unit:"g",optional:false},
      {food:"Farine (blé, riz, maïs)",qty:20,unit:"g",optional:false},
      {food:"Sel",qty:1,unit:"pincée",optional:false},
      {food:"Thym",qty:1,unit:"branche",optional:true}
    ],
    steps:["Couper la dinde en cubes et les légumes en morceaux.","Faire revenir la dinde dans le beurre sans colorer.","Ajouter les légumes, couvrir d'eau et cuire 30 minutes.","Prélever du bouillon, mélanger avec la farine et la crème.","Reverser dans la casserole et épaissir 5 minutes."],
    nutrition:{calories:350,protein:35,carbs:18,fat:14,fiber:4},
    tips:"Blanquette revisitée sans vin ni champignons pour limiter l'histamine.",
    isCustom:false
  },
  {
    id:"poulet-roti-herbes", name:"Cuisses de poulet rôties aux herbes",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:10, cookTime:40, servings:2, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Poulet frais",qty:400,unit:"g",optional:false},
      {food:"Pommes de terre",qty:400,unit:"g",optional:false},
      {food:"Carotte",qty:2,unit:"pièces",optional:false},
      {food:"Huile d'olive",qty:2,unit:"c.à.s",optional:false},
      {food:"Thym",qty:2,unit:"branches",optional:false},
      {food:"Romarin",qty:1,unit:"branche",optional:false},
      {food:"Sel",qty:1,unit:"pincée",optional:false}
    ],
    steps:["Préchauffer le four à 190°C.","Couper les pommes de terre et carottes en morceaux.","Disposer le poulet et les légumes dans un plat.","Arroser d'huile, ajouter les herbes et le sel.","Enfourner 40 minutes en retournant à mi-cuisson."],
    nutrition:{calories:480,protein:38,carbs:40,fat:16,fiber:5},
    tips:"Le poulet frais cuit au four est une valeur sûre. Consommer immédiatement.",
    isCustom:false
  },

  // ══════ PLATS — POISSON (4) ══════
  {
    id:"cabillaud-vapeur-legumes", name:"Cabillaud vapeur et julienne de légumes",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:15, cookTime:15, servings:2, difficulty:"facile", histamineScore:1,
    ingredients:[
      {food:"Cabillaud frais",qty:300,unit:"g",optional:false},
      {food:"Courgette",qty:1,unit:"pièce",optional:false},
      {food:"Carotte",qty:2,unit:"pièces",optional:false},
      {food:"Poireau",qty:1,unit:"pièce",optional:false},
      {food:"Huile d'olive",qty:1,unit:"c.à.s",optional:false},
      {food:"Aneth frais",qty:1,unit:"c.à.s",optional:true},
      {food:"Sel",qty:1,unit:"pincée",optional:false}
    ],
    steps:["Couper les légumes en julienne fine.","Cuire les légumes à la vapeur 8 minutes.","Poser le cabillaud sur les légumes, cuire encore 8 minutes.","Arroser d'huile d'olive et parsemer d'aneth."],
    nutrition:{calories:250,protein:35,carbs:12,fat:7,fiber:4},
    tips:"Le cabillaud est un poisson blanc bien toléré si très frais. La cuisson vapeur préserve la fraîcheur.",
    isCustom:false
  },
  {
    id:"truite-four-fenouil", name:"Truite au four sur lit de fenouil",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:10, cookTime:25, servings:2, difficulty:"facile", histamineScore:1,
    ingredients:[
      {food:"Truite fraîche",qty:2,unit:"filets",optional:false},
      {food:"Fenouil",qty:2,unit:"bulbes",optional:false},
      {food:"Huile d'olive",qty:2,unit:"c.à.s",optional:false},
      {food:"Ail",qty:1,unit:"gousse",optional:false},
      {food:"Thym",qty:1,unit:"branche",optional:true},
      {food:"Sel",qty:1,unit:"pincée",optional:false}
    ],
    steps:["Préchauffer le four à 180°C.","Émincer finement le fenouil, disposer dans un plat huilé.","Poser les filets de truite dessus.","Assaisonner, arroser d'huile et enfourner 25 minutes."],
    nutrition:{calories:310,protein:32,carbs:8,fat:16,fiber:4},
    tips:"Le fenouil aide la digestion. La truite doit être absolument fraîche du jour.",
    isCustom:false
  },
  {
    id:"colin-puree-brocoli", name:"Colin poêlé et purée de brocoli",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:10, cookTime:20, servings:2, difficulty:"facile", histamineScore:1,
    ingredients:[
      {food:"Colin frais",qty:300,unit:"g",optional:false},
      {food:"Brocoli",qty:400,unit:"g",optional:false},
      {food:"Pommes de terre",qty:200,unit:"g",optional:false},
      {food:"Beurre",qty:15,unit:"g",optional:false},
      {food:"Huile d'olive",qty:1,unit:"c.à.s",optional:false},
      {food:"Sel",qty:1,unit:"pincée",optional:false}
    ],
    steps:["Cuire le brocoli et les pommes de terre 15 minutes.","Écraser en purée avec le beurre.","Poêler le colin dans l'huile d'olive 4 minutes de chaque côté.","Servir le colin sur la purée de brocoli."],
    nutrition:{calories:350,protein:34,carbs:28,fat:12,fiber:5},
    tips:"Le colin est un poisson blanc plutôt bien toléré si très frais.",
    isCustom:false
  },
  {
    id:"sole-meuniere-riz", name:"Sole meunière et riz persillé",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:10, cookTime:20, servings:2, difficulty:"facile", histamineScore:1,
    ingredients:[
      {food:"Sole fraîche",qty:2,unit:"filets",optional:false},
      {food:"Riz",qty:150,unit:"g",optional:false},
      {food:"Farine (blé, riz, maïs)",qty:30,unit:"g",optional:false},
      {food:"Beurre",qty:30,unit:"g",optional:false},
      {food:"Persil frais",qty:2,unit:"c.à.s",optional:false},
      {food:"Sel",qty:1,unit:"pincée",optional:false}
    ],
    steps:["Cuire le riz.","Fariner légèrement les filets de sole.","Faire fondre le beurre et cuire la sole 3 minutes de chaque côté.","Parsemer de persil, servir avec le riz."],
    nutrition:{calories:420,protein:30,carbs:48,fat:12,fiber:1},
    tips:"La sole est un poisson plat délicat, généralement mieux toléré. Fraîcheur indispensable.",
    isCustom:false
  },

  // ══════ PLATS — VÉGÉTARIENS (5) ══════
  {
    id:"risotto-courgette-basilic", name:"Risotto courgette-basilic",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:10, cookTime:25, servings:2, difficulty:"moyen", histamineScore:1,
    ingredients:[
      {food:"Riz",qty:200,unit:"g",optional:false},
      {food:"Courgette",qty:2,unit:"pièces",optional:false},
      {food:"Oignon",qty:1,unit:"pièce",optional:false},
      {food:"Crème fraîche",qty:50,unit:"ml",optional:false},
      {food:"Basilic frais",qty:10,unit:"feuilles",optional:false},
      {food:"Huile d'olive",qty:2,unit:"c.à.s",optional:false},
      {food:"Eau",qty:500,unit:"ml",optional:false},
      {food:"Sel",qty:1,unit:"pincée",optional:false}
    ],
    steps:["Faire revenir l'oignon dans l'huile.","Ajouter le riz et nacrer 2 minutes.","Ajouter l'eau louche par louche en remuant (style risotto).","À mi-cuisson, ajouter les courgettes en dés.","Finir avec la crème et le basilic ciselé."],
    nutrition:{calories:420,protein:10,carbs:62,fat:14,fiber:3},
    tips:"Utiliser du riz arborio pour un vrai risotto crémeux. Sans parmesan pour éviter l'histamine.",
    isCustom:false
  },
  {
    id:"gratin-patate-douce-chou-fleur", name:"Gratin patate douce et chou-fleur",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:15, cookTime:30, servings:4, difficulty:"facile", histamineScore:1,
    ingredients:[
      {food:"Patate douce",qty:400,unit:"g",optional:false},
      {food:"Chou-fleur",qty:400,unit:"g",optional:false},
      {food:"Crème fraîche",qty:200,unit:"ml",optional:false},
      {food:"Ricotta",qty:100,unit:"g",optional:false},
      {food:"Noix de muscade",qty:1,unit:"pincée",optional:true},
      {food:"Sel",qty:1,unit:"pincée",optional:false}
    ],
    steps:["Préchauffer le four à 180°C.","Couper la patate douce en rondelles, le chou-fleur en bouquets.","Cuire à la vapeur 10 minutes.","Disposer dans un plat, verser la crème mélangée à la ricotta.","Enfourner 25 minutes."],
    nutrition:{calories:280,protein:12,carbs:32,fat:12,fiber:5},
    tips:"La ricotta remplace le gruyère traditionnel pour éviter l'histamine du fromage affiné.",
    isCustom:false
  },
  {
    id:"pates-beurre-herbes", name:"Pâtes au beurre et fines herbes",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:5, cookTime:12, servings:2, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Pâtes nature",qty:200,unit:"g",optional:false},
      {food:"Beurre",qty:30,unit:"g",optional:false},
      {food:"Persil frais",qty:2,unit:"c.à.s",optional:false},
      {food:"Ciboulette",qty:1,unit:"c.à.s",optional:false},
      {food:"Ail",qty:1,unit:"gousse",optional:false},
      {food:"Sel",qty:1,unit:"pincée",optional:false}
    ],
    steps:["Cuire les pâtes al dente.","Faire fondre le beurre avec l'ail pressé.","Égoutter les pâtes, les mélanger au beurre aillé.","Ajouter les herbes ciselées."],
    nutrition:{calories:420,protein:12,carbs:58,fat:15,fiber:2},
    tips:"Recette ultra-simple et sûre. Les herbes fraîches sont bien tolérées.",
    isCustom:false
  },
  {
    id:"couscous-legumes", name:"Couscous aux légumes du soleil",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:15, cookTime:25, servings:4, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Semoule / couscous",qty:250,unit:"g",optional:false},
      {food:"Courgette",qty:2,unit:"pièces",optional:false},
      {food:"Carotte",qty:3,unit:"pièces",optional:false},
      {food:"Navet",qty:2,unit:"pièces",optional:false},
      {food:"Pois chiches",qty:200,unit:"g",optional:true},
      {food:"Oignon",qty:1,unit:"pièce",optional:false},
      {food:"Huile d'olive",qty:2,unit:"c.à.s",optional:false},
      {food:"Cumin",qty:1,unit:"c.à.c",optional:false},
      {food:"Sel",qty:1,unit:"pincée",optional:false}
    ],
    steps:["Faire revenir l'oignon dans l'huile avec le cumin.","Ajouter les légumes coupés en morceaux et couvrir d'eau.","Cuire 25 minutes.","Préparer la semoule avec un peu de bouillon.","Servir les légumes et leur bouillon sur la semoule."],
    nutrition:{calories:380,protein:12,carbs:62,fat:8,fiber:8},
    tips:"Couscous sans harissa ni sauce tomate, avec des légumes sûrs uniquement.",
    isCustom:false
  },
  {
    id:"galettes-pomme-de-terre", name:"Galettes de pommes de terre dorées",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:15, cookTime:15, servings:2, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Pommes de terre",qty:500,unit:"g",optional:false},
      {food:"Oignon",qty:1,unit:"petit",optional:false},
      {food:"Farine (blé, riz, maïs)",qty:30,unit:"g",optional:false},
      {food:"Huile d'olive",qty:3,unit:"c.à.s",optional:false},
      {food:"Sel",qty:1,unit:"pincée",optional:false},
      {food:"Persil frais",qty:1,unit:"c.à.s",optional:true}
    ],
    steps:["Râper les pommes de terre et l'oignon, bien essorer.","Mélanger avec la farine et le sel.","Former des galettes.","Les faire dorer dans l'huile 4 minutes de chaque côté.","Parsemer de persil."],
    nutrition:{calories:350,protein:6,carbs:52,fat:14,fiber:4},
    tips:"Les röstis/galettes de pommes de terre sont simples et bien tolérés.",
    isCustom:false
  },

  // ══════ PLATS — VIANDE ROUGE (3) ══════
  {
    id:"boeuf-saute-legumes", name:"Boeuf sauté aux légumes croquants",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:15, cookTime:15, servings:2, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Boeuf frais",qty:250,unit:"g",optional:false},
      {food:"Brocoli",qty:200,unit:"g",optional:false},
      {food:"Carotte",qty:2,unit:"pièces",optional:false},
      {food:"Gingembre frais",qty:5,unit:"g",optional:false},
      {food:"Ail",qty:2,unit:"gousses",optional:false},
      {food:"Huile d'olive",qty:2,unit:"c.à.s",optional:false},
      {food:"Sel",qty:1,unit:"pincée",optional:false},
      {food:"Riz",qty:150,unit:"g",optional:true}
    ],
    steps:["Couper le boeuf en fines lamelles.","Émincer les légumes, râper le gingembre.","Saisir le boeuf à feu vif 3 minutes, réserver.","Faire sauter les légumes 5 minutes.","Remettre le boeuf, ajouter gingembre et ail, 2 minutes."],
    nutrition:{calories:380,protein:32,carbs:18,fat:20,fiber:5},
    tips:"Utiliser du boeuf très frais (jamais maturé). Le gingembre aide à la digestion.",
    isCustom:false
  },
  {
    id:"agneau-pomme-de-terre-romarin", name:"Agneau grillé, pommes de terre au romarin",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:10, cookTime:35, servings:2, difficulty:"moyen", histamineScore:0,
    ingredients:[
      {food:"Agneau frais",qty:300,unit:"g",optional:false},
      {food:"Pommes de terre",qty:400,unit:"g",optional:false},
      {food:"Romarin",qty:2,unit:"branches",optional:false},
      {food:"Ail",qty:3,unit:"gousses",optional:false},
      {food:"Huile d'olive",qty:2,unit:"c.à.s",optional:false},
      {food:"Sel",qty:1,unit:"pincée",optional:false}
    ],
    steps:["Préchauffer le four à 200°C.","Couper les pommes de terre en quartiers.","Les disposer avec l'ail et le romarin, arroser d'huile.","Enfourner 20 minutes puis ajouter l'agneau.","Cuire encore 15 minutes."],
    nutrition:{calories:520,protein:35,carbs:42,fat:22,fiber:4},
    tips:"L'agneau frais non maturé est bien toléré. Le romarin est une herbe aromatique sûre.",
    isCustom:false
  },
  {
    id:"boeuf-bourguignon-sans-vin", name:"Boeuf mijoté aux carottes (façon bourguignon)",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:20, cookTime:90, servings:4, difficulty:"moyen", histamineScore:1,
    ingredients:[
      {food:"Boeuf frais",qty:600,unit:"g",optional:false},
      {food:"Carotte",qty:4,unit:"pièces",optional:false},
      {food:"Oignon",qty:2,unit:"pièces",optional:false},
      {food:"Champignons",qty:200,unit:"g",optional:true},
      {food:"Pommes de terre",qty:400,unit:"g",optional:false},
      {food:"Huile d'olive",qty:2,unit:"c.à.s",optional:false},
      {food:"Thym",qty:2,unit:"branches",optional:false},
      {food:"Laurier",qty:1,unit:"feuille",optional:false},
      {food:"Eau",qty:500,unit:"ml",optional:false},
      {food:"Sel",qty:1,unit:"pincée",optional:false}
    ],
    steps:["Couper le boeuf en gros cubes, les carottes en rondelles.","Faire revenir le boeuf dans l'huile, réserver.","Faire revenir oignons et carottes 5 minutes.","Remettre le boeuf, ajouter eau, thym, laurier.","Cuire à couvert 1h30 à feu doux. Ajouter les pommes de terre 30 min avant la fin."],
    nutrition:{calories:400,protein:35,carbs:30,fat:14,fiber:5},
    tips:"Version sans vin rouge pour éviter l'histamine. Les champignons sont optionnels (score modéré).",
    isCustom:false
  },

  // ══════ ACCOMPAGNEMENTS (4) ══════
  {
    id:"puree-maison", name:"Purée de pommes de terre maison",
    category:"accompagnement", mealType:["dejeuner","diner"],
    prepTime:10, cookTime:20, servings:4, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Pommes de terre",qty:600,unit:"g",optional:false},
      {food:"Beurre",qty:30,unit:"g",optional:false},
      {food:"Lait frais",qty:100,unit:"ml",optional:false},
      {food:"Sel",qty:1,unit:"pincée",optional:false},
      {food:"Noix de muscade",qty:1,unit:"pincée",optional:true}
    ],
    steps:["Éplucher et couper les pommes de terre.","Les cuire 20 minutes dans l'eau salée.","Écraser au presse-purée avec le beurre et le lait chaud.","Assaisonner."],
    nutrition:{calories:180,protein:4,carbs:28,fat:6,fiber:2},
    tips:"Classique indémodable et très sûr. Utiliser du lait frais.",
    isCustom:false
  },
  {
    id:"legumes-rotis-four", name:"Légumes rôtis au four",
    category:"accompagnement", mealType:["dejeuner","diner"],
    prepTime:15, cookTime:30, servings:4, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Carotte",qty:3,unit:"pièces",optional:false},
      {food:"Courgette",qty:2,unit:"pièces",optional:false},
      {food:"Patate douce",qty:1,unit:"pièce",optional:false},
      {food:"Fenouil",qty:1,unit:"bulbe",optional:true},
      {food:"Huile d'olive",qty:3,unit:"c.à.s",optional:false},
      {food:"Thym",qty:2,unit:"branches",optional:false},
      {food:"Sel",qty:1,unit:"pincée",optional:false}
    ],
    steps:["Préchauffer le four à 200°C.","Couper tous les légumes en morceaux.","Disposer sur une plaque, arroser d'huile, ajouter le thym.","Enfourner 30 minutes en retournant à mi-cuisson."],
    nutrition:{calories:150,protein:3,carbs:22,fat:6,fiber:5},
    tips:"Les légumes rôtis sont savoureux et tous ces légumes sont bien tolérés.",
    isCustom:false
  },
  {
    id:"riz-pilaf-herbes", name:"Riz pilaf aux herbes",
    category:"accompagnement", mealType:["dejeuner","diner"],
    prepTime:5, cookTime:18, servings:4, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Riz",qty:250,unit:"g",optional:false},
      {food:"Oignon",qty:1,unit:"petit",optional:false},
      {food:"Beurre",qty:15,unit:"g",optional:false},
      {food:"Persil frais",qty:2,unit:"c.à.s",optional:false},
      {food:"Eau",qty:400,unit:"ml",optional:false},
      {food:"Sel",qty:1,unit:"pincée",optional:false}
    ],
    steps:["Faire revenir l'oignon émincé dans le beurre.","Ajouter le riz, nacrer 2 minutes.","Verser l'eau bouillante, couvrir et cuire 15 minutes à feu doux.","Égrener à la fourchette, parsemer de persil."],
    nutrition:{calories:260,protein:5,carbs:50,fat:4,fiber:1},
    tips:"Le riz pilaf est un accompagnement polyvalent et totalement sûr.",
    isCustom:false
  },
  {
    id:"salade-concombre-herbes", name:"Salade fraîche concombre-herbes",
    category:"accompagnement", mealType:["dejeuner","diner"],
    prepTime:10, cookTime:0, servings:2, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Concombre",qty:1,unit:"pièce",optional:false},
      {food:"Laitue",qty:1,unit:"petite",optional:false},
      {food:"Radis",qty:4,unit:"pièces",optional:true},
      {food:"Huile d'olive",qty:2,unit:"c.à.s",optional:false},
      {food:"Ciboulette",qty:1,unit:"c.à.s",optional:false},
      {food:"Sel",qty:1,unit:"pincée",optional:false}
    ],
    steps:["Laver la laitue, couper le concombre en rondelles.","Émincer les radis.","Ciseler la ciboulette.","Assaisonner d'huile d'olive et de sel."],
    nutrition:{calories:80,protein:2,carbs:6,fat:6,fiber:2},
    tips:"Salade sans vinaigre ni citron pour éviter l'histamine. L'huile d'olive suffit comme assaisonnement.",
    isCustom:false
  },

  // ══════ DESSERTS (4) ══════
  {
    id:"compote-pomme-poire", name:"Compote pomme-poire à la vanille",
    category:"dessert", mealType:["dejeuner","diner","gouter"],
    prepTime:10, cookTime:15, servings:4, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Pomme",qty:3,unit:"pièces",optional:false},
      {food:"Poire",qty:2,unit:"pièces",optional:false},
      {food:"Sucre blanc",qty:2,unit:"c.à.s",optional:true},
      {food:"Vanille",qty:1,unit:"gousse",optional:false},
      {food:"Eau",qty:50,unit:"ml",optional:false}
    ],
    steps:["Éplucher et couper les fruits en morceaux.","Les mettre dans une casserole avec l'eau et la vanille fendue.","Cuire 15 minutes à feu doux.","Écraser grossièrement ou mixer selon préférence."],
    nutrition:{calories:100,protein:1,carbs:24,fat:0,fiber:3},
    tips:"Les pommes et poires sont parmi les fruits les mieux tolérés.",
    isCustom:false
  },
  {
    id:"mousse-mangue-coco", name:"Mousse légère mangue-coco",
    category:"dessert", mealType:["dejeuner","diner","gouter"],
    prepTime:10, cookTime:0, servings:4, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Mangue",qty:2,unit:"pièces",optional:false},
      {food:"Lait de coco",qty:200,unit:"ml",optional:false},
      {food:"Miel",qty:2,unit:"c.à.s",optional:true},
      {food:"Vanille",qty:1,unit:"c.à.c",optional:true}
    ],
    steps:["Couper les mangues en morceaux.","Mixer avec le lait de coco et la vanille jusqu'à obtenir une texture mousseuse.","Répartir dans des verrines.","Réfrigérer 1h avant de servir."],
    nutrition:{calories:150,protein:2,carbs:28,fat:5,fiber:2},
    tips:"Dessert frais sans produits laitiers fermentés, très bien toléré.",
    isCustom:false
  },
  {
    id:"crumble-pomme-amande", name:"Crumble pomme-amande",
    category:"dessert", mealType:["dejeuner","diner","gouter"],
    prepTime:15, cookTime:25, servings:4, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Pomme",qty:4,unit:"pièces",optional:false},
      {food:"Farine (blé, riz, maïs)",qty:100,unit:"g",optional:false},
      {food:"Beurre",qty:60,unit:"g",optional:false},
      {food:"Sucre blanc",qty:50,unit:"g",optional:false},
      {food:"Amandes",qty:30,unit:"g",optional:true}
    ],
    steps:["Préchauffer le four à 180°C.","Couper les pommes en morceaux, les disposer dans un plat.","Mélanger farine, beurre froid coupé et sucre du bout des doigts.","Ajouter les amandes concassées.","Répartir le crumble sur les pommes, enfourner 25 minutes."],
    nutrition:{calories:280,protein:4,carbs:38,fat:12,fiber:3},
    tips:"Le crumble sans chocolat ni fruits rouges est une option dessert sûre.",
    isCustom:false
  },
  {
    id:"riz-au-lait-vanille", name:"Riz au lait vanillé",
    category:"dessert", mealType:["dejeuner","diner","gouter"],
    prepTime:5, cookTime:30, servings:4, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Riz",qty:120,unit:"g",optional:false},
      {food:"Lait frais",qty:600,unit:"ml",optional:false},
      {food:"Sucre blanc",qty:50,unit:"g",optional:false},
      {food:"Vanille",qty:1,unit:"gousse",optional:false}
    ],
    steps:["Rincer le riz.","Faire chauffer le lait avec la gousse de vanille fendue.","Ajouter le riz et cuire 25-30 minutes à feu très doux en remuant régulièrement.","Ajouter le sucre en fin de cuisson.","Servir tiède ou froid."],
    nutrition:{calories:220,protein:7,carbs:42,fat:3,fiber:0},
    tips:"Un classique réconfortant et sans risque. Utiliser du lait frais non fermenté.",
    isCustom:false
  },

  // ══════ COLLATIONS (3) ══════
  {
    id:"galettes-riz-ricotta-miel", name:"Galettes de riz, ricotta et miel",
    category:"collation", mealType:["petit-dej","gouter"],
    prepTime:3, cookTime:0, servings:1, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Galettes de riz",qty:3,unit:"pièces",optional:false},
      {food:"Ricotta",qty:50,unit:"g",optional:false},
      {food:"Miel",qty:1,unit:"c.à.c",optional:true},
      {food:"Amandes",qty:5,unit:"pièces",optional:true}
    ],
    steps:["Tartiner les galettes de riz de ricotta.","Arroser d'un filet de miel.","Parsemer d'amandes concassées."],
    nutrition:{calories:200,protein:8,carbs:28,fat:6,fiber:1},
    tips:"Snack simple et rapide, idéal en cas de fringale.",
    isCustom:false
  },
  {
    id:"smoothie-poire-avoine", name:"Smoothie poire-avoine",
    category:"collation", mealType:["petit-dej","gouter"],
    prepTime:5, cookTime:0, servings:1, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Poire",qty:1,unit:"pièce",optional:false},
      {food:"Lait frais",qty:200,unit:"ml",optional:false},
      {food:"Avoine / flocons",qty:20,unit:"g",optional:false},
      {food:"Miel",qty:1,unit:"c.à.c",optional:true}
    ],
    steps:["Couper la poire en morceaux.","Mixer avec le lait, les flocons d'avoine et le miel.","Servir frais."],
    nutrition:{calories:220,protein:8,carbs:38,fat:4,fiber:4},
    tips:"Smoothie rassasiant et sûr, parfait pour le goûter.",
    isCustom:false
  },
  {
    id:"energy-balls-avoine-coco", name:"Energy balls avoine-coco",
    category:"collation", mealType:["gouter"],
    prepTime:15, cookTime:0, servings:10, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Avoine / flocons",qty:100,unit:"g",optional:false},
      {food:"Noix de coco",qty:30,unit:"g",optional:false},
      {food:"Miel",qty:3,unit:"c.à.s",optional:false},
      {food:"Purée d'amande",qty:2,unit:"c.à.s",optional:false},
      {food:"Graines de courge",qty:20,unit:"g",optional:true}
    ],
    steps:["Mixer grossièrement les flocons d'avoine.","Mélanger avec la coco râpée, le miel et la purée d'amande.","Former des petites boules.","Rouler dans la coco râpée ou les graines de courge.","Réfrigérer 1h."],
    nutrition:{calories:80,protein:2,carbs:12,fat:3,fiber:1},
    tips:"Se conservent 3 jours au frigo dans une boîte hermétique. Pas de chocolat ni fruits secs.",
    isCustom:false
  },

  // ══════ NOUVEAUX PETITS-DÉJEUNERS (7) ══════
  {
    id:"omelette-fines-herbes", name:"Omelette aux fines herbes",
    category:"petit-dej", mealType:["petit-dej","dejeuner"],
    prepTime:5, cookTime:5, servings:1, difficulty:"facile", histamineScore:1,
    ingredients:[{food:"Oeufs",qty:3,unit:"pièces",optional:false},{food:"Beurre",qty:10,unit:"g",optional:false},{food:"Persil frais",qty:1,unit:"c.à.s",optional:false},{food:"Ciboulette",qty:1,unit:"c.à.s",optional:false},{food:"Sel",qty:1,unit:"pincée",optional:false}],
    steps:["Battre les oeufs avec les herbes ciselées et le sel.","Faire fondre le beurre dans une poêle à feu moyen.","Verser les oeufs et cuire 3-4 minutes en ramenant les bords vers le centre.","Replier et servir baveuse."],
    nutrition:{calories:280,protein:18,carbs:1,fat:22,fiber:0},
    tips:"Les oeufs sont modérés — commencer par 1-2 oeufs pour tester la tolérance.", isCustom:false
  },
  {
    id:"pancakes-pomme", name:"Pancakes moelleux à la pomme",
    category:"petit-dej", mealType:["petit-dej","gouter"],
    prepTime:10, cookTime:15, servings:2, difficulty:"facile", histamineScore:1,
    ingredients:[{food:"Farine (blé, riz, maïs)",qty:150,unit:"g",optional:false},{food:"Oeufs",qty:2,unit:"pièces",optional:false},{food:"Lait frais",qty:150,unit:"ml",optional:false},{food:"Pomme",qty:1,unit:"pièce",optional:false},{food:"Beurre",qty:15,unit:"g",optional:false},{food:"Miel",qty:1,unit:"c.à.s",optional:true}],
    steps:["Mélanger farine, oeufs et lait pour obtenir une pâte lisse.","Râper la pomme et l'incorporer.","Cuire de petites crêpes épaisses dans le beurre 2 min de chaque côté.","Servir avec un filet de miel."],
    nutrition:{calories:350,protein:12,carbs:52,fat:10,fiber:3},
    tips:"Pancakes maison sans levure chimique. Variante : farine de riz pour sans gluten.", isCustom:false
  },
  {
    id:"crepes-nature-miel", name:"Crêpes nature au miel",
    category:"petit-dej", mealType:["petit-dej","gouter"],
    prepTime:10, cookTime:20, servings:4, difficulty:"facile", histamineScore:1,
    ingredients:[{food:"Farine (blé, riz, maïs)",qty:250,unit:"g",optional:false},{food:"Oeufs",qty:3,unit:"pièces",optional:false},{food:"Lait frais",qty:500,unit:"ml",optional:false},{food:"Beurre",qty:30,unit:"g",optional:false},{food:"Miel",qty:2,unit:"c.à.s",optional:true},{food:"Vanille",qty:1,unit:"c.à.c",optional:true}],
    steps:["Mélanger farine, oeufs et vanille.","Ajouter le lait progressivement en fouettant.","Laisser reposer 30 min.","Cuire les crêpes dans une poêle beurrée."],
    nutrition:{calories:220,protein:8,carbs:32,fat:7,fiber:1},
    tips:"Crêpes sans alcool ni agrumes. Le beurre et la vanille apportent tout le parfum.", isCustom:false
  },
  {
    id:"granola-maison-pomme", name:"Granola maison pomme et amandes",
    category:"petit-dej", mealType:["petit-dej","gouter"],
    prepTime:10, cookTime:25, servings:6, difficulty:"facile", histamineScore:0,
    ingredients:[{food:"Avoine / flocons",qty:200,unit:"g",optional:false},{food:"Amandes",qty:50,unit:"g",optional:false},{food:"Graines de courge",qty:30,unit:"g",optional:false},{food:"Miel",qty:3,unit:"c.à.s",optional:false},{food:"Huile de coco",qty:2,unit:"c.à.s",optional:false},{food:"Pomme",qty:1,unit:"pièce",optional:false}],
    steps:["Préchauffer le four à 150°C.","Mélanger flocons, amandes concassées, graines et pomme râpée.","Ajouter miel et huile de coco fondue.","Étaler sur une plaque, enfourner 25 min en remuant à mi-cuisson.","Laisser refroidir."],
    nutrition:{calories:250,protein:7,carbs:32,fat:11,fiber:4},
    tips:"Granola sans fruits secs ni chocolat. Se conserve 1 semaine dans un bocal.", isCustom:false
  },
  {
    id:"chia-pudding-mangue", name:"Pudding de chia à la mangue",
    category:"petit-dej", mealType:["petit-dej","gouter"],
    prepTime:5, cookTime:0, servings:2, difficulty:"facile", histamineScore:0,
    ingredients:[{food:"Graines de chia",qty:40,unit:"g",optional:false},{food:"Lait de coco",qty:300,unit:"ml",optional:false},{food:"Mangue",qty:1,unit:"pièce",optional:false},{food:"Miel",qty:1,unit:"c.à.s",optional:true},{food:"Vanille",qty:1,unit:"pincée",optional:true}],
    steps:["Mélanger graines de chia avec lait de coco et vanille.","Réfrigérer au moins 4h ou toute la nuit.","Couper la mangue en dés.","Servir garni de mangue et miel."],
    nutrition:{calories:220,protein:5,carbs:28,fat:10,fiber:8},
    tips:"Préparer la veille. Le chia est riche en oméga-3 et bien toléré.", isCustom:false
  },
  {
    id:"muesli-bircher-poire", name:"Bircher muesli à la poire",
    category:"petit-dej", mealType:["petit-dej"],
    prepTime:10, cookTime:0, servings:2, difficulty:"facile", histamineScore:0,
    ingredients:[{food:"Avoine / flocons",qty:100,unit:"g",optional:false},{food:"Lait frais",qty:200,unit:"ml",optional:false},{food:"Poire",qty:1,unit:"pièce",optional:false},{food:"Amandes",qty:20,unit:"g",optional:true},{food:"Miel",qty:1,unit:"c.à.s",optional:true}],
    steps:["Mélanger les flocons avec le lait.","Râper la poire et l'ajouter.","Réfrigérer toute la nuit.","Servir frais avec amandes concassées et miel."],
    nutrition:{calories:300,protein:10,carbs:45,fat:9,fiber:5},
    tips:"Bircher sans yaourt ni agrumes. Le trempage rend l'avoine très digeste.", isCustom:false
  },
  {
    id:"toast-ricotta-peche", name:"Toast ricotta et pêche fraîche",
    category:"petit-dej", mealType:["petit-dej","gouter"],
    prepTime:5, cookTime:3, servings:1, difficulty:"facile", histamineScore:1,
    ingredients:[{food:"Pain frais simple",qty:2,unit:"tranches",optional:false},{food:"Ricotta",qty:60,unit:"g",optional:false},{food:"Pêche",qty:1,unit:"pièce",optional:false},{food:"Miel",qty:1,unit:"c.à.c",optional:true},{food:"Amandes",qty:5,unit:"pièces",optional:true}],
    steps:["Toaster légèrement le pain.","Tartiner de ricotta.","Disposer des tranches de pêche.","Parsemer d'amandes effilées et miel."],
    nutrition:{calories:320,protein:14,carbs:42,fat:11,fiber:3},
    tips:"La pêche fraîche est bien tolérée. Varier avec poire ou mangue selon la saison.", isCustom:false
  },

  // ══════ PETIT-DÉJ SUPPLÉMENTAIRES (8) ══════
  {
    id:"pancakes-avoine-myrtilles", name:"Pancakes à l'avoine et myrtilles",
    category:"petit-dej", mealType:["petit-dej"],
    prepTime:10, cookTime:10, servings:2, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Avoine / flocons",qty:120,unit:"g",optional:false},
      {food:"Lait frais",qty:200,unit:"ml",optional:false},
      {food:"Myrtilles",qty:100,unit:"g",optional:false},
      {food:"Beurre",qty:15,unit:"g",optional:false},
      {food:"Miel",qty:2,unit:"c.à.s",optional:true},
      {food:"Vanille",qty:1,unit:"c.à.c",optional:false}
    ],
    steps:["Mixer les flocons d'avoine en farine grossière.","Mélanger avec le lait et la vanille pour obtenir une pâte lisse.","Faire fondre un peu de beurre dans une poêle à feu moyen.","Verser des petites louches de pâte et cuire 2 minutes de chaque côté.","Servir les pancakes garnis de myrtilles et d'un filet de miel."],
    nutrition:{calories:380,protein:12,carbs:58,fat:10,fiber:6},
    tips:"Les flocons d'avoine mixés remplacent la farine classique pour un petit-déjeuner plus nutritif et bien toléré.",
    isCustom:false
  },
  {
    id:"crepes-sarrasin-miel-poire", name:"Crêpes de sarrasin au miel et à la poire",
    category:"petit-dej", mealType:["petit-dej","gouter"],
    prepTime:10, cookTime:15, servings:2, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Sarrasin",qty:100,unit:"g",optional:false},
      {food:"Lait frais",qty:250,unit:"ml",optional:false},
      {food:"Poire",qty:2,unit:"pièces",optional:false},
      {food:"Beurre",qty:20,unit:"g",optional:false},
      {food:"Miel",qty:2,unit:"c.à.s",optional:false},
      {food:"Vanille",qty:1,unit:"c.à.c",optional:true}
    ],
    steps:["Mixer le sarrasin en farine fine ou utiliser de la farine de sarrasin.","Mélanger avec le lait et la vanille pour obtenir une pâte fluide.","Cuire les crêpes dans une poêle légèrement beurrée.","Couper les poires en tranches fines et les faire dorer 3 minutes dans le beurre restant.","Garnir chaque crêpe de poire fondante et de miel."],
    nutrition:{calories:360,protein:10,carbs:56,fat:12,fiber:4},
    tips:"Le sarrasin est naturellement sans gluten et très bien toléré.",
    isCustom:false
  },
  {
    id:"tartines-pomme-ricotta-miel", name:"Tartines pomme, ricotta et miel",
    category:"petit-dej", mealType:["petit-dej","gouter"],
    prepTime:5, cookTime:3, servings:1, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Pain frais simple",qty:2,unit:"tranches",optional:false},
      {food:"Ricotta",qty:60,unit:"g",optional:false},
      {food:"Pomme",qty:1,unit:"pièce",optional:false},
      {food:"Miel",qty:1,unit:"c.à.c",optional:true},
      {food:"Cannelle",qty:1,unit:"pincée",optional:true}
    ],
    steps:["Toaster légèrement les tranches de pain.","Tartiner généreusement de ricotta.","Couper la pomme en fines tranches et les disposer sur la ricotta.","Saupoudrer d'un soupçon de cannelle et arroser de miel."],
    nutrition:{calories:320,protein:12,carbs:50,fat:8,fiber:4},
    tips:"La cannelle est modérée en histamine — commencer par une petite pincée pour tester la tolérance.",
    isCustom:false
  },
  {
    id:"bowl-avoine-peche-coco", name:"Bowl d'avoine à la pêche et noix de coco",
    category:"petit-dej", mealType:["petit-dej"],
    prepTime:5, cookTime:10, servings:1, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Avoine / flocons",qty:50,unit:"g",optional:false},
      {food:"Lait frais",qty:180,unit:"ml",optional:false},
      {food:"Pêche",qty:1,unit:"pièce",optional:false},
      {food:"Noix de coco",qty:10,unit:"g",optional:false},
      {food:"Miel",qty:1,unit:"c.à.c",optional:true}
    ],
    steps:["Faire chauffer le lait et les flocons d'avoine à feu doux pendant 8 minutes.","Couper la pêche en tranches fines.","Verser le porridge dans un bol.","Disposer les tranches de pêche et parsemer de coco râpée.","Ajouter un filet de miel si désiré."],
    nutrition:{calories:310,protein:10,carbs:50,fat:8,fiber:5},
    tips:"La pêche fraîche est un fruit sûr et savoureux. Choisir des fruits bien mûrs consommés rapidement.",
    isCustom:false
  },
  {
    id:"muffins-carotte-pomme", name:"Muffins carotte, pomme et gingembre",
    category:"petit-dej", mealType:["petit-dej","gouter"],
    prepTime:15, cookTime:25, servings:6, difficulty:"facile", histamineScore:1,
    ingredients:[
      {food:"Farine (blé, riz, maïs)",qty:180,unit:"g",optional:false},
      {food:"Carotte",qty:2,unit:"pièces",optional:false},
      {food:"Pomme",qty:1,unit:"pièce",optional:false},
      {food:"Oeufs",qty:2,unit:"pièces",optional:false},
      {food:"Sucre roux / cassonade",qty:60,unit:"g",optional:false},
      {food:"Huile de colza",qty:60,unit:"ml",optional:false},
      {food:"Gingembre frais",qty:5,unit:"g",optional:false}
    ],
    steps:["Préchauffer le four à 180°C.","Râper les carottes et la pomme, râper finement le gingembre.","Battre les oeufs avec le sucre et l'huile.","Incorporer la farine puis les légumes et fruits râpés.","Répartir dans des moules à muffins et enfourner 25 minutes."],
    nutrition:{calories:220,protein:5,carbs:32,fat:9,fiber:2},
    tips:"Les oeufs sont modérés — en cas de doute, tester avec un seul oeuf.",
    isCustom:false
  },
  {
    id:"smoothie-poire-menthe-coco", name:"Smoothie poire, menthe et coco",
    category:"petit-dej", mealType:["petit-dej","gouter"],
    prepTime:5, cookTime:0, servings:1, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Poire",qty:1,unit:"pièce",optional:false},
      {food:"Lait de coco",qty:150,unit:"ml",optional:false},
      {food:"Menthe fraîche",qty:6,unit:"feuilles",optional:false},
      {food:"Miel",qty:1,unit:"c.à.c",optional:true},
      {food:"Graines de chia",qty:5,unit:"g",optional:true}
    ],
    steps:["Couper la poire en morceaux.","Mixer la poire, le lait de coco et les feuilles de menthe.","Ajouter le miel si souhaité et mixer à nouveau.","Verser dans un verre et parsemer de graines de chia."],
    nutrition:{calories:200,protein:3,carbs:34,fat:7,fiber:4},
    tips:"La menthe fraîche est bien tolérée et apporte une touche de fraîcheur agréable au réveil.",
    isCustom:false
  },
  {
    id:"galettes-patate-douce-avoine", name:"Galettes de patate douce à l'avoine",
    category:"petit-dej", mealType:["petit-dej","dejeuner"],
    prepTime:10, cookTime:12, servings:2, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Patate douce",qty:250,unit:"g",optional:false},
      {food:"Avoine / flocons",qty:40,unit:"g",optional:false},
      {food:"Farine (blé, riz, maïs)",qty:30,unit:"g",optional:false},
      {food:"Huile d'olive",qty:2,unit:"c.à.s",optional:false},
      {food:"Sel",qty:1,unit:"pincée",optional:false},
      {food:"Thym",qty:1,unit:"pincée",optional:true}
    ],
    steps:["Éplucher et râper la patate douce.","Mélanger avec les flocons d'avoine, la farine, le sel et le thym.","Former des galettes plates avec les mains.","Faire chauffer l'huile dans une poêle à feu moyen.","Cuire les galettes 5 à 6 minutes de chaque côté jusqu'à ce qu'elles soient dorées."],
    nutrition:{calories:290,protein:6,carbs:44,fat:10,fiber:5},
    tips:"La patate douce est naturellement sucrée et très bien tolérée. Parfait pour un petit-déjeuner salé.",
    isCustom:false
  },
  {
    id:"overnight-oats-cerise-amande", name:"Overnight oats cerise et amande",
    category:"petit-dej", mealType:["petit-dej"],
    prepTime:10, cookTime:0, servings:1, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Avoine / flocons",qty:50,unit:"g",optional:false},
      {food:"Lait d'amande",qty:150,unit:"ml",optional:false},
      {food:"Cerise",qty:80,unit:"g",optional:false},
      {food:"Amandes",qty:10,unit:"g",optional:false},
      {food:"Miel",qty:1,unit:"c.à.c",optional:true},
      {food:"Vanille",qty:1,unit:"c.à.c",optional:false}
    ],
    steps:["Mélanger les flocons d'avoine avec le lait d'amande et la vanille dans un bocal.","Couvrir et réfrigérer toute la nuit.","Le matin, dénoyauter et couper les cerises en deux.","Garnir le porridge froid de cerises et d'amandes effilées.","Ajouter un filet de miel selon le goût."],
    nutrition:{calories:320,protein:9,carbs:48,fat:10,fiber:5},
    tips:"Les cerises sont parmi les fruits les mieux tolérés et possèdent des propriétés anti-inflammatoires naturelles.",
    isCustom:false
  },

  // ══════ NOUVELLES SOUPES (13) ══════
  {
    id:"soupe-fenouil-pomme-de-terre", name:"Velouté de fenouil et pommes de terre",
    category:"soupe", mealType:["dejeuner","diner"],
    prepTime:10, cookTime:25, servings:4, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Fenouil",qty:3,unit:"bulbes",optional:false},
      {food:"Pommes de terre",qty:300,unit:"g",optional:false},
      {food:"Oignon",qty:1,unit:"pièce",optional:false},
      {food:"Huile d'olive",qty:1,unit:"c.à.s",optional:false},
      {food:"Eau",qty:700,unit:"ml",optional:false},
      {food:"Sel",qty:1,unit:"pincée",optional:false},
      {food:"Aneth frais",qty:1,unit:"c.à.s",optional:true}
    ],
    steps:["Émincer le fenouil et l'oignon, couper les pommes de terre en cubes.","Faire revenir l'oignon et le fenouil dans l'huile 5 minutes.","Ajouter les pommes de terre et l'eau.","Cuire 25 minutes à couvert.","Mixer finement et parsemer d'aneth frais avant de servir."],
    nutrition:{calories:130,protein:3,carbs:24,fat:3,fiber:5},
    tips:"Le fenouil facilite la digestion et est très bien toléré. Conserver les frondes pour la décoration.",
    isCustom:false
  },
  {
    id:"soupe-patate-douce-cumin", name:"Soupe de patate douce au cumin",
    category:"soupe", mealType:["dejeuner","diner"],
    prepTime:10, cookTime:25, servings:4, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Patate douce",qty:500,unit:"g",optional:false},
      {food:"Oignon",qty:1,unit:"pièce",optional:false},
      {food:"Ail",qty:2,unit:"gousses",optional:false},
      {food:"Cumin",qty:1,unit:"c.à.c",optional:false},
      {food:"Huile d'olive",qty:1,unit:"c.à.s",optional:false},
      {food:"Eau",qty:600,unit:"ml",optional:false},
      {food:"Sel",qty:1,unit:"pincée",optional:false}
    ],
    steps:["Éplucher et couper la patate douce en cubes.","Faire revenir l'oignon et l'ail dans l'huile 3 minutes.","Ajouter le cumin et remuer 30 secondes.","Ajouter la patate douce et l'eau, cuire 25 minutes.","Mixer jusqu'à obtenir une texture veloutée."],
    nutrition:{calories:140,protein:3,carbs:28,fat:3,fiber:4},
    tips:"Le cumin est une épice douce bien tolérée qui sublime la saveur naturellement sucrée de la patate douce.",
    isCustom:false
  },
  {
    id:"soupe-courgette-basilic", name:"Velouté de courgettes au basilic",
    category:"soupe", mealType:["dejeuner","diner"],
    prepTime:10, cookTime:20, servings:4, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Courgette",qty:4,unit:"pièces",optional:false},
      {food:"Pommes de terre",qty:200,unit:"g",optional:false},
      {food:"Oignon",qty:1,unit:"pièce",optional:false},
      {food:"Basilic frais",qty:15,unit:"feuilles",optional:false},
      {food:"Huile d'olive",qty:1,unit:"c.à.s",optional:false},
      {food:"Eau",qty:600,unit:"ml",optional:false},
      {food:"Sel",qty:1,unit:"pincée",optional:false}
    ],
    steps:["Couper les courgettes en rondelles et les pommes de terre en cubes.","Faire revenir l'oignon émincé dans l'huile 3 minutes.","Ajouter les courgettes, les pommes de terre et l'eau.","Cuire 20 minutes puis ajouter le basilic frais.","Mixer finement et servir aussitôt."],
    nutrition:{calories:100,protein:3,carbs:16,fat:3,fiber:3},
    tips:"Le basilic frais doit être ajouté en fin de cuisson pour conserver toute sa saveur.",
    isCustom:false
  },
  {
    id:"soupe-navet-poireau-thym", name:"Soupe rustique navet, poireau et thym",
    category:"soupe", mealType:["dejeuner","diner"],
    prepTime:10, cookTime:25, servings:4, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Navet",qty:3,unit:"pièces",optional:false},
      {food:"Poireau",qty:2,unit:"pièces",optional:false},
      {food:"Pommes de terre",qty:200,unit:"g",optional:false},
      {food:"Beurre",qty:15,unit:"g",optional:false},
      {food:"Thym",qty:2,unit:"branches",optional:false},
      {food:"Eau",qty:700,unit:"ml",optional:false},
      {food:"Sel",qty:1,unit:"pincée",optional:false}
    ],
    steps:["Éplucher et couper les navets et pommes de terre en cubes.","Émincer les poireaux en rondelles.","Faire fondre le beurre et y faire suer les poireaux 5 minutes.","Ajouter les navets, les pommes de terre, le thym et l'eau.","Cuire 25 minutes, retirer le thym et mixer grossièrement pour une texture rustique."],
    nutrition:{calories:120,protein:3,carbs:20,fat:4,fiber:4},
    tips:"Le navet est un légume racine doux et très bien toléré, idéal pour les soupes d'hiver.",
    isCustom:false
  },
  {
    id:"soupe-potimarron-coco", name:"Soupe de potimarron au lait de coco",
    category:"soupe", mealType:["dejeuner","diner"],
    prepTime:15, cookTime:25, servings:4, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Potiron / potimarron",qty:600,unit:"g",optional:false},
      {food:"Oignon",qty:1,unit:"pièce",optional:false},
      {food:"Lait de coco",qty:200,unit:"ml",optional:false},
      {food:"Gingembre frais",qty:5,unit:"g",optional:true},
      {food:"Huile d'olive",qty:1,unit:"c.à.s",optional:false},
      {food:"Eau",qty:400,unit:"ml",optional:false},
      {food:"Sel",qty:1,unit:"pincée",optional:false}
    ],
    steps:["Couper le potimarron en cubes (garder la peau si bio).","Faire revenir l'oignon émincé dans l'huile 3 minutes.","Ajouter le potimarron, le gingembre râpé et l'eau.","Cuire 25 minutes puis ajouter le lait de coco.","Mixer jusqu'à obtenir une texture onctueuse."],
    nutrition:{calories:150,protein:3,carbs:20,fat:7,fiber:3},
    tips:"Le potimarron n'a pas besoin d'être épluché si bio, sa peau devient tendre à la cuisson.",
    isCustom:false
  },

  // ══════ NOUVELLES SOUPES (8) ══════
  {
    id:"soupe-panais-cumin", name:"Soupe de panais au cumin",
    category:"soupe", mealType:["dejeuner","diner"],
    prepTime:10, cookTime:25, servings:4, difficulty:"facile", histamineScore:0,
    ingredients:[{food:"Panais",qty:500,unit:"g",optional:false},{food:"Oignon",qty:1,unit:"pièce",optional:false},{food:"Cumin",qty:1,unit:"c.à.c",optional:false},{food:"Huile d'olive",qty:1,unit:"c.à.s",optional:false},{food:"Eau",qty:600,unit:"ml",optional:false},{food:"Sel",qty:1,unit:"pincée",optional:false}],
    steps:["Éplucher et couper les panais.","Faire revenir l'oignon avec le cumin 2 min.","Ajouter panais et eau.","Cuire 25 min puis mixer."],
    nutrition:{calories:110,protein:2,carbs:20,fat:3,fiber:5},
    tips:"Le panais a une saveur douce et sucrée. Le cumin aide la digestion.", isCustom:false
  },
  {
    id:"veloute-asperges", name:"Velouté d'asperges printanier",
    category:"soupe", mealType:["dejeuner","diner"],
    prepTime:10, cookTime:20, servings:4, difficulty:"facile", histamineScore:0,
    ingredients:[{food:"Asperges",qty:500,unit:"g",optional:false},{food:"Pommes de terre",qty:200,unit:"g",optional:false},{food:"Oignon",qty:1,unit:"pièce",optional:false},{food:"Beurre",qty:15,unit:"g",optional:false},{food:"Eau",qty:500,unit:"ml",optional:false},{food:"Sel",qty:1,unit:"pincée",optional:false}],
    steps:["Éplucher les asperges, couper en tronçons.","Faire fondre le beurre et revenir l'oignon.","Ajouter asperges, pommes de terre et eau.","Cuire 20 min, mixer finement."],
    nutrition:{calories:100,protein:5,carbs:14,fat:3,fiber:3},
    tips:"Les asperges sont bien tolérées et riches en prébiotiques.", isCustom:false
  },
  {
    id:"soupe-patate-douce-coco", name:"Soupe patate douce et lait de coco",
    category:"soupe", mealType:["dejeuner","diner"],
    prepTime:10, cookTime:25, servings:4, difficulty:"facile", histamineScore:0,
    ingredients:[{food:"Patate douce",qty:500,unit:"g",optional:false},{food:"Lait de coco",qty:200,unit:"ml",optional:false},{food:"Oignon",qty:1,unit:"pièce",optional:false},{food:"Gingembre frais",qty:10,unit:"g",optional:false},{food:"Curcuma",qty:1,unit:"c.à.c",optional:false},{food:"Eau",qty:400,unit:"ml",optional:false},{food:"Sel",qty:1,unit:"pincée",optional:false}],
    steps:["Couper la patate douce en cubes.","Faire revenir oignon et gingembre.","Ajouter patate douce, curcuma et eau.","Cuire 25 min, ajouter lait de coco et mixer."],
    nutrition:{calories:160,protein:3,carbs:24,fat:6,fiber:4},
    tips:"Le trio gingembre-curcuma-coco est anti-inflammatoire et savoureux.", isCustom:false
  },
  {
    id:"veloute-fenouil", name:"Velouté de fenouil doux",
    category:"soupe", mealType:["dejeuner","diner"],
    prepTime:10, cookTime:25, servings:4, difficulty:"facile", histamineScore:0,
    ingredients:[{food:"Fenouil",qty:3,unit:"bulbes",optional:false},{food:"Pommes de terre",qty:200,unit:"g",optional:false},{food:"Oignon",qty:1,unit:"pièce",optional:false},{food:"Huile d'olive",qty:1,unit:"c.à.s",optional:false},{food:"Eau",qty:600,unit:"ml",optional:false},{food:"Sel",qty:1,unit:"pincée",optional:false}],
    steps:["Émincer fenouil et oignon.","Faire revenir dans l'huile 5 min.","Ajouter pommes de terre et eau.","Cuire 25 min puis mixer."],
    nutrition:{calories:95,protein:3,carbs:16,fat:3,fiber:4},
    tips:"Le fenouil a des propriétés digestives et une saveur anisée douce.", isCustom:false
  },
  {
    id:"soupe-celeri-pomme", name:"Soupe céleri et pomme verte",
    category:"soupe", mealType:["dejeuner","diner"],
    prepTime:10, cookTime:20, servings:4, difficulty:"facile", histamineScore:0,
    ingredients:[{food:"Céleri",qty:400,unit:"g",optional:false},{food:"Pomme",qty:2,unit:"pièces",optional:false},{food:"Oignon",qty:1,unit:"pièce",optional:false},{food:"Beurre",qty:15,unit:"g",optional:false},{food:"Eau",qty:500,unit:"ml",optional:false},{food:"Sel",qty:1,unit:"pincée",optional:false}],
    steps:["Couper céleri et pommes en morceaux.","Faire revenir l'oignon dans le beurre.","Ajouter céleri, pommes et eau.","Cuire 20 min et mixer."],
    nutrition:{calories:85,protein:2,carbs:14,fat:3,fiber:3},
    tips:"L'association céleri-pomme est surprenante et délicieuse.", isCustom:false
  },
  {
    id:"veloute-petit-pois-menthe", name:"Velouté de petits pois à la menthe",
    category:"soupe", mealType:["dejeuner","diner"],
    prepTime:5, cookTime:15, servings:4, difficulty:"facile", histamineScore:0,
    ingredients:[{food:"Petits pois",qty:500,unit:"g",optional:false},{food:"Oignon",qty:1,unit:"pièce",optional:false},{food:"Menthe fraîche",qty:10,unit:"feuilles",optional:false},{food:"Beurre",qty:15,unit:"g",optional:false},{food:"Eau",qty:400,unit:"ml",optional:false},{food:"Sel",qty:1,unit:"pincée",optional:false}],
    steps:["Faire revenir l'oignon dans le beurre.","Ajouter petits pois et eau.","Cuire 12 min.","Ajouter la menthe et mixer."],
    nutrition:{calories:120,protein:8,carbs:16,fat:3,fiber:5},
    tips:"Les petits pois surgelés gardent toute leur fraîcheur. La menthe aide la digestion.", isCustom:false
  },
  {
    id:"soupe-lentilles-carottes", name:"Soupe de lentilles corail et carottes",
    category:"soupe", mealType:["dejeuner","diner"],
    prepTime:10, cookTime:25, servings:4, difficulty:"facile", histamineScore:1,
    ingredients:[{food:"Lentilles",qty:200,unit:"g",optional:false},{food:"Carotte",qty:3,unit:"pièces",optional:false},{food:"Oignon",qty:1,unit:"pièce",optional:false},{food:"Cumin",qty:1,unit:"c.à.c",optional:false},{food:"Curcuma",qty:1,unit:"c.à.c",optional:false},{food:"Huile d'olive",qty:1,unit:"c.à.s",optional:false},{food:"Eau",qty:800,unit:"ml",optional:false},{food:"Sel",qty:1,unit:"pincée",optional:false}],
    steps:["Faire revenir oignon avec cumin et curcuma.","Ajouter carottes et lentilles rincées.","Couvrir d'eau et cuire 25 min.","Mixer partiellement pour une texture rustique."],
    nutrition:{calories:180,protein:12,carbs:28,fat:3,fiber:7},
    tips:"Les lentilles corail sont plus digestes que les autres légumineuses.", isCustom:false
  },
  {
    id:"soupe-oignon-douce", name:"Soupe à l'oignon douce (sans vin)",
    category:"soupe", mealType:["dejeuner","diner"],
    prepTime:10, cookTime:30, servings:4, difficulty:"facile", histamineScore:0,
    ingredients:[{food:"Oignon",qty:5,unit:"pièces",optional:false},{food:"Beurre",qty:30,unit:"g",optional:false},{food:"Farine (blé, riz, maïs)",qty:1,unit:"c.à.s",optional:false},{food:"Eau",qty:800,unit:"ml",optional:false},{food:"Thym",qty:2,unit:"branches",optional:false},{food:"Sel",qty:1,unit:"pincée",optional:false}],
    steps:["Émincer finement les oignons.","Les caraméliser dans le beurre 15 min à feu doux.","Saupoudrer de farine, mélanger.","Ajouter eau et thym, cuire 15 min."],
    nutrition:{calories:110,protein:2,carbs:14,fat:6,fiber:2},
    tips:"Version sans vin ni gruyère. L'oignon contient de la quercétine anti-histamine naturelle.", isCustom:false
  },

  // ══════ NOUVEAUX PLATS — VOLAILLE (8) ══════
  {
    id:"saute-poulet-gingembre", name:"Sauté de poulet au gingembre",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:15, cookTime:15, servings:2, difficulty:"facile", histamineScore:0,
    ingredients:[{food:"Poulet frais",qty:300,unit:"g",optional:false},{food:"Gingembre frais",qty:15,unit:"g",optional:false},{food:"Carotte",qty:2,unit:"pièces",optional:false},{food:"Haricots verts",qty:150,unit:"g",optional:false},{food:"Ail",qty:2,unit:"gousses",optional:false},{food:"Huile d'olive",qty:2,unit:"c.à.s",optional:false},{food:"Riz",qty:150,unit:"g",optional:true},{food:"Sel",qty:1,unit:"pincée",optional:false}],
    steps:["Couper le poulet en lamelles, râper le gingembre.","Saisir le poulet à feu vif 5 min, réserver.","Faire sauter carottes et haricots verts 5 min.","Remettre le poulet, ajouter ail et gingembre, 2 min."],
    nutrition:{calories:380,protein:35,carbs:22,fat:16,fiber:5},
    tips:"Le gingembre frais bloque la libération d'histamine et aide la digestion.", isCustom:false
  },
  {
    id:"wok-dinde-courgettes", name:"Wok de dinde aux courgettes",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:10, cookTime:15, servings:2, difficulty:"facile", histamineScore:0,
    ingredients:[{food:"Dinde fraîche",qty:300,unit:"g",optional:false},{food:"Courgette",qty:2,unit:"pièces",optional:false},{food:"Oignon",qty:1,unit:"pièce",optional:false},{food:"Curcuma",qty:1,unit:"c.à.c",optional:false},{food:"Huile d'olive",qty:2,unit:"c.à.s",optional:false},{food:"Riz",qty:150,unit:"g",optional:true},{food:"Sel",qty:1,unit:"pincée",optional:false}],
    steps:["Couper dinde en dés et courgettes en demi-rondelles.","Saisir la dinde 5 min.","Ajouter oignon et courgettes, cuire 5 min.","Saupoudrer de curcuma et servir sur du riz."],
    nutrition:{calories:360,protein:36,carbs:18,fat:14,fiber:3},
    tips:"Le curcuma est un puissant anti-inflammatoire souvent recommandé dans les protocoles SAMA.", isCustom:false
  },
  {
    id:"tajine-poulet-legumes", name:"Tajine de poulet aux légumes doux",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:15, cookTime:40, servings:4, difficulty:"moyen", histamineScore:0,
    ingredients:[{food:"Poulet frais",qty:600,unit:"g",optional:false},{food:"Carotte",qty:3,unit:"pièces",optional:false},{food:"Navet",qty:2,unit:"pièces",optional:false},{food:"Courgette",qty:2,unit:"pièces",optional:false},{food:"Oignon",qty:1,unit:"pièce",optional:false},{food:"Cumin",qty:1,unit:"c.à.c",optional:false},{food:"Gingembre frais",qty:10,unit:"g",optional:false},{food:"Huile d'olive",qty:2,unit:"c.à.s",optional:false},{food:"Semoule / couscous",qty:250,unit:"g",optional:true},{food:"Sel",qty:1,unit:"pincée",optional:false}],
    steps:["Faire revenir le poulet puis les oignons.","Ajouter cumin et gingembre.","Ajouter légumes en gros morceaux et couvrir d'eau.","Cuire à couvert 40 min à feu doux.","Servir avec de la semoule."],
    nutrition:{calories:420,protein:38,carbs:32,fat:14,fiber:6},
    tips:"Tajine sans harissa ni tomate ni citron confit. Le gingembre et cumin parfument à merveille.", isCustom:false
  },
  {
    id:"poulet-miel-romarin", name:"Poulet rôti au miel et romarin",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:10, cookTime:35, servings:2, difficulty:"facile", histamineScore:0,
    ingredients:[{food:"Poulet frais",qty:400,unit:"g",optional:false},{food:"Miel",qty:2,unit:"c.à.s",optional:false},{food:"Romarin",qty:2,unit:"branches",optional:false},{food:"Ail",qty:2,unit:"gousses",optional:false},{food:"Huile d'olive",qty:1,unit:"c.à.s",optional:false},{food:"Patate douce",qty:300,unit:"g",optional:true},{food:"Sel",qty:1,unit:"pincée",optional:false}],
    steps:["Préchauffer le four à 190°C.","Mélanger miel, huile, ail haché et romarin.","Badigeonner le poulet.","Enfourner avec patates douces 35 minutes."],
    nutrition:{calories:450,protein:36,carbs:32,fat:18,fiber:3},
    tips:"Le miel caramélise joliment sans risque histamine.", isCustom:false
  },
  {
    id:"poulet-coco-patate-douce", name:"Poulet coco et patate douce",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:10, cookTime:25, servings:2, difficulty:"facile", histamineScore:0,
    ingredients:[{food:"Poulet frais",qty:300,unit:"g",optional:false},{food:"Patate douce",qty:300,unit:"g",optional:false},{food:"Lait de coco",qty:200,unit:"ml",optional:false},{food:"Gingembre frais",qty:10,unit:"g",optional:false},{food:"Curcuma",qty:1,unit:"c.à.c",optional:false},{food:"Oignon",qty:1,unit:"pièce",optional:false},{food:"Huile d'olive",qty:1,unit:"c.à.s",optional:false},{food:"Sel",qty:1,unit:"pincée",optional:false}],
    steps:["Couper poulet et patate douce.","Faire revenir oignon et poulet 5 min.","Ajouter patate douce, gingembre, curcuma et lait de coco.","Mijoter 20 min."],
    nutrition:{calories:480,protein:34,carbs:36,fat:20,fiber:4},
    tips:"Plat réconfortant et anti-inflammatoire grâce au trio coco-gingembre-curcuma.", isCustom:false
  },
  {
    id:"boulettes-dinde-herbes", name:"Boulettes de dinde aux herbes",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:15, cookTime:20, servings:2, difficulty:"facile", histamineScore:0,
    ingredients:[{food:"Dinde fraîche",qty:400,unit:"g",optional:false},{food:"Oignon",qty:1,unit:"petit",optional:false},{food:"Persil frais",qty:2,unit:"c.à.s",optional:false},{food:"Basilic frais",qty:1,unit:"c.à.s",optional:false},{food:"Ail",qty:1,unit:"gousse",optional:false},{food:"Huile d'olive",qty:2,unit:"c.à.s",optional:false},{food:"Sel",qty:1,unit:"pincée",optional:false}],
    steps:["Hacher la dinde finement.","Mélanger avec oignon émincé, herbes, ail et sel.","Former des boulettes.","Cuire dans l'huile 10 min en les retournant."],
    nutrition:{calories:320,protein:38,carbs:4,fat:16,fiber:1},
    tips:"Boulettes maison plus sûres que le haché industriel. Servir avec riz ou purée.", isCustom:false
  },
  {
    id:"hachis-parmentier-dinde", name:"Hachis parmentier de dinde",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:20, cookTime:30, servings:4, difficulty:"moyen", histamineScore:0,
    ingredients:[{food:"Dinde fraîche",qty:400,unit:"g",optional:false},{food:"Pommes de terre",qty:600,unit:"g",optional:false},{food:"Oignon",qty:1,unit:"pièce",optional:false},{food:"Carotte",qty:2,unit:"pièces",optional:false},{food:"Lait frais",qty:100,unit:"ml",optional:false},{food:"Beurre",qty:30,unit:"g",optional:false},{food:"Thym",qty:1,unit:"branche",optional:true},{food:"Sel",qty:1,unit:"pincée",optional:false}],
    steps:["Cuire les pommes de terre 20 min, écraser en purée avec lait et beurre.","Hacher la dinde et la faire revenir avec oignon et carottes râpées.","Mettre la viande dans un plat, couvrir de purée.","Enfourner 20 min à 190°C."],
    nutrition:{calories:380,protein:32,carbs:38,fat:12,fiber:4},
    tips:"Classique réconfortant sans risque histamine. Consommer frais.", isCustom:false
  },
  {
    id:"brochettes-poulet-legumes", name:"Brochettes de poulet aux herbes",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:20, cookTime:15, servings:2, difficulty:"facile", histamineScore:0,
    ingredients:[{food:"Poulet frais",qty:300,unit:"g",optional:false},{food:"Courgette",qty:1,unit:"pièce",optional:false},{food:"Oignon",qty:1,unit:"pièce",optional:false},{food:"Huile d'olive",qty:2,unit:"c.à.s",optional:false},{food:"Thym",qty:1,unit:"c.à.c",optional:false},{food:"Romarin",qty:1,unit:"c.à.c",optional:false},{food:"Ail",qty:1,unit:"gousse",optional:false},{food:"Sel",qty:1,unit:"pincée",optional:false}],
    steps:["Couper le poulet en cubes.","Mariner 30 min dans huile, herbes et ail.","Enfiler sur des piques avec courgette et oignon.","Griller au four ou barbecue 12-15 min."],
    nutrition:{calories:340,protein:34,carbs:8,fat:18,fiber:2},
    tips:"Marinade à l'huile et herbes seulement — pas de citron, vinaigre ou moutarde.", isCustom:false
  },

  // ══════ NOUVEAUX PLATS — POISSON (4) ══════
  {
    id:"papillote-cabillaud-herbes", name:"Papillote de cabillaud aux herbes",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:10, cookTime:20, servings:2, difficulty:"facile", histamineScore:1,
    ingredients:[{food:"Cabillaud frais",qty:300,unit:"g",optional:false},{food:"Courgette",qty:1,unit:"pièce",optional:false},{food:"Carotte",qty:1,unit:"pièce",optional:false},{food:"Aneth frais",qty:2,unit:"c.à.s",optional:false},{food:"Huile d'olive",qty:1,unit:"c.à.s",optional:false},{food:"Sel",qty:1,unit:"pincée",optional:false}],
    steps:["Préchauffer le four à 200°C.","Couper les légumes en julienne fine.","Disposer les filets sur du papier sulfurisé avec les légumes.","Arroser d'huile, parsemer d'aneth, fermer les papillotes.","Enfourner 18-20 minutes."],
    nutrition:{calories:220,protein:34,carbs:8,fat:6,fiber:2},
    tips:"La papillote préserve la fraîcheur et concentre les saveurs.", isCustom:false
  },
  {
    id:"truite-amandes", name:"Filets de truite aux amandes",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:10, cookTime:15, servings:2, difficulty:"facile", histamineScore:1,
    ingredients:[{food:"Truite fraîche",qty:2,unit:"filets",optional:false},{food:"Amandes",qty:40,unit:"g",optional:false},{food:"Beurre",qty:20,unit:"g",optional:false},{food:"Persil frais",qty:1,unit:"c.à.s",optional:false},{food:"Riz",qty:150,unit:"g",optional:true},{food:"Sel",qty:1,unit:"pincée",optional:false}],
    steps:["Concasser les amandes.","Faire fondre le beurre et dorer les amandes 2 min.","Cuire les filets 4 min de chaque côté.","Napper de beurre aux amandes et parsemer de persil."],
    nutrition:{calories:380,protein:34,carbs:6,fat:24,fiber:2},
    tips:"Classique sans citron. La truite doit être ultra-fraîche.", isCustom:false
  },
  {
    id:"saumon-four-aneth", name:"Saumon au four, sauce aneth",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:10, cookTime:18, servings:2, difficulty:"facile", histamineScore:1,
    ingredients:[{food:"Saumon frais",qty:2,unit:"filets",optional:false},{food:"Aneth frais",qty:2,unit:"c.à.s",optional:false},{food:"Crème fraîche",qty:3,unit:"c.à.s",optional:false},{food:"Huile d'olive",qty:1,unit:"c.à.s",optional:false},{food:"Pommes de terre",qty:300,unit:"g",optional:true},{food:"Sel",qty:1,unit:"pincée",optional:false}],
    steps:["Préchauffer le four à 180°C.","Disposer les filets sur une plaque huilée.","Enfourner 15-18 min.","Mélanger crème fraîche et aneth pour la sauce.","Servir avec pommes de terre vapeur."],
    nutrition:{calories:380,protein:32,carbs:4,fat:26,fiber:0},
    tips:"Le saumon frais (jamais fumé) est modéré. Fraîcheur absolument critique.", isCustom:false
  },
  {
    id:"filet-bar-legumes", name:"Filet de bar aux petits légumes",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:15, cookTime:20, servings:2, difficulty:"moyen", histamineScore:1,
    ingredients:[{food:"Poisson très frais",qty:300,unit:"g",optional:false},{food:"Fenouil",qty:1,unit:"bulbe",optional:false},{food:"Courgette",qty:1,unit:"pièce",optional:false},{food:"Carotte",qty:1,unit:"pièce",optional:false},{food:"Huile d'olive",qty:2,unit:"c.à.s",optional:false},{food:"Thym",qty:1,unit:"branche",optional:false},{food:"Sel",qty:1,unit:"pincée",optional:false}],
    steps:["Préchauffer le four à 200°C.","Couper les légumes en petits dés.","Disposer dans un plat, arroser d'huile.","Poser les filets dessus avec le thym.","Enfourner 18-20 min."],
    nutrition:{calories:260,protein:32,carbs:10,fat:10,fiber:3},
    tips:"Le bar est un poisson blanc maigre bien toléré. Acheter ultra-frais.", isCustom:false
  },

  // ══════ NOUVEAUX PLATS — VÉGÉTARIENS (6) ══════
  {
    id:"poelee-legumes-thym", name:"Poêlée de légumes au thym",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:15, cookTime:20, servings:2, difficulty:"facile", histamineScore:0,
    ingredients:[{food:"Courgette",qty:2,unit:"pièces",optional:false},{food:"Carotte",qty:2,unit:"pièces",optional:false},{food:"Haricots verts",qty:150,unit:"g",optional:false},{food:"Oignon",qty:1,unit:"pièce",optional:false},{food:"Ail",qty:2,unit:"gousses",optional:false},{food:"Thym",qty:2,unit:"branches",optional:false},{food:"Huile d'olive",qty:2,unit:"c.à.s",optional:false},{food:"Sel",qty:1,unit:"pincée",optional:false}],
    steps:["Couper les légumes en morceaux réguliers.","Commencer par oignon et carottes 5 min.","Ajouter courgettes et haricots verts 10 min.","Ajouter ail et thym en fin de cuisson."],
    nutrition:{calories:150,protein:5,carbs:18,fat:7,fiber:6},
    tips:"Tous les légumes sont bien tolérés. Excellent en plat léger.", isCustom:false
  },
  {
    id:"gratin-courgettes-chevre", name:"Gratin de courgettes au chèvre frais",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:15, cookTime:25, servings:4, difficulty:"facile", histamineScore:1,
    ingredients:[{food:"Courgette",qty:4,unit:"pièces",optional:false},{food:"Chèvre frais",qty:150,unit:"g",optional:false},{food:"Crème fraîche",qty:100,unit:"ml",optional:false},{food:"Oeufs",qty:2,unit:"pièces",optional:false},{food:"Basilic frais",qty:10,unit:"feuilles",optional:false},{food:"Sel",qty:1,unit:"pincée",optional:false}],
    steps:["Préchauffer le four à 180°C.","Couper les courgettes en rondelles, les faire revenir 5 min.","Mélanger crème, oeufs, sel et basilic.","Disposer courgettes, émietter le chèvre, verser l'appareil.","Enfourner 25 min."],
    nutrition:{calories:220,protein:14,carbs:8,fat:15,fiber:2},
    tips:"Le chèvre frais (non affiné) est mieux toléré que les fromages vieillis.", isCustom:false
  },
  {
    id:"riz-saute-legumes", name:"Riz sauté aux légumes croquants",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:10, cookTime:15, servings:2, difficulty:"facile", histamineScore:0,
    ingredients:[{food:"Riz",qty:200,unit:"g",optional:false},{food:"Carotte",qty:1,unit:"pièce",optional:false},{food:"Petits pois",qty:100,unit:"g",optional:false},{food:"Oignon",qty:1,unit:"pièce",optional:false},{food:"Ail",qty:1,unit:"gousse",optional:false},{food:"Gingembre frais",qty:5,unit:"g",optional:false},{food:"Huile d'olive",qty:2,unit:"c.à.s",optional:false},{food:"Sel",qty:1,unit:"pincée",optional:false}],
    steps:["Cuire le riz et le laisser refroidir.","Couper la carotte en petits dés.","Faire sauter les légumes 5 min.","Ajouter le riz froid, gingembre et ail, sauter 3 min."],
    nutrition:{calories:380,protein:8,carbs:65,fat:10,fiber:4},
    tips:"Le riz sauté est un excellent moyen de varier les repas. Utiliser du riz cuit le jour même.", isCustom:false
  },
  {
    id:"quiche-courgettes-ricotta", name:"Quiche courgettes-ricotta sans pâte",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:15, cookTime:30, servings:4, difficulty:"facile", histamineScore:1,
    ingredients:[{food:"Courgette",qty:3,unit:"pièces",optional:false},{food:"Ricotta",qty:200,unit:"g",optional:false},{food:"Oeufs",qty:4,unit:"pièces",optional:false},{food:"Oignon",qty:1,unit:"pièce",optional:false},{food:"Basilic frais",qty:10,unit:"feuilles",optional:false},{food:"Sel",qty:1,unit:"pincée",optional:false}],
    steps:["Préchauffer le four à 180°C.","Râper les courgettes, les essorer.","Mélanger avec oeufs, ricotta, oignon et basilic.","Verser dans un moule huilé.","Enfourner 30 min."],
    nutrition:{calories:200,protein:16,carbs:6,fat:13,fiber:2},
    tips:"Sans pâte feuilletée. La ricotta remplace le gruyère.", isCustom:false
  },
  {
    id:"poelee-gnocchis-legumes", name:"Gnocchis maison, beurre et sauge",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:20, cookTime:15, servings:2, difficulty:"moyen", histamineScore:0,
    ingredients:[{food:"Pommes de terre",qty:400,unit:"g",optional:false},{food:"Farine (blé, riz, maïs)",qty:100,unit:"g",optional:false},{food:"Courgette",qty:1,unit:"pièce",optional:false},{food:"Beurre",qty:20,unit:"g",optional:false},{food:"Sauge",qty:6,unit:"feuilles",optional:false},{food:"Sel",qty:1,unit:"pincée",optional:false}],
    steps:["Cuire les pommes de terre, écraser et mélanger avec farine et sel.","Former des boudins et couper en morceaux.","Cuire dans l'eau bouillante (ils remontent).","Les poêler dans le beurre avec sauge et courgettes."],
    nutrition:{calories:380,protein:8,carbs:58,fat:14,fiber:4},
    tips:"Gnocchis maison sans oeuf. La sauge et le beurre créent un parfum irrésistible.", isCustom:false
  },
  {
    id:"gratin-pates-legumes", name:"Gratin de pâtes aux légumes",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:15, cookTime:25, servings:4, difficulty:"facile", histamineScore:1,
    ingredients:[{food:"Pâtes nature",qty:300,unit:"g",optional:false},{food:"Brocoli",qty:200,unit:"g",optional:false},{food:"Carotte",qty:2,unit:"pièces",optional:false},{food:"Crème fraîche",qty:150,unit:"ml",optional:false},{food:"Ricotta",qty:100,unit:"g",optional:false},{food:"Beurre",qty:15,unit:"g",optional:false},{food:"Sel",qty:1,unit:"pincée",optional:false}],
    steps:["Cuire pâtes al dente et légumes à la vapeur.","Mélanger crème et ricotta.","Mélanger pâtes, légumes et sauce dans un plat.","Parsemer de beurre et enfourner 20 min à 190°C."],
    nutrition:{calories:420,protein:16,carbs:52,fat:16,fiber:4},
    tips:"Gratin sans fromage affiné. Ricotta et crème donnent le crémeux.", isCustom:false
  },

  // ══════ NOUVEAUX PLATS — VIANDE (3) ══════
  {
    id:"filet-mignon-miel-thym", name:"Filet mignon de porc au miel et thym",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:10, cookTime:25, servings:4, difficulty:"facile", histamineScore:0,
    ingredients:[{food:"Porc frais",qty:500,unit:"g",optional:false},{food:"Miel",qty:2,unit:"c.à.s",optional:false},{food:"Thym",qty:3,unit:"branches",optional:false},{food:"Ail",qty:2,unit:"gousses",optional:false},{food:"Huile d'olive",qty:1,unit:"c.à.s",optional:false},{food:"Pommes de terre",qty:400,unit:"g",optional:true},{food:"Sel",qty:1,unit:"pincée",optional:false}],
    steps:["Préchauffer le four à 180°C.","Saisir le filet mignon 2 min de chaque côté.","Badigeonner de miel, ajouter thym et ail.","Enfourner 20-25 min."],
    nutrition:{calories:350,protein:38,carbs:14,fat:14,fiber:0},
    tips:"Le porc frais non transformé est bien toléré. Cuire le jour de l'achat.", isCustom:false
  },
  {
    id:"agneau-carottes-cumin", name:"Agneau mijoté aux carottes",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:15, cookTime:60, servings:4, difficulty:"moyen", histamineScore:0,
    ingredients:[{food:"Agneau frais",qty:500,unit:"g",optional:false},{food:"Carotte",qty:4,unit:"pièces",optional:false},{food:"Oignon",qty:2,unit:"pièces",optional:false},{food:"Cumin",qty:1,unit:"c.à.c",optional:false},{food:"Coriandre moulue",qty:1,unit:"c.à.c",optional:false},{food:"Huile d'olive",qty:2,unit:"c.à.s",optional:false},{food:"Eau",qty:300,unit:"ml",optional:false},{food:"Sel",qty:1,unit:"pincée",optional:false}],
    steps:["Saisir l'agneau dans l'huile.","Ajouter oignons, cumin et coriandre.","Ajouter carottes et eau.","Cuire à couvert 1h à feu très doux."],
    nutrition:{calories:420,protein:34,carbs:16,fat:24,fiber:4},
    tips:"L'agneau frais mijoté est très tendre. Cumin et coriandre aident la digestion.", isCustom:false
  },
  {
    id:"pates-poulet-brocoli", name:"Pâtes au poulet et brocoli",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:10, cookTime:18, servings:2, difficulty:"facile", histamineScore:0,
    ingredients:[{food:"Pâtes nature",qty:200,unit:"g",optional:false},{food:"Poulet frais",qty:200,unit:"g",optional:false},{food:"Brocoli",qty:200,unit:"g",optional:false},{food:"Ail",qty:2,unit:"gousses",optional:false},{food:"Huile d'olive",qty:2,unit:"c.à.s",optional:false},{food:"Sel",qty:1,unit:"pincée",optional:false}],
    steps:["Cuire pâtes et brocoli ensemble.","Faire dorer le poulet en lamelles 6 min.","Égoutter pâtes et brocoli, ajouter au poulet.","Ajouter ail pressé et huile d'olive."],
    nutrition:{calories:480,protein:34,carbs:54,fat:14,fiber:4},
    tips:"One-pot pâtes-brocoli rapide et nourrissant. Tout est bien toléré.", isCustom:false
  },

  // ══════ PLATS PRINCIPAUX SUPPLÉMENTAIRES (24) ══════
  {
    id:"poulet-roti-miel-thym", name:"Poulet rôti au miel et au thym",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:15, cookTime:45, servings:2, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Poulet frais",qty:400,unit:"g",optional:false},
      {food:"Miel",qty:2,unit:"c.à.s",optional:false},
      {food:"Thym",qty:4,unit:"branches",optional:false},
      {food:"Pommes de terre",qty:300,unit:"g",optional:false},
      {food:"Carotte",qty:150,unit:"g",optional:false},
      {food:"Huile d'olive",qty:2,unit:"c.à.s",optional:false},
      {food:"Ail",qty:2,unit:"gousses",optional:false}
    ],
    steps:["Préchauffer le four à 200°C. Couper les pommes de terre et les carottes en morceaux.","Disposer les légumes dans un plat, arroser d'huile d'olive et parsemer de thym.","Badigeonner le poulet avec le miel et le déposer sur les légumes. Ajouter l'ail écrasé.","Enfourner pendant 45 minutes en arrosant à mi-cuisson.","Servir bien doré avec les légumes rôtis."],
    nutrition:{calories:520,protein:38,carbs:48,fat:18,fiber:5},
    tips:"Utilisez du poulet frais acheté le jour même pour un taux d'histamine minimal.",
    isCustom:false
  },
  {
    id:"escalope-dinde-creme-champignons", name:"Escalope de dinde à la crème et aux champignons",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:10, cookTime:20, servings:2, difficulty:"facile", histamineScore:1,
    ingredients:[
      {food:"Dinde fraîche",qty:300,unit:"g",optional:false},
      {food:"Champignons",qty:200,unit:"g",optional:false},
      {food:"Crème fraîche",qty:100,unit:"ml",optional:false},
      {food:"Beurre",qty:20,unit:"g",optional:false},
      {food:"Persil frais",qty:1,unit:"bouquet",optional:false},
      {food:"Riz",qty:160,unit:"g",optional:false}
    ],
    steps:["Faire cuire le riz selon les instructions. Émincer les champignons.","Faire fondre le beurre et saisir les escalopes de dinde 4 minutes de chaque côté. Réserver.","Dans la même poêle, faire revenir les champignons 5 minutes à feu vif.","Ajouter la crème fraîche, laisser épaissir 3 minutes, puis remettre la dinde.","Parsemer de persil frais ciselé et servir avec le riz."],
    nutrition:{calories:510,protein:36,carbs:52,fat:16,fiber:2},
    tips:"Les champignons et la crème fraîche sont modérés en histamine : consommez-les bien frais.",
    isCustom:false
  },
  {
    id:"poulet-basquaise-sans-tomate", name:"Poulet basquaise revisité sans tomate",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:20, cookTime:40, servings:2, difficulty:"moyen", histamineScore:0,
    ingredients:[
      {food:"Poulet frais",qty:400,unit:"g",optional:false},
      {food:"Courgette",qty:200,unit:"g",optional:false},
      {food:"Carotte",qty:150,unit:"g",optional:false},
      {food:"Oignon",qty:1,unit:"pièce",optional:false},
      {food:"Ail",qty:2,unit:"gousses",optional:false},
      {food:"Thym",qty:2,unit:"branches",optional:false},
      {food:"Huile d'olive",qty:2,unit:"c.à.s",optional:false},
      {food:"Pommes de terre",qty:200,unit:"g",optional:false}
    ],
    steps:["Couper le poulet en morceaux. Détailler les légumes en gros dés. Émincer l'oignon.","Dans une cocotte, faire dorer le poulet dans l'huile d'olive sur toutes les faces. Réserver.","Faire revenir l'oignon et l'ail dans la cocotte, puis ajouter les carottes et les pommes de terre.","Remettre le poulet, ajouter les courgettes, le thym et un verre d'eau. Couvrir.","Laisser mijoter 35 minutes à feu doux jusqu'à ce que le poulet soit bien cuit."],
    nutrition:{calories:480,protein:36,carbs:38,fat:19,fiber:6},
    tips:"Cette version sans tomate ni poivron évite les aliments riches en histamine tout en gardant l'esprit du plat.",
    isCustom:false
  },
  {
    id:"emince-dinde-poireaux", name:"Émincé de dinde aux poireaux",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:10, cookTime:20, servings:2, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Dinde fraîche",qty:300,unit:"g",optional:false},
      {food:"Poireau",qty:250,unit:"g",optional:false},
      {food:"Beurre",qty:20,unit:"g",optional:false},
      {food:"Riz",qty:160,unit:"g",optional:false},
      {food:"Persil frais",qty:1,unit:"bouquet",optional:false},
      {food:"Ail",qty:1,unit:"gousse",optional:false}
    ],
    steps:["Émincer la dinde en fines lanières. Laver et couper les poireaux en rondelles.","Faire cuire le riz dans de l'eau bouillante salée selon les instructions.","Faire fondre le beurre dans une sauteuse, saisir la dinde 5 minutes à feu vif. Réserver.","Dans la même sauteuse, faire revenir les poireaux avec l'ail haché pendant 8 minutes.","Remettre la dinde, mélanger, parsemer de persil frais et servir avec le riz."],
    nutrition:{calories:440,protein:34,carbs:50,fat:10,fiber:4},
    tips:"Le poireau est un excellent légume pauvre en histamine et riche en prébiotiques.",
    isCustom:false
  },
  {
    id:"poulet-romarin-butternut", name:"Poulet au romarin et butternut rôti",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:15, cookTime:35, servings:2, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Poulet frais",qty:350,unit:"g",optional:false},
      {food:"Courge / butternut",qty:300,unit:"g",optional:false},
      {food:"Romarin",qty:3,unit:"branches",optional:false},
      {food:"Huile d'olive",qty:2,unit:"c.à.s",optional:false},
      {food:"Ail",qty:2,unit:"gousses",optional:false},
      {food:"Oignon",qty:1,unit:"pièce",optional:false}
    ],
    steps:["Préchauffer le four à 190°C. Éplucher et couper le butternut en cubes. Émincer l'oignon.","Disposer le butternut et l'oignon dans un plat, arroser d'huile d'olive, ajouter le romarin et l'ail.","Déposer les morceaux de poulet par-dessus et saler.","Enfourner 35 minutes en retournant à mi-cuisson.","Servir directement dans le plat, le butternut fondant accompagne parfaitement le poulet."],
    nutrition:{calories:460,protein:35,carbs:35,fat:18,fiber:5},
    tips:"Le butternut est très bien toléré dans un régime pauvre en histamine.",
    isCustom:false
  },
  {
    id:"dinde-curry-riz-brocoli", name:"Dinde au curry doux avec riz et brocoli",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:10, cookTime:25, servings:2, difficulty:"facile", histamineScore:1,
    ingredients:[
      {food:"Dinde fraîche",qty:300,unit:"g",optional:false},
      {food:"Curry",qty:1,unit:"c.à.c",optional:false},
      {food:"Lait de coco",qty:150,unit:"ml",optional:false},
      {food:"Brocoli",qty:200,unit:"g",optional:false},
      {food:"Riz",qty:160,unit:"g",optional:false},
      {food:"Oignon",qty:1,unit:"pièce",optional:false},
      {food:"Huile d'olive",qty:1,unit:"c.à.s",optional:false}
    ],
    steps:["Couper la dinde en morceaux. Séparer le brocoli en fleurettes. Émincer l'oignon.","Faire cuire le riz. En parallèle, cuire le brocoli à la vapeur 8 minutes.","Dans une poêle, faire revenir l'oignon dans l'huile, ajouter la dinde et la saisir 5 minutes.","Saupoudrer de curry, mélanger, puis verser le lait de coco. Laisser mijoter 10 minutes.","Servir la dinde au curry avec le riz et le brocoli vapeur."],
    nutrition:{calories:500,protein:36,carbs:52,fat:14,fiber:4},
    tips:"Le curry est modéré en histamine : utilisez-le en petite quantité et observez votre tolérance.",
    isCustom:false
  },
  {
    id:"poulet-grille-herbes-quinoa", name:"Poulet grillé aux herbes fraîches et quinoa",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:15, cookTime:20, servings:2, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Poulet frais",qty:300,unit:"g",optional:false},
      {food:"Quinoa",qty:150,unit:"g",optional:false},
      {food:"Basilic frais",qty:6,unit:"feuilles",optional:false},
      {food:"Persil frais",qty:1,unit:"bouquet",optional:false},
      {food:"Courgette",qty:150,unit:"g",optional:false},
      {food:"Huile d'olive",qty:2,unit:"c.à.s",optional:false},
      {food:"Ail",qty:1,unit:"gousse",optional:false}
    ],
    steps:["Rincer le quinoa et le cuire dans deux fois son volume d'eau pendant 15 minutes.","Aplatir les filets de poulet, les badigeonner d'huile d'olive et d'ail haché.","Griller le poulet dans une poêle bien chaude, 5 minutes de chaque côté.","Couper la courgette en demi-rondelles et la faire sauter 5 minutes dans la même poêle.","Mélanger le quinoa avec les herbes fraîches ciselées, servir avec le poulet et la courgette."],
    nutrition:{calories:470,protein:38,carbs:42,fat:15,fiber:5},
    tips:"Le quinoa est une excellente source de protéines végétales et convient parfaitement à ce régime.",
    isCustom:false
  },
  {
    id:"cabillaud-beurre-persil-carottes", name:"Cabillaud au beurre persillé et carottes glacées",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:10, cookTime:20, servings:2, difficulty:"facile", histamineScore:1,
    ingredients:[
      {food:"Cabillaud frais",qty:300,unit:"g",optional:false},
      {food:"Beurre",qty:30,unit:"g",optional:false},
      {food:"Persil frais",qty:1,unit:"bouquet",optional:false},
      {food:"Carotte",qty:250,unit:"g",optional:false},
      {food:"Pommes de terre",qty:200,unit:"g",optional:false},
      {food:"Ail",qty:1,unit:"gousse",optional:false}
    ],
    steps:["Cuire les carottes en rondelles et les pommes de terre en cubes à l'eau salée 15 minutes.","Préparer le beurre persillé en mélangeant le beurre ramolli avec le persil ciselé et l'ail haché.","Cuire le cabillaud à la poêle dans un peu de beurre, 4 minutes de chaque côté.","Égoutter les légumes et les glacer avec une noisette de beurre persillé.","Déposer le cabillaud sur les légumes et napper du reste de beurre persillé fondu."],
    nutrition:{calories:420,protein:32,carbs:35,fat:16,fiber:5},
    tips:"Le cabillaud frais est l'un des poissons les mieux tolérés. Achetez-le le jour même.",
    isCustom:false
  },
  {
    id:"truite-aneth-pommes-vapeur", name:"Truite à l'aneth et pommes de terre vapeur",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:10, cookTime:20, servings:2, difficulty:"facile", histamineScore:1,
    ingredients:[
      {food:"Truite fraîche",qty:300,unit:"g",optional:false},
      {food:"Aneth frais",qty:4,unit:"branches",optional:false},
      {food:"Pommes de terre",qty:300,unit:"g",optional:false},
      {food:"Beurre",qty:20,unit:"g",optional:false},
      {food:"Haricots verts",qty:150,unit:"g",optional:false}
    ],
    steps:["Faire cuire les pommes de terre à la vapeur pendant 20 minutes. Ajouter les haricots verts les 8 dernières minutes.","Déposer les filets de truite dans un plat allant au four, parsemer d'aneth et de noisettes de beurre.","Cuire au four à 180°C pendant 12 minutes.","Assaisonner les légumes avec un filet d'huile d'olive.","Servir la truite sur un lit de légumes vapeur, garnie d'aneth frais."],
    nutrition:{calories:410,protein:34,carbs:38,fat:13,fiber:5},
    tips:"La truite fraîche est excellente pour ce régime. Ne la conservez pas plus d'un jour au réfrigérateur.",
    isCustom:false
  },
  {
    id:"colin-papillote-courgettes", name:"Colin en papillote aux courgettes et au basilic",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:15, cookTime:20, servings:2, difficulty:"facile", histamineScore:1,
    ingredients:[
      {food:"Colin frais",qty:300,unit:"g",optional:false},
      {food:"Courgette",qty:200,unit:"g",optional:false},
      {food:"Basilic frais",qty:8,unit:"feuilles",optional:false},
      {food:"Huile d'olive",qty:2,unit:"c.à.s",optional:false},
      {food:"Oignon",qty:1,unit:"pièce",optional:false},
      {food:"Riz",qty:160,unit:"g",optional:false}
    ],
    steps:["Préchauffer le four à 200°C. Couper la courgette en fines rondelles et émincer l'oignon.","Découper deux grandes feuilles de papier cuisson. Répartir les courgettes et l'oignon au centre.","Déposer les filets de colin par-dessus, arroser d'huile d'olive et ajouter le basilic.","Fermer les papillotes hermétiquement et enfourner 20 minutes.","Servir les papillotes avec le riz cuit, ouvrir à table pour profiter des arômes."],
    nutrition:{calories:400,protein:30,carbs:48,fat:10,fiber:3},
    tips:"La cuisson en papillote préserve la fraîcheur du poisson et concentre les saveurs.",
    isCustom:false
  },
  {
    id:"sole-meuniere-asperges", name:"Filets de sole aux asperges et beurre noisette",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:10, cookTime:15, servings:2, difficulty:"moyen", histamineScore:1,
    ingredients:[
      {food:"Sole fraîche",qty:300,unit:"g",optional:false},
      {food:"Asperges",qty:200,unit:"g",optional:false},
      {food:"Beurre",qty:30,unit:"g",optional:false},
      {food:"Persil frais",qty:1,unit:"bouquet",optional:false},
      {food:"Pommes de terre",qty:250,unit:"g",optional:false}
    ],
    steps:["Cuire les pommes de terre à l'eau salée 15 minutes. Cuire les asperges à la vapeur 8 minutes.","Fariner légèrement les filets de sole. Les cuire dans la moitié du beurre, 2 minutes par face.","Retirer le poisson, ajouter le reste du beurre et laisser mousser jusqu'à coloration noisette.","Ajouter le persil ciselé au beurre noisette et en napper les filets de sole.","Dresser les filets avec les asperges et les pommes de terre écrasées."],
    nutrition:{calories:390,protein:30,carbs:32,fat:16,fiber:4},
    tips:"La sole est un poisson blanc très maigre et bien adapté aux régimes pauvres en histamine.",
    isCustom:false
  },
  {
    id:"saumon-frais-gingembre-riz", name:"Pavé de saumon frais au gingembre et riz parfumé",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:10, cookTime:20, servings:2, difficulty:"facile", histamineScore:1,
    ingredients:[
      {food:"Saumon frais",qty:300,unit:"g",optional:false},
      {food:"Gingembre frais",qty:15,unit:"g",optional:false},
      {food:"Riz",qty:160,unit:"g",optional:false},
      {food:"Brocoli",qty:200,unit:"g",optional:false},
      {food:"Huile d'olive",qty:1,unit:"c.à.s",optional:false},
      {food:"Coriandre fraîche",qty:1,unit:"bouquet",optional:false}
    ],
    steps:["Cuire le riz selon les instructions. Cuire le brocoli à la vapeur 8 minutes.","Râper le gingembre frais. Badigeonner les pavés de saumon d'huile d'olive et de gingembre.","Cuire le saumon à la poêle, peau vers le bas, 4 minutes, puis retourner et cuire 3 minutes.","Mélanger la coriandre ciselée dans le riz chaud.","Servir le saumon sur le riz parfumé avec le brocoli vapeur."],
    nutrition:{calories:510,protein:36,carbs:50,fat:16,fiber:3},
    tips:"Le saumon frais est modéré en histamine. Achetez-le ultra frais et consommez-le le jour de l'achat.",
    isCustom:false
  },
  {
    id:"quinoa-legumes-rotis-curcuma", name:"Bol de quinoa aux légumes rôtis et curcuma",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:15, cookTime:30, servings:2, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Quinoa",qty:160,unit:"g",optional:false},
      {food:"Courge / butternut",qty:200,unit:"g",optional:false},
      {food:"Carotte",qty:150,unit:"g",optional:false},
      {food:"Brocoli",qty:150,unit:"g",optional:false},
      {food:"Curcuma",qty:1,unit:"c.à.c",optional:false},
      {food:"Huile d'olive",qty:2,unit:"c.à.s",optional:false},
      {food:"Cumin",qty:1,unit:"c.à.c",optional:false}
    ],
    steps:["Préchauffer le four à 200°C. Couper le butternut et les carottes en cubes. Séparer le brocoli en fleurettes.","Mélanger les légumes avec l'huile d'olive, le curcuma et le cumin. Disposer sur une plaque.","Enfourner les légumes 25 minutes en remuant à mi-cuisson.","Pendant ce temps, cuire le quinoa dans deux fois son volume d'eau pendant 15 minutes.","Répartir le quinoa dans les bols, disposer les légumes rôtis par-dessus."],
    nutrition:{calories:380,protein:14,carbs:55,fat:12,fiber:8},
    tips:"Le curcuma est un puissant anti-inflammatoire naturel et aide à stabiliser les mastocytes.",
    isCustom:false
  },
  {
    id:"pates-petits-pois-ricotta-basilic", name:"Pâtes aux petits pois, ricotta et basilic",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:10, cookTime:15, servings:2, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Pâtes nature",qty:200,unit:"g",optional:false},
      {food:"Petits pois",qty:200,unit:"g",optional:false},
      {food:"Ricotta",qty:100,unit:"g",optional:false},
      {food:"Basilic frais",qty:10,unit:"feuilles",optional:false},
      {food:"Huile d'olive",qty:1,unit:"c.à.s",optional:false},
      {food:"Ail",qty:1,unit:"gousse",optional:false}
    ],
    steps:["Faire cuire les pâtes dans un grand volume d'eau salée selon les instructions.","Cuire les petits pois à l'eau bouillante 5 minutes puis les égoutter.","Dans une poêle, chauffer l'huile d'olive avec l'ail haché 1 minute.","Égoutter les pâtes, les verser dans la poêle avec les petits pois. Ajouter la ricotta en morceaux.","Mélanger délicatement, parsemer de basilic frais et servir aussitôt."],
    nutrition:{calories:440,protein:18,carbs:62,fat:13,fiber:6},
    tips:"Les petits pois frais ou surgelés sont préférables aux conserves pour limiter l'histamine.",
    isCustom:false
  },
  {
    id:"semoule-legumes-epices-douces", name:"Semoule aux légumes et épices douces",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:15, cookTime:25, servings:2, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Semoule / couscous",qty:200,unit:"g",optional:false},
      {food:"Courgette",qty:150,unit:"g",optional:false},
      {food:"Carotte",qty:150,unit:"g",optional:false},
      {food:"Navet",qty:100,unit:"g",optional:false},
      {food:"Cumin",qty:1,unit:"c.à.c",optional:false},
      {food:"Huile d'olive",qty:2,unit:"c.à.s",optional:false},
      {food:"Oignon",qty:1,unit:"pièce",optional:false}
    ],
    steps:["Couper les carottes, navets et courgettes en morceaux. Émincer l'oignon.","Faire revenir l'oignon dans l'huile, ajouter les carottes et navets avec le cumin. Mouiller d'eau et cuire 15 minutes.","Ajouter les courgettes et poursuivre la cuisson 10 minutes.","Préparer la semoule en la recouvrant d'eau bouillante salée, couvrir 5 minutes puis égrener à la fourchette.","Servir la semoule avec les légumes et leur bouillon parfumé."],
    nutrition:{calories:390,protein:10,carbs:65,fat:10,fiber:7},
    tips:"Plat inspiré du couscous traditionnel, naturellement pauvre en histamine sans les pois chiches en conserve.",
    isCustom:false
  },
  {
    id:"galettes-sarrasin-legumes", name:"Galettes de sarrasin garnies aux légumes",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:20, cookTime:20, servings:2, difficulty:"moyen", histamineScore:1,
    ingredients:[
      {food:"Sarrasin",qty:120,unit:"g",optional:false},
      {food:"Oeufs",qty:1,unit:"pièce",optional:false},
      {food:"Champignons",qty:150,unit:"g",optional:false},
      {food:"Poireau",qty:150,unit:"g",optional:false},
      {food:"Beurre",qty:20,unit:"g",optional:false},
      {food:"Persil frais",qty:1,unit:"bouquet",optional:false}
    ],
    steps:["Préparer la pâte à galettes : mélanger la farine de sarrasin avec l'oeuf et de l'eau jusqu'à une pâte lisse. Laisser reposer 15 minutes.","Émincer les champignons et le poireau. Les faire revenir dans le beurre pendant 10 minutes.","Cuire les galettes une par une dans une poêle chaude légèrement beurrée, 2 minutes de chaque côté.","Garnir chaque galette de la poêlée de légumes et replier les bords.","Parsemer de persil frais et servir bien chaud."],
    nutrition:{calories:340,protein:14,carbs:45,fat:12,fiber:5},
    tips:"En cas de sensibilité aux champignons, les remplacer par des courgettes.",
    isCustom:false
  },
  {
    id:"boeuf-carottes-thym", name:"Boeuf aux carottes et au thym",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:15, cookTime:90, servings:2, difficulty:"moyen", histamineScore:0,
    ingredients:[
      {food:"Boeuf frais",qty:350,unit:"g",optional:false},
      {food:"Carotte",qty:300,unit:"g",optional:false},
      {food:"Oignon",qty:1,unit:"pièce",optional:false},
      {food:"Thym",qty:3,unit:"branches",optional:false},
      {food:"Pommes de terre",qty:250,unit:"g",optional:false},
      {food:"Huile d'olive",qty:2,unit:"c.à.s",optional:false},
      {food:"Ail",qty:2,unit:"gousses",optional:false}
    ],
    steps:["Couper le boeuf en gros cubes. Éplucher et trancher les carottes. Couper les pommes de terre en quartiers.","Faire dorer le boeuf dans l'huile d'olive dans une cocotte à feu vif. Réserver.","Faire revenir l'oignon émincé et l'ail, puis remettre le boeuf. Mouiller à hauteur d'eau.","Ajouter les carottes, le thym et saler. Couvrir et laisser mijoter 1 heure à feu doux.","Ajouter les pommes de terre, poursuivre la cuisson 30 minutes jusqu'à ce que tout soit tendre."],
    nutrition:{calories:520,protein:38,carbs:42,fat:20,fiber:6},
    tips:"Utilisez du boeuf frais du boucher et non de la viande préemballée pour limiter la formation d'histamine.",
    isCustom:false
  },
  {
    id:"agneau-cumin-patate-douce", name:"Agneau au cumin et purée de patate douce",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:15, cookTime:30, servings:2, difficulty:"moyen", histamineScore:0,
    ingredients:[
      {food:"Agneau frais",qty:300,unit:"g",optional:false},
      {food:"Patate douce",qty:300,unit:"g",optional:false},
      {food:"Cumin",qty:1,unit:"c.à.c",optional:false},
      {food:"Beurre",qty:20,unit:"g",optional:false},
      {food:"Haricots verts",qty:150,unit:"g",optional:false},
      {food:"Ail",qty:1,unit:"gousse",optional:false},
      {food:"Romarin",qty:2,unit:"branches",optional:false}
    ],
    steps:["Éplucher et cuire la patate douce à l'eau 15 minutes.","Frotter l'agneau avec le cumin, l'ail haché et le romarin. Laisser reposer 10 minutes.","Cuire les haricots verts à la vapeur 8 minutes.","Griller l'agneau à la poêle bien chaude, 4 minutes de chaque côté.","Écraser la patate douce avec le beurre. Servir avec l'agneau et les haricots verts."],
    nutrition:{calories:530,protein:34,carbs:42,fat:22,fiber:6},
    tips:"L'agneau frais est très bien toléré. Préférez une cuisson rapide pour préserver la fraîcheur.",
    isCustom:false
  },
  {
    id:"steak-boeuf-ecrase-pommes-terre", name:"Steak de boeuf et écrasé de pommes de terre au persil",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:10, cookTime:20, servings:2, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Boeuf frais",qty:300,unit:"g",optional:false},
      {food:"Pommes de terre",qty:350,unit:"g",optional:false},
      {food:"Beurre",qty:25,unit:"g",optional:false},
      {food:"Persil frais",qty:1,unit:"bouquet",optional:false},
      {food:"Courgette",qty:150,unit:"g",optional:false},
      {food:"Huile d'olive",qty:1,unit:"c.à.s",optional:false}
    ],
    steps:["Cuire les pommes de terre à l'eau salée 15 minutes. Couper la courgette en rondelles.","Écraser grossièrement les pommes de terre à la fourchette avec le beurre et le persil ciselé.","Faire griller les rondelles de courgette dans l'huile d'olive 3 minutes de chaque côté.","Cuire les steaks dans une poêle très chaude, 3 minutes par face.","Dresser l'assiette avec l'écrasé de pommes de terre, les courgettes grillées et le steak."],
    nutrition:{calories:500,protein:36,carbs:38,fat:22,fiber:4},
    tips:"Sortez la viande du réfrigérateur 15 minutes avant cuisson pour une cuisson homogène.",
    isCustom:false
  },
  {
    id:"navarin-agneau-printanier", name:"Navarin d'agneau printanier",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:20, cookTime:60, servings:2, difficulty:"moyen", histamineScore:0,
    ingredients:[
      {food:"Agneau frais",qty:350,unit:"g",optional:false},
      {food:"Navet",qty:150,unit:"g",optional:false},
      {food:"Carotte",qty:150,unit:"g",optional:false},
      {food:"Petits pois",qty:100,unit:"g",optional:false},
      {food:"Pommes de terre",qty:200,unit:"g",optional:false},
      {food:"Oignon",qty:1,unit:"pièce",optional:false},
      {food:"Thym",qty:2,unit:"branches",optional:false},
      {food:"Huile d'olive",qty:2,unit:"c.à.s",optional:false}
    ],
    steps:["Couper l'agneau en morceaux. Le faire dorer dans l'huile d'olive dans une cocotte. Réserver.","Faire revenir l'oignon émincé, ajouter les carottes et navets en morceaux. Cuire 3 minutes.","Remettre l'agneau, mouiller d'eau à hauteur, ajouter le thym. Porter à frémissement.","Couvrir et laisser mijoter 40 minutes. Ajouter les pommes de terre en morceaux.","Après 15 minutes, ajouter les petits pois et cuire encore 5 minutes."],
    nutrition:{calories:540,protein:36,carbs:40,fat:24,fiber:7},
    tips:"Préparez ce plat avec de l'agneau frais du jour pour une meilleure tolérance.",
    isCustom:false
  },
  {
    id:"boeuf-gingembre-haricots-verts", name:"Sauté de boeuf au gingembre et haricots verts",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:15, cookTime:15, servings:2, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Boeuf frais",qty:300,unit:"g",optional:false},
      {food:"Haricots verts",qty:250,unit:"g",optional:false},
      {food:"Gingembre frais",qty:15,unit:"g",optional:false},
      {food:"Ail",qty:2,unit:"gousses",optional:false},
      {food:"Riz",qty:160,unit:"g",optional:false},
      {food:"Huile d'olive",qty:2,unit:"c.à.s",optional:false},
      {food:"Coriandre fraîche",qty:1,unit:"bouquet",optional:false}
    ],
    steps:["Émincer le boeuf en fines lamelles. Râper le gingembre et hacher l'ail.","Cuire le riz et les haricots verts séparément.","Saisir le boeuf dans l'huile d'olive très chaude pendant 2 minutes. Réserver.","Faire sauter les haricots verts égouttés avec le gingembre et l'ail 3 minutes.","Remettre le boeuf, mélanger, garnir de coriandre fraîche et servir avec le riz."],
    nutrition:{calories:490,protein:36,carbs:50,fat:14,fiber:5},
    tips:"Le gingembre frais est un antihistaminique naturel qui aide à réduire la libération d'histamine.",
    isCustom:false
  },
  {
    id:"poulet-fenouil-braise", name:"Poulet braisé au fenouil et au thym",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:15, cookTime:40, servings:2, difficulty:"moyen", histamineScore:0,
    ingredients:[
      {food:"Poulet frais",qty:400,unit:"g",optional:false},
      {food:"Fenouil",qty:250,unit:"g",optional:false},
      {food:"Thym",qty:3,unit:"branches",optional:false},
      {food:"Oignon",qty:1,unit:"pièce",optional:false},
      {food:"Beurre",qty:20,unit:"g",optional:false},
      {food:"Pommes de terre",qty:250,unit:"g",optional:false}
    ],
    steps:["Couper le fenouil en quartiers épais. Émincer l'oignon. Couper les pommes de terre en morceaux.","Faire dorer les morceaux de poulet dans le beurre dans une cocotte. Réserver.","Faire fondre l'oignon et le fenouil dans la cocotte 5 minutes à feu moyen.","Remettre le poulet, ajouter les pommes de terre, le thym et un verre d'eau. Couvrir.","Laisser braiser 35 minutes à feu doux. Le fenouil doit être fondant et le poulet bien cuit."],
    nutrition:{calories:470,protein:36,carbs:36,fat:18,fiber:5},
    tips:"Le fenouil braisé développe une douceur anisée qui se marie parfaitement avec le poulet.",
    isCustom:false
  },
  {
    id:"one-pot-pates-dinde-courgettes", name:"One-pot pâtes à la dinde et courgettes",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:10, cookTime:20, servings:2, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Pâtes nature",qty:200,unit:"g",optional:false},
      {food:"Dinde fraîche",qty:200,unit:"g",optional:false},
      {food:"Courgette",qty:200,unit:"g",optional:false},
      {food:"Ail",qty:1,unit:"gousse",optional:false},
      {food:"Huile d'olive",qty:2,unit:"c.à.s",optional:false},
      {food:"Basilic frais",qty:8,unit:"feuilles",optional:false}
    ],
    steps:["Couper la dinde en petits dés et la courgette en demi-rondelles.","Dans une grande casserole, faire revenir la dinde dans l'huile d'olive avec l'ail haché 5 minutes.","Ajouter les pâtes, la courgette et couvrir d'eau à hauteur. Saler.","Cuire à feu moyen en remuant régulièrement jusqu'à absorption de l'eau, environ 12 minutes.","Ajouter le basilic ciselé, mélanger et servir immédiatement."],
    nutrition:{calories:460,protein:30,carbs:58,fat:11,fiber:3},
    tips:"Le one-pot est idéal pour un repas rapide en semaine. Un seul ustensile à laver !",
    isCustom:false
  },
  {
    id:"wok-poulet-brocoli-coco", name:"Wok de poulet au brocoli et lait de coco",
    category:"plat", mealType:["dejeuner","diner"],
    prepTime:10, cookTime:15, servings:2, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Poulet frais",qty:300,unit:"g",optional:false},
      {food:"Brocoli",qty:250,unit:"g",optional:false},
      {food:"Lait de coco",qty:150,unit:"ml",optional:false},
      {food:"Gingembre frais",qty:10,unit:"g",optional:false},
      {food:"Riz",qty:160,unit:"g",optional:false},
      {food:"Huile d'olive",qty:1,unit:"c.à.s",optional:false},
      {food:"Coriandre fraîche",qty:1,unit:"bouquet",optional:false}
    ],
    steps:["Couper le poulet en lanières. Séparer le brocoli en petites fleurettes. Râper le gingembre.","Faire cuire le riz. Pendant ce temps, saisir le poulet dans l'huile d'olive à feu vif 4 minutes.","Ajouter le brocoli et le gingembre, cuire 3 minutes en remuant.","Verser le lait de coco, baisser le feu et laisser mijoter 5 minutes.","Garnir de coriandre fraîche et servir avec le riz."],
    nutrition:{calories:520,protein:36,carbs:48,fat:20,fiber:4},
    tips:"La cuisson rapide au wok préserve les nutriments des légumes et limite la formation d'histamine dans le poulet.",
    isCustom:false
  },

  // ══════ ACCOMPAGNEMENTS (10 nouveaux) ══════
  {
    id:"gratin-dauphinois-leger", name:"Gratin dauphinois allégé",
    category:"accompagnement", mealType:["dejeuner","diner"],
    prepTime:15, cookTime:40, servings:4, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Pommes de terre",qty:800,unit:"g",optional:false},
      {food:"Lait frais",qty:300,unit:"ml",optional:false},
      {food:"Beurre",qty:20,unit:"g",optional:false},
      {food:"Ail",qty:1,unit:"gousse",optional:false},
      {food:"Noix de muscade",qty:1,unit:"pincée",optional:true},
      {food:"Sel",qty:1,unit:"pincée",optional:false}
    ],
    steps:["Préchauffer le four à 180°C. Frotter un plat à gratin avec l'ail et le beurre.","Éplucher et couper les pommes de terre en rondelles fines.","Les disposer en couches dans le plat.","Verser le lait chaud assaisonné de sel et muscade.","Enfourner 40 minutes jusqu'à ce que le dessus soit doré."],
    nutrition:{calories:200,protein:5,carbs:34,fat:5,fiber:3},
    tips:"Version sans fromage affiné ni crème, tout aussi fondante. Le lait frais suffit pour un gratin onctueux.",
    isCustom:false
  },
  {
    id:"puree-patate-douce", name:"Purée de patate douce au cumin",
    category:"accompagnement", mealType:["dejeuner","diner"],
    prepTime:10, cookTime:20, servings:4, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Patate douce",qty:600,unit:"g",optional:false},
      {food:"Beurre",qty:20,unit:"g",optional:false},
      {food:"Cumin",qty:1,unit:"c.à.c",optional:false},
      {food:"Sel",qty:1,unit:"pincée",optional:false}
    ],
    steps:["Éplucher et couper les patates douces en cubes.","Les cuire dans l'eau bouillante salée 18 minutes.","Égoutter et écraser au presse-purée avec le beurre.","Ajouter le cumin et bien mélanger."],
    nutrition:{calories:170,protein:3,carbs:32,fat:4,fiber:4},
    tips:"La patate douce est naturellement sucrée et très bien tolérée. Le cumin relève agréablement la saveur.",
    isCustom:false
  },
  {
    id:"haricots-verts-ail-persil", name:"Haricots verts sautés ail et persil",
    category:"accompagnement", mealType:["dejeuner","diner"],
    prepTime:5, cookTime:12, servings:4, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Haricots verts",qty:500,unit:"g",optional:false},
      {food:"Ail",qty:2,unit:"gousses",optional:false},
      {food:"Huile d'olive",qty:2,unit:"c.à.s",optional:false},
      {food:"Persil frais",qty:2,unit:"c.à.s",optional:false},
      {food:"Sel",qty:1,unit:"pincée",optional:false}
    ],
    steps:["Cuire les haricots verts à la vapeur ou à l'eau bouillante 8 minutes.","Faire chauffer l'huile d'olive dans une poêle avec l'ail émincé.","Ajouter les haricots égouttés et faire sauter 3 minutes.","Parsemer de persil ciselé et servir."],
    nutrition:{calories:90,protein:3,carbs:8,fat:6,fiber:4},
    tips:"Les haricots verts sont un accompagnement classique très bien toléré. Frais ou surgelés conviennent.",
    isCustom:false
  },
  {
    id:"carottes-glacees-miel", name:"Carottes glacées au miel et thym",
    category:"accompagnement", mealType:["dejeuner","diner"],
    prepTime:10, cookTime:20, servings:4, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Carotte",qty:600,unit:"g",optional:false},
      {food:"Miel",qty:2,unit:"c.à.s",optional:false},
      {food:"Beurre",qty:15,unit:"g",optional:false},
      {food:"Thym",qty:2,unit:"branches",optional:false},
      {food:"Sel",qty:1,unit:"pincée",optional:false}
    ],
    steps:["Éplucher les carottes et les couper en bâtonnets.","Les faire revenir dans le beurre fondu 3 minutes.","Ajouter le miel, le thym et un verre d'eau.","Cuire à couvert 15 minutes puis à découvert pour glacer."],
    nutrition:{calories:110,protein:2,carbs:20,fat:3,fiber:4},
    tips:"Le glaçage au miel est une alternative sûre au sucre raffiné. Les carottes sont très bien tolérées.",
    isCustom:false
  },
  {
    id:"quinoa-herbes-fraiches", name:"Quinoa aux herbes fraîches",
    category:"accompagnement", mealType:["dejeuner","diner"],
    prepTime:5, cookTime:15, servings:4, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Quinoa",qty:200,unit:"g",optional:false},
      {food:"Persil frais",qty:2,unit:"c.à.s",optional:false},
      {food:"Menthe fraîche",qty:1,unit:"c.à.s",optional:false},
      {food:"Huile d'olive",qty:2,unit:"c.à.s",optional:false},
      {food:"Sel",qty:1,unit:"pincée",optional:false}
    ],
    steps:["Rincer le quinoa à l'eau froide.","Le cuire dans deux fois son volume d'eau salée pendant 12 minutes.","Égoutter et laisser tiédir.","Mélanger avec les herbes ciselées et l'huile d'olive."],
    nutrition:{calories:230,protein:8,carbs:35,fat:7,fiber:4},
    tips:"Le quinoa est riche en protéines végétales et totalement sûr. Excellent substitut au riz.",
    isCustom:false
  },
  {
    id:"poêlee-courgettes-basilic", name:"Poêlée de courgettes au basilic",
    category:"accompagnement", mealType:["dejeuner","diner"],
    prepTime:5, cookTime:10, servings:4, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Courgette",qty:4,unit:"pièces",optional:false},
      {food:"Ail",qty:1,unit:"gousse",optional:false},
      {food:"Basilic frais",qty:10,unit:"feuilles",optional:false},
      {food:"Huile d'olive",qty:2,unit:"c.à.s",optional:false},
      {food:"Sel",qty:1,unit:"pincée",optional:false}
    ],
    steps:["Couper les courgettes en demi-rondelles.","Chauffer l'huile d'olive dans une large poêle.","Faire sauter les courgettes avec l'ail émincé 8 minutes à feu vif.","Ajouter le basilic ciselé hors du feu et servir."],
    nutrition:{calories:70,protein:2,carbs:5,fat:5,fiber:2},
    tips:"Cuisson rapide à feu vif pour garder les courgettes croquantes. Le basilic apporte fraîcheur et saveur.",
    isCustom:false
  },
  {
    id:"ecrase-petits-pois-menthe", name:"Écrasé de petits pois à la menthe",
    category:"accompagnement", mealType:["dejeuner","diner"],
    prepTime:5, cookTime:10, servings:4, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Petits pois",qty:500,unit:"g",optional:false},
      {food:"Menthe fraîche",qty:8,unit:"feuilles",optional:false},
      {food:"Beurre",qty:15,unit:"g",optional:false},
      {food:"Sel",qty:1,unit:"pincée",optional:false}
    ],
    steps:["Cuire les petits pois dans l'eau bouillante salée 8 minutes.","Égoutter en gardant un peu d'eau de cuisson.","Écraser grossièrement à la fourchette avec le beurre.","Ajouter la menthe ciselée et servir."],
    nutrition:{calories:120,protein:8,carbs:14,fat:4,fiber:5},
    tips:"Les petits pois sont bien tolérés, frais ou surgelés. La menthe apporte une touche très fraîche.",
    isCustom:false
  },
  {
    id:"fenouil-braise-huile-olive", name:"Fenouil braisé à l'huile d'olive",
    category:"accompagnement", mealType:["dejeuner","diner"],
    prepTime:5, cookTime:25, servings:4, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Fenouil",qty:3,unit:"bulbes",optional:false},
      {food:"Huile d'olive",qty:3,unit:"c.à.s",optional:false},
      {food:"Ail",qty:1,unit:"gousse",optional:false},
      {food:"Eau",qty:100,unit:"ml",optional:false},
      {food:"Sel",qty:1,unit:"pincée",optional:false}
    ],
    steps:["Couper les fenouils en quartiers.","Les faire revenir dans l'huile d'olive 5 minutes avec l'ail.","Ajouter l'eau, saler et couvrir.","Laisser braiser 20 minutes à feu doux jusqu'à ce qu'ils soient fondants."],
    nutrition:{calories:80,protein:2,carbs:6,fat:6,fiber:3},
    tips:"Le fenouil aide à la digestion et est très bien toléré. Il devient doux et fondant à la cuisson.",
    isCustom:false
  },
  {
    id:"gratin-chou-fleur-ricotta", name:"Gratin de chou-fleur à la ricotta",
    category:"accompagnement", mealType:["dejeuner","diner"],
    prepTime:10, cookTime:25, servings:4, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Chou-fleur",qty:600,unit:"g",optional:false},
      {food:"Ricotta",qty:150,unit:"g",optional:false},
      {food:"Lait frais",qty:100,unit:"ml",optional:false},
      {food:"Noix de muscade",qty:1,unit:"pincée",optional:true},
      {food:"Sel",qty:1,unit:"pincée",optional:false}
    ],
    steps:["Préchauffer le four à 190°C.","Détailler le chou-fleur en bouquets et le cuire à la vapeur 10 minutes.","Mélanger la ricotta avec le lait, le sel et la muscade.","Disposer le chou-fleur dans un plat, napper de sauce.","Enfourner 20 minutes."],
    nutrition:{calories:130,protein:10,carbs:10,fat:6,fiber:3},
    tips:"La ricotta remplace parfaitement le gruyère dans les gratins. Fromage frais non affiné, bien toléré.",
    isCustom:false
  },
  {
    id:"semoule-beurre-raisins", name:"Semoule au beurre et petits pois",
    category:"accompagnement", mealType:["dejeuner","diner"],
    prepTime:5, cookTime:10, servings:4, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Semoule / couscous",qty:250,unit:"g",optional:false},
      {food:"Petits pois",qty:150,unit:"g",optional:false},
      {food:"Beurre",qty:20,unit:"g",optional:false},
      {food:"Eau",qty:300,unit:"ml",optional:false},
      {food:"Sel",qty:1,unit:"pincée",optional:false}
    ],
    steps:["Cuire les petits pois 5 minutes dans l'eau bouillante, égoutter en réservant l'eau.","Porter l'eau réservée à ébullition, verser sur la semoule, couvrir 5 minutes.","Égrener à la fourchette avec le beurre.","Incorporer les petits pois et servir."],
    nutrition:{calories:270,protein:9,carbs:48,fat:5,fiber:3},
    tips:"La semoule est un accompagnement express et polyvalent, bien toléré nature.",
    isCustom:false
  },

  // ══════ DESSERTS (10 nouveaux) ══════
  {
    id:"gateau-pomme-amande", name:"Gâteau moelleux pomme-amande",
    category:"dessert", mealType:["dejeuner","diner","gouter"],
    prepTime:15, cookTime:35, servings:6, difficulty:"facile", histamineScore:1,
    ingredients:[
      {food:"Pomme",qty:3,unit:"pièces",optional:false},
      {food:"Farine (blé, riz, maïs)",qty:150,unit:"g",optional:false},
      {food:"Oeufs",qty:2,unit:"pièces",optional:false},
      {food:"Sucre blanc",qty:80,unit:"g",optional:false},
      {food:"Beurre",qty:80,unit:"g",optional:false},
      {food:"Amandes",qty:40,unit:"g",optional:true}
    ],
    steps:["Préchauffer le four à 180°C. Beurrer un moule.","Battre les oeufs avec le sucre, ajouter le beurre fondu puis la farine.","Éplucher et couper les pommes en lamelles.","Verser la pâte dans le moule, disposer les pommes dessus et parsemer d'amandes effilées.","Enfourner 35 minutes."],
    nutrition:{calories:290,protein:5,carbs:36,fat:14,fiber:2},
    tips:"Un classique de la pâtisserie maison. Les oeufs sont modérés, à adapter selon tolérance.",
    isCustom:false
  },
  {
    id:"panna-cotta-coco-mangue", name:"Panna cotta coco-mangue",
    category:"dessert", mealType:["dejeuner","diner","gouter"],
    prepTime:15, cookTime:5, servings:4, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Lait de coco",qty:400,unit:"ml",optional:false},
      {food:"Mangue",qty:1,unit:"pièce",optional:false},
      {food:"Sucre blanc",qty:40,unit:"g",optional:false},
      {food:"Eau",qty:50,unit:"ml",optional:false}
    ],
    steps:["Faire chauffer le lait de coco avec le sucre sans bouillir.","Délayer 2 g d'agar-agar dans l'eau froide, ajouter au lait chaud et porter à frémissement 2 minutes.","Répartir dans des verrines et laisser refroidir puis réfrigérer 2 heures.","Mixer la mangue en coulis et napper les panna cotta avant de servir."],
    nutrition:{calories:180,protein:2,carbs:22,fat:10,fiber:1},
    tips:"Version sans gélatine animale grâce à l'agar-agar. Le lait de coco est très bien toléré.",
    isCustom:false
  },
  {
    id:"clafoutis-poire-vanille", name:"Clafoutis aux poires et vanille",
    category:"dessert", mealType:["dejeuner","diner","gouter"],
    prepTime:10, cookTime:30, servings:6, difficulty:"facile", histamineScore:1,
    ingredients:[
      {food:"Poire",qty:4,unit:"pièces",optional:false},
      {food:"Farine (blé, riz, maïs)",qty:80,unit:"g",optional:false},
      {food:"Oeufs",qty:3,unit:"pièces",optional:false},
      {food:"Lait frais",qty:200,unit:"ml",optional:false},
      {food:"Sucre blanc",qty:60,unit:"g",optional:false},
      {food:"Vanille",qty:1,unit:"c.à.c",optional:false},
      {food:"Beurre",qty:10,unit:"g",optional:false}
    ],
    steps:["Préchauffer le four à 180°C. Beurrer un plat à gratin.","Battre les oeufs avec le sucre, ajouter la farine puis le lait et la vanille.","Éplucher et couper les poires en quartiers, les disposer dans le plat.","Verser l'appareil sur les poires.","Enfourner 30 minutes jusqu'à ce que le dessus soit doré."],
    nutrition:{calories:210,protein:6,carbs:34,fat:5,fiber:3},
    tips:"Le clafoutis est un dessert familial par excellence. Poire et vanille sont un accord parfait.",
    isCustom:false
  },
  {
    id:"sorbet-mangue-maison", name:"Sorbet mangue maison",
    category:"dessert", mealType:["dejeuner","diner","gouter"],
    prepTime:10, cookTime:0, servings:4, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Mangue",qty:3,unit:"pièces",optional:false},
      {food:"Sucre blanc",qty:50,unit:"g",optional:false},
      {food:"Eau",qty:100,unit:"ml",optional:false}
    ],
    steps:["Couper les mangues en morceaux et les congeler au moins 4 heures.","Préparer un sirop en faisant fondre le sucre dans l'eau chaude, laisser refroidir.","Mixer les morceaux de mangue congelés avec le sirop jusqu'à obtenir une texture lisse.","Servir immédiatement ou remettre au congélateur 30 minutes."],
    nutrition:{calories:130,protein:1,carbs:32,fat:0,fiber:2},
    tips:"La mangue est un fruit très sûr pour le SAMA. Ce sorbet sans sorbetière est un dessert rafraîchissant.",
    isCustom:false
  },
  {
    id:"gateau-carotte-coco", name:"Gâteau de carottes à la noix de coco",
    category:"dessert", mealType:["dejeuner","diner","gouter"],
    prepTime:15, cookTime:30, servings:6, difficulty:"facile", histamineScore:1,
    ingredients:[
      {food:"Carotte",qty:200,unit:"g",optional:false},
      {food:"Farine (blé, riz, maïs)",qty:150,unit:"g",optional:false},
      {food:"Oeufs",qty:2,unit:"pièces",optional:false},
      {food:"Sucre blanc",qty:80,unit:"g",optional:false},
      {food:"Noix de coco",qty:40,unit:"g",optional:false},
      {food:"Huile de coco",qty:60,unit:"ml",optional:false}
    ],
    steps:["Préchauffer le four à 170°C. Râper finement les carottes.","Battre les oeufs avec le sucre, incorporer l'huile de coco fondue.","Ajouter la farine, la noix de coco râpée et les carottes.","Verser dans un moule beurré.","Enfourner 30 minutes."],
    nutrition:{calories:270,protein:5,carbs:32,fat:14,fiber:2},
    tips:"Le carrot cake sans glaçage au fromage affiné. Les carottes apportent du moelleux naturel.",
    isCustom:false
  },
  {
    id:"pommes-au-four-miel", name:"Pommes au four au miel et cannelle",
    category:"dessert", mealType:["dejeuner","diner","gouter"],
    prepTime:10, cookTime:25, servings:4, difficulty:"facile", histamineScore:1,
    ingredients:[
      {food:"Pomme",qty:4,unit:"pièces",optional:false},
      {food:"Miel",qty:4,unit:"c.à.c",optional:false},
      {food:"Cannelle",qty:1,unit:"pincée",optional:false},
      {food:"Beurre",qty:20,unit:"g",optional:false},
      {food:"Amandes",qty:20,unit:"g",optional:true}
    ],
    steps:["Préchauffer le four à 180°C.","Évider les pommes sans les percer.","Remplir chaque pomme de miel, d'un morceau de beurre et d'amandes concassées.","Saupoudrer de cannelle.","Enfourner 25 minutes."],
    nutrition:{calories:160,protein:2,carbs:28,fat:5,fiber:3},
    tips:"La cannelle est modérée, à tester individuellement. Un dessert chaud très réconfortant.",
    isCustom:false
  },
  {
    id:"far-breton-poire", name:"Far breton aux poires",
    category:"dessert", mealType:["dejeuner","diner","gouter"],
    prepTime:10, cookTime:35, servings:6, difficulty:"facile", histamineScore:1,
    ingredients:[
      {food:"Poire",qty:3,unit:"pièces",optional:false},
      {food:"Farine (blé, riz, maïs)",qty:130,unit:"g",optional:false},
      {food:"Oeufs",qty:3,unit:"pièces",optional:false},
      {food:"Lait frais",qty:500,unit:"ml",optional:false},
      {food:"Sucre blanc",qty:80,unit:"g",optional:false},
      {food:"Beurre",qty:15,unit:"g",optional:false}
    ],
    steps:["Préchauffer le four à 180°C. Beurrer un plat.","Battre les oeufs avec le sucre, incorporer la farine puis le lait progressivement.","Éplucher et couper les poires en morceaux.","Disposer les poires dans le plat, verser l'appareil dessus.","Enfourner 35 minutes."],
    nutrition:{calories:230,protein:7,carbs:38,fat:5,fiber:2},
    tips:"Le far breton revisité avec des poires au lieu des pruneaux pour limiter l'histamine.",
    isCustom:false
  },
  {
    id:"mousse-ricotta-myrtilles", name:"Mousse de ricotta aux myrtilles",
    category:"dessert", mealType:["dejeuner","diner","gouter"],
    prepTime:10, cookTime:0, servings:4, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Ricotta",qty:250,unit:"g",optional:false},
      {food:"Myrtilles",qty:200,unit:"g",optional:false},
      {food:"Miel",qty:3,unit:"c.à.s",optional:false},
      {food:"Vanille",qty:1,unit:"c.à.c",optional:false}
    ],
    steps:["Fouetter la ricotta avec le miel et la vanille jusqu'à obtenir une texture crémeuse.","Répartir dans des coupes.","Garnir de myrtilles fraîches.","Réfrigérer 30 minutes avant de servir."],
    nutrition:{calories:160,protein:8,carbs:20,fat:6,fiber:1},
    tips:"La ricotta est un fromage frais non affiné, très bien toléré. Les myrtilles sont un fruit parmi les plus sûrs.",
    isCustom:false
  },
  {
    id:"crêpes-fines-sucre", name:"Crêpes fines au sucre",
    category:"dessert", mealType:["dejeuner","diner","gouter"],
    prepTime:10, cookTime:15, servings:4, difficulty:"facile", histamineScore:1,
    ingredients:[
      {food:"Farine (blé, riz, maïs)",qty:150,unit:"g",optional:false},
      {food:"Oeufs",qty:2,unit:"pièces",optional:false},
      {food:"Lait frais",qty:300,unit:"ml",optional:false},
      {food:"Beurre",qty:20,unit:"g",optional:false},
      {food:"Sucre blanc",qty:30,unit:"g",optional:false},
      {food:"Vanille",qty:1,unit:"c.à.c",optional:true}
    ],
    steps:["Mélanger la farine, les oeufs, le lait et la vanille pour obtenir une pâte lisse.","Laisser reposer 30 minutes.","Faire fondre un peu de beurre dans une poêle et cuire les crêpes une par une.","Saupoudrer de sucre et plier."],
    nutrition:{calories:200,protein:6,carbs:30,fat:6,fiber:1},
    tips:"Recette de crêpes classiques sans garniture à risque. Garnir de compote de pomme pour plus de gourmandise.",
    isCustom:false
  },
  {
    id:"gateau-semoule-vanille", name:"Gâteau de semoule à la vanille",
    category:"dessert", mealType:["dejeuner","diner","gouter"],
    prepTime:10, cookTime:20, servings:4, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Semoule / couscous",qty:100,unit:"g",optional:false},
      {food:"Lait frais",qty:500,unit:"ml",optional:false},
      {food:"Sucre blanc",qty:60,unit:"g",optional:false},
      {food:"Vanille",qty:1,unit:"gousse",optional:false},
      {food:"Beurre",qty:10,unit:"g",optional:false}
    ],
    steps:["Faire chauffer le lait avec la vanille fendue et le sucre.","Verser la semoule en pluie en remuant et cuire 5 minutes à feu doux.","Beurrer un moule, y verser la préparation.","Laisser refroidir puis démouler et réfrigérer 2 heures."],
    nutrition:{calories:210,protein:7,carbs:38,fat:4,fiber:1},
    tips:"Dessert traditionnel très doux, sans aucun risque histamine. Se sert frais avec un coulis de mangue.",
    isCustom:false
  },

  // ══════ COLLATIONS (8 nouveaux) ══════
  {
    id:"muffins-myrtilles-avoine", name:"Muffins myrtilles et flocons d'avoine",
    category:"collation", mealType:["petit-dej","gouter"],
    prepTime:10, cookTime:20, servings:8, difficulty:"facile", histamineScore:1,
    ingredients:[
      {food:"Avoine / flocons",qty:100,unit:"g",optional:false},
      {food:"Farine (blé, riz, maïs)",qty:100,unit:"g",optional:false},
      {food:"Myrtilles",qty:120,unit:"g",optional:false},
      {food:"Oeufs",qty:1,unit:"pièce",optional:false},
      {food:"Miel",qty:3,unit:"c.à.s",optional:false},
      {food:"Beurre",qty:40,unit:"g",optional:false}
    ],
    steps:["Préchauffer le four à 180°C. Disposer des caissettes dans un moule à muffins.","Mélanger les flocons d'avoine, la farine, l'oeuf battu, le beurre fondu et le miel.","Incorporer délicatement les myrtilles.","Répartir dans les moules.","Enfourner 20 minutes."],
    nutrition:{calories:150,protein:4,carbs:20,fat:6,fiber:2},
    tips:"Les myrtilles sont un excellent choix pour le SAMA. Ces muffins se conservent 2 jours dans une boîte hermétique.",
    isCustom:false
  },
  {
    id:"tartine-pomme-ricotta", name:"Tartine pomme-ricotta-miel",
    category:"collation", mealType:["petit-dej","gouter"],
    prepTime:5, cookTime:0, servings:1, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Galettes de riz",qty:2,unit:"pièces",optional:false},
      {food:"Ricotta",qty:40,unit:"g",optional:false},
      {food:"Pomme",qty:1,unit:"pièce",optional:false},
      {food:"Miel",qty:1,unit:"c.à.c",optional:true}
    ],
    steps:["Tartiner les galettes de riz de ricotta.","Couper la pomme en fines lamelles.","Disposer les lamelles sur la ricotta.","Arroser d'un filet de miel."],
    nutrition:{calories:180,protein:6,carbs:30,fat:4,fiber:2},
    tips:"Collation rapide et légère, tous les ingrédients sont bien tolérés.",
    isCustom:false
  },
  {
    id:"porridge-poire-amande", name:"Porridge express poire-amande",
    category:"collation", mealType:["petit-dej","gouter"],
    prepTime:5, cookTime:8, servings:1, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Avoine / flocons",qty:40,unit:"g",optional:false},
      {food:"Lait frais",qty:150,unit:"ml",optional:false},
      {food:"Poire",qty:1,unit:"pièce",optional:false},
      {food:"Purée d'amande",qty:1,unit:"c.à.s",optional:false}
    ],
    steps:["Faire chauffer le lait avec les flocons d'avoine 6 minutes en remuant.","Couper la poire en petits dés.","Verser le porridge dans un bol, garnir de poire.","Ajouter une cuillère de purée d'amande."],
    nutrition:{calories:280,protein:9,carbs:40,fat:9,fiber:5},
    tips:"La purée d'amande est bien tolérée et apporte du bon gras. Collation rassasiante.",
    isCustom:false
  },
  {
    id:"compote-peche-vanille", name:"Compote de pêches à la vanille",
    category:"collation", mealType:["petit-dej","gouter"],
    prepTime:5, cookTime:12, servings:4, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Pêche",qty:5,unit:"pièces",optional:false},
      {food:"Vanille",qty:1,unit:"c.à.c",optional:false},
      {food:"Miel",qty:1,unit:"c.à.s",optional:true},
      {food:"Eau",qty:50,unit:"ml",optional:false}
    ],
    steps:["Éplucher les pêches et les couper en morceaux.","Les mettre dans une casserole avec l'eau et la vanille.","Cuire 12 minutes à feu doux.","Écraser à la fourchette ou mixer selon la texture souhaitée."],
    nutrition:{calories:70,protein:1,carbs:16,fat:0,fiber:2},
    tips:"Les pêches fraîches sont bien tolérées. Se conserve 2 jours au frais dans un bocal en verre.",
    isCustom:false
  },
  {
    id:"bouchees-coco-avoine", name:"Bouchées coco-avoine-miel",
    category:"collation", mealType:["petit-dej","gouter"],
    prepTime:10, cookTime:12, servings:10, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Avoine / flocons",qty:80,unit:"g",optional:false},
      {food:"Noix de coco",qty:40,unit:"g",optional:false},
      {food:"Miel",qty:2,unit:"c.à.s",optional:false},
      {food:"Huile de coco",qty:1,unit:"c.à.s",optional:false}
    ],
    steps:["Préchauffer le four à 170°C.","Mélanger tous les ingrédients dans un bol.","Former de petites boules et les disposer sur une plaque recouverte de papier cuisson.","Aplatir légèrement et enfourner 12 minutes.","Laisser refroidir sur la plaque."],
    nutrition:{calories:70,protein:1,carbs:10,fat:3,fiber:1},
    tips:"Petits biscuits sans oeuf ni beurre. Se gardent 4 jours dans une boîte hermétique.",
    isCustom:false
  },
  {
    id:"smoothie-myrtille-coco", name:"Smoothie myrtille-coco",
    category:"collation", mealType:["petit-dej","gouter"],
    prepTime:5, cookTime:0, servings:1, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Myrtilles",qty:100,unit:"g",optional:false},
      {food:"Lait de coco",qty:150,unit:"ml",optional:false},
      {food:"Miel",qty:1,unit:"c.à.c",optional:true},
      {food:"Graines de chia",qty:1,unit:"c.à.c",optional:true}
    ],
    steps:["Mixer les myrtilles avec le lait de coco et le miel.","Verser dans un verre.","Parsemer de graines de chia si souhaité."],
    nutrition:{calories:180,protein:3,carbs:22,fat:9,fiber:3},
    tips:"Myrtilles et lait de coco sont très bien tolérés. Les graines de chia apportent des oméga-3.",
    isCustom:false
  },
  {
    id:"galettes-patate-douce-coco", name:"Galettes de patate douce à la coco",
    category:"collation", mealType:["petit-dej","gouter"],
    prepTime:10, cookTime:10, servings:6, difficulty:"facile", histamineScore:0,
    ingredients:[
      {food:"Patate douce",qty:300,unit:"g",optional:false},
      {food:"Noix de coco",qty:30,unit:"g",optional:false},
      {food:"Farine (blé, riz, maïs)",qty:30,unit:"g",optional:false},
      {food:"Miel",qty:1,unit:"c.à.s",optional:true},
      {food:"Huile de coco",qty:1,unit:"c.à.s",optional:false}
    ],
    steps:["Cuire la patate douce à l'eau ou au micro-ondes, puis l'écraser.","Mélanger avec la farine, la coco râpée et le miel.","Former des petites galettes.","Les cuire dans l'huile de coco 4 minutes de chaque côté."],
    nutrition:{calories:110,protein:2,carbs:18,fat:4,fiber:2},
    tips:"Collation sucrée-salée originale. La patate douce est naturellement sucrée et très bien tolérée.",
    isCustom:false
  },
  {
    id:"bol-quinoa-pomme-cannelle", name:"Bol de quinoa pomme-cannelle",
    category:"collation", mealType:["petit-dej","gouter"],
    prepTime:5, cookTime:15, servings:1, difficulty:"facile", histamineScore:1,
    ingredients:[
      {food:"Quinoa",qty:50,unit:"g",optional:false},
      {food:"Lait frais",qty:150,unit:"ml",optional:false},
      {food:"Pomme",qty:1,unit:"pièce",optional:false},
      {food:"Cannelle",qty:1,unit:"pincée",optional:false},
      {food:"Miel",qty:1,unit:"c.à.c",optional:true}
    ],
    steps:["Rincer le quinoa, le cuire dans le lait 12 minutes à feu doux.","Couper la pomme en petits dés.","Verser le quinoa dans un bol, garnir de dés de pomme.","Saupoudrer de cannelle et arroser de miel."],
    nutrition:{calories:300,protein:10,carbs:48,fat:7,fiber:5},
    tips:"Alternative au porridge d'avoine, le quinoa au lait est très rassasiant. La cannelle est modérée, à tester.",
    isCustom:false
  }
];

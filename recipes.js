// "Indecisive roller" recipes: shown instead of a restaurant when someone spins too many times.
// Simple cultural dishes to broaden picky eaters' horizons.
// Photos are from Wikimedia Commons; their licenses require the credit shown under each photo.
const RECIPES = [
  {
    "id": "01",
    "name": "Shakshuka",
    "region": "North Africa / Levant (Tunisia, Israel, Palestine)",
    "why": "Eggs poached in a spiced tomato-pepper sauce. Breakfast, lunch, dinner, nobody cares.",
    "time": "25 min",
    "serves": "2",
    "ingredients": [
      "2 tbsp olive oil",
      "1 onion, diced",
      "1 red bell pepper, diced",
      "2 garlic cloves, minced",
      "1 tsp cumin, 1 tsp paprika, pinch of chili flakes",
      "1 can (14 oz) crushed tomatoes",
      "4 eggs",
      "Salt, parsley or cilantro, crusty bread"
    ],
    "steps": [
      "Soften onion and pepper in oil over medium heat, about 6 minutes.",
      "Add garlic and spices, stir 1 minute.",
      "Add tomatoes and salt, simmer 8-10 minutes until thick.",
      "Make 4 wells, crack an egg into each, cover and cook 5-7 minutes until whites set.",
      "Top with herbs. Scoop up with bread."
    ],
    "photo": {
      "src": "img/recipes/01.jpg",
      "author": "Calliopejen1",
      "license": "CC BY-SA 3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Shakshuka_by_Calliopejen1.jpg"
    }
  },
  {
    "id": "02",
    "name": "Chilaquiles Rojos",
    "region": "Central Mexico",
    "why": "Tortilla chips simmered in salsa until half crunchy, half soft. Mexico's best use of leftovers.",
    "time": "15 min",
    "serves": "2",
    "ingredients": [
      "4 big handfuls tortilla chips (thick ones hold up best)",
      "1.5 cups red salsa or red enchilada sauce",
      "2 eggs (fried) or shredded chicken",
      "Crumbled cotija or feta, sour cream or Mexican crema",
      "Sliced onion, cilantro"
    ],
    "steps": [
      "Heat salsa in a wide pan until bubbling.",
      "Toss chips in the salsa for 30-60 seconds, just until coated.",
      "Plate immediately, top with egg or chicken, cheese, crema, onion, cilantro."
    ],
    "photo": {
      "src": "img/recipes/02.jpg",
      "author": "Chris Woodrich",
      "license": "CC BY-SA 4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Chilaquiles_at_the_Grand_Cantina,_Windsor,_Ontario,_2025-09-01_04.jpg"
    }
  },
  {
    "id": "03",
    "name": "Onigiri",
    "region": "Japan",
    "why": "The rice ball every Japanese kid eats for lunch. Portable and dead simple.",
    "time": "30 min (mostly rice cooking)",
    "serves": "2 (makes 4)",
    "ingredients": [
      "2 cups cooked short-grain (sushi) rice, still warm",
      "Salt",
      "Filling: canned tuna mixed with mayo, or flaked salmon, or umeboshi (pickled plum)",
      "Nori sheets, cut into strips"
    ],
    "steps": [
      "Wet your hands and rub a pinch of salt on your palms.",
      "Take about 1/2 cup rice, press a dent in the middle, add a spoon of filling.",
      "Close the rice around the filling and press into a triangle with cupped hands.",
      "Wrap a strip of nori around the bottom."
    ],
    "photo": {
      "src": "img/recipes/03.jpg",
      "author": "脇山航",
      "license": "CC BY-SA 4.0",
      "source": "https://commons.wikimedia.org/wiki/File:%E5%B0%8F%E6%96%99%E7%90%86%E3%83%90%E3%83%AB%E3%81%95%E3%81%8F%E3%82%89_%E7%89%B9%E8%A3%BD%E3%81%8A%E3%81%AB%E3%81%8E%E3%82%8A.jpg"
    }
  },
  {
    "id": "04",
    "name": "Kimchi Bokkeumbap (Kimchi Fried Rice)",
    "region": "Korea",
    "why": "Tangy, spicy, savory fried rice with a runny egg on top.",
    "time": "15 min",
    "serves": "2",
    "ingredients": [
      "2 cups cooked day-old rice",
      "1 cup kimchi, chopped, plus 2 tbsp kimchi juice",
      "1 tbsp gochujang (optional, for more heat)",
      "4 oz spam, bacon, or diced pork (optional)",
      "1 tbsp oil, 1 tsp sesame oil",
      "2 eggs, green onion, sesame seeds"
    ],
    "steps": [
      "Fry meat (if using) in oil until browned.",
      "Add kimchi and cook 3 minutes.",
      "Add rice, kimchi juice, gochujang. Stir-fry until hot and slightly crispy.",
      "Finish with sesame oil. Top with a fried egg, green onion, sesame seeds."
    ],
    "photo": {
      "src": "img/recipes/04.jpg",
      "author": "Sharon Ang",
      "license": "CC0",
      "source": "https://commons.wikimedia.org/wiki/File:Kimchi_fried_rice.jpg"
    }
  },
  {
    "id": "05",
    "name": "Dal Tadka",
    "region": "North India",
    "why": "Everyday lentils with a sizzling spiced-butter finish. Comfort food for a billion people.",
    "time": "35 min",
    "serves": "3",
    "ingredients": [
      "1 cup red lentils (masoor dal), rinsed",
      "3 cups water, 1/2 tsp turmeric, salt",
      "2 tbsp ghee or butter",
      "1 tsp cumin seeds",
      "1 small onion, diced; 3 garlic cloves, sliced; 1 tomato, diced",
      "1/2 tsp chili powder, 1/2 tsp garam masala",
      "Cilantro, rice or naan"
    ],
    "steps": [
      "Simmer lentils, water, turmeric, salt for 20 minutes until soft and soupy.",
      "In a small pan, heat ghee, add cumin seeds until they sizzle.",
      "Add onion and garlic, cook until golden. Add tomato and spices, cook 3 minutes.",
      "Pour the sizzling mixture over the dal. Stir, top with cilantro. Serve with rice."
    ],
    "photo": {
      "src": "img/recipes/05.jpg",
      "author": "AugustineKajur",
      "license": "CC BY-SA 4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Dal_Tadka-Delhi.jpg"
    }
  },
  {
    "id": "06",
    "name": "Lemon Rice (Chitranna)",
    "region": "South India (Karnataka, Tamil Nadu)",
    "why": "Bright yellow, tangy rice with crunchy peanuts. A classic packed lunch.",
    "time": "15 min (with cooked rice)",
    "serves": "2",
    "ingredients": [
      "2 cups cooked rice, cooled",
      "2 tbsp oil",
      "1 tsp mustard seeds",
      "1/4 cup peanuts",
      "1 green chili, slit; handful curry leaves (optional but great)",
      "1/2 tsp turmeric, salt",
      "Juice of 1 lemon"
    ],
    "steps": [
      "Heat oil, add mustard seeds until they pop.",
      "Add peanuts, fry until golden. Add chili and curry leaves.",
      "Add turmeric, stir 10 seconds, then add rice and salt. Toss well.",
      "Turn off heat, squeeze in lemon juice, mix."
    ],
    "photo": {
      "src": "img/recipes/06.jpg",
      "author": "Radhikapavan",
      "license": "CC BY-SA 4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Chitranna_and_Payasa.jpg"
    }
  },
  {
    "id": "07",
    "name": "Pad Kra Pao (Holy Basil Stir-Fry)",
    "region": "Thailand",
    "why": "The dish Thai people order when they can't decide. Fitting.",
    "time": "15 min",
    "serves": "2",
    "ingredients": [
      "1 lb ground chicken or pork",
      "4 garlic cloves + 2-4 Thai chilies, pounded or minced",
      "1 tbsp oyster sauce, 1 tbsp soy sauce, 1 tsp fish sauce, 1 tsp sugar",
      "1 big handful holy basil (Thai basil works)",
      "2 tbsp oil, 2 eggs, jasmine rice"
    ],
    "steps": [
      "Fry eggs in hot oil until crispy-edged. Set aside.",
      "Stir-fry garlic and chilies 20 seconds. Add meat, break it up, cook through.",
      "Add sauces and sugar, toss 1 minute.",
      "Kill the heat, stir in basil until wilted. Serve over rice with the egg on top."
    ],
    "photo": {
      "src": "img/recipes/07.jpg",
      "author": "Iudexvivorum",
      "license": "CC0",
      "source": "https://commons.wikimedia.org/wiki/File:Basil_fried_crispy_pork_with_rice_-_Chiang_Mai_-_2017-07-11_(002).jpg"
    }
  },
  {
    "id": "08",
    "name": "Banh Mi (Weeknight Version)",
    "region": "Vietnam",
    "why": "French bread meets Vietnamese pickles and herbs. One of the best sandwiches on earth.",
    "time": "20 min (+ 15 min pickle time)",
    "serves": "2",
    "ingredients": [
      "2 light, crusty baguette pieces (6-8 inches)",
      "1 carrot + 1 small daikon (or radishes), julienned",
      "1/4 cup rice vinegar, 1 tbsp sugar, pinch salt",
      "8 oz pork or chicken, thinly sliced, marinated in 1 tbsp soy, 1 tbsp fish sauce, 1 tsp sugar, 1 garlic clove",
      "Mayo, cucumber slices, cilantro, jalapeño, Maggi or soy sauce"
    ],
    "steps": [
      "Mix vinegar, sugar, salt; toss carrot and daikon in it. Let sit 15 minutes.",
      "Sear meat in a hot pan until caramelized.",
      "Warm bread, spread mayo, add meat, pickles, cucumber, cilantro, jalapeño.",
      "A few drops of Maggi or soy on top."
    ],
    "photo": {
      "src": "img/recipes/08.jpg",
      "author": "nsaum75",
      "license": "CC BY-SA 3.0",
      "source": "https://commons.wikimedia.org/wiki/File:B%C3%A1nh_m%C3%AC_th%E1%BB%8Bt_n%C6%B0%E1%BB%9Bng.png"
    }
  },
  {
    "id": "09",
    "name": "Arepas",
    "region": "Venezuela / Colombia",
    "why": "Crispy-outside, steamy-inside corn cakes you split and stuff.",
    "time": "30 min",
    "serves": "2 (makes 4)",
    "ingredients": [
      "1 cup masarepa (pre-cooked corn flour, e.g. P.A.N.)",
      "1 cup + 2 tbsp warm water, 1/2 tsp salt",
      "1 tbsp oil",
      "Fillings: shredded cheese, black beans, avocado, shredded chicken"
    ],
    "steps": [
      "Mix masarepa, water, salt. Rest 5 minutes. Knead into a smooth dough.",
      "Form 4 balls, flatten to about 1/2 inch thick.",
      "Cook in an oiled pan over medium heat, 6-7 minutes per side, until crusty.",
      "Split open with a knife and stuff."
    ],
    "photo": {
      "src": "img/recipes/09.jpg",
      "author": "Mitdralla",
      "license": "CC BY-SA 4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Arepa-reina-pepiada-arepasdelgringo.jpg"
    }
  },
  {
    "id": "10",
    "name": "Gallo Pinto",
    "region": "Costa Rica / Nicaragua",
    "why": "Rice and black beans fried together. The national argument between two countries.",
    "time": "15 min",
    "serves": "2",
    "ingredients": [
      "2 cups cooked rice (day-old is best)",
      "1 can black beans, with about 1/4 cup of their liquid",
      "1/2 onion + 1/2 red bell pepper, diced",
      "1 tbsp oil",
      "2 tbsp Salsa Lizano (or Worcestershire sauce as a substitute)",
      "Cilantro; fried eggs and sour cream to serve"
    ],
    "steps": [
      "Soften onion and pepper in oil.",
      "Add beans with liquid, simmer 2 minutes.",
      "Add rice and Lizano, fold until rice is evenly stained by the beans.",
      "Stir in cilantro. Serve with eggs."
    ],
    "photo": {
      "src": "img/recipes/10.jpg",
      "author": "Legendre17",
      "license": "CC BY 3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Costa_Rican_Gallo_Pinto.jpg"
    }
  },
  {
    "id": "11",
    "name": "Jollof Rice",
    "region": "West Africa (Nigeria, Ghana, Senegal)",
    "why": "Smoky tomato-pepper rice. Start an argument by asking whose version is best.",
    "time": "45 min",
    "serves": "4",
    "ingredients": [
      "2 cups long-grain parboiled rice, rinsed",
      "1 red bell pepper, 1 can (14 oz) tomatoes, 1 onion, 1 scotch bonnet (or half) — blended",
      "3 tbsp tomato paste",
      "1/4 cup oil",
      "1.5 cups chicken stock",
      "1 tsp curry powder, 1 tsp thyme, 2 bay leaves, salt"
    ],
    "steps": [
      "Heat oil, fry tomato paste 3 minutes until darkened.",
      "Add blended pepper mix, cook 10-15 minutes until reduced and oil rises to the top.",
      "Add stock, spices, salt. Stir in rice.",
      "Cover tightly (foil under the lid helps), cook on low 25-30 minutes until tender. A little scorch on the bottom is prized."
    ],
    "photo": {
      "src": "img/recipes/11.jpg",
      "author": "Noahalorwu",
      "license": "CC BY-SA 4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Jollof_Rice_with_Stew.jpg"
    }
  },
  {
    "id": "12",
    "name": "Shiro Wat",
    "region": "Ethiopia / Eritrea",
    "why": "Silky spiced chickpea stew, eaten with your hands using flatbread.",
    "time": "25 min",
    "serves": "3",
    "ingredients": [
      "1 onion, finely diced",
      "3 tbsp oil or niter kibbeh (spiced butter)",
      "3 garlic cloves, minced",
      "1 tbsp berbere spice",
      "1/2 cup shiro powder (or chickpea flour + 1 extra tsp berbere)",
      "2.5 cups water, salt",
      "Injera, or pita/flatbread"
    ],
    "steps": [
      "Cook onion dry in a pot for 3 minutes, then add oil and cook until soft.",
      "Add garlic and berbere, stir 1 minute.",
      "Add water, bring to a simmer, then whisk in shiro powder gradually.",
      "Simmer 10-15 minutes, whisking, until thick and smooth. Salt. Tear bread and scoop."
    ],
    "photo": {
      "src": "img/recipes/12.jpg",
      "author": "Temesgen Woldezion; edited by Merhawie Woldezion",
      "license": "CC BY-SA 2.5",
      "source": "https://commons.wikimedia.org/wiki/File:Taita_and_shiro.jpg"
    }
  },
  {
    "id": "13",
    "name": "Ful Medames",
    "region": "Egypt",
    "why": "Mashed fava beans with lemon, garlic, and olive oil. Egypt's breakfast for thousands of years.",
    "time": "10 min",
    "serves": "2",
    "ingredients": [
      "1 can fava beans (ful), with liquid",
      "1 garlic clove, crushed",
      "1/2 tsp cumin, salt",
      "Juice of 1/2 lemon",
      "Lots of olive oil",
      "Toppings: diced tomato, parsley, hard-boiled egg, chili flakes; pita"
    ],
    "steps": [
      "Warm beans and liquid in a pot for 5 minutes.",
      "Mash roughly with garlic, cumin, salt, lemon.",
      "Pour into a bowl, flood with olive oil, add toppings. Eat with pita."
    ],
    "photo": {
      "src": "img/recipes/13.jpg",
      "author": "Miansari66",
      "license": "CC0",
      "source": "https://commons.wikimedia.org/wiki/File:Ful_Medames.JPG"
    }
  },
  {
    "id": "14",
    "name": "Menemen",
    "region": "Turkey",
    "why": "Soft-scrambled eggs cooked into tomatoes and peppers. Simpler cousin of shakshuka.",
    "time": "15 min",
    "serves": "2",
    "ingredients": [
      "2 tbsp butter or olive oil",
      "2 long green peppers (Anaheim or Cubanelle), sliced",
      "3 ripe tomatoes, grated or finely chopped",
      "4 eggs, lightly beaten",
      "Salt, pul biber or chili flakes",
      "Bread"
    ],
    "steps": [
      "Cook peppers in butter until soft.",
      "Add tomatoes and salt, cook until most of the liquid is gone.",
      "Pour in eggs, stir gently just until barely set. Don't overcook.",
      "Sprinkle chili flakes. Serve straight from the pan with bread."
    ],
    "photo": {
      "src": "img/recipes/14.jpg",
      "author": "E4024",
      "license": "CC BY-SA 4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Menemen_with_cheese.jpg"
    }
  },
  {
    "id": "15",
    "name": "Horiatiki (Greek Village Salad)",
    "region": "Greece",
    "why": "No lettuce. Just ripe vegetables, a slab of feta, and good olive oil.",
    "time": "10 min",
    "serves": "2",
    "ingredients": [
      "3 ripe tomatoes, cut into wedges",
      "1 cucumber, thick half-moons",
      "1/2 red onion, thinly sliced",
      "1/2 green bell pepper, sliced",
      "Handful kalamata olives",
      "1 thick slab feta",
      "Dried oregano, salt, red wine vinegar, plenty of olive oil"
    ],
    "steps": [
      "Toss vegetables and olives with salt and a splash of vinegar.",
      "Lay the feta on top whole. Sprinkle oregano.",
      "Drown in olive oil. Mop up the juices with bread."
    ],
    "photo": {
      "src": "img/recipes/15.jpg",
      "author": "Jpatokal",
      "license": "CC BY-SA 4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Greece_Food_Horiatiki.JPG"
    }
  },
  {
    "id": "16",
    "name": "Pan con Tomate (Pa amb Tomàquet)",
    "region": "Catalonia, Spain",
    "why": "Five ingredients. Tastes like summer in Barcelona.",
    "time": "10 min",
    "serves": "2",
    "ingredients": [
      "4 thick slices rustic bread",
      "2 very ripe tomatoes, halved",
      "1 garlic clove, halved",
      "Olive oil, flaky salt",
      "Optional: thin slices of jamón serrano or manchego"
    ],
    "steps": [
      "Toast or grill the bread until crisp.",
      "Rub the cut garlic lightly over the toast.",
      "Rub tomato halves hard into the bread until only the skin is left.",
      "Drizzle olive oil, sprinkle salt. Add jamón if you like."
    ],
    "photo": {
      "src": "img/recipes/16.jpg",
      "author": "Jennifer Woodard Maderazo",
      "license": "CC BY 2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Pa_amb_tomaquet.jpg"
    }
  },
  {
    "id": "17",
    "name": "Socca",
    "region": "Nice, France",
    "why": "Crispy chickpea-flour pancake sold as street food on the French Riviera. Naturally gluten-free.",
    "time": "20 min (+ 30 min batter rest)",
    "serves": "2",
    "ingredients": [
      "1 cup chickpea flour",
      "1 cup water",
      "3 tbsp olive oil, divided",
      "1/2 tsp salt",
      "Lots of black pepper; optional rosemary"
    ],
    "steps": [
      "Whisk flour, water, 1 tbsp oil, salt. Rest 30 minutes.",
      "Put a cast-iron skillet under the broiler on high for 5 minutes.",
      "Add 2 tbsp oil to the hot pan, pour in batter.",
      "Broil 6-8 minutes until blistered and browned. Cut into wedges, crack pepper on top."
    ],
    "photo": {
      "src": "img/recipes/17.jpg",
      "author": "Alessio Sbarbaro",
      "license": "CC BY-SA 3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Farinata_di_ceci_01.jpg"
    }
  },
  {
    "id": "18",
    "name": "Cacio e Pepe",
    "region": "Rome, Italy",
    "why": "Pasta, cheese, pepper. That's it. Hard to master, easy to love.",
    "time": "15 min",
    "serves": "2",
    "ingredients": [
      "8 oz spaghetti or tonnarelli",
      "1.5 cups finely grated Pecorino Romano",
      "1.5 tsp freshly cracked black pepper",
      "Salt for pasta water (use less than usual; pecorino is salty)"
    ],
    "steps": [
      "Cook pasta in less water than usual so the water gets starchy. Save 1.5 cups of it.",
      "Toast pepper in a dry pan 1 minute, add 1/2 cup pasta water.",
      "In a bowl, mix cheese with a few spoons of lukewarm (not boiling) pasta water into a paste.",
      "Add drained pasta to the pepper pan off the heat, add cheese paste, toss hard, adding water until creamy. Heat too high = clumps."
    ],
    "photo": {
      "src": "img/recipes/18.jpg",
      "author": "Popo le Chien",
      "license": "CC BY-SA 3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Cacio_e_pepe.jpg"
    }
  },
  {
    "id": "19",
    "name": "Lecsó",
    "region": "Hungary",
    "why": "Peppers and tomatoes stewed with paprika. Hungary's answer to ratatouille.",
    "time": "30 min",
    "serves": "2-3",
    "ingredients": [
      "2 tbsp oil or bacon fat (2 strips bacon, diced, is traditional)",
      "1 onion, sliced",
      "4 bell peppers (yellow/light green ideal), sliced",
      "3 tomatoes, chopped",
      "1 tbsp sweet Hungarian paprika, salt",
      "Optional: sliced smoked sausage, or 2 eggs stirred in at the end"
    ],
    "steps": [
      "Render bacon or heat oil. Soften onion.",
      "Add peppers, cook 8 minutes.",
      "Off heat, stir in paprika (it burns easily), then add tomatoes and salt.",
      "Simmer 10-15 minutes. Add sausage or stir in eggs if using. Serve with bread or rice."
    ],
    "photo": {
      "src": "img/recipes/19.jpg",
      "author": "zeevveez",
      "license": "CC BY-SA 4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Warm_Colors-_my_Mom%27s_Hungarian_Lecs%C3%B3_cropped.jpg"
    }
  },
  {
    "id": "20",
    "name": "Smørrebrød",
    "region": "Denmark",
    "why": "Open-faced rye sandwiches built with care. Danish lunch culture in one bite.",
    "time": "15 min",
    "serves": "2",
    "ingredients": [
      "4 slices dense dark rye bread",
      "Butter (spread generously, it's the rule)",
      "Topping A: hard-boiled egg slices, shrimp or smoked salmon, mayo, dill, lemon",
      "Topping B: thin roast beef, remoulade or mayo, pickles, crispy fried onions"
    ],
    "steps": [
      "Butter each slice of rye edge to edge.",
      "Pile on toppings neatly; each slice should look composed.",
      "Eat with a knife and fork, like the Danes do."
    ],
    "photo": {
      "src": "img/recipes/20.jpg",
      "author": "Nillerdk",
      "license": "CC BY-SA 3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Ida_Davidsen_udsnit_af_glasmontren.JPG"
    }
  },
  {
    "id": "21",
    "name": "Colcannon",
    "region": "Ireland",
    "why": "Buttery mashed potatoes with cabbage. Peasant food that tastes rich.",
    "time": "30 min",
    "serves": "3",
    "ingredients": [
      "2 lb russet or Yukon potatoes, peeled and chunked",
      "3 cups shredded green cabbage or kale",
      "4 green onions, sliced",
      "3/4 cup milk, 4 tbsp butter (plus more)",
      "Salt, pepper"
    ],
    "steps": [
      "Boil potatoes in salted water until tender, about 15 minutes. Drain.",
      "Meanwhile cook cabbage in 1 tbsp butter until soft.",
      "Warm milk with green onions.",
      "Mash potatoes with butter and onion-milk. Fold in cabbage. Serve with a pool of melting butter in the middle."
    ],
    "photo": {
      "src": "img/recipes/21.jpg",
      "author": "VegaTeam",
      "license": "CC BY 2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Colcannon_(5532418361).jpg"
    }
  },
  {
    "id": "22",
    "name": "Welsh Rarebit",
    "region": "Wales",
    "why": "Cheese sauce with mustard and beer, broiled on toast. Grilled cheese grew up.",
    "time": "15 min",
    "serves": "2",
    "ingredients": [
      "1 tbsp butter, 1 tbsp flour",
      "1/3 cup dark beer or milk",
      "1.5 cups sharp cheddar, grated",
      "1 tsp English mustard (or Dijon), 1 tsp Worcestershire",
      "4 slices thick bread, toasted"
    ],
    "steps": [
      "Melt butter, whisk in flour 1 minute.",
      "Whisk in beer, then cheese, mustard, Worcestershire until thick and smooth.",
      "Spread thickly on toast.",
      "Broil 2-3 minutes until bubbling and browned in spots."
    ],
    "photo": {
      "src": "img/recipes/22.jpg",
      "author": "Worm That Turned",
      "license": "CC BY-SA 4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Welsh_rarebit.JPG"
    }
  },
  {
    "id": "23",
    "name": "Chicken Adobo",
    "region": "Philippines",
    "why": "Chicken braised in soy, vinegar, garlic, and bay. The unofficial national dish.",
    "time": "45 min",
    "serves": "3",
    "ingredients": [
      "2 lb bone-in chicken thighs",
      "1/2 cup soy sauce",
      "1/2 cup white or cane vinegar",
      "1 head garlic, cloves smashed",
      "3 bay leaves, 1 tsp whole black peppercorns",
      "1 tbsp brown sugar (optional), 1 cup water",
      "Rice"
    ],
    "steps": [
      "Put everything in a pot. Bring to a boil, don't stir for the first few minutes (lets the vinegar mellow).",
      "Cover, simmer 30 minutes.",
      "Optional: remove chicken, sear it in a hot pan for color.",
      "Reduce sauce until slightly thick. Spoon over chicken and rice."
    ],
    "photo": {
      "src": "img/recipes/23.jpg",
      "author": "dbgg1979 on flickr",
      "license": "CC BY 2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Chicken_adobo.jpg"
    }
  },
  {
    "id": "24",
    "name": "Nasi Goreng",
    "region": "Indonesia",
    "why": "Sweet-savory fried rice with kecap manis and a fried egg. Street food royalty.",
    "time": "15 min",
    "serves": "2",
    "ingredients": [
      "2 cups day-old rice",
      "2 shallots + 2 garlic cloves, minced",
      "1 red chili, minced (or 1 tsp sambal oelek)",
      "2 tbsp kecap manis (sweet soy sauce)",
      "1 tsp soy sauce, 1 tsp fish sauce or shrimp paste",
      "6 oz chicken or shrimp, chopped (optional)",
      "2 tbsp oil, 2 eggs, cucumber and tomato slices, fried shallots"
    ],
    "steps": [
      "Fry shallots, garlic, chili in oil 1 minute.",
      "Add protein, cook through.",
      "Add rice, kecap manis, soy, fish sauce. Stir-fry until glossy and slightly charred.",
      "Top with a fried egg. Serve with cucumber, tomato, fried shallots."
    ],
    "photo": {
      "src": "img/recipes/24.jpg",
      "author": "shankar s. from Dubai, united arab emirates",
      "license": "CC BY 2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Nasi_Goreng_Kampung_(11967588375).jpg"
    }
  },
  {
    "id": "25",
    "name": "Tomato and Egg Stir-Fry (Xīhóngshì Chǎo Jīdàn)",
    "region": "China",
    "why": "The first dish most Chinese kids learn to cook. Sweet, sour, silky.",
    "time": "10 min",
    "serves": "2",
    "ingredients": [
      "4 eggs, beaten with a pinch of salt",
      "3 ripe tomatoes, cut into wedges",
      "2 tbsp oil",
      "1 tsp sugar, salt",
      "2 tbsp ketchup (optional, very common at home)",
      "Green onions; rice"
    ],
    "steps": [
      "Scramble eggs in 1 tbsp hot oil until just set, in big curds. Remove.",
      "Add remaining oil, cook tomatoes 3-4 minutes until saucy.",
      "Add sugar, salt, ketchup, splash of water.",
      "Return eggs, toss briefly. Top with green onion. Serve over rice."
    ],
    "photo": {
      "src": "img/recipes/25.jpg",
      "author": "三島堂",
      "license": "CC BY-SA 4.0",
      "source": "https://commons.wikimedia.org/wiki/File:%E7%95%AA%E8%8C%84%E7%82%92%E8%9B%8B2.PNG"
    }
  },
  {
    "id": "26",
    "name": "Choripán with Chimichurri",
    "region": "Argentina / Uruguay",
    "why": "Grilled chorizo in crusty bread with herb sauce. The soundtrack of every asado.",
    "time": "20 min",
    "serves": "2",
    "ingredients": [
      "2 fresh Argentine-style chorizo (or any fresh pork sausage — NOT Mexican chorizo)",
      "2 crusty rolls",
      "Chimichurri: 1 cup parsley finely chopped, 3 garlic cloves minced, 1 tsp dried oregano, 1/2 tsp chili flakes, 1/2 cup olive oil, 3 tbsp red wine vinegar, salt"
    ],
    "steps": [
      "Mix chimichurri ingredients. Let it sit while you cook.",
      "Grill or pan-fry sausages over medium heat, 12-15 minutes, turning.",
      "Butterfly the sausages, toast the rolls.",
      "Sausage in bread, spoon over plenty of chimichurri."
    ],
    "photo": {
      "src": "img/recipes/26.jpg",
      "author": "SimpleFoodie",
      "license": "Public domain",
      "source": "https://commons.wikimedia.org/wiki/File:Choripan.jpg"
    }
  },
  {
    "id": "27",
    "name": "Pão de Queijo (Blender Version)",
    "region": "Minas Gerais, Brazil",
    "why": "Chewy, cheesy bread puffs made from tapioca. Addictive and gluten-free.",
    "time": "30 min",
    "serves": "3 (makes ~24 mini)",
    "ingredients": [
      "1.5 cups tapioca flour (tapioca starch)",
      "2/3 cup milk",
      "1/3 cup oil",
      "1 egg",
      "1 cup grated parmesan (or half parmesan, half mozzarella)",
      "1 tsp salt"
    ],
    "steps": [
      "Heat oven to 400°F. Grease a mini muffin pan.",
      "Blend everything until smooth.",
      "Fill muffin cups about 3/4 full.",
      "Bake 15-20 minutes until puffed and golden. Eat warm."
    ],
    "photo": {
      "src": "img/recipes/27.jpg",
      "author": "Murilo manzini",
      "license": "CC BY-SA 4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Cheesebread.jpg"
    }
  },
  {
    "id": "28",
    "name": "Rice and Peas",
    "region": "Jamaica",
    "why": "Rice cooked in coconut milk with kidney beans, thyme, and a whole scotch bonnet.",
    "time": "35 min",
    "serves": "4",
    "ingredients": [
      "1 can red kidney beans, with liquid",
      "1 can (13.5 oz) coconut milk",
      "1.5 cups long-grain rice, rinsed",
      "2 green onions, smashed; 2 garlic cloves, smashed",
      "3 sprigs thyme (or 1 tsp dried), 1/2 tsp allspice",
      "1 whole scotch bonnet (do not cut it — it adds aroma, not fire)",
      "Salt"
    ],
    "steps": [
      "In a pot, combine beans with liquid, coconut milk, onion, garlic, thyme, allspice, salt. Add water to total about 3 cups liquid.",
      "Bring to a boil, add rice and the whole pepper.",
      "Cover, simmer on low 20-25 minutes until rice is tender.",
      "Remove pepper and thyme stems. Fluff."
    ],
    "photo": {
      "src": "img/recipes/28.jpg",
      "author": "Whispyhistory and Hike395",
      "license": "CC BY-SA 4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Rice_and_Peas.jpg"
    }
  },
  {
    "id": "29",
    "name": "Loco Moco",
    "region": "Hawaii (Hilo)",
    "why": "Rice, burger patty, fried egg, brown gravy. Local plate-lunch legend.",
    "time": "25 min",
    "serves": "2",
    "ingredients": [
      "2 cups cooked white rice",
      "2 hamburger patties (about 1/3 lb each), salted",
      "2 eggs",
      "Gravy: 2 tbsp butter, 2 tbsp flour, 1.5 cups beef broth, 1 tsp soy sauce, 1 tsp Worcestershire, pepper",
      "Green onions"
    ],
    "steps": [
      "Sear patties to your liking. Remove, keep the pan.",
      "Melt butter in the pan, whisk in flour 1 minute, then broth, soy, Worcestershire. Simmer until thick.",
      "Fry eggs sunny-side up.",
      "Stack: rice, patty, egg, smother in gravy, green onions on top."
    ],
    "photo": {
      "src": "img/recipes/29.jpg",
      "author": "California Cow from Seattle, USA",
      "license": "CC BY 2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Loco_moco_(32605169782).jpg"
    }
  },
  {
    "id": "30",
    "name": "Za'atar Manakish (Pita Shortcut)",
    "region": "Lebanon / Levant",
    "why": "Flatbread with a herby, tangy thyme-sesame-sumac blend. Beirut's morning ritual.",
    "time": "10 min",
    "serves": "2",
    "ingredients": [
      "2 large pitas or flatbreads",
      "3 tbsp za'atar",
      "4 tbsp olive oil",
      "Toppings: sliced tomato, cucumber, mint, labneh or thick Greek yogurt"
    ],
    "steps": [
      "Heat oven to 425°F.",
      "Mix za'atar and olive oil into a paste. Spread over pitas.",
      "Bake 6-8 minutes until edges crisp.",
      "Top with tomato, cucumber, mint, dollops of labneh. Roll up or eat flat."
    ],
    "photo": {
      "src": "img/recipes/30.jpg",
      "author": "Elie.ghob",
      "license": "CC BY-SA 4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Zaatar_Mankousheh.jpg"
    }
  },
  {
    "id": "31",
    "name": "Syrniki",
    "region": "Ukraine / Russia / Eastern Europe",
    "why": "Little fried cheese pancakes, crisp outside and custardy inside.",
    "time": "25 min",
    "serves": "2 (makes ~8)",
    "ingredients": [
      "1 lb farmer's cheese (tvorog) or very well-drained ricotta",
      "1 egg",
      "2 tbsp sugar, pinch salt",
      "1/3 cup flour, plus more for dusting",
      "Butter or oil for frying",
      "Sour cream, jam, or honey"
    ],
    "steps": [
      "Mash cheese smooth. Mix in egg, sugar, salt, flour.",
      "With floured hands, form 8 thick patties, dust in flour.",
      "Fry in butter over medium-low, 3-4 minutes per side until golden.",
      "Serve with sour cream and jam."
    ],
    "photo": {
      "src": "img/recipes/31.jpg",
      "author": "Tatyana Morozyuk, color processing by Off-shell",
      "license": "CC BY-SA 3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Syrniki6.jpg"
    }
  },
  {
    "id": "32",
    "name": "Okonomiyaki (Simple Osaka Style)",
    "region": "Osaka, Japan",
    "why": "A savory cabbage pancake. \"Okonomi\" means \"whatever you like,\" which is perfect for the indecisive.",
    "time": "25 min",
    "serves": "2",
    "ingredients": [
      "3/4 cup flour",
      "1/2 cup water or dashi",
      "2 eggs",
      "4 cups finely shredded cabbage",
      "2 green onions, sliced",
      "4 strips bacon or thinly sliced pork belly",
      "Toppings: okonomiyaki sauce (or ketchup + Worcestershire mixed), Japanese mayo (Kewpie), bonito flakes and aonori if you can find them"
    ],
    "steps": [
      "Whisk flour, water, eggs. Fold in cabbage and green onion.",
      "Pour half into an oiled pan over medium heat, shape into a thick round. Lay bacon on top.",
      "Cook 5 minutes, flip, cook 5 more until the bacon is crisp and center is set.",
      "Repeat. Paint with sauce, zigzag mayo, sprinkle bonito and aonori."
    ],
    "photo": {
      "src": "img/recipes/32.jpg",
      "author": "ume-y",
      "license": "CC BY 2.0",
      "source": "https://commons.wikimedia.org/wiki/File:Okonomiyaki_001.jpg"
    }
  }
];

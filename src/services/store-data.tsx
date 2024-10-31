const products = [
  {
    id: 1,
    category: "toy",
    emoji: "🐶",
    image: "./src/img/shop1.jpeg",
    name: "Interactive Treat Dispensing Toy",
    stars: "⭐⭐⭐⭐",
    description:
      "This toy not only keeps your pet active and entertained, but it also strengthens the bond between you and your pet, creating moments of fun and connection. This Interactive Treat Dispensing Toy for Pets in the shape of a flying saucer is a perfect tool to keep your pet active and entertained. This toy not only provides fun, but it also stimulates your pet's mind by challenging them to chase and catch the flying saucer while getting treats or food. With its durable and sturdy design, this toy is ideal for dogs and cats of all ages and sizes, promoting physical and mental exercise for a healthier and happier life.",
    price: 12.99,
  },
  {
    id: 2,
    category: "food",
    emoji: "🐱",
    image: "./src/img/shop2.webp",
    name: "Go! Sensitivities limited ingredient grain free duck recipe for cats x 3.7 kg",
    stars: "⭐⭐⭐⭐⭐",
    description: "This GO! SENSITIVITIES recipe for all stages is ideal for cats with special nutritional needs such as food allergies and sensitive stomachs. It contains premium duck as its only source of protein and is free of grains, gluten, potato, wheat, corn or soy.",
    price: 25.5,
  },
  {
    id: 3,
    category: "medicine",
    emoji: "🐶",
    image: "./src/img/shop3.webp",
    name: "Orenda dermatological x 100 gr",
    stars: "⭐⭐⭐",
    description: "Antiseptic, repellent and healing cream, with natural extracts.",
    price: 15.75,
  },
  {
    id: 4,
    category: "clothes",
    emoji: "🐱",
    image: "./src/img/shop4.webp",
    name: "Cat Clothes, Warm Sweater",
    stars: "⭐⭐⭐⭐",
    description: "Delicate cat sweater, soft, warm and easy to put on, ideal for cold days.",
    price: 18.0,
  },
  {
    id: 5,
    category: "toy",
    emoji: "🐶",
    image: "./src/img/shop5.webp",
    name: "Balls and Rope Throws Exercise Antitartar Blue Color",
    stars: "⭐⭐⭐⭐",
    description: "Attention dog lovers! The Dog Toy with 2 Balls and Knotted Rope is your furry friend's favorite. Perfect for medium and large breeds, this interactive toy is not just a fun object, it's an all-in-one. Its colorful and knotted design will instantly capture your dog's attention, stimulating physical and mental activity. Throw the ball and let the fun begin! Its special texture helps clean teeth and fight tartar, the durable material strengthens jaws during play and it's made of material that you can easily wash.",
    price: 9.99,
  },
  {
    id: 6,
    category: "food",
    emoji: "🐶",
    image: "./src/img/shop6.webp",
    name: "PEDIGREE Grilled Beef & Veggies Adult Dry Dog Food, 18 lb Bag",
    stars: "⭐⭐⭐⭐⭐",
    description: " Ground Whole Grain Corn, Meat and Bone Meal, Soybean Meal, Animal Fat (Source of Omega 6 Fatty Acids [Preserved with BHA & Citric Acid]), Corn Gluten Meal, Natural Flavor, Dried Plain Beet Pulp, Chicken Byproduct Meal, Salt, Ground Whole Grain Wheat, Brewers Rice, Potassium Chloride, Calcium Carbonate, Choline Chloride, Dried Peas, DL-Methionine, Natural Grilled Steak Flavor, Zinc Sulfate, Yellow 6, Monocalcium Phosphate, Vitamin E Supplement, L-Tryptophan, Yellow 5, Red 40, Blue 2, Dried Carrots, Niacin Supplement (Vitamin B3), Copper Sulfate, Sodium Selenite, Potassium Iodide, D-Calcium Pantothenate (Source of Vitamin B5), Vitamin A Supplement, Riboflavin Supplement (Vitamin B2), Vitamin B12 Supplement, Thiamine Mononitrate (Vitamin B1), Vitamin D3 Supplement, Pyridoxine Hydrochloride (Vitamin B6), Folic Acid.",
    price: 30.99,
  },
  {
    id: 7,
    category: "medicine",
    emoji: "🐱",
    image: "./src/img/shop7.webp",
    name: "Total Antiparasitic FLC Cats - Blister",
    stars: "⭐⭐⭐⭐",
    description: "Total FLC is a broad-spectrum internal antiparasitic for cats that is formulated for the control and treatment of cestodes, nematodes and giardia that can affect our dogs. Contains 1 blister with 2 tablets.",
    price: 8.5,
  },
  {
    id: 8,
    category: "clothes",
    emoji: "🐶",
    image: "./src/img/shop8.webp",
    name: "Orange Pet Hooded Bag – Ref. 1000",
    stars: "⭐⭐⭐",
    description: "Keep your pet warm and stylish with our hooded pet coat. Made from high-quality materials and designed with a leash opening, it's perfect for any occasion. Order now and keep your furry companion warm on cold days!",
    price: 22.3,
  },
  {
    id: 9,
    category: "toy",
    emoji: "🐱",
    image: "./src/img/shop9.avif",
    name: "Laser pointer for cats",
    stars: "⭐⭐⭐⭐⭐",
    description: "White cat paw shaped laser 5 different laser designs in one heart, bone, paw print, fish, mouse. Red laser color USB rechargeable It is an excellent toy to entertain your pet. Remember to avoid your pet's frustration by sharing a delicious snack after or during the game with the laser.",
    price: 7.99,
  },
  {
    id: 10,
    category: "food",
    emoji: "🐶",
    image: "./src/img/shop10.webp",
    name: "Smartbones Dog Treats Chicken Bones 16pcs",
    stars: "⭐⭐⭐⭐⭐",
    description: "Your dog won't be able to resist the exquisite flavour of Smartbones Chicken Mini premium snacks. They are made with vegetables and have an inner layer of chicken that will brighten up your canine friend's days.",
    price: 12.0,
  },
  {
    id: 11,
    category: "medicine",
    emoji: "🐶",
    image: "./src/img/shop11.jpg",
    name: "NexGard Flea Control for Dogs from 2 to 4 Kg",
    stars: "⭐⭐⭐⭐",
    description: "Supplements to promoteNexGard® is a new dimension in protection for your pets and the most complete prescription designed for effective control and prevention against fleas and ticks, preferred by pets over other products, thanks to its irresistible beef flavor.",
    price: 20.99,
  },
  {
    id: 12,
    category: "clothes",
    emoji: "🐱",
    image: "./src/img/shop12.webp",
    name: "Bonaweite Sphynx - Cat Clothes, Cat Sweaters",
    stars: "⭐⭐⭐",
    description: "Sphynx cat clothes are made of breathable and soft cotton, skin-friendly, comfortable for daily wear.",
    price: 15.25,
  },
  {
    id: 13,
    category: "toy",
    emoji: "🐶",
    image: "./src/img/shop13.webp",
    name: "Flying Boomerang Sound Frisbee Dog Toy",
    stars: "⭐⭐⭐⭐",
    description: "Boomerang style pet frisbee, durable, rubber for your pet to play with all day long.",
    price: 5.99,
  },
  {
    id: 14,
    category: "food",
    emoji: "🐱",
    image: "./src/img/shop14.webp",
    name: "Churu Assorted Seafood 20 Tubes",
    stars: "⭐⭐⭐⭐",
    description: "Discover the irresistible Churu Seafood Variety, a feast of ocean flavors specially designed to delight your feline. This pack of 20 tubes comes with a gourmet selection that includes 5 tubes with the rich flavor of salmon, 5 tubes with shrimp for an intense flavor experience, 5 tubes with a seafood flavor that evokes the freshness of the sea, and 5 tubes with bonito flakes, a delight that will make your cat purr with pleasure. Presented by Inaba, a trusted brand in feline nutrition, the CHURU line is synonymous with quality and satisfaction. This Seafood assortment is the perfect gift for cats of any age, providing not only a moment of joy but also a way to enrich their diet with flavors they love.",
    price: 16.5,
  },
  {
    id: 15,
    category: "medicine",
    emoji: "🐶",
    image: "./src/img/shop15.webp",
    name: "Combo Omegas 3,6 and 9 + Multivitamin Mungos Dogs",
    stars: "⭐⭐⭐⭐⭐",
    description: "Niacinamide – vit b3 175 mg pantothenic acid vit b5 248 mg pyridoxine vit b6 93 mg riboflavin vit b2 37 mg thiamine vit b1 26 mg retinol vit a 7000 mcg cyanocobalamin vit b12 1300 mcg dl alphatocopherol vit e 8.8 iu/g ascorbic acid vit c 1000 mg vitamin.",
    price: 13.99,
  },
  {
    id: 16,
    category: "clothes",
    emoji: "🐶",
    image: "./src/img/shop16.jpg",
    name: "Car bed for dogs",
    stars: "⭐⭐⭐⭐",
    description: "This car-shaped dog bed combines fun and comfort in a unique design. Ideal for small and medium-sized dogs, it offers a cozy place where your pet can rest while looking like the driver of his own vehicle. With realistic details such as wheels and decorative headlights, this bed is made of soft and resistant materials, providing adequate support for your dog's rest. The cushion is removable and washable, making cleaning easy. Perfect for owners looking for an original and functional touch for their pet's space.",
    price: 99.99,
  },
  {
    id: 17,
    category: "toy",
    emoji: "🐱",
    image: "./src/img/shop17.webp",
    name: "Mouse toy",
    stars: "⭐⭐⭐⭐",
    description: "This cat toy mouse is the perfect companion to keep your feline entertained and active. Designed with soft yet durable materials, its texture and size simulate a real mouse, awakening your cat's hunting instinct. It includes a movement or sound mechanism that captures your cat's attention and invites him to play for hours. Lightweight and easy to catch, this toy is ideal for interactive play sessions or for your cat to have fun on its own. A must-have accessory to stimulate your pet's curiosity and physical activity!",
    price: 10.90,
  },
  {
    id: 18,
    category: "toy",
    emoji: "🐱",
    image: "./src/img/shop18.jpeg",
    name: "Fish toy for cat",
    stars: "⭐⭐⭐⭐",
    description:"This cat fish toy is designed to awaken your feline's natural hunting instincts. With a realistic shape and vibrant colors, it mimics the look and movement of a fish, making your cat feel attracted to chase and catch its prey. Made of soft but resistant materials, it includes a texture ideal for scratching and biting. In addition, some models incorporate movements or vibrations to simulate the swimming of a fish, increasing the fun. It is perfect for keeping your cat entertained, active and mentally stimulated. A must-have gift for any curious feline",
    price: 2.90
  },
  {
    id: 19,
    category: "toy",
    emoji: "🐶",
    image: "./src/img/shop19.jpg",
    name: "Interactive toy with prizes",
    stars: "⭐⭐⭐⭐",
    description:"This interactive dog toy is perfect for keeping your pet entertained and mentally stimulated. Designed to release treats or kibble as your dog plays, this toy offers a fun challenge that keeps him busy for hours. With adjustable slots, you can regulate the difficulty to suit your dog's abilities, making it an ideal game for dogs of all ages and sizes. Made from strong, safe materials, it's easy to clean and perfect for reinforcing good behaviour. A must-have accessory for motivating, training and rewarding your furry companion!",
    price: 15.00
  },
  {
    id: 20,
    category: "toy",
    emoji: "🐶",
    image: "./src/img/shop20.avif",
    name: "Cocodrile chewing toy",
    stars: "⭐⭐⭐⭐⭐",
    description:"This crocodile chew toy is perfect for satisfying your dog's natural chewing instinct while taking care of their dental health. Made from durable, non-toxic materials, its sturdy design is ideal for dogs of all breeds and sizes who enjoy biting hard. The crocodile's rough texture helps clean your dog's teeth and gums, promoting better oral hygiene and reducing tartar buildup. Plus, its fun, realistic shape will keep your pet entertained for hours. A sturdy and functional toy your dog will love!",
    price: 10.30
  },
  {
    id: 21,
    category: "clothes",
    emoji: "🐶",
    image: "./src/img/shop21.webp",
    name: "Blue small cardigan for dogs",
    stars: "⭐⭐⭐⭐",
    description:"This adorable blue dog cardigan for small dogs is the perfect combination of style and comfort. Made from soft, breathable materials, it's ideal for keeping your pet warm during cooler days without compromising their freedom of movement. Its button-front design makes it easy to put on and take off, while the snug fit ensures it stays in place during walks or naps. Featuring a stylish blue hue, this cardigan adds a fashionable touch to any occasion, whether it's a stroll in the park or a family gathering. Your dog will be comfortable and fashionable!",
    price: 25.20
  },
  {
    id: 22,
    category: "clothes",
    emoji: "🐶",
    image: "./src/img/shop22.jpg",
    name: "Elegant shirt for dogs",
    stars: "⭐⭐⭐⭐",
    description:"This elegant checked shirt with a bow tie for dogs is perfect for making your pet look sophisticated on any special occasion. Made from lightweight and comfortable materials, this garment offers a soft and snug fit, ideal for small and medium-sized dogs. The classic checked design gives it a timeless touch, while the black bow tie completes the look, adding an air of formality and style. Easy to put on thanks to its snap buttons, this shirt is perfect for events, photo shoots or just to make your dog look adorable at any time. Elegance and comfort in one outfit!",
    price: 10.30
  },
  {
    id: 23,
    category: "clothes",
    emoji: "🐱",
    image: "./src/img/shop23.jpg",
    name: "Hallowen costume for cats",
    stars: "⭐⭐⭐⭐",
    description:"Este disfraz de Chucky para gato es ideal para darle a tu felino un toque aterrador y divertido en Halloween o cualquier ocasión especial. El conjunto incluye una camiseta con tirantes que imita el icónico atuendo del personaje, con una camiseta de rayas y un peto de mezclilla. Además, lleva un cuchillo de juguete suave que parece estar en las manos de tu gato cuando camina. Fabricado con materiales ligeros y cómodos, este disfraz no limita la movilidad de tu mascota y es fácil de poner y quitar. ¡Convierte a tu gato en el protagonista de una película de terror con este disfraz único y lleno de personalidad!",
    price: 40.00
  },
  {
    id: 24,
    category: "clothes",
    emoji: "🐱",
    image: "./src/img/shop24.jpg",
    name: "Hoodie for cats",
    stars: "⭐⭐⭐⭐",
    description:"This cat hoodie is the perfect piece of clothing to keep your feline warm and stylish. Made from soft and comfortable materials, this hoodie offers a relaxed fit that doesn't restrict your pet's mobility. The design includes a functional hood, which adds a modern and fun touch, ideal for cats who enjoy being comfortable on cold days. Available in various colors, this hoodie is easy to put on thanks to its sleeveless design, making it a practical choice for everyday wear or for photo shoots. Your cat will look adorable and comfortable in this casual hoodie!",
    price: 13.10
  },
  {
    id: 25,
    category: "clothes",
    emoji: "🐱",
    image: "./src/img/shop25.jpg",
    name: "Christmas coat for cats",
    stars: "⭐⭐⭐⭐",
    description:"This Christmas coat for cats is the perfect festive outfit to get your feline in the holiday spirit! Made with soft, plush fabric, this coat keeps your cat warm and cozy during the colder months. The design features classic holiday colors like red and white, with faux fur trim around the edges for an extra festive touch. It includes a simple Velcro closure, making it easy to put on and take off without discomfort. Whether for family photos, holiday parties, or just lounging around the house, this Christmas coat will make your cat the star of the season!",
    price: 30.00
  },
  {
    id: 26,
    category: "food",
    emoji: "🐱",
    image: "./src/img/shop26.jpg",
    name: "Wet for for kittens",
    stars: "⭐⭐⭐⭐",
    description:"Whiskas offers a delightful range of wet food specially formulated for baby cats, ensuring they receive the essential nutrients needed for healthy growth and development. This tasty wet food is rich in high-quality protein, vitamins, and minerals, promoting strong muscles and a shiny coat. With a variety of flavors, such as chicken, fish, and beef, your little feline will enjoy mealtime while savoring every bite. The convenient packaging makes it easy to serve, and the soft, tender texture is perfect for young kittens who are transitioning from milk to solid food. Give your baby cat the delicious and nutritious meal they deserve with Whiskas wet food!",
    price: 10.30
  },
  {
    id: 27,
    category: "food",
    emoji: "🐱",
    image: "./src/img/shop27.jpg",
    name: "Scrumble for kittens and cats",
    stars: "⭐⭐⭐⭐",
    description:"Scrumbles is a delicious wet cat food, specifically designed to meet the nutritional needs of your felines. Made with high-quality, natural ingredients, Scrumbles offers a perfect combination of protein and essential nutrients to keep your cat healthy and happy. Its soft, juicy texture is ideal for cats of all ages, especially those who prefer wet food. Plus, Scrumbles is free of artificial additives, making it a healthy and tasty choice. Available in a variety of flavors, each can of Scrumbles will have your cat licking their lips and reaching for more. Give your pet the flavor and nutrition they deserve with Scrumbles!",
    price: 16.10
  },
  {
    id: 28,
    category: "food",
    emoji: "🐶",
    image: "./src/img/shop28.webp",
    name: "Pedigree wet food adult",
    stars: "⭐⭐⭐⭐",
    description:"Pedigree wet food for adults is a nutritious and flavorful meal option for your dog, packed with essential vitamins and minerals to support their overall health. Made with high-quality ingredients, this wet food offers a delicious combination of real meat and wholesome vegetables, ensuring your furry friend enjoys every bite. The easy-to-open packaging makes mealtime convenient, while the soft texture is perfect for dogs who prefer wet food. Pedigree’s balanced recipes help maintain a healthy coat, strong teeth, and optimal digestion, making it an excellent choice for adult dogs. Treat your pet to a tasty and nutritious meal with Pedigree wet food!",
    price: 4.30
  },
  {
    id: 29,
    category: "food",
    emoji: "🐶",
    image: "./src/img/shop29.webp",
    name: "Henlo dog food chiken",
    stars: "⭐⭐⭐⭐",
    description:"Henlo dog food with chicken is a wholesome and nutritious option designed to keep your furry friend healthy and satisfied. Crafted with real chicken as the primary ingredient, this food provides high-quality protein essential for maintaining strong muscles and overall vitality. Henlo’s recipe is free from artificial additives and fillers, focusing instead on natural ingredients to promote optimal health. The crunchy kibble is not only tasty but also supports dental health by helping to reduce plaque and tartar buildup. Available in various sizes, Henlo dog food is perfect for dogs of all breeds and ages. Treat your dog to a delicious and balanced meal with Henlo chicken dog food!",
    price: 25.50
  },
  {
    id: 30,
    category: "food",
    emoji: "🐶",
    image: "./src/img/shop30.jpg",
    name: "Dog treats Beef Liver",
    stars: "⭐⭐⭐⭐",
    description:"These beef liver dog treats are a flavorful and nutritious snack that your furry friend will love! Made from high-quality, real beef liver, these treats are packed with protein and essential nutrients, making them an excellent choice for rewarding your dog or simply showing them some love. The rich, meaty flavor is irresistible, ensuring your dog will be excited for training sessions, playtime, or just as a special treat. Naturally low in fat and free from artificial additives, these beef liver treats are a healthy option for dogs of all sizes and ages. Give your pet a tasty and wholesome snack that they’ll wag their tail for with these delicious beef liver dog treats!",
    price: 5.10
  },
];

export default products;

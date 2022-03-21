const mealCategories = [
  {
    id: 1,
    img:
      "https://media.istockphoto.com/photos/serbian-minced-meat-dish-with-rice-picture-id1313289366?k=20&m=1313289366&s=612x612&w=0&h=liFF0tVTCppz-FQmmkzBRzC_X8NGWXtNFDFa6XeNvWc=",
    meal_category: "Rice",
    calories: "650 Calories",
    nutriScore: "NutriScore &reg; 74",
    ratings: "Ratings 4.9",
  },
  {
    id: 2,
    img:
      "https://media.istockphoto.com/photos/serbian-minced-meat-dish-with-rice-picture-id1313289366?k=20&m=1313289366&s=612x612&w=0&h=liFF0tVTCppz-FQmmkzBRzC_X8NGWXtNFDFa6XeNvWc=",
    meal_category: "Protein",
    calories: "650 Calories",
    nutriScore: "NutriScore &reg; 74",
    ratings: "Ratings 4.9",
  },

  {
    id: 3,
    img:
      "https://media.istockphoto.com/photos/eba-picture-id1348239618?k=20&m=1348239618&s=612x612&w=0&h=OPAQ5XkVBu9zLpIGuWIZ_JIzupDwPmlIXeYQEIEGWOY=",
    meal_category: "Swallow",
    calories: "650 Calories",
    nutriScore: "NutriScore &reg; 74",
    ratings: "Ratings 4.9",
  },
];

const items = [
  {
    id: 1,
    title: " Fried Rice",
    category: "Rice",
    price: 1500,
    img:
      "https://media.istockphoto.com/photos/shrimp-fried-rice-picture-id185016452?k=20&m=185016452&s=612x612&w=0&h=yoEze6pmeWbIUhyJvFZxYhucXKtJ2FSEGb7Ui-Ld-VM=",
    desc: `Top Notch fried rice prepared with minimal pepper`,
  },
  {
    id: 2,
    title: "Jollof Rice",
    category: "Rice",
    price: 13.99,
    img:
      "https://media.istockphoto.com/photos/fried-rice-with-fried-spiced-ham-picture-id1327106892?b=1&k=20&m=1327106892&s=170667a&w=0&h=cfRI1jtv5nQFFetEtY6eCAC-uA1Iw_f3v4owg5lCM1U=",
    desc: `vaporware iPhone mumblecore selvage raw denim`,
  },
  {
    id: 3,
    title: "Coconut Rice",
    category: "Rice",
    price: 6.99,
    img:
      "https://images.unsplash.com/photo-1596560548464-f010549b84d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZnJpZWQlMjByaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art pho`,
  },
  {
    id: 4,
    title: "Yam and Egg sauce",
    category: "Yam",
    price: 20.99,
    img: "https://i.ytimg.com/vi/LnfeYXsFi2Y/maxresdefault.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork bell`,
  },
  {
    id: 5,
    title: "Yam and Fish stew",
    category: "Yam",
    price: 22.99,
    img:
      "https://img-global.cpcdn.com/recipes/125b8abf27c38114/680x482cq70/fried-yam-with-fish-and-egg-sauce-recipe-main-photo.jpg",
    desc: `franzen vegan pabst bicycle rights`,
  },
  {
    id: 6,
    title: "Bush Meat",
    category: "Protein",
    price: 5000,
    img:
      "https://1.bp.blogspot.com/-MGn77TgmtG0/XRAj4KAL3XI/AAAAAAAARxk/EWEz1cKIqbgCldYChIc-Fz0KW4TGlExvQCKgBGAs/s1600/IMG_20190616_154420.jpg",
    desc: `Portland chicharrones ethical `,
  },
  {
    id: 7,
    title: "Chicken",
    category: "Protein",
    price: 1800,
    img:
      "https://www.simplyrecipes.com/thmb/7KwExJ0ZbVEmlxBaMsgmrBTi9M4=/4667x3111/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Grilled-BBQ-Chicken-LEAD-10-03fd9892eaae4ce1a8a3f4c949657cfd.jpg",
    desc: `carry jianbing normcore freegan`,
  },
  {
    id: 8,
    title: "Turkey",
    category: "Protein",
    price: 2500,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnKcSSVTKBhgg8wG1tFfEICKT7h1gvXzPpcw&usqp=CAU",
    desc: `on it tumblr kickstarter thundercats `,
  },
  {
    id: 9,
    title: "Cat fish peppersoup",
    category: "pepperSoup",
    price: 16.99,
    img:
      "https://media.istockphoto.com/photos/asia-thailand-asian-and-indian-ethnicities-backgrounds-catfish-picture-id1301540338?k=20&m=1301540338&s=612x612&w=0&h=ebI_O8QojAISfKemHVmMSgcLbaLXhKjMOvRw8rMv3Gg=",
    desc: `skateboard fam synth authentic semiotics.`,
  },
  {
    id: 10,
    title: "Goat meat peppersoup",
    category: "pepperSoup",
    price: 16.99,
    img:
      "https://guardian.ng/wp-content/uploads/2019/07/Goat-Meat-Peppersoup-Wazobia-African-Market.jpg",
    desc: `skateboard fam synth au`,
  },
  {
    id: 11,
    title: "Cocacola",
    category: "Drink",
    price: 16.99,
    img:
      "https://www.u-buy.com.ng/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzF4bWMybmQ4MkwuX1NMMTUwMF8uanBn.jpg",
    desc: `skateboard fam synth authentic `,
  },
  {
    id: 12,
    title: "Origin beer",
    category: "Drink",
    price: 16.99,
    img:
      "data:image/jpeg;base64,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",
    desc: `skateboard fam synth authentic semiotic`,
  },
];

export { mealCategories, items };

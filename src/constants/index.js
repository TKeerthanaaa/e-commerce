const categories = [
  {
    id: 1,
    title: "Watches",
    imageUrl:
      "https://images.meesho.com/images/products/10513822/kl06p_512.webp",
  },
  {
    id: 2,
    title: "Glasses",
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/304/985/271/sunglasses-drops-dark-wallpaper-preview.jpg",
  },
  {
    id: 3,
    title: "Wallets",
    imageUrl:
      "https://i.etsystatic.com/26080195/r/il/f48c48/4783973214/il_fullxfull.4783973214_sfjn.jpg",
  },
  {
    id: 4,
    title: "Camera",
    imageUrl:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGFyayUyMGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 5,
    title: "Belts",
    imageUrl:
      "https://images.unsplash.com/photo-1667284152843-024e91829ad3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&w=1000&q=80",
  },
  {
    id: 6,
    title: "Shoes",
    imageUrl:
      "https://images.unsplash.com/photo-1588361861040-ac9b1018f6d5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNuZWFrZXJ8ZW58MHx8MHx8fDA%3D",
  },
];

const PRODUCTS = [
  {
    id: 1,
    name: "Tissot",
    imageUrl:
      "https://images.meesho.com/images/products/10513822/kl06p_512.webp",
    price: 1225,
  },
  {
    id: 2,
    name: "Wenger",
    imageUrl:
      "https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d3Jpc3R3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
    price: 2559,
  },
  {
    id: 3,
    name: "APSER",
    imageUrl:
      "https://images.unsplash.com/photo-1619134778706-7015533a6150?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdhdGNoZXN8ZW58MHx8MHx8fDA%3D",
    price: 1750,
  },
  {
    id: 4,
    name: "OMEGA",
    imageUrl:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdhdGNoZXN8ZW58MHx8MHx8fDA%3D",
    price: 2999,
  },
  {
    id: 5,
    name: "Kronaby",
    imageUrl:
      "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdhdGNoZXN8ZW58MHx8MHx8fDA%3D",
    price: 1355,
  },
  {
    id: 6,
    name: "Maurice Lacroix",
    imageUrl:
      "https://cdn.pixabay.com/photo/2017/03/20/15/13/wrist-watch-2159351_640.jpg",
    price: 1250,
  },
  {
    id: 7,
    name: "FOSSIL",
    imageUrl:
      "https://images.unsplash.com/photo-1539874754764-5a96559165b0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdhdGNofGVufDB8fDB8fHww",
    price: 1750,
  },

  {
    id: 8,
    name: "Ray-Ban",
    imageUrl:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VuZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D",
    price: 899,
  },
  {
    id: 9,
    name: "Warby Parker",
    imageUrl: "https://m.media-amazon.com/images/I/41Ud1LciGKL._AC_UY1100_.jpg",
    price: 499,
  },
  {
    id: 10,
    name: "Prada",
    imageUrl:
      "https://www.hansensurf.com/cdn/shop/products/DSC_5696-square_1800x1800_a69a99d0-ef9b-4056-bd95-86fd858f4947_grande.jpg?v=1658954920",
    price: 599,
  },
  {
    id: 11,
    name: "Oakley",
    imageUrl:
      "https://img.ltwebstatic.com/images3_pi/2022/09/13/166303187611f17a9c49067ed836261c43efc6c6cf.webp",
    price: 899,
  },
  {
    id: 12,
    name: "GUCCI",
    imageUrl:
      "https://5.imimg.com/data5/ANDROID/Default/2021/2/KM/AI/YF/74947638/product-jpeg.jpg",
    price: 759,
  },
  {
    id: 13,
    name: "Calvin Klein",
    imageUrl:
      "https://assets.ajio.com/medias/sys_master/root/20230706/z0GG/64a660f0eebac147fc514765/-288Wx360H-466249705-black-MODEL.jpg",
    price: 989,
  },
  {
    id: 14,
    name: "Carrera",
    imageUrl:
      "https://assets.ajio.com/medias/sys_master/root/20230807/2wdJ/64d110eeeebac147fcaf1919/-288Wx360H-469186805-black-MODEL.jpg",
    price: 769,
  },

  {
    id: 15,
    name: "Gucci",
    imageUrl:
      "https://media.istockphoto.com/id/1424891365/photo/two-leather-mens-wallets-on-a-textured-wooden-background-one-wallet-is-open-the-other-is.webp?b=1&s=170667a&w=0&k=20&c=RYJRcU865MVDzwJ2COsW7a_HpMVhbkMaFBAp6lU1DGw=",
    price: 299,
  },
  {
    id: 16,
    name: "Bellroy",
    imageUrl:
      "https://media.istockphoto.com/id/1196955031/photo/close-up-of-wallet-green-color-genuine-leather-texture-with-banknotes-and-credit-card-inside.webp?b=1&s=170667a&w=0&k=20&c=amfqwSriJrIpvx2zq4Ndu5d-C26VCUwKND3WkcbHiPA=",
    price: 499,
  },
  {
    id: 17,
    name: "Louis Vuitton",
    imageUrl:
      "https://images.unsplash.com/photo-1620109176813-e91290f6c795?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 259,
  },
  {
    id: 18,
    name: "Tommy Hilfiger",
    imageUrl:
      "https://www.yoderleather.com/cdn/shop/products/bifold-shark2_grande.jpg?v=1468478991",
    price: 399,
  },
  {
    id: 19,
    name: "Burberry",
    imageUrl:
      "https://media.istockphoto.com/id/530659673/photo/brown-leather-wallet.webp?b=1&s=170667a&w=0&k=20&c=aztPbWxUx_LP9pT9sdN7OOx9EXtNnkKg6iWGwaBOcbI=",
    price: 359,
  },
  {
    id: 20,
    name: "MONT BLANC",
    imageUrl:
      "https://png.pngtree.com/background/20230426/original/pngtree-leather-wallet-with-a-button-laying-on-top-of-an-object-picture-image_2488033.jpg",
    price: 380,
  },
  {
    id: 21,
    name: "Dior",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9KudPo7O4C-bCouH4wyy85mDVGSB3xyf3FQ&usqp=CAU",
    price: 269,
  },

  {
    id: 22,
    name: "Canon",
    imageUrl:
      "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D",
    price: 35000,
  },
  {
    id: 23,
    name: "Fujifilm",
    imageUrl:
      "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtZXJhfGVufDB8fDB8fHww",
    price: 20599,
  },
  {
    id: 24,
    name: "Kodak",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbKaEuTuMDpcR1p3VmKObUDE--hVXAyuYWrQ&usqp=CAU",
    price: 25899,
  },
  {
    id: 25,
    name: "Sony",
    imageUrl:
      "https://s01.sgp1.cdn.digitaloceanspaces.com/article/110301-zklxapdcqo-1547127551.jpg",
    price: 17000,
  },

  {
    id: 26,
    name: "Buckle belt",
    imageUrl:
      "https://rmkleatherworks.com/cdn/shop/products/RMK-Stitched-Leather-Belts.jpg?v=1661971430&width=2048",
    price: 250,
  },
  {
    id: 27,
    name: "Military belt",
    imageUrl:
      "https://rukminim1.flixcart.com/image/850/850/xif0q/belt/2/v/b/54-sl-03-01-sl-03-01-reversible-belt-zacharias-original-imaggutdn7ashyxq.jpeg?q=90",
    price: 368,
  },
  {
    id: 28,
    name: "Metal belt",
    imageUrl: "https://img.fruugo.com/product/8/70/692198708_max.jpg",
    price: 459,
  },
  {
    id: 29,
    name: "Cummerbund",
    imageUrl:
      "https://down-ph.img.susercontent.com/file/f13fd4c66cf54f3b62580ede4bbcfb7a",
    price: 256,
  },
  {
    id: 30,
    name: "Paul Smith",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRFyAUGf1GukaAJfEti1obOqURYWlUIlHjsA&usqp=CAU",
    price: 180,
  },

  {
    id: 31,
    name: "New Balance",
    imageUrl:
      "https://images.unsplash.com/photo-1616406432452-07bc5938759d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lbnMlMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D",
    price: 2500,
  },
  {
    id: 32,
    name: "Nike",
    imageUrl:
      "https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.webp?b=1&s=170667a&w=0&k=20&c=liUSgX6SafJ7HWvefFqR9-pnf3KuH6v1lwQ6iEpePWc=",
    price: 750,
  },
  {
    id: 33,
    name: "Adidas",
    imageUrl:
      "https://images.unsplash.com/photo-1588361861040-ac9b1018f6d5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5pa2UlMjBzbmVha2Vyc3xlbnwwfHwwfHx8MA%3D%3D",
    price: 850,
  },
  {
    id: 34,
    name: "Reebok",
    imageUrl: "https://miro.medium.com/v2/resize:fit:1400/0*_6-eIWfSa_5MGkmx",
    price: 700,
  },
  {
    id: 35,
    name: "Skechers",
    imageUrl: "https://miro.medium.com/v2/resize:fit:1400/0*_fjEzz_sDhC8mXn5",
    price: 680,
  },
  {
    id: 36,
    name: "Converse",
    imageUrl:
      "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNob2VzfGVufDB8fDB8fHww",
    price: 520,
  },
  {
    id: 37,
    name: "Clarks",
    imageUrl:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hvZXN8ZW58MHx8MHx8fDA%3D",
    price: 780,
  },
  {
    id: 38,
    name: "Puma",
    imageUrl:
      "https://5.imimg.com/data5/ANDROID/Default/2023/1/BI/FY/LH/99473167/product-jpeg-500x500.jpg",
    price: 780,
  },
  {
    id: 39,
    name: "Cuddl Duds",
    imageUrl:
      "https://images.meesho.com/images/products/100038347/hwxux_512.jpg",
    price: 780,
  },
  {
    id: 40,
    name: "Lamo",
    imageUrl:
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/t/i/u/-original-imagg3fny5d6hqr4.jpeg?q=90",
    price: 780,
  },
];

const SHOP_DATA = [
  {
    title: "Watches",
    items: [
      {
        id: 1,
        imageUrl:
          "https://images.unsplash.com/photo-1582150264904-e0bea5ef0ad1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d3Jpc3R3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
        price: 1225,
      },
      {
        id: 2,
        imageUrl:
          "https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d3Jpc3R3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
        price: 2559,
      },
      {
        id: 3,
        imageUrl:
          "https://images.unsplash.com/photo-1619134778706-7015533a6150?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdhdGNoZXN8ZW58MHx8MHx8fDA%3D",
        price: 1750,
      },
      {
        id: 4,
        imageUrl:
          "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdhdGNoZXN8ZW58MHx8MHx8fDA%3D",
        price: 2999,
      },
      {
        id: 5,
        imageUrl:
          "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdhdGNoZXN8ZW58MHx8MHx8fDA%3D",
        price: 1355,
      },
      {
        id: 6,
        imageUrl:
          "https://cdn.pixabay.com/photo/2017/03/20/15/13/wrist-watch-2159351_640.jpg",
        price: 1250,
      },
      {
        id: 7,
        imageUrl:
          "https://images.unsplash.com/photo-1539874754764-5a96559165b0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdhdGNofGVufDB8fDB8fHww",
        price: 1750,
      },
    ],
  },
  {
    title: "Glasses",
    items: [
      {
        id: 8,
        imageUrl:
          "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VuZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D",
        price: 899,
      },
      {
        id: 9,
        imageUrl:
          "https://m.media-amazon.com/images/I/41Ud1LciGKL._AC_UY1100_.jpg",
        price: 499,
      },
      {
        id: 10,
        imageUrl:
          "https://www.hansensurf.com/cdn/shop/products/DSC_5696-square_1800x1800_a69a99d0-ef9b-4056-bd95-86fd858f4947_grande.jpg?v=1658954920",
        price: 599,
      },
      {
        id: 11,
        imageUrl:
          "https://img.ltwebstatic.com/images3_pi/2022/09/13/166303187611f17a9c49067ed836261c43efc6c6cf.webp",
        price: 899,
      },
      {
        id: 12,
        imageUrl:
          "https://5.imimg.com/data5/ANDROID/Default/2021/2/KM/AI/YF/74947638/product-jpeg.jpg",
        price: 759,
      },
      {
        id: 13,
        imageUrl:
          "https://assets.ajio.com/medias/sys_master/root/20230706/z0GG/64a660f0eebac147fc514765/-288Wx360H-466249705-black-MODEL.jpg",
        price: 989,
      },
      {
        id: 14,
        imageUrl:
          "https://assets.ajio.com/medias/sys_master/root/20230807/2wdJ/64d110eeeebac147fcaf1919/-288Wx360H-469186805-black-MODEL.jpg",
        price: 769,
      },
    ],
  },
  {
    title: "Wallets",
    items: [
      {
        id: 15,
        imageUrl:
          "https://media.istockphoto.com/id/1424891365/photo/two-leather-mens-wallets-on-a-textured-wooden-background-one-wallet-is-open-the-other-is.webp?b=1&s=170667a&w=0&k=20&c=RYJRcU865MVDzwJ2COsW7a_HpMVhbkMaFBAp6lU1DGw=",
        price: 299,
      },
      {
        id: 16,
        imageUrl:
          "https://media.istockphoto.com/id/1196955031/photo/close-up-of-wallet-green-color-genuine-leather-texture-with-banknotes-and-credit-card-inside.webp?b=1&s=170667a&w=0&k=20&c=amfqwSriJrIpvx2zq4Ndu5d-C26VCUwKND3WkcbHiPA=",
        price: 499,
      },
      {
        id: 17,
        imageUrl:
          "https://images.unsplash.com/photo-1620109176813-e91290f6c795?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 259,
      },
      {
        id: 18,
        imageUrl:
          "https://www.yoderleather.com/cdn/shop/products/bifold-shark2_grande.jpg?v=1468478991",
        price: 399,
      },
      {
        id: 19,
        imageUrl:
          "https://media.istockphoto.com/id/530659673/photo/brown-leather-wallet.webp?b=1&s=170667a&w=0&k=20&c=aztPbWxUx_LP9pT9sdN7OOx9EXtNnkKg6iWGwaBOcbI=",
        price: 359,
      },
      {
        id: 20,
        imageUrl:
          "https://png.pngtree.com/background/20230426/original/pngtree-leather-wallet-with-a-button-laying-on-top-of-an-object-picture-image_2488033.jpg",
        price: 380,
      },
      {
        id: 21,
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9KudPo7O4C-bCouH4wyy85mDVGSB3xyf3FQ&usqp=CAU",
        price: 269,
      },
    ],
  },
  {
    title: "Camera",
    items: [
      {
        id: 22,
        imageUrl:
          "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D",
        price: 35000,
      },
      {
        id: 23,
        imageUrl:
          "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtZXJhfGVufDB8fDB8fHww",
        price: 20599,
      },
      {
        id: 24,
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbKaEuTuMDpcR1p3VmKObUDE--hVXAyuYWrQ&usqp=CAU",
        price: 25899,
      },
      {
        id: 25,
        imageUrl:
          "https://s01.sgp1.cdn.digitaloceanspaces.com/article/110301-zklxapdcqo-1547127551.jpg",
        price: 17000,
      },
      {
        id: 26,
        imageUrl:
          "https://images.unsplash.com/photo-1618397806877-f0187730803f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FtZXJhc3xlbnwwfHwwfHx8MA%3D%3D",
        price: 18000,
      },
    ],
  },
  {
    title: "Belts",
    items: [
      {
        id: 26,
        imageUrl:
          "https://rmkleatherworks.com/cdn/shop/products/RMK-Stitched-Leather-Belts.jpg?v=1661971430&width=2048",
        price: 250,
      },
      {
        id: 27,
        imageUrl:
          "https://rukminim1.flixcart.com/image/850/850/xif0q/belt/2/v/b/54-sl-03-01-sl-03-01-reversible-belt-zacharias-original-imaggutdn7ashyxq.jpeg?q=90",
        price: 368,
      },
      {
        id: 28,
        imageUrl: "https://img.fruugo.com/product/8/70/692198708_max.jpg",
        price: 459,
      },
      {
        id: 29,
        imageUrl:
          "https://down-ph.img.susercontent.com/file/f13fd4c66cf54f3b62580ede4bbcfb7a",
        price: 256,
      },
      {
        id: 30,
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRFyAUGf1GukaAJfEti1obOqURYWlUIlHjsA&usqp=CAU",
        price: 180,
      },
    ],
  },
  {
    title: "Shoes",
    items: [
      {
        id: 3,
        imageUrl:
          "https://images.unsplash.com/photo-1616406432452-07bc5938759d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lbnMlMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D",
        price: 2500,
      },
      {
        id: 32,
        imageUrl:
          "https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.webp?b=1&s=170667a&w=0&k=20&c=liUSgX6SafJ7HWvefFqR9-pnf3KuH6v1lwQ6iEpePWc=",
        price: 750,
      },
      {
        id: 33,
        imageUrl:
          "https://images.unsplash.com/photo-1588361861040-ac9b1018f6d5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5pa2UlMjBzbmVha2Vyc3xlbnwwfHwwfHx8MA%3D%3D",
        price: 850,
      },
      {
        id: 34,
        imageUrl:
          "https://miro.medium.com/v2/resize:fit:1400/0*_6-eIWfSa_5MGkmx",
        price: 700,
      },
      {
        id: 35,
        imageUrl:
          "https://miro.medium.com/v2/resize:fit:1400/0*_fjEzz_sDhC8mXn5",
        price: 680,
      },
      {
        id: 36,
        imageUrl:
          "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNob2VzfGVufDB8fDB8fHww",
        price: 520,
      },
      {
        id: 37,
        imageUrl:
          "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hvZXN8ZW58MHx8MHx8fDA%3D",
        price: 780,
      },
    ],
  },
  {
    title: "T-shirts",
    items: [
      {
        id: 38,
        imageUrl:
          "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHNoaXJ0fGVufDB8fDB8fHww",
        price: 599,
      },
      {
        id: 39,
        imageUrl:
          "https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/v/5/k/m-st-boxhead-black-smartees-original-imaggegtpgz5dhjj.jpeg?q=70",
        price: 250,
      },
      {
        id: 40,
        imageUrl:
          "https://i.pinimg.com/550x/b5/6a/2e/b56a2e62ca5f4f5012bc131b79f1b0aa.jpg",
        price: 270,
      },
      {
        id: 41,
        imageUrl:
          "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dCUyMHNoaXJ0fGVufDB8fDB8fHww",
        price: 300,
      },
      {
        id: 42,
        imageUrl:
          "https://www.mydesignation.com/wp-content/uploads/2020/01/grey-melange-plain-tshirt-mydesignation-unisex-image.jpg",
        price: 280,
      },
      {
        id: 43,
        imageUrl:
          "https://media.istockphoto.com/id/1166499523/photo/grey-tshirt-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=tE15VMrOSatMmNPlWq1g5Vi5eS5_mMCcZ9cDskemoJ8=",
        price: 220,
      },
      {
        id: 44,
        imageUrl:
          "https://filebroker-cdn.lazada.com.ph/kf/Sbeba8ea59ccd42759e76f44da4a2131aq.jpg",
        price: 360,
      },
    ],
  },
];

export { categories, PRODUCTS, SHOP_DATA };

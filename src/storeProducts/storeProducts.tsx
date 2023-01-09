import { IProductItem } from "../types";

const storeItems: IProductItem[] = [
  {
    id: 1,
    title: "iPhone 13 Pro",
    description:
      "6.1-inch Super Retina XDR display. Advanced dual-camera system for incredible low-light photos and videos. A15 Bionic with 4-core GPU for lightning-fast performance. Ceramic Shield, tougher than any smartphone glass. And water resistance. 5G for superfast downloads and high-quality streamingfootnote.",
    price: 1099,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "Smartphones",
    thumbnail:
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/1/thumbnail.jpg",
    images: [
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/1/1.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/1/2.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/1/3.jpg",
    ],
  },
  {
    id: 2,
    title: "Xiaomi 12 Pro",
    description:
      "Every precious moment in life deserves the best shot whether it's in motion or still, bright or dark.We are ready to make moments mega, and so should you.",
    price: 899,
    discountPercentage: 17.94,
    rating: 4.44,
    stock: 34,
    brand: "Xiaomi",
    category: "Smartphones",
    thumbnail:
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/2/thumbnail.jpg",
    images: [
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/2/1.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/2/2.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/2/3.jpg",
    ],
  },
  {
    id: 3,
    title: "Realme 10 4G",
    description:
      "Best performance in its class. The best display in its class. Best in class. Your need for power has been satisfied.",
    price: 249,
    discountPercentage: 15.46,
    rating: 4.09,
    stock: 36,
    brand: "Realme",
    category: "Smartphones",
    thumbnail:
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/3/thumbnail.jpg",
    images: [
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/3/1.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/3/2.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/3/3.jpg",
    ],
  },
  {
    id: 4,
    title: "Samsung Galaxy A23",
    description:
      "See more in every experience. Take in more, all at once. The Galaxy A23's 16.72cm (6.6') TFT V-Cut Display gives you room to see and do more. With FHD+ technology and a 90Hz refresh rate, the content you see every day will look smoother and sharper.",
    price: 399,
    discountPercentage: 17.91,
    rating: 4.3,
    stock: 123,
    brand: "Samsung",
    category: "Smartphones",
    thumbnail:
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/4/thumbnail.jpg",
    images: [
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/4/1.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/4/2.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/4/3.jpg",
    ],
  },
  {
    id: 5,
    title: "Huawei nova 9 SE",
    description:
      "Be inspired, Be nova. 108 MP High-Res Photography1. Creative Vlog Experience. 66 W HUAWEI SuperCharge.",
    price: 406,
    discountPercentage: 10.58,
    rating: 4.09,
    stock: 32,
    brand: "Huawei",
    category: "Smartphones",
    thumbnail:
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/5/thumbnail.jpg",
    images: [
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/5/1.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/5/2.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/5/3.jpg",
    ],
  },
  {
    id: 6,
    title: "MacBook Pro 14",
    description:
      "The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life. Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac laptop, and all the ports you need. The first notebook of its kind, this MacBook Pro is a beast.",
    price: 1799,
    discountPercentage: 11.02,
    rating: 4.57,
    stock: 83,
    brand: "Apple",
    category: "Laptops",
    thumbnail:
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/6/thumbnail.jpg",
    images: [
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/6/1.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/6/2.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/6/3.jpg",
    ],
  },
  {
    id: 7,
    title: "Galaxy Book2 Pro",
    description:
      "This model is meant for Everyday Use. It comes with Windows 11 (64-bit) installed. The dimensions of the laptop are 304.4 x 199.8 x 11.2 mm (height x width x thickness) and weighs 870 g. This laptop comes with 1 year warranty.",
    price: 1469,
    discountPercentage: 4.15,
    rating: 4.25,
    stock: 50,
    brand: "Samsung",
    category: "Laptops",
    thumbnail:
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/7/thumbnail.jpg",
    images: [
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/7/1.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/7/2.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/7/3.jpg",
    ],
  },
  {
    id: 8,
    title: "Surface Laptop 4",
    description:
      "New Microsoft Surface Laptop 4 leak reveals a larger battery, AMD Renoir Surface Edition APUs and favourable Intel Tiger Lake-U configurations.",
    price: 1499,
    discountPercentage: 10.23,
    rating: 4.43,
    stock: 68,
    brand: "Microsoft",
    category: "Laptops",
    thumbnail:
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/8/thumbnail.jpg",
    images: [
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/8/1.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/8/2.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/8/3.jpg",
    ],
  },
  {
    id: 9,
    title: "Infinix INBOOK",
    description:
      "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
    price: 1099,
    discountPercentage: 11.83,
    rating: 4.54,
    stock: 96,
    brand: "Infinix",
    category: "Laptops",
    thumbnail:
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/9/thumbnail.jpg",
    images: [
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/9/1.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/9/2.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/9/3.jpg",
    ],
  },
  {
    id: 10,
    title: "HP Pavilion 15",
    description:
      "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
    price: 1099,
    discountPercentage: 6.18,
    rating: 4.43,
    stock: 89,
    brand: "HP Pavilion",
    category: "Laptops",
    thumbnail:
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/10/thumbnail.jpg",
    images: [
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/10/1.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/10/2.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/10/3.jpg",
    ],
  },
  {
    id: 11,
    title: "Smart Band 7",
    description:
      "The magnificent large AMOLED display debuts on your wrist, making it easy for you to read and control. Everything is presented in detail at high resolution. Even better, thanks to always-on mode, you can read date and time without lifting your wrist or using your fingers.",
    price: 35,
    discountPercentage: 8.4,
    rating: 4.26,
    stock: 65,
    brand: "Xiaomi",
    category: "Smart Watch",
    thumbnail:
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/11/thumbnail.jpg",
    images: [
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/11/1.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/11/2.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/11/3.jpg",
    ],
  },
  {
    id: 12,
    title: "Apple Watch Series 7",
    description:
      "Apple unveiled the Apple Watch Series 7 with a more durable and larger display, now with 41mm and 45mm options. The Watch is more crack-resistant and can charge faster than previous models. It has the same processor as the Series 6 and maintains the three finishes: aluminum, stainless steel, and titanium.",
    price: 455,
    discountPercentage: 15.66,
    rating: 4,
    stock: 52,
    brand: "Apple",
    category: "Smart Watch",
    thumbnail:
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/12/thumbnail.jpg",
    images: [
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/12/1.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/12/2.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/12/3.jpg",
    ],
  },
  {
    id: 13,
    title: "Realme DIZO Watch 2",
    description:
      "Featuring a large 4.3 cm (1.69) display, the DIZO Watch 2 Smartwatch has a full-touch screen for a comfortable user experience.",
    price: 13,
    discountPercentage: 8.14,
    rating: 4.59,
    stock: 61,
    brand: "Realme",
    category: "Smart Watch",
    thumbnail:
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/13/thumbnail.jpg",
    images: [
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/13/1.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/13/2.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/13/3.jpg",
    ],
  },
  {
    id: 14,
    title: "Huawei Watch Fit 2",
    description:
      "With a built-in GPS sensor, 5ATM 9, AI heart rate algorithm and innovative sensors, HUAWEI WATCH FIT new is made for all the ways you exercise, such as swimming, running, cycling, etc. This watch helps you train better by providing real-time metrics, scientific training effect evaluations and professional guidance.",
    price: 101,
    discountPercentage: 15.6,
    rating: 4.21,
    stock: 114,
    brand: "Huawei",
    category: "Smart Watch",
    thumbnail:
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/14/thumbnail.jpg",
    images: [
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/14/1.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/14/2.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/14/3.jpg",
    ],
  },
  {
    id: 15,
    title: "Galaxy Watch5",
    description:
      "Sleep tracking. Health and wellness monitoring. 13% bigger battery for everyday usage 1. The smartwatch for everyday wellness goals.",
    price: 195,
    discountPercentage: 10.99,
    rating: 4.7,
    stock: 105,
    brand: "Samsung",
    category: "Smart Watch",
    thumbnail:
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/15/thumbnail.jpg",
    images: [
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/15/1.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/15/2.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/15/3.jpg",
    ],
  },
  {
    id: 16,
    title: "Xiaomi Mi Pad 5 Pro",
    description:
      "The most important difference between the Xiaomi Mi Pad 5 and the Mi Pad 5 Pro in terms of hardware is not the performance, but the connectivity. The Pro variant comes in a configuration with 5G connectivity included and a SIM slot, while the vanilla Mi Pad 5 does not have 4G nor 5G connectivity at all.",
    price: 608,
    discountPercentage: 13.31,
    rating: 4.83,
    stock: 110,
    brand: "Xiaomi",
    category: "Tablets",
    thumbnail:
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/16/thumbnail.jpg",
    images: [
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/16/1.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/16/2.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/16/3.jpg",
    ],
  },
  {
    id: 17,
    title: "Lenovo Yoga Tab 13",
    description:
      "Android Lenovo Tablets. Android Tablets are the least expensive tablets in the Lenovo family. They offer a wide range of functionality at an affordable price. These tablets are best used for general web browsing, video streaming, music streaming, and app-based games.",
    price: 599,
    discountPercentage: 4.09,
    rating: 4.52,
    stock: 78,
    brand: "Lenovo",
    category: "Tablets",
    thumbnail:
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/17/thumbnail.jpg",
    images: [
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/17/1.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/17/2.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/17/3.jpg",
    ],
  },
  {
    id: 18,
    title: "Samsung Galaxy Tab S6 Lite",
    description:
      "Is the Samsung Galaxy Tab S6 Lite 2022 a good tablet? Yes, it is. Just like its predecessor. We get a solid screen, the fantastic S Pen, good enough performance, up-to-date software, and a premium-feeling design.",
    price: 414,
    discountPercentage: 13.1,
    rating: 4.56,
    stock: 88,
    brand: "Samsung",
    category: "Tablets",
    thumbnail:
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/18/thumbnail.jpg",
    images: [
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/18/1.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/18/2.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/18/3.jpg",
    ],
  },
  {
    id: 19,
    title: "Apple iPad Air 2020",
    description:
      "iPad Air features a 10.9-inch Liquid Retina display for an immersive visual experience, with 3.8 million pixels and advanced technologies, including 500 nits of brightness, full lamination, a P3 wide color gamut, True Tone, and an anti-reflective screen coating.",
    price: 899,
    discountPercentage: 10.68,
    rating: 4.42,
    stock: 54,
    brand: "Apple",
    category: "Tablets",
    thumbnail:
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/19/thumbnail.jpg",
    images: [
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/19/1.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/19/2.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/19/3.jpg",
    ],
  },
  {
    id: 20,
    title: "Realme Pad Mini LTE",
    description:
      "Incredibly large display. LCD display with 84.59% usable area and a dual-speaker stereo system ensure you're fully immersed in what's happening on the screen, whether you're watching movies or playing your favorite games. Even at home, you can immerse yourself in the wonderful world of cinema.",
    price: 70,
    discountPercentage: 16.99,
    rating: 4.06,
    stock: 140,
    brand: "Realme",
    category: "Tablets",
    thumbnail:
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/20/thumbnail.jpg",
    images: [
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/20/1.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/20/2.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/20/3.jpg",
    ],
  },
  {
    id: 21,
    title: "TCL 4K Ultra HD",
    description:
      "Curated content. Universal search. Native IMDB support. Remote control voice recognition. Native Google Cast Support. Access games on Google Play Store. Google Assistant Integration.",
    price: 525,
    discountPercentage: 4.81,
    rating: 4.44,
    stock: 133,
    brand: "TCL",
    category: "Smart TVs",
    thumbnail:
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/21/thumbnail.jpg",
    images: [
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/21/1.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/21/2.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/21/3.jpg",
    ],
  },
  {
    id: 22,
    title: "Xiaomi Mi TV P1 LED",
    description:
      "HD display for added comfortWith true-to-life images and vivid colors, the high definition LED display offers a comfortable and immersive experience suitable for use in both bedrooms and home offices.",
    price: 514,
    discountPercentage: 15.58,
    rating: 4.57,
    stock: 146,
    brand: "Xiaomi",
    category: "Smart TVs",
    thumbnail:
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/22/thumbnail.jpg",
    images: [
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/22/1.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/22/2.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/22/3.jpg",
    ],
  },
  {
    id: 23,
    title: "LG 65UP81006LA",
    description:
      "True 4K UHD. Unreal immersion. LG UHD TVs exceed your expectations. Enjoy vivid images and true-to-life colors with improved resolution with 4x more pixels than Full HD.",
    price: 1140,
    discountPercentage: 8.04,
    rating: 4.85,
    stock: 26,
    brand: "LG",
    category: "Smart TVs",
    thumbnail:
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/23/thumbnail.jpg",
    images: [
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/23/1.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/23/2.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/23/3.jpg",
    ],
  },
  {
    id: 24,
    title: "Polarline 32PL12TC",
    description:
      "The Polarline 32PL12TC LED TV is equipped with a 32-inch HD screen, allowing you to comfortably watch TV shows and movies. The 178-degree viewing angle panel delivers high-quality viewing from any position. The 16W audio system reproduces pure sound without distortion.",
    price: 196,
    discountPercentage: 16.8,
    rating: 4.94,
    stock: 113,
    brand: "Polarline",
    category: "Smart TVs",
    thumbnail:
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/24/thumbnail.jpg",
    images: [
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/24/1.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/24/2.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/24/3.jpg",
    ],
  },
  {
    id: 25,
    title: "Skyworth G3A 4K LED TV",
    description:
      "Skyworth Android TV offers thousands of movies, shows and games from Google Play, Netflix, Showmax, YouTube and your favorite apps. With Chromecast built-in, you can easily cast movies, shows and photos from your Android or iOS device to you TV.",
    price: 709,
    discountPercentage: 13.58,
    rating: 4.87,
    stock: 47,
    brand: "Skyworth",
    category: "Smart TVs",
    thumbnail:
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/25/thumbnail.jpg",
    images: [
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/25/1.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/25/2.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/25/3.jpg",
    ],
  },
  {
    id: 26,
    title: "Choc Powerbank",
    description:
      "Lithium Polymer Battery. Ultra-thin design of 13.9 mm. High capacity of 10,000mAH. USB output & 2.1A fast charging. Intelligent LEDs show the battery status.",
    price: 25,
    discountPercentage: 17.86,
    rating: 4.08,
    stock: 131,
    brand: "Baseus",
    category: "Powerbanks",
    thumbnail:
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/26/thumbnail.jpg",
    images: [
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/26/1.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/26/2.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/26/3.jpg",
    ],
  },
  {
    id: 27,
    title: "Mi Power Bank 3 Ultra",
    description:
      "Xiaomi Mi Power Bank 3 Ultra Compact is the most compact version in its series. The battery has 4 connection ports: 2 × USB-A, 1 × USB-C, 1 × microUSB. It can be charged by both microUSB and USB Type-C. The external battery supports 24W (Type-C) PD function, and the microUSB charging power can reach up to 18W.",
    price: 26,
    discountPercentage: 15.58,
    rating: 4.41,
    stock: 17,
    brand: "Xiaomi",
    category: "Powerbanks",
    thumbnail:
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/27/thumbnail.jpg",
    images: [
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/27/1.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/27/2.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/27/3.jpg",
    ],
  },
  {
    id: 28,
    title: "MagSafe Battery Pack",
    description:
      "Connect your MagSafe external battery with one touch. It is compact. Intuitively easy to use. It makes it very convenient to recharge on the go. Built-in magnets secure it perfectly to the back of your iPhone 12 or iPhone 12 Pro, so wireless charging is fast and secure.",
    price: 158,
    discountPercentage: 16.49,
    rating: 4.82,
    stock: 54,
    brand: "Apple",
    category: "Powerbanks",
    thumbnail:
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/28/thumbnail.jpg",
    images: [
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/28/1.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/28/2.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/28/3.jpg",
    ],
  },
  {
    id: 29,
    title: "Ugreen PB165 20000",
    description:
      "USB-C Portable Charger Power Bank for Samsung Galaxy S22/S21/S20/S10, iPhone 13 Series/iPhone 12 Series, iPad, and More. USB C to A Cable Included.",
    price: 60,
    discountPercentage: 15.34,
    rating: 4.44,
    stock: 7,
    brand: "Ugreen",
    category: "Powerbanks",
    thumbnail:
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/29/thumbnail.jpg",
    images: [
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/29/1.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/29/2.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/29/3.jpg",
    ],
  },
  {
    id: 30,
    title: "Remax RPP-108",
    description:
      "Power Bank Remax RPP-108 with a capacity of 20000 mAh will become an indispensable assistant in situations where the charging of your favorite smartphone is close to 0, and there is no outlet nearby. With such an external battery, you can charge not only all your dead gadgets, but also the devices of your family and friends.",
    price: 30,
    discountPercentage: 2.92,
    rating: 4.92,
    stock: 54,
    brand: "Remax",
    category: "Powerbanks",
    thumbnail:
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/30/thumbnail.jpg",
    images: [
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/30/1.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/30/2.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/30/3.jpg",
    ],
  },
  {
    id: 31,
    title: "Mi In-Ear Basic",
    description:
      "Aluminium sound chamber. Improved 3rd gen balanced damping. Comes with two additional high quality silicone ear buds. Press for play, compatible with Mi phones, Android, and iOS devices. Ergonomically designed to fit the contours of your ear.",
    price: 10,
    discountPercentage: 17,
    rating: 4.16,
    stock: 140,
    brand: "Xiaomi",
    category: "Headphones",
    thumbnail:
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/31/thumbnail.jpg",
    images: [
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/31/1.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/31/2.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/31/3.jpg",
    ],
  },
  {
    id: 32,
    title: "Apple AirPods 3",
    description:
      "AirPods 3rd generation are Apple's new wireless headphones with a new speaker and extended battery life. Now spatial audio is available not only in the Pro versions of Apple headphones, but also in this model. With it, watching movies and TV content will become immersive.",
    price: 250,
    discountPercentage: 15.59,
    rating: 4.74,
    stock: 30,
    brand: "Apple",
    category: "Headphones",
    thumbnail:
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/32/thumbnail.jpg",
    images: [
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/32/1.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/32/2.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/32/3.jpg",
    ],
  },
  {
    id: 33,
    title: "JBL Tune 510BT",
    description:
      "With powerful JBL Pure Bass Sound, the JBL Tune 510BT headphones play boldly, wirelessly. The lightweight over-ear design offers maximum comfort and immersion in sound. Big in performance, they can be folded in a compact shape to fit any adventure. Take calls and manage sound hands-free thanks to the convenient button on the earcup that also activate the Voice Assistants for on-the-go help.",
    price: 57,
    discountPercentage: 17,
    rating: 4.31,
    stock: 106,
    brand: "JBL",
    category: "Headphones",
    thumbnail:
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/33/thumbnail.jpg",
    images: [
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/33/1.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/33/2.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/33/3.jpg",
    ],
  },
  {
    id: 34,
    title: "Sony WI-XB400",
    description:
      "The WI-XB400 Wireless Headphones are easy to carry and deliver deep, powerful sound. These headphones can operate on battery power up to 15 hours. They attach to the neckband and fit easily into a bag or pocket.",
    price: 58,
    discountPercentage: 4,
    rating: 4.01,
    stock: 136,
    brand: "Sony",
    category: "Headphones",
    thumbnail:
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/34/thumbnail.jpg",
    images: [
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/34/1.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/34/2.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/34/3.jpg",
    ],
  },
  {
    id: 35,
    title: "2Drumtek BH300",
    description:
      "Hybrid Diaphragm M.O.C.I. is made of advanced biotechnology with bred nano mycelium and carbon fiber. Featuring 2Drumtek's Signature Sound, pushing out crisp trebles and midrange with deep, satisfying bass.",
    price: 36,
    discountPercentage: 7.98,
    rating: 4.06,
    stock: 68,
    brand: "A4Tech",
    category: "Headphones",
    thumbnail:
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/35/thumbnail.jpg",
    images: [
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/35/1.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/35/2.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/35/3.jpg",
    ],
  },
  {
    id: 36,
    title: "SVEN PS-380",
    description:
      "SVEN PS-380 are simple and reliable portable speakers from SVEN. The presented model offers the user a small size and stylish design, thanks to which the device can be used in any environment, for example, SVEN PS-380 can be taken on the road.",
    price: 63,
    discountPercentage: 10.89,
    rating: 4.26,
    stock: 39,
    brand: "SVEN",
    category: "Speakers",
    thumbnail:
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/36/thumbnail.jpg",
    images: [
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/36/1.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/36/2.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/36/3.jpg",
    ],
  },
  {
    id: 37,
    title: "JBL Xtreme 3",
    description:
      "Poolside. Picnics. Just hanging out. Music makes the party. The JBL Xtreme 3 portable Bluetooth speaker effortlessly delivers massive JBL Original Pro Sound. With four drivers and two pumping JBL Bass Radiators, the powerful sound draws everybody in, and with PartyBoost, you can connect multiple JBL PartyBoost-enabled speakers to take things to the next level.",
    price: 54,
    discountPercentage: 12.05,
    rating: 4.52,
    stock: 107,
    brand: "JBL",
    category: "Speakers",
    thumbnail:
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/37/thumbnail.jpg",
    images: [
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/37/1.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/37/2.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/37/3.jpg",
    ],
  },
  {
    id: 38,
    title: "Mi Compact Bluetooth 2",
    description:
      "Xiaomi's new miniature Bluetooth speaker weighs only 52 grams, and thanks to its modest size, it fits easily in the palm of your hand or in your pocket. A capacious 480 mAh lithium battery will allow you to enjoy music for 4 hours.",
    price: 38,
    discountPercentage: 11.12,
    rating: 4.8,
    stock: 20,
    brand: "Xiaomi",
    category: "Speakers",
    thumbnail:
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/38/thumbnail.jpg",
    images: [
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/38/1.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/38/2.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/38/3.jpg",
    ],
  },
  {
    id: 39,
    title: "Defender G70 65170",
    description:
      "Portable speaker Defender: Bluetooth 5.0. The new standard increases the data transfer rate by 2 times, the range by 4 times, and the power consumption of this process is significantly lower than that of previous versions of wireless communication modules. Neon lights. Built-in FM receiver.",
    price: 600,
    discountPercentage: 17.2,
    rating: 4.55,
    stock: 55,
    brand: "Defender",
    category: "Speakers",
    thumbnail:
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/39/thumbnail.jpg",
    images: [
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/39/1.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/39/2.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/39/3.jpg",
    ],
  },
  {
    id: 40,
    title: "Sony SRS-XB33",
    description:
      "The newly developed Sony X-Balanced speaker delivers high sound quality and powerful sound pressure for a richer, deeper and more enjoyable sound experience. The non-circular shape of the device increases the area of the diaphragm, which increases the sound pressure for richer bass.",
    price: 199,
    discountPercentage: 13.39,
    rating: 4.91,
    stock: 84,
    brand: "Sony",
    category: "Speakers",
    thumbnail:
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/40/thumbnail.jpg",
    images: [
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/40/1.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/40/2.jpg",
      "https://raw.githubusercontent.com/mshns/online-store-products/main/data/40/3.jpg",
    ],
  },
];

export default storeItems;

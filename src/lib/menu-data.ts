export type MenuItem = {
  name: string;
  price: number;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  desc?: string;
  tag?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  items: MenuItem[];
};

export const MENU: MenuCategory[] = [
  {
    id: "biryani",
    title: "Biryani",
    items: [
      { name: "Mezbaan Special Biryani", price: 160, calories: 680, protein: 32, carbs: 85, fat: 20, tag: "🔥 Best Seller", desc: "Signature Kolkata-style dum biryani layered with aromatic rice, rich spices, and slow-cooked chicken." },
      { name: "Chicken Dum Biryani (with Aloo)", price: 150, calories: 650, protein: 30, carbs: 80, fat: 18 },
      { name: "Chicken Hyderabadi Biryani", price: 150, calories: 700, protein: 34, carbs: 90, fat: 22 },
      { name: "Egg Biryani", price: 110, calories: 550, protein: 22, carbs: 70, fat: 15 },
      { name: "Mutton Biryani (Sunday Special)", price: 280, calories: 850, protein: 40, carbs: 95, fat: 28, tag: "Sunday Special" },
    ],
  },
  {
    id: "rolls",
    title: "Rolls & Kebab",
    items: [
      { name: "Chicken Roll", price: 80, calories: 380, protein: 18, carbs: 40, fat: 12 },
      { name: "Chicken Egg Roll", price: 100, calories: 420, protein: 20, carbs: 42, fat: 14 },
      { name: "Chicken Double Egg Roll", price: 110, calories: 460, protein: 22, carbs: 45, fat: 15 },
      { name: "Double Chicken Roll", price: 140, calories: 500, protein: 28, carbs: 48, fat: 16 },
      { name: "Double Chicken Egg Roll", price: 150, calories: 520, protein: 30, carbs: 50, fat: 17 },
      { name: "Double Chicken Double Egg Roll", price: 160, calories: 560, protein: 32, carbs: 52, fat: 18, tag: "🔥 Most Ordered" },
      { name: "Egg Roll", price: 60, calories: 300, protein: 12, carbs: 35, fat: 9 },
      { name: "Double Egg Roll", price: 70, calories: 350, protein: 16, carbs: 38, fat: 11 },
      { name: "Veg. Masala Egg Roll", price: 80, calories: 370, protein: 14, carbs: 40, fat: 10 },
      { name: "Paneer Egg Roll", price: 100, calories: 400, protein: 18, carbs: 42, fat: 12 },
      { name: "Paneer Roll", price: 80, calories: 380, protein: 16, carbs: 40, fat: 11 },
      { name: "Double Paneer Roll", price: 140, calories: 480, protein: 22, carbs: 45, fat: 15 },
      { name: "Veg. Masala Roll", price: 70, calories: 320, protein: 10, carbs: 38, fat: 8 },
      { name: "Mix Veg. Paneer Roll", price: 110, calories: 430, protein: 20, carbs: 44, fat: 13 },
      { name: "Mezbaan Special Jumbo Roll", price: 280, calories: 750, protein: 36, carbs: 82, fat: 24, tag: "👨‍🍳 Chef Special" },
      { name: "Chicken Fry Kabab", price: 160, calories: 450, protein: 28, carbs: 20, fat: 22 },
      { name: "Egg Omlet (Half)", price: 30, calories: 150, protein: 8, carbs: 2, fat: 10 },
      { name: "Egg Omlet (Full)", price: 50, calories: 250, protein: 14, carbs: 4, fat: 18 },
    ],
  },
  {
    id: "mughlai",
    title: "Mughlai & Bread",
    items: [
      { name: "Egg Mughlai Paratha", price: 120, calories: 420, protein: 16, carbs: 48, fat: 14 },
      { name: "Double Egg Mughlai Paratha", price: 130, calories: 460, protein: 20, carbs: 52, fat: 15 },
      { name: "Chicken Egg Mughlai Paratha", price: 160, calories: 520, protein: 26, carbs: 55, fat: 18 },
      { name: "Lachha Paratha", price: 35, calories: 200, protein: 4, carbs: 30, fat: 8 },
    ],
  },
  {
    id: "gravy",
    title: "Gravy",
    items: [
      { name: "Chicken Chaap", price: 150, calories: 480, protein: 26, carbs: 18, fat: 30 },
      { name: "Chicken Kosha", price: 150, calories: 500, protein: 28, carbs: 20, fat: 32 },
    ],
  },
  {
    id: "combos",
    title: "Combo Specials",
    items: [
      { name: "Chicken Chaap & Lachha Paratha Combo", price: 170, calories: 650, protein: 30, carbs: 50, fat: 24 },
      { name: "Egg Omlet & Lachha Paratha Combo", price: 70, calories: 400, protein: 18, carbs: 36, fat: 14 },
      { name: "Chicken Kosha & Lachha Paratha Combo", price: 170, calories: 670, protein: 32, carbs: 52, fat: 26 },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    items: [
      { name: "Firni", price: 60, calories: 280, protein: 6, carbs: 45, fat: 8, desc: "Classic creamy Kolkata-style firni topped with aromatic flavors and traditional sweetness." },
    ],
  },
  {
    id: "extras",
    title: "Extras",
    items: [
      { name: "Extra Gravy", price: 10, calories: 0, protein: 0, carbs: 0, fat: 0 },
      { name: "Fried Onions Extra", price: 10, calories: 0, protein: 0, carbs: 0, fat: 0 },
      { name: "Extra Cheese", price: 20, calories: 0, protein: 0, carbs: 0, fat: 0 },
    ],
  },
];

export const WHATSAPP_URL = "https://wa.me/917359501418";
export const PHONE = "73595 01418";
export const MAPS_URL = "https://maps.app.goo.gl/je8VVzbBXaN3URro9";

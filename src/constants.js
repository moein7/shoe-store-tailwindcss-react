export const SIZE = [41, 42, 43, 44, 45, 46];
export const QTY = [1, 2, 3, 4, 5, 6, 7];
import nike1 from "./assets/n1-min.png";
import nike2 from "./assets/n2-min.png";
import nike3 from "./assets/n3-min.png";
import nike4 from "./assets/n4-min.png";
export const SHOES = [
  {
    id: Math.random() * 125,
    title: "Nike Air Max 270",
    desciption:
      "The Nike Air max 270 is lifestyle shoe that's sure to turn a heads with its vibrant colors gradiant",
    price: 100,
    src: nike1,
    clasName: "bg-[#EEFFA4]",
  },
  {
    id: Math.random() * 125,
    title: "Nike Raptor",
    desciption:
      "The Nike Raptor is lifestyle shoe that's sure to turn a heads with its vibrant colors gradiant",
    price: 120,
    src: nike2,
    clasName: "bg-[#FEC260]",
  },
  {
    id: Math.random() * 125,
    title: "Nike Maptor XL 2400",
    desciption:
      "The Nike  Maptor XL 2400 is lifestyle shoe that's sure to turn a heads with its vibrant colors gradiant",
    price: 900,
    src: nike3,
    clasName: "bg-[#3FA796]",
  },
  {
    id: Math.random() * 125,
    title: "Nike Strength 200Lk",
    desciption:
      "The Nike Strength 200Lk is lifestyle shoe that's sure to turn a heads with its vibrant colors gradiant",
    price: 319,
    src: nike4,
    clasName: "bg-[#6C7A89]",
  },
];

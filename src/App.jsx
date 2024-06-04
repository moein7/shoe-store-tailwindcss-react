import { Nav } from "./component/Nav";
import { ShoeDetail } from "./component/ShoeDetail";

import { NewArrivalSection } from "./component/NewArrivalSection";
import { SHOES } from "./constants";
import { SideBar } from "./component/SideBar";
import { useEffect, useState } from "react";
import { Cart } from "./component/Cart";
import { BiSun, BiMoon } from "react-icons/bi";

export function App() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [currentShoe, setCurrentShoe] = useState(SHOES[0]);
  const [cartItems, setCartItems] = useState([]);

  const removeFromCard = (productId) => {
    const updatedCardItem = [...cartItems];
    const filterCards = updatedCardItem.filter(
      (item) => item.product.id !== productId
    );
    setCartItems(filterCards);
  };

  const addToCart = (product, qty, size) => {
    if (qty && size) {
      const updatedCardItem = [...cartItems];
      console.log(product);
      const existItemIndex = cartItems.findIndex((item) => {
        return item.product.id === product.id;
      });
      console.log(existItemIndex);
      if (existItemIndex > -1) {
        updatedCardItem[existItemIndex].qty = qty;
        updatedCardItem[existItemIndex].size = size;
      } else {
        updatedCardItem.push({
          product,
          qty,
          size,
        });
      }

      setCartItems(updatedCardItem);
    }
  };

  useEffect(() => {
    const isDarkMode = localStorage.getItem("isDarkMode");
    if (isDarkMode === "true") {
      window.document.documentElement.classList.add("dark");
    }
  }, []);
  const toggleDarkMode = () => {
    window.document.documentElement.classList.toggle("dark");
    localStorage.setItem(
      "isDarkMode",
      window.document.documentElement.classList.contains("dark")
    );
  };
  return (
    <div className="p-10 xl:px-24 animate-fadein dark:bg-night">
      <Nav onClickShoppingButton={() => setIsSideBarOpen(true)} />
      <ShoeDetail shoe={currentShoe} onClickAdd={addToCart} />
      <NewArrivalSection items={SHOES} onClickCard={setCurrentShoe} />
      <SideBar
        isOpen={isSideBarOpen}
        onClickClose={() => setIsSideBarOpen(false)}
      >
        <Cart cartItems={cartItems} onClickRemove={removeFromCard} />
      </SideBar>
      <div className="fixed bottom-4 right-4">
        <button
          onClick={toggleDarkMode}
          className="shadow-lg dark:bg-white dark:text-night flex-center  bg-night-50 px-4 py-2 rounded-full text-white"
        >
          <BiSun size={24} className="hidden dark:block" />
          <BiMoon size={24} className=" dark:hidden" />
        </button>
      </div>
    </div>
  );
}

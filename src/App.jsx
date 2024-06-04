import { Nav } from "./component/Nav";
import { ShoeDetail } from "./component/ShoeDetail";

import { NewArrivalSection } from "./component/NewArrivalSection";
import { SHOES } from "./constants";
import { SideBar } from "./component/SideBar";
import { useEffect, useState } from "react";
import { Cart } from "./component/Cart";
import { BiSun, BiMoon } from "react-icons/bi";
const FAKE_CART_ITEM = SHOES.map((shoe) => {
  return {
    product: shoe,
    qty: 1,
    size: 44,
  };
});
export function App() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
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
      <ShoeDetail />
      <NewArrivalSection items={SHOES} />
      <SideBar
        isOpen={isSideBarOpen}
        onClickClose={() => setIsSideBarOpen(false)}
      >
        <Cart cartItems={FAKE_CART_ITEM} />
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

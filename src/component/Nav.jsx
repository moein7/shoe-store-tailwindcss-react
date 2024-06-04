import { TbShoppingBag } from "react-icons/tb";
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
const ROUTES = ["Home", "About", "Pricing", "Contact", "Services"];
export function Nav({ onClickShoppingButton }) {
  const [isMobileMenuSHown, setIsMobileMenuShow] = useState(false);

  return (
    <nav className="z-10 mb-1 relative flex flex-wrap justify-between items-center">
      <a href="#">
        <NikeLogo className="h-20 w-20 dark:fill-white" />
      </a>
      <button
        onClick={() => setIsMobileMenuShow(!isMobileMenuSHown)}
        className="dark:text-gray-400 dark:hover:bg-gray-700 lg:hidden rounded-lg p-2 focus:ring-2 focus:ring-gray-200 hover:bg-gray-100"
      >
        <RxHamburgerMenu size={24} />
      </button>

      <div
        className={`${!isMobileMenuSHown && "hidden"}  w-full lg:block lg:w-auto`}
      >
        <ul className="lg:dark:text-white lg:space-x-8 flex flex-col lg:flex-row bg-gray-50 lg:bg-transparent text-lg border p-4 lg:border-none border-gray-100 rounded-lg">
          {ROUTES.map((route, index) => {
            return (
              <li
                className={`
                lg:hover:text-blue-500 lg:hover:bg-transparent
                rounded
                py-4
                px-3
                cursor-pointer
                ${index === 0 ? "bg-blue-500 lg:text-blue-500 text-white lg:bg-transparent" : "hover:bg-gray-100"}
                ${(index === 3 || index === 4) && "lg:text-white"}
                `}
                key={route}
              >
                {route}
              </li>
            );
          })}
        </ul>
      </div>
      <div
        onClick={onClickShoppingButton}
        className="fixed left-4 bottom-4 lg:static lg:mr-8"
      >
        <div className="btn-press-anim cursor-pointer flex-center h-12 w-12 bg-white rounded-full bg-white-500 shadow-md">
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  );
}

import { CiTrash } from "react-icons/ci";
import { Select } from "./Select";
import { SIZE, QTY } from "../constants";

export function CardItem({ item }) {
  const { product, qty, size } = item;
  return (
    <div className=" hover:bg-green-200 dark:bg-gray-900 dark:hover:bg-night-50 cursor-pointer dark:bg-transparent bg-gray-50 space-y-2  p-2 ">
      <div className="flex space-x-2">
        <img className="h-24 " src={product.src} alt="" />
        <div className="space-y-2">
          <h2 className="font-bold dark:text-white">{product.title}</h2>
          <h2 className="text-sm text-gray-400">{product.desciption}</h2>
        </div>
        <h2 className="font-bold dark:text-white">{product.price}$</h2>
      </div>
      <div className="flex justify-between pl-32">
        <div className="flex space-x-6">
          <div>
            <div className="font-bold dark:text-white">Size</div>
            <Select
              defaultValue={size}
              options={SIZE}
              title=""
              className="w-16 p-1 pl-2"
            />
          </div>
          <div>
            <div className="font-bold  dark:text-white">QTY</div>
            <Select
              defaultValue={qty}
              options={QTY}
              title=""
              className="w-16 p-1 pl-2"
            />
          </div>
        </div>
        <button>
          <CiTrash className="text-black dark:text-white" size={25} />
        </button>
      </div>
    </div>
  );
}

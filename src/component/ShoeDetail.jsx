import { Select } from "./Select";
import { SIZE, QTY } from "../constants";
import { useState } from "react";
export function ShoeDetail({ shoe, onClickAdd }) {
  const [form, setfrom] = useState({ qty: null, size: null });
  return (
    <div className="flex flex-col lg:flex-row lg:flex-row-reverse space-y-5 dark:text-white">
      <div className="flex-1 lg:-mt-32 lg:ml-28">
        <div className=" flex-center  h-full bg-gradient-to-br from-[#f637cf] via-[#e3d876] to-[#4dd4c6]">
          <img className="animate-float" src={shoe.src} />
        </div>
      </div>
      <div className="flex-1 space-y-6">
        <div className="text-5xl font-black md:text-9xl">{shoe.title}</div>
        <div className="font-medium md:text-xl">{shoe.description}</div>
        <div className="flex space-x-8">
          <div className="text-3xl font-extrabold md:text-6xl">
            {shoe.price}$
          </div>
          <Select
            value={form.qty}
            onChange={(qty) => setfrom({ ...form, qty })}
            title="QTY"
            options={QTY}
          />
          <Select
            value={form.size}
            onChange={(size) => setfrom({ ...form, size })}
            title="SIZE"
            options={SIZE}
          />
        </div>

        <div className="space-x-10">
          <button
            onClick={() => onClickAdd(shoe, form.qty, form.size)}
            className="dark:bg-white dark:text-black btn-press-anim h-14 w-44 bg-black text-white active:bg-gray-700 hover:bg-gray-900"
          >
            Add to bag
          </button>
          <a
            href="#"
            className="text-lg font-bold underline underline-offset-4"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
}

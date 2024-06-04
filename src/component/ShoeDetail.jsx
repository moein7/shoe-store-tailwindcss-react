import nike1 from "../assets/n1-min.png";
import { Select } from "./Select";
import { SIZE, QTY } from "../constants";
export function ShoeDetail() {
  return (
    <div className="flex flex-col lg:flex-row lg:flex-row-reverse space-y-5 dark:text-white">
      <div className="flex-1 lg:-mt-32 lg:ml-28">
        <div className=" flex-center  h-full bg-gradient-to-br from-[#f637cf] via-[#e3d876] to-[#4dd4c6]">
          <img className="animate-float" src={nike1} />
        </div>
      </div>
      <div className="flex-1 space-y-6">
        <div className="text-5xl font-black md:text-9xl">Like Air max 270</div>
        <div className="font-medium md:text-xl">
          {
            "The Nike Air max 270 is lifestyle shoe that's sure to turn a heads with its vibrant colors gradiant"
          }
        </div>
        <div className="flex space-x-8">
          <div className="text-3xl font-extrabold md:text-6xl">100 $</div>
          <Select title="QTY" options={QTY} />
          <Select title="SIZE" options={SIZE} />
        </div>

        <div className="space-x-10">
          <button className="dark:bg-white dark:text-black btn-press-anim h-14 w-44 bg-black text-white active:bg-gray-700 hover:bg-gray-900">
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

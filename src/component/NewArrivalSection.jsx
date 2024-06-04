import { Card } from "./Card";

export function NewArrivalSection({ items, onClickCard }) {
  return (
    <div className=" mt-20">
      <div className="flex-center mt-20">
        <div className="dark:text-white bg-center bg-[url('./assets/lines.png')] text-4xl font-extrabold">
          NEW ARRIVALS
        </div>
      </div>
      <div className="justify-between mt-10 grid grid-cols-1 gap-y-24 gap-x-4 md:grid-cols-2 xl:grid-cols-[repeat(3,25%)]">
        {items.map((item) => {
          return <Card key={item.id} item={item} onClick={onClickCard} />;
        })}
      </div>
    </div>
  );
}

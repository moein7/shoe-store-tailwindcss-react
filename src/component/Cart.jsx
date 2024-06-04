import { CardItem } from "./CardItem";

export function Cart({ cartItems }) {
  return (
    <div>
      <h2 className="dark:text-white text-black font-bold mb-10 text-2xl">
        Card
      </h2>
      <ul className="space-y-5">
        {cartItems.map((shoe) => {
          return (
            <li key={shoe.product.id}>
              <CardItem item={shoe} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

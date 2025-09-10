import CardSingolP from "./CardSingolP";
import { useCart } from "react-use-cart";
import FormC from "./FormC";

export default function MainCheckout() {
  const { items: cart, emptyCart } = useCart();

  console.log(cart);
  const prezzo_totale = cart.reduce(
    (tot, item) => tot + item.price * (item.quantity || 1),
    0
  );

  return (
    <main className="my-5">
      <h2 className="text-center">Checkout</h2>
      <div className="container">
        <div className="mb-3">
          <button className="btn btn-danger" onClick={emptyCart}>
            Svuota il carrello
          </button>
        </div>

        <div className="row row-cols-1 row-cols-md-2">
          <div className="col d-flex flex-wrap">
            {cart.map((item) => (
              <div key={item.id}>
                <CardSingolP pc={item} />
              </div>
            ))}
          </div>

          <div className="col">
            <h3>Dati per il pagamento</h3>
            <FormC prodotto={cart} prezzo_totale={prezzo_totale} />
          </div>
        </div>
      </div>
    </main>
  );
}

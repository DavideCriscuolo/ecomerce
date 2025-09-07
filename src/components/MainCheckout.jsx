import CardSingolP from "./CardSingolP";

import FormC from "./FormC";
export default function MainCheckout() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  return (
    <>
      <main className="my-5">
        <h2 className="text-center">Checkout</h2>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2">
            <div className="col d-flex flex-wrap">
              {cart.map((item) => (
                <div>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      localStorage.removeItem("cart");
                      window.location.reload();
                    }}
                  >
                    Svuota il carrello
                  </button>
                  <CardSingolP pc={item} key={item.id}></CardSingolP>
                </div>
              ))}
            </div>
            <div className="col">
              <h3>Dati per il pagamaneto</h3>
              <FormC prodotto={cart} key={cart.id}></FormC>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

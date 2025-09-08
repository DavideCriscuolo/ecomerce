import CardSingolP from "./CardSingolP";

import FormC from "./FormC";
export default function MainCheckout() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  let prezzo_totale = 0;

  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    const quantita = item.quantita || 1; // se non c'è quantità, metti 1
    prezzo_totale += item.prezzo * quantita;
  }

  console.log(prezzo_totale); // stampa il totale
  //creare slug con nome prodotto

  return (
    <>
      <main className="my-5">
        <h2 className="text-center">Checkout</h2>
        <div className="container">
          <div className="mb-3">
            <button
              className="btn btn-danger"
              onClick={() => {
                localStorage.removeItem("cart");
                window.location.reload();
              }}
            >
              Svuota il carrello
            </button>
          </div>

          <div className="row row-cols-1 row-cols-md-2">
            <div className="col d-flex flex-wrap">
              {cart.map((item) => (
                <div>
                  <CardSingolP pc={item} key={item.id}></CardSingolP>
                </div>
              ))}
            </div>
            <div className="col">
              <h3>Dati per il pagamaneto</h3>
              <FormC
                prodotto={cart}
                key={cart.id}
                prezzo_totale={prezzo_totale}
              ></FormC>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

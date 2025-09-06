import CardSingolP from "./CardSingolP";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FormC from "./FormC";
export default function MainCheckout() {
  const [prodotto, setProdotto] = useState({});
  const id = useParams();

  const url = import.meta.env.VITE_URL_PRODOTTO + id.id;
  function gnrProdotto() {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProdotto(data));
  }
  useEffect(gnrProdotto, []);
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  function prezzo_totale() {
    let prezzo_totale = 0;
    cart.forEach((item) => (prezzo_totale += item.prezzo));
    return prezzo_totale;
  }
  return (
    <>
      <main className="my-5">
        <h2 className="text-center">Checkout</h2>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2">
            <div className="col d-flex">
              {cart.map((item) => (
                <div>
                  <button
                    className="btn btn-danger"
                    onClick={() => localStorage.removeItem("cart")}
                  >
                    Elimna Prodotto
                  </button>
                  <CardSingolP pc={item} key={item.id}></CardSingolP>
                </div>
              ))}
            </div>
            <div className="col">
              <h3>Dati per il pagamaneto</h3>
              <FormC
                prodotto={prodotto}
                key={prodotto.id}
                prezzo_totale={prezzo_totale()}
              ></FormC>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

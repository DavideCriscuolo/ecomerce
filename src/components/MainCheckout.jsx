import CardSingolP from "./CardSingolP";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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

  return (
    <>
      <main className="my-5">
        <h2 className="text-center">Checkout</h2>
        <div className="container">
          <div className="row">
            <div className="col">
              <CardSingolP pc={prodotto} key={prodotto.id}></CardSingolP>
            </div>
            <div className="col">
              <h3>Dati per il pagamaneto</h3>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

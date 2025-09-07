import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardSingolP from "./CardSingolP";
import CartC from "./CartC";

export default function MainSingoloProd() {
  const [prodotto, setProdotto] = useState({});

  const id = useParams();

  const url = import.meta.env.VITE_URL_PRODOTTO + id.id;
  function gnrProdotto() {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProdotto(data));
  }
  useEffect(gnrProdotto, []);

  //  console.log(prodotto, url);

  return (
    <>
      <main className="my-5">
        <div className="container">
          <CartC prodotto={prodotto} key={prodotto.id}></CartC>
          <h2 className="text-center my-5">Prodotto singolo</h2>
          <div className="row">
            <div className="col">
              <CardSingolP pc={prodotto} key={prodotto.id} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

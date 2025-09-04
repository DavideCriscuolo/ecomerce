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

  function effetuaOrdine() {
    const url = import.meta.env.VITE_URL_ORDINE + prodotto.id;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

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
              <div class="mb-3">
                <label for="" class="form-label">
                  Nome
                </label>
                <input
                  type="text"
                  name="nome"
                  id="nome"
                  class="form-control"
                  placeholder=""
                  aria-describedby="helpId"
                />
              </div>
              <div class="mb-3">
                <label for="" class="form-label">
                  Nome
                </label>
                <input
                  type="text"
                  name="nome"
                  id="nome"
                  class="form-control"
                  placeholder=""
                  aria-describedby="helpId"
                />
              </div>
              <div class="mb-3">
                <label for="" class="form-label">
                  Nome
                </label>
                <input
                  type="text"
                  name="nome"
                  id="nome"
                  class="form-control"
                  placeholder=""
                  aria-describedby="helpId"
                />
              </div>
            </div>
          </div>
          <button onClick={effetuaOrdine} className="btn btn-secondary">
            Paga
          </button>
        </div>
      </main>
    </>
  );
}

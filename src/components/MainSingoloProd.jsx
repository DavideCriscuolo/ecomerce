import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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

  console.log(prodotto, url);

  return (
    <>
      <main className="my-5">
        <div className="container">
          <h2 className="text-center my-5">Prodotto singolo</h2>
          <div className="row">
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <img className="card-img-top" src={prodotto.img} alt="" />
                  <h5 className="card-title">{prodotto.nome}</h5>
                  <p className="card-text">{prodotto.descrizione}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

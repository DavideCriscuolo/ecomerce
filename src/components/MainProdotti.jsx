import React, { useState, useEffect } from "react";
export default function MainProdotti() {
  const [prodotti, setProdotti] = useState([]);

  const urlprodotti = import.meta.env.VITE_URL_PRODOTTI;

  function gnrProdotti() {
    fetch(urlprodotti)
      .then((response) => response.json())
      .then((data) => setProdotti(data));
  }
  useEffect(gnrProdotti, []);

  return (
    <>
      <main className="my-5">
        <div className="container">
          <h2 className="text-center my-5">I nostri prodotti</h2>
          <div className="row">
            <div className="col">
              {prodotti.map((pc) => {
                return (
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">{pc.name}</h4>
                      <p className="card-text">{pc.descrizione}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

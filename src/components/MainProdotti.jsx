import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CardProdotti from "./CardProdotti";
import FiltroC from "./FiltroC";
export default function MainProdotti() {
  const [prodotti, setProdotti] = useState([]);
  const [filterd, setFiltered] = useState({
    filtro1: "",
    filtro2: "",
    valore1: "",
    valore2: "",
  });
  const urlProdotti = import.meta.env.VITE_URL_PRODOTTI;
  function gnrProdotti() {
    fetch(urlProdotti, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(filterd),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProdotti(data);
      });
  }
  useEffect(gnrProdotti, []);

  return (
    <>
      <main className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-12  col-sm-12 col-md-4  col-xl-3 py-5  ">
              <FiltroC
                filterd={filterd}
                setFiltered={setFiltered}
                gnrProdotti={gnrProdotti}
              ></FiltroC>
            </div>
            <div className="col-12 col-sm-12 col-md-8 col-xl-9">
              <h2 className="text-center my-5">I nostri prodotti</h2>
              <div className="row row-cols-1 row-cols-md-2  row-cols-xl-3 g-3 ">
                {prodotti.length === 0 && (
                  <h3 className="text-center">Non ci sono prodotti</h3>
                )}
                {prodotti.map((pc) => {
                  return <CardProdotti pc={pc} key={pc.id} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

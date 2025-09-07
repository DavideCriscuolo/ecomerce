import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CardProdotti from "./CardProdotti";
import "./../scss/MainHome.scss";

export default function MainHome() {
  const [bestSellers, setBestSellers] = useState([]);
  const url = import.meta.env.VITE_URL_BEST_SELLERS;

  function gnrBestSellers() {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBestSellers(data);
      });
  }
  useEffect(gnrBestSellers, []);
  return (
    <>
      <main>
        <div className="container">
          <div>
            <h1>Presentazione</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              modi optio iusto doloribus, mollitia repellendus architecto natus.
              Exercitationem, minima nostrum?
            </p>
          </div>
          <section className="my-5 text-center">
            <h3 className="mb-3">I nostri prodotti piu venduti</h3>
            <div className="row row-cols-1 row-cols-md-3">
              {bestSellers.map((pc) => {
                return <CardProdotti pc={pc} key={pc.id} />;
              })}
            </div>
          </section>
        </div>
        <div className="contanier-fluid border-1">
          <div className="pattern"></div>
        </div>
        <div className="container">
          <section className="my-5 text-center">
            <h3 className="mb-3">Accopiate Vincenti</h3>
            <div className="row row-cols-1 row-cols-md-3 ">
              {bestSellers.map((pc) => {
                return <CardProdotti pc={pc} key={pc.id} />;
              })}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLocalStorage } from "react-use";
import { useCart } from "react-use-cart";
import CardSingolP from "./CardSingolP";
import CartC from "./CartC";

export default function MainSingoloProd() {
  const [aggiunto, setAggiunto] = useState(false);

  const [prodotto, setProdotto] = useState({});

  const id = useParams();

  const url = import.meta.env.VITE_URL_PRODOTTO + id.id;
  function gnrProdotto() {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProdotto(data));
  }
  useEffect(gnrProdotto, []);

  const { addItem } = useCart();
  const addToCart = () => {
    addItem({
      id: id.id,
      nome: prodotto.nome,
      img: prodotto.img,
      price: prodotto.prezzo,
      descrizione: prodotto.descrizione,
      quantity: 1,
    });
    setAggiunto(true);
  };

  return (
    <>
      <main className="my-5">
        <div className="container-fluid">
          <CartC />
          {aggiunto && (
            <div className="alert alert-success" role="alert">
              Prodotto aggiunto al carrello
            </div>
          )}
          <h2 className="text-center my-5">Prodotto singolo</h2>
          <div className="row">
            <div className="col">
              <CardSingolP pc={prodotto} key={prodotto.id} />
              <button
                onClick={addToCart}
                type="button"
                className="btn btn_purple "
              >
                Aggiungi al carrello
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

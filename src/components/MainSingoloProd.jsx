import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardSingolP from "./CardSingolP";
import { Link } from "react-router-dom";
import { useLocalStorage } from "react-use";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
export default function MainSingoloProd() {
  const [prodotto, setProdotto] = useState({});
  const [cart, setCart] = useLocalStorage("cart", []);
  const id = useParams();

  const url = import.meta.env.VITE_URL_PRODOTTO + id.id;
  function gnrProdotto() {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProdotto(data));
  }
  useEffect(gnrProdotto, []);

  function addToCart() {
    setCart([...cart, prodotto]);
  }

  //  console.log(prodotto, url);

  console.log(cart);
  return (
    <>
      <main className="my-5">
        <div className="container">
          <FontAwesomeIcon
            icon={faCartArrowDown}
            href="#collapseExample"
            className="btn btn-primary"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            {" "}
          </FontAwesomeIcon>
          <div class="collapse" id="collapseExample">
            <div class="card card-body">
              {" "}
              {(cart.length > 0 && (
                <div>
                  {" "}
                  <ul className="list-group">
                    {cart.map((item) => (
                      <li className="list-group-item">{item.nome}</li>
                    ))}
                  </ul>
                  <Link
                    className="btn btn-primary"
                    to={`/checkout/${prodotto.id}`}
                  >
                    Vai al checkout
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => setCart([])}
                  >
                    Svuota carello
                  </button>
                </div>
              )) || <p>Il carrello è vuoto</p>}{" "}
            </div>
          </div>
          <h2 className="text-center my-5">Prodotto singolo</h2>
          <div className="row">
            <div className="col">
              <button
                onClick={addToCart}
                type="button"
                className="btn btn-primary"
              >
                Aggiungi al carrello
              </button>
              <CardSingolP pc={prodotto} key={prodotto.id} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

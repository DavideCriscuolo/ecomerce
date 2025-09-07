import { Link } from "react-router-dom";
import { useLocalStorage } from "react-use";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export default function CartC(props) {
  const [aggiunto, setAggiunto] = useState(false);
  const [cart, setCart] = useLocalStorage("cart", []);
  function addToCart() {
    const prodottoDaAggiungere = {
      id_product: props.prodotto.id, // chiave coerente con backend
      nome: props.prodotto.nome,
      prezzo: props.prodotto.prezzo,
      img: props.prodotto.img,
      descrizione: props.prodotto.descrizione,
      quantita: 1,
    };

    const exists = cart.find(
      // verifica se il prodotto già esiste nel carrello e incrementa la quantità
      (p) => p.id_product === prodottoDaAggiungere.id_product
    );
    if (exists) {
      setCart(
        cart.map((p) =>
          p.id_product === prodottoDaAggiungere.id_product
            ? { ...p, quantita: p.quantita + 1 }
            : p
        )
      );
    } else {
      // se il prodotto non esiste nel carrello, lo aggiunge
      setCart([...cart, prodottoDaAggiungere]);
    }

    setAggiunto(true);
    setTimeout(() => {
      setAggiunto(false);
    }, 1500);
  }

  return (
    <>
      {aggiunto && (
        <div className="alert alert-success" role="alert">
          Prodotto aggiunto al carrello
        </div>
      )}
      <div className="d-flex justify-content-between  ">
        <div className="align-self-center">
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
          <div className="collapse" id="collapseExample">
            <div className="card card-body">
              {" "}
              {(cart.length > 0 && (
                <div>
                  {" "}
                  <ul className="list-group">
                    {cart.map((item) => (
                      <li key={item.id_product} className="list-group-item">
                        {item.nome}
                      </li>
                    ))}
                  </ul>
                  <Link
                    className="btn btn-primary"
                    to={`/checkout/${cart.id}  `}
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
        </div>
        <div>
          <button
            onClick={addToCart}
            type="button"
            className="btn btn-primary "
          >
            Aggiungi al carrello
          </button>
        </div>
      </div>
    </>
  );
}

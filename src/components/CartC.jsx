import { Link } from "react-router-dom";
import { useLocalStorage } from "react-use";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
export default function CartC(props) {
  const [cart, setCart] = useLocalStorage("cart", []);
  function addToCart() {
    setCart([...cart, props.prodotto]);
  }
  console.log(cart);
  return (
    <>
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
                    to={`/checkout/${props.prodotto.id}`}
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

import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function CartC() {
  const { items, updateItemQuantity, removeItem, emptyCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="cart-container">
      {/* Pulsante per aprire il carrello */}
      <button className="btn btn_purple" onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={faCartArrowDown} />
      </button>

      {/* Carrello */}
      {isOpen && (
        <div className="card bord_purple card-body bg-transparent text-white cart-panel">
          {items.length > 0 ? (
            <>
              <ul className="list-group mb-2">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="list-group-item bg-transparent border-0 text-white d-flex justify-content-between align-items-center"
                  >
                    <span>
                      {item.nome} x {item.quantity}
                    </span>
                    <span>{item.price * item.quantity}</span>
                    <div>
                      <button
                        className="btn btn-sm btn-secondary me-1"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <button
                        className="btn btn-sm btn-secondary me-1"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => removeItem(item.id)}
                      >
                        Rimuovi
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="d-flex flex-column">
                <Link className="btn btn_purple mb-2" to="/checkout">
                  Vai al checkout
                </Link>
                <button className="btn btn-danger" onClick={emptyCart}>
                  Svuota carrello
                </button>
              </div>
            </>
          ) : (
            <p>Il carrello è vuoto</p>
          )}
        </div>
      )}
    </div>
  );
}

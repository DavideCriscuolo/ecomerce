import { Link } from "react-router-dom";
import { useLocalStorage } from "react-use";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
export default function CartC(props) {
  const [cart, setCart] = useLocalStorage("cart", []);
  function addToCart() {
    const prodottoDaAggiungere = {
      id_product: props.prodotto.id, // chiave coerente con backend
      nome: props.prodotto.nome,
      prezzo: props.prodotto.prezzo,
      img: props.prodotto.img,
      case: props.prodotto.case,
      descrizione: props.prodotto.descrizione,
      formato_case: props.prodotto.formato_case,
      gb_ram: props.prodotto.gb_ram,
      ram: props.prodotto.ram,
      processore: props.prodotto.processore,
      dissipatore: props.prodotto.dissipatore,
      mobo: props.prodotto.mobo,
      scheda_video: props.prodotto.scheda_video,
      gb_vram: props.prodotto.gb_vram,
      alimentatore: props.prodotto.alimentatore,
      archiviazione: props.prodotto.archiviazione,
      gb_archiviazione: props.prodotto.gb_archiviazione,
      ventole: props.prodotto.ventole,

      quantita: 1,
    };

    const exists = cart.find(
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
      setCart([...cart, prodottoDaAggiungere]);
    }
  }

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

import { Link } from "react-router-dom";
export default function CardProdotti({ pc }) {
  return (
    <>
      <div key={pc.id} className="col">
        <div className="card border_purple text-white bg-transparent h-100">
          <div className="card-body  ">
            <Link to={`/prodotto/${pc.id}`}>
              {" "}
              <img className="card-img-top p-5" src={pc.img} alt="" />{" "}
            </Link>
            <h4 className="card-title">{pc.nome}</h4>
            <p className="card-text">{pc.descrizione}</p>
          </div>
        </div>
      </div>
    </>
  );
}

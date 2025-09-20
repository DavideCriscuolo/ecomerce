import { Link } from "react-router-dom";
import slugify from "slugify";
export default function CardProdotti({ pc }) {
  //per creare lo  slug lato fornt
  // const slug = slugify(title, { lower: true, strict: true });
  // console.log(slug);

  //per creare lo slug con il backend ovvero presente nel db
  const slug = slugify(pc.slug, { lower: true, strict: true });
  return (
    <>
      <div key={pc.id} className="col">
        <div className="card border_purple text-white bg-transparent h-100">
          <div className="card-body  ">
            <Link to={`/prodotto/${pc.id}/${slug}`}>
              {" "}
              <img className="card-img-top " src={pc.img} alt="" />{" "}
            </Link>
            <h4 className="card-title">{pc.nome}</h4>
            <p className="card-text">{pc.descrizione}</p>
            <p className="card-text">{pc.prezzo}€</p>
          </div>
        </div>
      </div>
    </>
  );
}

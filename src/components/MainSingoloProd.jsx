import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export default function MainSingoloProd() {
  const [prodotto, setProdotto] = useState({});
  const id = useParams();

  const url = import.meta.env.VITE_URL_PRODOTTO + id.id;
  function gnrProdotto() {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProdotto(data));
  }
  useEffect(gnrProdotto, []);

  console.log(prodotto, url);

  return (
    <>
      <main className="my-5">
        <div className="container">
          <h2 className="text-center my-5">Prodotto singolo</h2>
          <div className="row">
            <div className="col">
              <div className="card h-100 mb-3">
                <div className="row g-0">
                  <div className="col-md-4 p-3">
                    <img
                      src={prodotto.img}
                      className="img-fluid rounded-start"
                      alt="Card title"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{prodotto.nome}</h5>
                      <p className="card-text">{prodotto.descrizione}</p>
                      <div>
                        <ul className="list-unstyled list-group list-group-flush ">
                          <li className="list-group-item"> {prodotto.case}</li>
                          <li className="list-group-item">
                            {" "}
                            {prodotto.formato_case}
                          </li>
                          <li className="list-group-item">
                            {" "}
                            {prodotto.gb_ram}GB
                          </li>
                          <li className="list-group-item"> {prodotto.ram}</li>
                          <li className="list-group-item">
                            {" "}
                            {prodotto.processore}
                          </li>
                          <li className="list-group-item">
                            {" "}
                            {prodotto.dissipatore}
                          </li>
                          <li className="list-group-item"> {prodotto.mobo}</li>
                          <li className="list-group-item">
                            {" "}
                            {prodotto.scheda_video}
                          </li>
                          <li className="list-group-item">
                            {" "}
                            {prodotto.gb_vram}GB Vram
                          </li>
                          <li className="list-group-item">
                            {" "}
                            {prodotto.alimentatore}
                          </li>
                          <li className="list-group-item">
                            {" "}
                            {prodotto.archiviazione}{" "}
                          </li>
                          <li className="list-group-item">
                            {" "}
                            {prodotto.gb_archiviazione}GB
                          </li>
                          <li className="list-group-item">
                            {" "}
                            {prodotto.ventole}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

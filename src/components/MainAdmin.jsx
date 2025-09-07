import "./../scss/MainAdmin.scss";
import { useState } from "react";
import { useEffect } from "react";
export default function MainAdmin() {
  const [prodotti, setProdotti] = useState([]);

  const url = import.meta.env.VITE_URL_PRODOTTI;
  function gnrProdotti() {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProdotti(data));
  }

  useEffect(gnrProdotti, []);

  return (
    <main>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xxl-2">
            <div className="border border-1">
              <ul className="list-unstyled">
                <li>Ciao</li>
                <li>ciao</li>
                <li>ciao</li>
              </ul>
            </div>
          </div>
          <div className="col-xxl-10 p-3">
            <div className="text-center">
              <h1>Panello Admin</h1>
              <p>Qui potrai gestire il tuo e-commerce</p>
            </div>
            <div>
              <h3> Tutti i prodotti nel tuo e-commerce</h3>

              <div className="table-responsive">
                <table className="table table-hover table-dark table-bordered border-white  ">
                  <thead>
                    <tr>
                      <th scope="col">Nome</th>
                      <th scope="col">Descrizione</th>
                      <th scope="col">Case</th>
                      <th scope="col">formato_case</th>
                      <th scope="col">gb_ram</th>
                      <th scope="col">processore</th>
                      <th scope="col">ram</th>
                      <th scope="col">dissipatore</th>
                      <th scope="col">mobo</th>
                      <th scope="col">scheda_video</th>
                      <th scope="col">gb_vram</th>
                      <th scope="col">alimentatore</th>
                      <th scope="col">archiviazione</th>
                      <th scope="col">gb_archiviazione</th>
                      <th scope="col">ventole</th>
                      <th scope="col">img</th>
                      <th scope="col">prezzo</th>
                    </tr>
                  </thead>
                  {prodotti.map((pc) => {
                    return (
                      <tbody>
                        <tr class="">
                          <td scope="row">{pc.nome}</td>
                          <td scope="row">{pc.descrizione}</td>
                          <td scope="row">{pc.case}</td>
                          <td scope="row">{pc.formato_case}</td>
                          <td scope="row">{pc.gb_ram}</td>
                          <td scope="row">{pc.processore}</td>
                          <td scope="row">{pc.ram}</td>
                          <td scope="row">{pc.dissipatore}</td>
                          <td scope="row">{pc.mobo}</td>
                          <td scope="row">{pc.scheda_video}</td>
                          <td scope="row">{pc.gb_vram}</td>
                          <td scope="row">{pc.alimentatore}</td>
                          <td scope="row">{pc.archiviazione}</td>
                          <td scope="row">{pc.gb_archiviazione}</td>
                          <td scope="row">{pc.ventole}</td>
                          <td scope="row">{pc.img}</td>
                          <td scope="row">{pc.prezzo}</td>
                        </tr>
                      </tbody>
                    );
                  })}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

import { Link } from "react-router-dom";

export default function CardSingolP({ pc }) {
  return (
    <div className="card bg-transparent text-white mb-3">
      <div className="row g-2">
        <div className=" col-xxl-4 p-3">
          <img
            src={pc.img}
            className="img-fluid rounded-start p-5"
            alt="Card title"
          />
        </div>
        <div className=" col-xxl-8 d-flex">
          <div className="card-body bg-transparent">
            <h5 className="card-title">{pc.nome}</h5>
            <p className="card-text">{pc.descrizione}</p>
            <div>
              {pc.casePc &&
                pc.formato_case &&
                pc.gb_ram &&
                pc.ram &&
                pc.processore &&
                pc.dissipatore &&
                pc.mobo &&
                pc.scheda_video &&
                pc.gb_vram &&
                pc.alimentatore &&
                pc.archiviazione &&
                pc.gb_archiviazione &&
                pc.ventole && (
                  <ul className="list-unstyled list-group list-group-flush">
                    <li className="list-group-item bg-transparent  text-white">
                      {" "}
                      <strong>Case:</strong> {pc.casePc}
                    </li>
                    <li className="list-group-item  bg-transparent text-white">
                      {" "}
                      <strong>Formato Case:</strong> {pc.formato_case}
                    </li>
                    <li className="list-group-item  bg-transparent text-white">
                      {" "}
                      <strong>Ram:</strong> {pc.gb_ram}GB
                    </li>
                    <li className="list-group-item  bg-transparent text-white">
                      {" "}
                      <strong>Tipo di Ram:</strong> {pc.ram}
                    </li>
                    <li className="list-group-item  bg-transparent text-white">
                      {" "}
                      <strong>Processore:</strong> {pc.processore}
                    </li>
                    <li className="list-group-item  bg-transparent text-white">
                      {" "}
                      <strong>Dissipatore:</strong> {pc.dissipatore}
                    </li>
                    <li className="list-group-item  bg-transparent text-white">
                      {" "}
                      <strong>Scheda Madre:</strong> {pc.mobo}
                    </li>
                    <li className="list-group-item  bg-transparent text-white">
                      {" "}
                      <strong>Scheda Video:</strong> {pc.scheda_video}
                    </li>
                    <li className="list-group-item  bg-transparent text-white">
                      {" "}
                      <strong>Vram:</strong> {pc.gb_vram}GB Vram
                    </li>
                    <li className="list-group-item  bg-transparent text-white">
                      {" "}
                      <strong>Alimentatore:</strong> {pc.alimentatore}
                    </li>
                    <li className="list-group-item  bg-transparent text-white">
                      {" "}
                      <strong>Archiviazione:</strong> {pc.archiviazione}{" "}
                    </li>
                    <li className="list-group-item  bg-transparent text-white">
                      {" "}
                      <strong>GB Archiviazione:</strong> {pc.gb_archiviazione}GB
                    </li>

                    <li className="list-group-item  bg-transparent text-white">
                      {" "}
                      <strong>Ventole:</strong> {pc.ventole}
                    </li>
                    <li className="list-group-item  bg-transparent text-white">
                      <strong>Prezzo:</strong> {pc.prezzo}€
                    </li>
                  </ul>
                )}
            </div>
            {pc.quantity > 0 && (
              <span>Quantità Selezionata: {pc.quantity}</span>
            )}
            {pc.price && <p>Prezzo {pc.price}€</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";

export default function CardSingolP({ pc }) {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4 p-3">
          <img
            src={pc.img}
            className="img-fluid rounded-start"
            alt="Card title"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{pc.nome}</h5>
            <p className="card-text">{pc.descrizione}</p>
            <div>
              {pc.case &&
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
                  <ul className="list-unstyled list-group list-group-flush ">
                    <li className="list-group-item">
                      {" "}
                      <strong>Case:</strong> {pc.case}
                    </li>
                    <li className="list-group-item">
                      {" "}
                      <strong>Formato Case:</strong> {pc.formato_case}
                    </li>
                    <li className="list-group-item">
                      {" "}
                      <strong>Ram:</strong> {pc.gb_ram}GB
                    </li>
                    <li className="list-group-item">
                      {" "}
                      <strong>Tipo di Ram:</strong> {pc.ram}
                    </li>
                    <li className="list-group-item">
                      {" "}
                      <strong>Processore:</strong> {pc.processore}
                    </li>
                    <li className="list-group-item">
                      {" "}
                      <strong>Dissipatore:</strong> {pc.dissipatore}
                    </li>
                    <li className="list-group-item">
                      {" "}
                      <strong>Scheda Madre:</strong> {pc.mobo}
                    </li>
                    <li className="list-group-item">
                      {" "}
                      <strong>Scheda Video:</strong> {pc.scheda_video}
                    </li>
                    <li className="list-group-item">
                      {" "}
                      <strong>Vram:</strong> {pc.gb_vram}GB Vram
                    </li>
                    <li className="list-group-item">
                      {" "}
                      <strong>Alimentatore:</strong> {pc.alimentatore}
                    </li>
                    <li className="list-group-item">
                      {" "}
                      <strong>Archiviazione:</strong> {pc.archiviazione}{" "}
                    </li>
                    <li className="list-group-item">
                      {" "}
                      <strong>GB Archiviazione:</strong> {pc.gb_archiviazione}GB
                    </li>

                    <li className="list-group-item">
                      {" "}
                      <strong>Ventole:</strong> {pc.ventole}
                    </li>
                    <li className="list-group-item">
                      <strong>Prezzo:</strong> {pc.prezzo}€
                    </li>
                  </ul>
                )}
            </div>
            {pc.quantita > 0 && (
              <span>Quantità Selezionata: {pc.quantita}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

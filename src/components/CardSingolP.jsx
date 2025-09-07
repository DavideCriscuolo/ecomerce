import { Link } from "react-router-dom";

export default function CardSingolP({ pc }) {
  return (
    <div className="card h-100 mb-3">
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
                    <li className="list-group-item"> {pc.case}</li>
                    <li className="list-group-item"> {pc.formato_case}</li>
                    <li className="list-group-item"> {pc.gb_ram}GB</li>
                    <li className="list-group-item"> {pc.ram}</li>
                    <li className="list-group-item"> {pc.processore}</li>
                    <li className="list-group-item"> {pc.dissipatore}</li>
                    <li className="list-group-item"> {pc.mobo}</li>
                    <li className="list-group-item"> {pc.scheda_video}</li>
                    <li className="list-group-item"> {pc.gb_vram}GB Vram</li>
                    <li className="list-group-item"> {pc.alimentatore}</li>
                    <li className="list-group-item"> {pc.archiviazione} </li>
                    <li className="list-group-item">
                      {" "}
                      {pc.gb_archiviazione}GB
                    </li>
                    <li className="list-group-item"> {pc.ventole}</li>
                  </ul>
                )}
              <span>Prezzo: {pc.prezzo}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

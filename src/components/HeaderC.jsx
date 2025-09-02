import { NavLink } from "react-router-dom";
import "./../scss/HeaderC.scss";
export default function HeaderC() {
  return (
    <>
      <header className="p-3 ">
        <nav className="navbar navbar-expand-sm ">
          <div className="container">
            <a className="navbar-brand" href="#">
              Elo Boost Pc
            </a>
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-center "
              id="collapsibleNavId"
            >
              <ul className="navbar-nav mt-2 mt-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to={"/"}>
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to={"/chi-siamo"}>
                    Chi Siamo
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Prodotti
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

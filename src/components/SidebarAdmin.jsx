import { NavLink } from "react-router-dom";
export default function SidebarAdmin() {
  return (
    <>
      <div className="border border-1">
        <ul className="nav justify-content-center flex-column">
          <li className="nav-item">
            <NavLink
              className="nav-link text-white"
              to={"/admin/aggiungi-prodotto"}
            >
              Aggiungi Nuovo Prodotto
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link">Active link</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link ">Active link</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

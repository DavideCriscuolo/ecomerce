import { useState } from "react";
export default function FormC(props) {
  const [orderSuccess, setOrderSuccess] = useState("");
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    email: "",
    indirizzo: "",
  });
  const prodotti = JSON.parse(localStorage.getItem("cart")) || [];

  function effetuaOrdine(e) {
    e.preventDefault();

    const url = import.meta.env.VITE_URL_ORDINE;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ cliente: formData, prodotti }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.err) return setOrderSuccess(false);
        console.log(formData, prodotti);
        setOrderSuccess(true);
      });
  }

  return (
    <>
      {orderSuccess === true && (
        <div className="alert alert-success" role="alert">
          <h5>Ordine effettuato con successo </h5>
        </div>
      )}
      {orderSuccess === false && (
        <div className="alert alert-danger" role="alert">
          <h5> Ordine non andato a buon fine</h5>
        </div>
      )}
      <form action="" onSubmit={effetuaOrdine}>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Nome
          </label>
          <input
            type="text"
            name="nome"
            id="nome"
            className="form-control"
            placeholder=""
            aria-describedby="helpId"
            onChange={(e) => {
              setFormData({ ...formData, nome: e.target.value });
            }}
            value={formData.nome}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Cognome
          </label>
          <input
            type="text"
            name="cognome"
            id="cognome"
            className="form-control"
            placeholder=""
            aria-describedby="helpId"
            onChange={(e) => {
              setFormData({ ...formData, cognome: e.target.value });
            }}
            value={formData.cognome}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            email
          </label>
          <input
            type="email"
            name="email"
            id="nome"
            className="form-control"
            placeholder=""
            aria-describedby="helpId"
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
            value={formData.email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Indirizzo
          </label>
          <input
            type="text"
            name="indirizzo"
            id="indirizzo"
            className="form-control"
            placeholder=""
            aria-describedby="helpId"
            onChange={(e) => {
              setFormData({ ...formData, indirizzo: e.target.value });
            }}
            value={formData.indirizzo}
          />
        </div>
        <div className="mb-3">
          <h4>Totale: </h4>
          <p> {props.prezzo_totale} Euro </p>
        </div>
        <button type="submit" className="btn btn-secondary">
          Paga
        </button>
      </form>
    </>
  );
}

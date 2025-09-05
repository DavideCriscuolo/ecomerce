import { useState } from "react";
export default function FormC(props) {
  function effetuaOrdine(e) {
    e.preventDefault();
    const url = import.meta.env.VITE_URL_ORDINE + props.prodotto.id;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((response) => {
      if (response.ok) {
        console.log(formData);
        alert("ordine effettuato");
        setFormData({
          prezzo_tot: props.prodotto.prezzo,
          nome: "",
          cognome: "",
          email: "",
          indirizzo: "",
        });
      }
    });
  }
  const [formData, setFormData] = useState({
    prezzo_tot: props.prodotto.prezzo,
    nome: "",
    cognome: "",
    email: "",
    indirizzo: "",
  });

  return (
    <>
      <form action="" onSubmit={effetuaOrdine}>
        <div className="mb-3">
          <label for="" className="form-label">
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
          <label for="" className="form-label">
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
          <label for="" className="form-label">
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
          <label for="" className="form-label">
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
          <p> {props.prodotto.prezzo} Euro </p>
        </div>
        <button type="submit" className="btn btn-secondary">
          Paga
        </button>
      </form>
    </>
  );
}

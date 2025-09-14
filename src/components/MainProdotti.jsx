import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CardProdotti from "./CardProdotti";
export default function MainProdotti() {
  const [prodotti, setProdotti] = useState([]);
  const [filterd, setFiltered] = useState({
    filtro1: "",
    filtro2: "",
    valore1: "",
    valore2: "",
  });

  const urlProdotti = import.meta.env.VITE_URL_PRODOTTI;
  function gnrProdotti(e) {
    e.preventDefault();
    fetch(urlProdotti, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(filterd),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProdotti(data);
      });
  }
  useEffect(gnrProdotti, []);

  return (
    <>
      <main className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-12  col-sm-12 col-md-4  col-xl-3 py-5  ">
              <div>
                <form action="" onSubmit={gnrProdotti}>
                  <div class="mb-3">
                    <div class="mb-3">
                      <label for="" class="form-label">
                        Filtra per
                      </label>
                      <select
                        class="form-select form-select-lg"
                        name=""
                        id=""
                        onChange={(e) =>
                          setFiltered({ ...filterd, filtro1: e.target.value })
                        }
                      >
                        <option value="">Seziona un filtro</option>
                        <option value="nome">Nome</option>
                        <option value="scheda_video">Scheda Video</option>
                        <option value="gb_vram">GB VRAM</option>
                        <option value="processore">Processore</option>
                        <option value="dissipatore">Dissipatore</option>
                        <option value="mobo">Mobo</option>
                        <option value="alimentatore">Alimentatore</option>
                        <option value="ram">RAM</option>
                        <option value="gb_ram">GB RAM</option>
                        <option value="archiviazione">Archiviazione</option>
                        <option value="gb_archiviazione">
                          GB Archiviazione
                        </option>
                        <option value="ventole">Ventole</option>
                        <option value="case">Case</option>
                        <option value="formato_case">Formato Case</option>
                        <option value="ventole">Ventole</option>
                        <option value="prezzo">Prezzo</option>
                      </select>
                      <input
                        class="form-control mt-2"
                        aria-describedby="helpId"
                        placeholder={
                          filterd.filtro1 === "Nome"
                            ? "Inserisci il nome del prodotto"
                            : filterd.filtro1 === "Prezzo"
                            ? "Inserisci il prezzo"
                            : filterd.filtro1 === "Formato Case"
                            ? "Inserisci il formato della case"
                            : filterd.filtro1 === "Case"
                            ? "Inserisci il tipo di case"
                            : filterd.filtro1 === "Scheda Video"
                            ? "Inserisci la scheda video"
                            : filterd.filtro1 === "GB VRAM"
                            ? "Inserisci il GB VRAM"
                            : filterd.filtro1 === "Processore"
                            ? "Inserisci il processore"
                            : filterd.filtro1 === "Dissipatore"
                            ? "Inserisci il dissipatore"
                            : filterd.filtro1 === "Mobo"
                            ? "Inserisci il mobo"
                            : filterd.filtro1 === "Alimentatore"
                            ? "Inserisci l'alimentatore"
                            : filterd.filtro1 === "RAM"
                            ? "Inserisci il RAM"
                            : filterd.filtro1 === "GB RAM"
                            ? "Inserisci il GB RAM"
                            : filterd.filtro1 === "Archiviazione"
                            ? "Inserisci il tipo di archiviazione"
                            : filterd.filtro1 === "GB Archiviazione"
                            ? "Inserisci il GB Archiviazione"
                            : filterd.filtro1 === "Ventole"
                            ? "Inserisci il numero di ventole"
                            : " Seleziona un filtro"
                        }
                        type="text"
                        value={filterd.valore1}
                        onChange={(e) => {
                          setFiltered({
                            ...filterd,
                            valore1: e.target.value,
                          });
                        }}
                      />
                    </div>

                    <div>
                      <select
                        class="form-select form-select-lg"
                        name=""
                        id=""
                        onChange={(e) =>
                          setFiltered({ ...filterd, filtro2: e.target.value })
                        }
                      >
                        <option>Seleziona un filtro</option>
                        <option value="nome">Nome</option>
                        <option value="scheda_video">Scheda Video</option>
                        <option value="gb_vram">GB VRAM</option>
                        <option value="processore">Processore</option>
                        <option value="dissipatore">Dissipatore</option>
                        <option value="mobo">Mobo</option>
                        <option value="alimentatore">Alimentatore</option>
                        <option value="ram">RAM</option>
                        <option value="gb_ram">GB RAM</option>
                        <option value="archiviazione">Archiviazione</option>
                        <option value="gb_archiviazione">
                          GB Archiviazione
                        </option>
                        <option value="ventole">Ventole</option>
                        <option value="case">Case</option>
                        <option value="formato_case">Formato Case</option>
                        <option value="ventole">Ventole</option>
                        <option value="prezzo">Prezzo</option>
                      </select>
                      <input
                        class="form-control mt-2"
                        id="nome"
                        aria-describedby="helpId"
                        placeholder={
                          filterd.filtro2 === "Nome"
                            ? "Inserisci il nome del prodotto"
                            : filterd.filtro2 === "Prezzo"
                            ? "Inserisci il prezzo"
                            : filterd.filtro2 === "Formato Case"
                            ? "Inserisci il formato della case"
                            : filterd.filtro2 === "Case"
                            ? "Inserisci il tipo di case"
                            : filterd.filtro2 === "Scheda Video"
                            ? "Inserisci la scheda video"
                            : filterd.filtro2 === "GB VRAM"
                            ? "Inserisci il GB VRAM"
                            : filterd.filtro2 === "Processore"
                            ? "Inserisci il processore"
                            : filterd.filtro2 === "Dissipatore"
                            ? "Inserisci il dissipatore"
                            : filterd.filtro2 === "Mobo"
                            ? "Inserisci il mobo"
                            : filterd.filtro2 === "Alimentatore"
                            ? "Inserisci l'alimentatore"
                            : filterd.filtro2 === "RAM"
                            ? "Inserisci il RAM"
                            : filterd.filtro2 === "GB RAM"
                            ? "Inserisci il GB RAM"
                            : filterd.filtro2 === "Archiviazione"
                            ? "Inserisci il tipo di archiviazione"
                            : filterd.filtro2 === "GB Archiviazione"
                            ? "Inserisci il GB Archiviazione"
                            : filterd.filtro2 === "Ventole"
                            ? "Inserisci il numero di ventole"
                            : " Seleziona un filtro"
                        }
                        type="text"
                        value={filterd.valore2}
                        onChange={(e) => {
                          setFiltered({
                            ...filterd,
                            valore2: e.target.value,
                          });
                        }}
                      />
                    </div>
                  </div>
                  <button type="submit">Cerca</button>
                </form>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-8 col-xl-9">
              <h2 className="text-center my-5">I nostri prodotti</h2>
              <div className="row row-cols-1 row-cols-md-3 g-3 ">
                {prodotti.length === 0 && (
                  <h3 className="text-center">Non ci sono prodotti</h3>
                )}
                {prodotti.map((pc) => {
                  return <CardProdotti pc={pc} key={pc.id} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

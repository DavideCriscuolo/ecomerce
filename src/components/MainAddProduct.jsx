import SidebarAdmin from "./SidebarAdmin";
import { useState } from "react";
import FormAddProduct from "./FormAddProduct";
import FormModifyProduct from "./FormModifyProduct";
export default function MainAddProduct() {
  const [sectionSelected, setSectionSelected] = useState("");
  const [error, setError] = useState(false);
  const [datoMancate, setDatoMancate] = useState("");
  const [formData, setFormData] = useState({
    nome: "",
    descrizione: "",
    casePc: "",
    formato_case: "",
    gb_ram: 0,
    processore: "",
    dissipatore: "",
    ram: "",
    mobo: "",
    scheda_video: "",
    gb_vram: 0,
    alimentatore: "",
    archiviazione: "",
    gb_archiviazione: 0,
    ventole: "",
    img: "",
    tag: "",
    prezzo: 0,
    slug: "",
  });
  const [formDataM, setFormDataM] = useState({
    id: 0,
    nome: "",
    descrizione: "",
    casePc: "",
    formato_case: "",
    gb_ram: 0,
    processore: "",
    dissipatore: "",
    ram: "",
    mobo: "",
    scheda_video: "",
    gb_vram: 0,
    alimentatore: "",
    archiviazione: "",
    gb_archiviazione: 0,
    ventole: "",
    img: "",
    tag: "",
    prezzo: 0,
    slug: "",
  });

  function addProduct() {
    const urlAddProduct = import.meta.env.VITE_URL_ADD_PRODUCT;
    if (formData.name === "") {
      setDatoMancate("nome");
    }
    if (formData.descrizione === "") {
      setDatoMancate("descrizione");
    }
    if (formData.casePc === "") {
      setDatoMancate("case");
    }
    if (formData.formato_case === "") {
      setDatoMancate("formato_case");
    }
    if (formData.gb_ram === 0 && formData.gb_ram <= 0) {
      setDatoMancate("gb_ram");
    }
    if (formData.processore === "") {
      setDatoMancate("processore");
    }
    if (formData.dissipatore === "") {
      setDatoMancate("dissipatore");
    }
    if (formData.ram === "") {
      setDatoMancate("ram");
    }
    if (formData.mobo === "") {
      setDatoMancate("mobo");
    }
    if (formData.scheda_video === "") {
      setDatoMancate("scheda_video");
    }
    if (formData.gb_vram === 0 || formData.gb_vram <= 0) {
      setDatoMancate("gb_vram");
    }
    if (formData.alimentatore === "") {
      setDatoMancate("alimentatore");
    }
    if (formData.archiviazione === "") {
      setDatoMancate("archiviazione");
    }
    if (formData.gb_archiviazione === 0 || formData.gb_archiviazione <= 0) {
      setDatoMancate("gb_archiviazione");
    }
    if (formData.ventole === "") {
      setDatoMancate("ventole");
    }
    if (formData.img === "") {
      setDatoMancate("img");
    }

    if (formData.prezzo === 0 || formData.prezzo <= 0) {
      setDatoMancate("prezzo");
    }
    if (formData.slug === "") {
      setDatoMancate("slug");
    }

    fetch(urlAddProduct, {
      method: "Post",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.err) return setError(true);
        setError(false);
      });
  }

  function modifyProduct() {
    const url = import.meta.env.VITE_URL_MODIFY_PRODUCT;
    if (formDataM.name === "") {
      setDatoMancate("nome");
    }
    if (formDataM.descrizione === "") {
      setDatoMancate("descrizione");
    }
    if (formDataM.casePc === "") {
      setDatoMancate("case");
    }
    if (formDataM.formato_case === "") {
      setDatoMancate("formato_case");
    }
    if (formDataM.gb_ram === 0 && formDataM.gb_ram <= 0) {
      setDatoMancate("gb_ram");
    }
    if (formDataM.processore === "") {
      setDatoMancate("processore");
    }
    if (formDataM.dissipatore === "") {
      setDatoMancate("dissipatore");
    }
    if (formDataM.ram === "") {
      setDatoMancate("ram");
    }
    if (formDataM.mobo === "") {
      setDatoMancate("mobo");
    }
    if (formDataM.scheda_video === "") {
      setDatoMancate("scheda_video");
    }
    if (formDataM.gb_vram === 0 || formDataM.gb_vram <= 0) {
      setDatoMancate("gb_vram");
    }
    if (formDataM.alimentatore === "") {
      setDatoMancate("alimentatore");
    }
    if (formDataM.archiviazione === "") {
      setDatoMancate("archiviazione");
    }
    if (formDataM.gb_archiviazione === 0 || formDataM.gb_archiviazione <= 0) {
      setDatoMancate("gb_archiviazione");
    }
    if (formDataM.ventole === "") {
      setDatoMancate("ventole");
    }
    if (formDataM.img === "") {
      setDatoMancate("img");
    }

    if (formDataM.prezzo === 0 || formDataM.prezzo <= 0) {
      setDatoMancate("prezzo");
    }
    if (formDataM.slug === "") {
      setDatoMancate("slug");
    }
    if (formDataM.id === 0 || formDataM.id <= 0) {
      setDatoMancate("id");
    }

    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(formDataM),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.err) return setError(true);
        setError(false);
      });
  }

  return (
    <>
      <main>
        <div className="container-fluid">
          <div className="row h-100">
            <div className="col-xxl-2 ">
              <SidebarAdmin />
            </div>
            <div className="col-xxl-10 p-3">
              {error && (
                <div className="alert alert-danger" role="alert">
                  {`Prodotto non inserito manca il dato : ${datoMancate}`}
                </div>
              )}

              <div className="container-fluid">
                <div className="d-flex justify-content-center align-items-center flex-column my-3">
                  {" "}
                  <div>
                    {" "}
                    <h1>Scegli se Aggiungere o modificare un prodotto</h1>{" "}
                  </div>
                  <div className="d-flex gap-2">
                    {" "}
                    <div>
                      <button
                        className="btn btn-success"
                        onClick={() => setSectionSelected("Aggiungere")}
                      >
                        Aggiungere Nuovo
                      </button>
                    </div>
                    <div>
                      <button
                        className="btn btn-success"
                        onClick={() => setSectionSelected("Modificare")}
                      >
                        Modificare Esistente
                      </button>
                    </div>{" "}
                  </div>
                </div>
                <div class="card">
                  <div class="card-body">
                    {(sectionSelected === "Aggiungere" && ( //tramite il coditional rendering al click del bottone decidiamo che form mostrare
                      <div>
                        <h4 class="card-title">
                          Sezione per Aggiungere un nuovo prodotto
                        </h4>
                        <FormAddProduct
                          formData={formData}
                          setFormData={setFormData}
                          addProduct={addProduct}
                        ></FormAddProduct>
                      </div>
                    )) ||
                      (sectionSelected === "Modificare" && (
                        <div>
                          <h4 class="card-title">
                            Sezione per Modificare o eliminare prodotto
                            esistente
                          </h4>
                          <FormModifyProduct
                            formDataM={formDataM}
                            setFormDataM={setFormDataM}
                            modifyProduct={modifyProduct}
                          ></FormModifyProduct>
                        </div>
                      )) ||
                      (sectionSelected === "" && (
                        <p className="text-center fw-semibold">
                          Nessuna opzione selezionata
                        </p>
                      ))}
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

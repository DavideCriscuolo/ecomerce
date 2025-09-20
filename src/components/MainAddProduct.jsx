import SidebarAdmin from "./SidebarAdmin";
import { useState } from "react";
export default function MainAddProduct() {
  const [sucess, setSucess] = useState(false);

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

  const urlAddProduct = import.meta.env.VITE_URL_ADD_PRODUCT;

  function addProduct() {
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

  return (
    <>
      <main>
        <div className="container-fluid">
          <div className="row h-100">
            <div className="col-xxl-2 ">
              <SidebarAdmin />
            </div>
            <div className="col-xxl-10 p-3">
              {sucess && (
                <div className="alert alert-success" role="alert">
                  Prodotto aggiunto con successo
                </div>
              )}
              {error && (
                <div className="alert alert-danger" role="alert">
                  {`Prodotto non inserito manca il dato : ${datoMancate}`}
                </div>
              )}
              <div className="text-center">
                <h2>Qui puoi aggiungere un nuovo prodotto</h2>
              </div>
              <div className="container">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Title</h4>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        addProduct();
                      }}
                      className=""
                      noValidate
                      method="post"
                    >
                      <div className="mb-3">
                        <label className="form-label">Name</label>

                        <input
                          type="text"
                          name=""
                          id="validationCustom01"
                          required
                          className="form-control"
                          placeholder=""
                          aria-describedby="helpId"
                          onChange={(e) => {
                            setFormData({
                              ...formData,
                              nome: e.target.value,
                            });
                          }}
                          value={formData.nome}
                        />
                        <div className="invalid-feedback">aaa</div>
                      </div>
                      <div className="mb-3">
                        <label for="" className="form-label">
                          Case
                        </label>
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control"
                          placeholder=""
                          aria-describedby="helpId"
                          onChange={(e) =>
                            setFormData({ ...formData, casePc: e.target.value })
                          }
                          value={formData.casePc}
                        />
                      </div>
                      <div className="mb-3">
                        <label for="" className="form-label">
                          Formato Case
                        </label>
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control"
                          placeholder=""
                          aria-describedby="helpId"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              formato_case: e.target.value,
                            })
                          }
                          value={formData.formato_case}
                        />
                      </div>
                      <div className="mb-3">
                        <label for="" className="form-label">
                          GB ram
                        </label>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="form-control"
                          placeholder=""
                          aria-describedby="helpId"
                          onChange={(e) =>
                            setFormData({ ...formData, gb_ram: e.target.value })
                          }
                          value={formData.gb_ram}
                        />
                      </div>
                      <div className="mb-3">
                        <label for="" className="form-label">
                          Processsore
                        </label>
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control"
                          placeholder=""
                          aria-describedby="helpId"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              processore: e.target.value,
                            })
                          }
                          value={formData.processore}
                        />
                      </div>
                      <div className="mb-3">
                        <label for="" className="form-label">
                          Tipo di Ram
                        </label>
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control"
                          placeholder=""
                          aria-describedby="helpId"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              ram: e.target.value,
                            })
                          }
                          value={formData.ram}
                        />
                      </div>
                      <div className="mb-3">
                        <label for="" className="form-label">
                          Dissipatore
                        </label>
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control"
                          placeholder=""
                          aria-describedby="helpId"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              dissipatore: e.target.value,
                            })
                          }
                          value={formData.dissipatore}
                        />
                      </div>
                      <div className="mb-3">
                        <label for="" className="form-label">
                          Mobo
                        </label>
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control"
                          placeholder=""
                          aria-describedby="helpId"
                          onChange={(e) =>
                            setFormData({ ...formData, mobo: e.target.value })
                          }
                          value={formData.mobo}
                        />
                      </div>
                      <div className="mb-3">
                        <label for="" className="form-label">
                          Scheda Video
                        </label>
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control"
                          placeholder=""
                          aria-describedby="helpId"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              scheda_video: e.target.value,
                            })
                          }
                          value={formData.scheda_video}
                        />
                      </div>
                      <div className="mb-3">
                        <label for="" className="form-label">
                          GB Vram
                        </label>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="form-control"
                          placeholder=""
                          aria-describedby="helpId"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              gb_vram: e.target.value,
                            })
                          }
                          value={formData.gb_vram}
                        />
                      </div>
                      <div className="mb-3">
                        <label for="" className="form-label">
                          Alimentatore
                        </label>
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control"
                          placeholder=""
                          aria-describedby="helpId"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              alimentatore: e.target.value,
                            })
                          }
                          value={formData.alimentatore}
                        />
                      </div>
                      <div className="mb-3">
                        <label for="" className="form-label">
                          Archiviazione
                        </label>
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control"
                          placeholder=""
                          aria-describedby="helpId"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              archiviazione: e.target.value,
                            })
                          }
                          value={formData.archiviazione}
                        />
                      </div>
                      <div className="mb-3">
                        <label for="" className="form-label">
                          GB archiviazione
                        </label>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="form-control"
                          placeholder=""
                          aria-describedby="helpId"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              gb_archiviazione: e.target.value,
                            })
                          }
                          value={formData.gb_archiviazione}
                        />
                      </div>
                      <div className="mb-3">
                        <label for="" className="form-label">
                          Ventole
                        </label>
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control"
                          placeholder=""
                          aria-describedby="helpId"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              ventole: e.target.value,
                            })
                          }
                          value={formData.ventole}
                        />
                      </div>
                      <div className="mb-3">
                        <label for="" className="form-label">
                          Img
                        </label>
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control"
                          placeholder=""
                          aria-describedby="helpId"
                          onChange={(e) =>
                            setFormData({ ...formData, img: e.target.value })
                          }
                          value={formData.img}
                        />
                      </div>
                      <div className="mb-3">
                        <label for="" className="form-label">
                          Prezzo
                        </label>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="form-control"
                          placeholder=""
                          aria-describedby="helpId"
                          onChange={(e) =>
                            setFormData({ ...formData, prezzo: e.target.value })
                          }
                          value={formData.prezzo}
                        />
                      </div>
                      <div className="mb-3">
                        <label for="" className="form-label">
                          Slug
                        </label>
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control"
                          placeholder=""
                          aria-describedby="helpId"
                          onChange={(e) =>
                            setFormData({ ...formData, slug: e.target.value })
                          }
                          value={formData.slug}
                        />
                      </div>
                      <div className="mb-3">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id=""
                            onChange={(e) => {
                              setFormData({
                                ...formData,
                                tag: e.target.checked ? "more" : "",
                              });
                            }}
                            checked={formData.tag === "more"}
                          />
                          <label class="form-check-label" for="">
                            {" "}
                            Best seller{" "}
                          </label>
                        </div>
                      </div>
                      <div className="mb-3">
                        <div class="form-floating">
                          <textarea
                            class="form-control"
                            placeholder="Leave a comment here"
                            id="floatingTextarea2"
                            style={{
                              height: 300,
                            }}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                descrizione: e.target.value,
                              })
                            }
                            value={formData.descrizione}
                          ></textarea>
                          <label for="floatingTextarea2">Comments</label>
                        </div>
                      </div>{" "}
                      <button type="submit" className="btn btn-primary">
                        Invia
                      </button>
                    </form>
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

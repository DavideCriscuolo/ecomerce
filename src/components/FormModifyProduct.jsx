export default function FormModifyProduct(props) {
  const formDataM = props.formDataM;
  const setFormDataM = props.setFormDataM;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.modifyProduct();
      }}
      className=""
      method="post"
    >
      {" "}
      <div className="mb-3">
        <label className="form-label">Id prodotto</label>

        <input
          type="number"
          name=""
          id="validationCustom01"
          required
          className="form-control"
          placeholder=""
          aria-describedby="helpId"
          value={formDataM.id}
          onChange={(e) => {
            setFormDataM({
              ...formDataM,
              id: e.target.value,
            });
          }}
        />
      </div>
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
            setFormDataM({
              ...formDataM,
              nome: e.target.value,
            });
          }}
          value={formDataM.nome}
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
            setFormDataM({ ...formDataM, casePc: e.target.value })
          }
          value={formDataM.casePc}
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
            setFormDataM({
              ...formDataM,
              formato_case: e.target.value,
            })
          }
          value={formDataM.formato_case}
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
            setFormDataM({ ...formDataM, gb_ram: e.target.value })
          }
          value={formDataM.gb_ram}
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
            setFormDataM({
              ...formDataM,
              processore: e.target.value,
            })
          }
          value={formDataM.processore}
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
            setFormDataM({
              ...formDataM,
              ram: e.target.value,
            })
          }
          value={formDataM.ram}
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
            setFormDataM({
              ...formDataM,
              dissipatore: e.target.value,
            })
          }
          value={formDataM.dissipatore}
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
          onChange={(e) => setFormDataM({ ...formDataM, mobo: e.target.value })}
          value={formDataM.mobo}
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
            setFormDataM({
              ...formDataM,
              scheda_video: e.target.value,
            })
          }
          value={formDataM.scheda_video}
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
            setFormDataM({
              ...formDataM,
              gb_vram: e.target.value,
            })
          }
          value={formDataM.gb_vram}
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
            setFormDataM({
              ...formDataM,
              alimentatore: e.target.value,
            })
          }
          value={formDataM.alimentatore}
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
            setFormDataM({
              ...formDataM,
              archiviazione: e.target.value,
            })
          }
          value={formDataM.archiviazione}
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
            setFormDataM({
              ...formDataM,
              gb_archiviazione: e.target.value,
            })
          }
          value={formDataM.gb_archiviazione}
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
            setFormDataM({
              ...formDataM,
              ventole: e.target.value,
            })
          }
          value={formDataM.ventole}
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
          onChange={(e) => setFormDataM({ ...formDataM, img: e.target.value })}
          value={formDataM.img}
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
            setFormDataM({ ...formDataM, prezzo: e.target.value })
          }
          value={formDataM.prezzo}
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
          onChange={(e) => setFormDataM({ ...formDataM, slug: e.target.value })}
          value={formDataM.slug}
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
              setFormDataM({
                ...formDataM,
                tag: e.target.checked ? "more" : "",
              });
            }}
            checked={formDataM.tag === "more"}
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
              setFormDataM({
                ...formDataM,
                descrizione: e.target.value,
              })
            }
            value={formDataM.descrizione}
          ></textarea>
          <label for="floatingTextarea2">Comments</label>
        </div>
      </div>{" "}
      <button type="submit" className="btn btn-primary">
        Invia
      </button>
    </form>
  );
}

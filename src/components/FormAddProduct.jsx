export default function FormAddProduct(props) {
  const formData = props.formData;
  const setFormData = props.setFormData;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.addProduct();
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
          onChange={(e) => setFormData({ ...formData, casePc: e.target.value })}
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
          onChange={(e) => setFormData({ ...formData, gb_ram: e.target.value })}
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
          onChange={(e) => setFormData({ ...formData, mobo: e.target.value })}
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
          onChange={(e) => setFormData({ ...formData, img: e.target.value })}
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
          onChange={(e) => setFormData({ ...formData, prezzo: e.target.value })}
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
          onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
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
  );
}

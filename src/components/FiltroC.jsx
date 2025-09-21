export default function FiltroC(props) {
  let filterd = props.filterd;
  let setFiltered = props.setFiltered;

  return (
    <div>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          props.gnrProdotti();
        }}
      >
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
              <option value="gb_archiviazione">GB Archiviazione</option>
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
                filterd.filtro1 === "nome"
                  ? "Inserisci il nome del prodotto"
                  : filterd.filtro1 === "prezzo"
                  ? "Inserisci il prezzo"
                  : filterd.filtro1 === "formato_case"
                  ? "Inserisci il formato della case"
                  : filterd.filtro1 === "case"
                  ? "Inserisci il tipo di case"
                  : filterd.filtro1 === "scheda_video"
                  ? "Inserisci la scheda video"
                  : filterd.filtro1 === "gb_vram"
                  ? "Inserisci il GB VRAM"
                  : filterd.filtro1 === "processore"
                  ? "Inserisci il processore"
                  : filterd.filtro1 === "dissipatore"
                  ? "Inserisci il dissipatore"
                  : filterd.filtro1 === "mobo"
                  ? "Inserisci il mobo"
                  : filterd.filtro1 === "alimentatore"
                  ? "Inserisci l'alimentatore"
                  : filterd.filtro1 === "ram"
                  ? "Inserisci il RAM"
                  : filterd.filtro1 === "gb_ram"
                  ? "Inserisci il GB RAM"
                  : filterd.filtro1 === "archiviazione"
                  ? "Inserisci il tipo di archiviazione"
                  : filterd.filtro1 === "gb_archiviazione"
                  ? "Inserisci il GB Archiviazione"
                  : filterd.filtro1 === "ventole"
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
              <option value="gb_archiviazione">GB Archiviazione</option>
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
                filterd.filtro2 === "nome"
                  ? "Inserisci il nome del prodotto"
                  : filterd.filtro2 === "prezzo"
                  ? "Inserisci il prezzo"
                  : filterd.filtro2 === "formato_case"
                  ? "Inserisci il formato della case"
                  : filterd.filtro2 === "case"
                  ? "Inserisci il tipo di case"
                  : filterd.filtro2 === "scheda_video"
                  ? "Inserisci la scheda video"
                  : filterd.filtro2 === "gb_vram"
                  ? "Inserisci il GB VRAM"
                  : filterd.filtro2 === "processore"
                  ? "Inserisci il processore"
                  : filterd.filtro2 === "dissipatore"
                  ? "Inserisci il dissipatore"
                  : filterd.filtro2 === "mobo"
                  ? "Inserisci il mobo"
                  : filterd.filtro2 === "alimentatore"
                  ? "Inserisci l'alimentatore"
                  : filterd.filtro2 === "ram"
                  ? "Inserisci il RAM"
                  : filterd.filtro2 === "gb_ram"
                  ? "Inserisci il GB RAM"
                  : filterd.filtro2 === "archiviazione"
                  ? "Inserisci il tipo di archiviazione"
                  : filterd.filtro2 === "gb_archiviazione"
                  ? "Inserisci il GB Archiviazione"
                  : filterd.filtro2 === "ventole"
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
        <button type="submit" className="btn btn-outline-success">
          Cerca
        </button>
      </form>
    </div>
  );
}

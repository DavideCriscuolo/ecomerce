export default function MainHome() {
  return (
    <>
      <main>
        <div className="container">
          <div>
            <h1>Presentazione</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              modi optio iusto doloribus, mollitia repellendus architecto natus.
              Exercitationem, minima nostrum?
            </p>
          </div>
          <section className="my-5 text-center">
            <h3 className="mb-3">I nostri prodotti piu venduti</h3>
            <div className="row row-cols-1 row-cols-md-3">
              <div className="col">
                <div class="card">
                  <img
                    class="card-img-top"
                    src="https://picsum.photos/seed/picsum/200/300"
                    alt="Title"
                  />
                  <div class="card-body">
                    <h4 class="card-title">Title</h4>
                    <p class="card-text">Text</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div class="card">
                  <img
                    class="card-img-top w-100"
                    src="https://picsum.photos/seed/picsum/200/300"
                    alt="Title"
                  />
                  <div class="card-body">
                    <h4 class="card-title">Title</h4>
                    <p class="card-text">Text</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div class="card">
                  <img
                    class="card-img-top"
                    src="https://picsum.photos/seed/picsum/200/300"
                    alt="Title"
                  />
                  <div class="card-body">
                    <h4 class="card-title">Title</h4>
                    <p class="card-text">Text</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="contanier-fluid border-1">
          <div>imaggine</div>
        </div>
        <div className="container">
          <section className="my-5 text-center">
            <h3 className="mb-3">Accopiate Vincenti</h3>
            <div className="row row-cols-1 row-cols-md-3 ">
              <div className="col">
                <div class="card-sm ">
                  <img
                    class="card-img-top"
                    src="https://picsum.photos/seed/picsum/200/300"
                    alt="Title"
                  />
                  <div class="card-body">
                    <h4 class="card-title">Title</h4>
                    <p class="card-text">Text</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div class="card">
                  <img
                    class="card-img-top w-100"
                    src="https://picsum.photos/seed/picsum/200/300"
                    alt="Title"
                  />
                  <div class="card-body">
                    <h4 class="card-title">Title</h4>
                    <p class="card-text">Text</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div class="card">
                  <img
                    class="card-img-top"
                    src="https://picsum.photos/seed/picsum/200/300"
                    alt="Title"
                  />
                  <div class="card-body">
                    <h4 class="card-title">Title</h4>
                    <p class="card-text">Text</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

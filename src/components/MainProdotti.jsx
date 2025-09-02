export default function MainProdotti() {
  return (
    <>
      <main className="my-5">
        <div className="container">
          <h2 className="text-center my-5">I nostri prodotti</h2>
          <div className="row">
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
        </div>
      </main>
    </>
  );
}

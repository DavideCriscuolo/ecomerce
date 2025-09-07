import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DefaultLayout from "./layout/DefaultLayout";
import ChiSiamo from "./pages/ChiSiamo";
import Prodotti from "./pages/Prodotti";
import ProdottoSingolo from "./pages/ProdottoSingolo";
import Checkout from "./pages/Checkout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" element={<Home />} />

            <Route path="/chi-siamo" element={<ChiSiamo />} />
            <Route path="/prodotti" element={<Prodotti />} />
            <Route path="/prodotto/:id" element={<ProdottoSingolo />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

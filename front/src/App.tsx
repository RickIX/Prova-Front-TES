import React from "react";
import CadastroProduto from "./components/pages/CadastroDespesa";
import ListarProdutos from "./components/pages/ListarDespesas";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />

      <Outlet />

      <Footer />
    </div>
  );
}

export default App;

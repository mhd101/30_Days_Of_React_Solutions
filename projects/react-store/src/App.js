import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AllProducts from "./pages/AllProducts";
import ProductPage from "./pages/ProductPage";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/about"} element={<AboutPage />} />
        <Route path={"/allProducts/"}>
          <Route index element={<AllProducts />} />
          <Route path={"product/:id"} element={<ProductPage />} />
        </Route>
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bookmarkable from "./components/Bookmarkable";
import NotFound from "./components/Not-found";
import "react-tabs/style/react-tabs.css";
import NonBookmarkable from "./components/Non-bookmarkable";
import CartPage from "./components/Cart";
import Products from "./components/Products";
import CartContextProvider from "./components/Cart/CartContextProvider";
function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/cart" element={<CartPage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/bookmarkable" element={<Bookmarkable />} />
            <Route path="/non-bookmarkable" element={<NonBookmarkable />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;

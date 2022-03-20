import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bookmarkable from "./components/Bookmarkable";
import NotFound from "./components/Not-found";
import "react-tabs/style/react-tabs.css";
import NonBookmarkable from "./components/Non-bookmarkable";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/bookmarkable" element={<Bookmarkable />} />
          <Route path="/non-bookmarkable" element={<NonBookmarkable />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

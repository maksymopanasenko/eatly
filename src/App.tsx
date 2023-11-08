import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Menu from "./pages/Menu/Menu";
import Blog from "./pages/Blog/Blog";
import Pricing from "./pages/Pricing/Pricing";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import NoPage from "./pages/NoPage/NoPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Menu />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}

export default App;

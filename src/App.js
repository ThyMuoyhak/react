import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/constaint/Header";
import Footer from "./components/constaint/Footer";
import Home from "./page/Home";

import About from "./page/About";
import Contact_page from "./page/Contact_page";
import C_programming from "./components/course/C_Programming";
import Cpp_programming from "./components/course/Cpp_Programming";
function App() {
  return (
    <div>
      <section>
        <Header></Header>
      </section>

      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route index element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route
            path="/contact"
            element={<Contact_page></Contact_page>}
          ></Route>
          <Route
            path="c_programming"
            element={<C_programming></C_programming>}
          ></Route>
          <Route
            path="cpp_programming"
            element={<Cpp_programming></Cpp_programming>}
          ></Route>
        </Routes>
      </BrowserRouter>

      <section>
        <Footer></Footer>
      </section>
    </div>
  );
}

export default App;

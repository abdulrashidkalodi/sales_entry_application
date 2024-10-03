import "./App.css";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Home from "./pages/homePage/Home";
import Nopage from "./pages/Nopage/NoPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<Nopage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

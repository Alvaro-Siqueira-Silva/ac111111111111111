import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/sobre";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/sobre" element={<Sobre />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

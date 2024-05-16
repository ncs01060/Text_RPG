import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Youngmin_index from "./youngmin/youngmin_index";
import Jewon_index from "./jewon/jewon_index";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Youngmin_index />} path="/youngminMain"></Route>
          <Route element={<Jewon_index />} path="/jewonMain"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

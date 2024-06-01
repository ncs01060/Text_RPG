import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Youngminindex from "./youngmin/youngmin_index";
import Jewonindex from "./jewon/jewon_index";
import Main from "./both/main";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/"></Route>
          <Route element={<Youngminindex />} path="/youngminMain"></Route>
          <Route element={<Jewonindex />} path="/jewonMain"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

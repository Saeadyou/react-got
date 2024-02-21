import { BrowserRouter, Route, Routes } from "react-router-dom";
import Houses from "./pages/Houses";
import Persons from "./pages/Persons";
import Quotes from "./pages/Quotes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Houses />} />
        <Route path="persons" element={<Persons />} />
        <Route path="quotes" element={<Quotes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

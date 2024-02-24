import { BrowserRouter, Route, Routes } from "react-router-dom";
import Houses from "./pages/Houses";
import Persons from "./pages/Persons";
import Quotes from "./pages/Quotes";
import House from "./pages/House";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Houses />}>
          <Route path="houses/:slug" element={<House />} />
        </Route>
        <Route path="persons" element={<Persons />} />
        <Route path="quotes" element={<Quotes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

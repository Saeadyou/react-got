import { BrowserRouter, Route, Routes } from "react-router-dom";
import Houses from "./pages/Houses";
import Persons from "./pages/Persons";
import Quotes from "./pages/Quotes";
import House from "./pages/House";
import Person from "./pages/Person";
import { PersonsProvider } from "./contexts/PersonsContext";

function App() {
  return (
    <PersonsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Houses />}>
            <Route path="houses/:slug" element={<House />} />
          </Route>
          <Route path="persons" element={<Persons />}>
            <Route path=":person" element={<Person />} />
          </Route>
          <Route path="quotes" element={<Quotes />} />
        </Routes>
      </BrowserRouter>
    </PersonsProvider>
  );
}

export default App;

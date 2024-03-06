import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PersonsProvider } from "./contexts/PersonsContext";

const Houses = lazy(() => import("./pages/Houses"));
const House = lazy(() => import("./pages/House"));
const Persons = lazy(() => import("./pages/Persons"));
const Person = lazy(() => import("./pages/Person"));
const Quotes = lazy(() => import("./pages/Quotes"));

function App() {
  return (
    <PersonsProvider>
      <BrowserRouter>
        <Suspense>
          <Routes>
            <Route path="/" element={<Houses />}>
              <Route path="houses/:slug" element={<House />} />
            </Route>
            <Route path="persons" element={<Persons />}>
              <Route path=":person" element={<Person />} />
            </Route>
            <Route path="quotes" element={<Quotes />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </PersonsProvider>
  );
}

export default App;

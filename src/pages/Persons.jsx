import { Outlet, useParams } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import PersonsList from "../components/PersonsList";
import SearchBar from "../components/SearchBar";
import { usePersons } from "../contexts/PersonsContext";

function Persons() {
  const { person } = useParams();
  const { isLoading, handleInputChange } = usePersons();

  return (
    <AppLayout>
      {!person && !isLoading && (
        <>
          <SearchBar handleInputChange={handleInputChange} />
          <PersonsList />
        </>
      )}

      <Outlet />
    </AppLayout>
  );
}

export default Persons;

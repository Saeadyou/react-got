import { Outlet, useParams } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import PersonsList from "../components/PersonsList";
import SearchBar from "../components/SearchBar";

function Persons() {
  const { person } = useParams();
  return (
    <AppLayout>
      {!person && (
        <>
          <SearchBar />
          <PersonsList />
        </>
      )}

      <Outlet />
    </AppLayout>
  );
}

export default Persons;

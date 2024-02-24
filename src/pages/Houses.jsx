import { Outlet, useParams } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import HousesList from "../components/HousesList";
import SearchBar from "../components/SearchBar";

function Houses() {
  const { slug } = useParams();
  return (
    <AppLayout>
      {!slug && (
        <>
          <SearchBar />
          <HousesList />
        </>
      )}
      <Outlet />
    </AppLayout>
  );
}

export default Houses;

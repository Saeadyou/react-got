import { Outlet, useParams } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import HousesList from "../components/HousesList";
import SearchBar from "../components/SearchBar";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";

const BASE_URL = "https://api.gameofthronesquotes.xyz/v1";

function Houses() {
  const { slug } = useParams();
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredHouses, setFilteredHouses] = useState([]);

  useEffect(
    function () {
      async function fetchHouses() {
        try {
          const res = await fetch(`${BASE_URL}/houses`);
          const data = await res.json();
          setHouses(data);
          setFilteredHouses(data);
        } catch (err) {
          console.log("There was an error during loading data...");
          setError(err);
        } finally {
          setLoading(false);
        }
      }
      fetchHouses();
    },
    [slug],
  );

  function handleInputChange(e) {
    const searchTerm = e.target.value;

    const filteredItems = houses.filter((house) =>
      house.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    setFilteredHouses(filteredItems);
  }

  return (
    <AppLayout>
      {loading && <Spinner />}
      {error && <p>There was an error during loading data...</p>}
      {!slug && !loading && !error && (
        <>
          <SearchBar handleInputChange={handleInputChange} />
          <HousesList filteredHouses={filteredHouses} />
        </>
      )}
      <Outlet />
    </AppLayout>
  );
}

export default Houses;

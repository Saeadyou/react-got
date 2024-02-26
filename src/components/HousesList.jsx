import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BASE_URL = "https://api.gameofthronesquotes.xyz";

function HousesList() {
  const [houses, setHouses] = useState([]);
  useEffect(function () {
    async function fetchHouses() {
      try {
        const res = await fetch(`${BASE_URL}/v1/houses`);
        const data = await res.json();
        setHouses(data);
      } catch {
        console.log("There was an error during loading data...");
      }
    }
    fetchHouses();
  }, []);

  return (
    <ul>
      {houses.map((house) => (
        <li key={house.slug}>
          <Link to={`/houses/${house.slug}`}>{house.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default HousesList;

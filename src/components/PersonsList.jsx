import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BASE_URL = "https://api.gameofthronesquotes.xyz";

function PersonsList() {
  const [persons, setPersons] = useState([]);

  useEffect(function () {
    async function fetchPersons() {
      try {
        const res = await fetch(`${BASE_URL}/v1/characters`);
        const data = await res.json();
        setPersons(data);
      } catch {
        console.log("There was an error during loading data...");
      }
    }
    fetchPersons();
  }, []);

  return (
    <ul>
      {persons.map((person) => (
        <i key={person.slug} className="grid grid-cols-2">
          <Link to={`/persons/${person.name}`}>{person.name}</Link>
          <span>{person.house?.name || "❌Without house❌"}</span>
        </i>
      ))}
    </ul>
  );
}

export default PersonsList;

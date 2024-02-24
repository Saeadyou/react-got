import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const BASE_URL = "https://api.gameofthronesquotes.xyz";

function House() {
  const [house, setHouse] = useState([]);
  const { slug } = useParams();

  useEffect(
    function () {
      async function fetchMembers() {
        try {
          const res = await fetch(`${BASE_URL}/v1/house/${slug}`);
          const data = await res.json();
          setHouse(data.at(0).members);
        } catch {
          const data = "There was an error during loading data...";
          console.log(data);
        }
      }
      fetchMembers();
    },
    [slug],
  );

  return (
    <ul>
      {house.map((member) => (
        <li key={member.slug}>{member.name}</li>
      ))}
    </ul>
  );
}

export default House;

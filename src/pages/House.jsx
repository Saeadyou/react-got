import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
const BASE_URL = "https://api.gameofthronesquotes.xyz/v1";

function House() {
  const [house, setHouse] = useState([]);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();

  useEffect(
    function () {
      async function fetchMembers() {
        try {
          const res = await fetch(`${BASE_URL}/house/${slug}`);
          const data = await res.json();
          setHouse(data.at(0).members);
        } catch {
          const data = "There was an error during loading data...";
          console.log(data);
        } finally {
          setLoading(false);
        }
      }
      fetchMembers();
    },
    [slug],
  );

  return (
    <div className="flex flex-col">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="mb-3 border-b bg-[#303030] px-2 text-center italic">
            list of {slug}&apos;s members
          </div>
          <ul>
            {house.map((member) => (
              <li key={member.slug} className="mb-4">
                {member.name}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default House;

// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const BASE_URL = "https://api.gameofthronesquotes.xyz/v1";

// function PersonsList() {
//   const [persons, setPersons] = useState([]);

//   useEffect(function () {
//     async function fetchPersons() {
//       try {
//         const res = await fetch(`${BASE_URL}/characters`);
//         const data = await res.json();
//         setPersons(data);
//       } catch {
//         console.log("There was an error during loading data...");
//       }
//     }
//     fetchPersons();
//   }, []);

//   return (
//     <div className="flex flex-col">
//       <div className="mb-3 border-b bg-black text-center italic">
//         list of Persons
//       </div>
//       <ul>
//         {persons.map((person) => (
//           <i key={person.slug} className="grid grid-cols-2">
//             <Link to={`/persons/${person.name}`}>{person.name}</Link>
//             <span>{person.house?.name || "❌Without house❌"}</span>
//           </i>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default PersonsList;

import { Link } from "react-router-dom";
import { usePersons } from "../contexts/PersonsContext";
import Spinner from "./Spinner";

function PersonsList() {
  const { persons, isLoading } = usePersons();
  if (isLoading) return <Spinner />;

  return (
    <div className="flex flex-col">
      <div className="mb-3 border-b bg-black text-center italic">
        list of Persons
      </div>
      <ul>
        {persons.map((person) => (
          <i key={person.slug} className="grid grid-cols-2">
            <Link to={`/persons/${person.name}`}>{person.name}</Link>
            <span>{person.house?.name || "❌Without house❌"}</span>
          </i>
        ))}
      </ul>
    </div>
  );
}

export default PersonsList;

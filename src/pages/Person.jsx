// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import QuotesOfPerson from "../components/QuotesOfPerson";
// const BASE_URL = "https://api.gameofthronesquotes.xyz/v1";

// function Person() {
//   const { person } = useParams();
//   const [persons, setPersons] = useState([]);
//   let selectedPerson = persons?.find((item) => item.name === person);

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

//   const [quotes, setQuotes] = useState(
//     <QuotesOfPerson person={selectedPerson} setQuotes={setQuotes} />,
//     //     <ul>
//     //       {selectedPerson?.quotes.map((quote, index) => (
//     //         <li key={index}>{quote}</li>
//     //       )) || "AAA"}
//     //     </ul>,
//   );
//   console.log("qqqqq", selectedPerson);

//   function handleClick() {
//     const rndNum = Math.floor(Math.random() * persons.length);
//     selectedPerson = persons.at(rndNum);
//     // <QuotesOfPerson person={persons.at(rndNum)} setQuotes={setQuotes} />;
//     console.log("-->", persons.at(rndNum));
//   }

//   return (
//     <div className="flex flex-col">
//       <div className="mb-3 border-b bg-black text-center italic">{person}</div>
//       <div>House:</div>
//       <div>{selectedPerson?.house?.name || "❌Without house❌"}</div>
//       <div>Quotations:</div>
//       <div>
//         {/* <QuotesOfPerson person={selectedPerson} setQuotes={setQuotes} /> */}
//         {/* {quotes} */}
//         <ul>
//           {selectedPerson?.quotes.map((quote, index) => (
//             <li key={index}>{quote}</li>
//           ))}
//         </ul>
//       </div>
//       <button
//         onClick={() => handleClick()}
//         className="mb-4 mt-8 w-fit cursor-pointer self-center rounded-lg border-0 bg-[#283c50] p-4 uppercase transition-all hover:bg-white hover:text-[#152e38] hover:shadow-[0.2rem_0.3rem_0.5rem_#ffffff4d]"
//       >
//         Change quotations
//       </button>
//     </div>
//   );
// }

// export default Person;

import { usePersons } from "../contexts/PersonsContext";
import Spinner from "../components/Spinner";
import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

function Person() {
  const { person } = useParams();
  const { handleClick, getPerson, selectedPerson, isLoading } = usePersons();

  useEffect(
    function () {
      getPerson(person);
    },
    [person, getPerson],
  );

  const { house, quotes } = selectedPerson;
  const selectedHouse = useRef(house);

  if (isLoading) return <Spinner />;

  return (
    <div className="flex flex-col">
      <div className="mb-3 border-b bg-black text-center italic">{person}</div>
      <div className="mt-4 text-[#b96eff]">House:</div>
      <div>{selectedHouse.current?.name || "❌Without house❌"}</div>
      <div className="mt-4 text-[#b96eff]">Quotations:</div>
      <div>
        <ul>
          {quotes?.map((quote, index) => (
            <li key={index}>{quote}</li>
          ))}
        </ul>
      </div>
      <button
        onClick={() => handleClick()}
        className="mb-4 mt-8 w-fit cursor-pointer self-center rounded-lg border-0 bg-[#283c50] p-4 uppercase transition-all hover:bg-white hover:text-[#152e38] hover:shadow-[0.2rem_0.3rem_0.5rem_#ffffff4d]"
      >
        Change quotations
      </button>
    </div>
  );
}

export default Person;

import { useEffect, useState } from "react";
import AppLayout from "../components/AppLayout";

const BASE_URL = "https://api.gameofthronesquotes.xyz/v1";

function Quotes() {
  const [quotes, setQuotes] = useState([]);
  const [clicked, setClicked] = useState(false);

  useEffect(
    function () {
      async function fetchQuotes() {
        try {
          const res = await fetch(`${BASE_URL}/random/5`);
          const data = await res.json();
          setQuotes(data);
        } catch {
          console.log("There was an error during loading data...");
        }
      }
      fetchQuotes();
    },
    [clicked],
  );

  function handleClick() {
    setClicked(!clicked);
  }

  return (
    <AppLayout>
      <div className="flex flex-col">
        <div className="mb-3 border-b bg-black text-center italic">
          Some Quotations
        </div>
        <ul className="flex flex-col">
          {quotes.map((quote, index) => (
            <i key={index}>{quote.sentence}</i>
          ))}
        </ul>
        <button
          onClick={() => handleClick()}
          className="mb-4 mt-8 w-fit cursor-pointer self-center rounded-lg border-0 bg-[#283c50] p-4 uppercase transition-all hover:bg-white hover:text-[#152e38] hover:shadow-[0.2rem_0.3rem_0.5rem_#ffffff4d]"
        >
          Update quotations
        </button>
      </div>
    </AppLayout>
  );
}

export default Quotes;

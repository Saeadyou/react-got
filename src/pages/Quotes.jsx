import { useEffect, useState } from "react";
import AppLayout from "../components/AppLayout";
import Spinner from "../components/Spinner";

const BASE_URL = "https://api.gameofthronesquotes.xyz/v1";

function Quotes() {
  const [quotes, setQuotes] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(
    function () {
      async function fetchQuotes() {
        try {
          const res = await fetch(`${BASE_URL}/random/5`);
          const data = await res.json();
          setQuotes(data);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      }
      fetchQuotes();
    },
    [clicked],
  );

  function handleClick() {
    setLoading(true);
    setClicked(!clicked);
  }

  return (
    <AppLayout>
      <div className="flex flex-col">
        {loading && <Spinner />}
        {!loading &&
          (error ? (
            <p>There was an error during loading data...</p>
          ) : (
            <>
              <div className="mb-3 border-b bg-black text-center italic">
                Some Quotations
              </div>
              <ul className="flex flex-col">
                {quotes.map((quote, index) => (
                  <i key={index}>{quote.sentence}</i>
                ))}
              </ul>
              <button
                onClick={handleClick}
                className="mb-4 mt-8 w-fit cursor-pointer self-center rounded-lg border-0 bg-[#283c50] p-4 uppercase transition-all hover:bg-white hover:text-[#152e38] hover:shadow-[0.2rem_0.3rem_0.5rem_#ffffff4d]"
              >
                Update quotations
              </button>
            </>
          ))}
      </div>
    </AppLayout>
  );
}

export default Quotes;

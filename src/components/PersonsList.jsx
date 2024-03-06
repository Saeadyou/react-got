import { Link } from "react-router-dom";
import { usePersons } from "../contexts/PersonsContext";
import Spinner from "./Spinner";

function PersonsList() {
  const { filteredPersons, isLoading } = usePersons();
  if (isLoading) return <Spinner />;
  return (
    <div className="flex flex-col">
      <div className="mb-3 border-b bg-black text-center italic">
        list of Persons
      </div>
      <ul>
        {filteredPersons.map((person) => (
          <i key={person.slug} className="grid grid-cols-2">
            <Link to={`/persons/${person.name}`} className="text-[#bdddff]">
              {person.name}
            </Link>
            <span>{person.house?.name || "❌Without house❌"}</span>
          </i>
        ))}
      </ul>
    </div>
  );
}

export default PersonsList;

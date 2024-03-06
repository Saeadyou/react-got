import { Link } from "react-router-dom";

function HousesList({ filteredHouses }) {
  return (
    <div className="flex flex-col">
      <div className="mb-3 border-b bg-[#303030] text-center italic">
        list of houses
      </div>
      <ul>
        {filteredHouses.map((house) => (
          <li key={house.slug} className="mb-4">
            <Link to={`/houses/${house.slug}`} className="text-[#bdddff]">
              {house.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HousesList;

import { NavLink } from "react-router-dom";

function PageNav() {
  return (
    <nav>
      <ul className="flex justify-center p-4 uppercase">
        <li>
          <NavLink
            to="/"
            className="p-4 text-[2rem] transition-all hover:bg-[#7b27ca]"
          >
            Houses
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/persons"
            className="p-4 text-[2rem] transition-all hover:bg-[#7b27ca]"
          >
            Persons
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/quotes"
            className="p-4 text-[2rem] transition-all hover:bg-[#7b27ca]"
          >
            Quotes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;

import { NavLink } from "react-router-dom";

function PageNav() {
  return (
    <nav>
      <ul className="flex justify-center p-4 uppercase">
        <li>
          <NavLink
            to="/"
            className="p-4 text-xl text-[#bdddff] transition-all hover:bg-[#7b27ca] sm:text-[2rem]"
          >
            Houses
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/persons"
            className="p-4 text-xl text-[#bdddff] transition-all hover:bg-[#7b27ca] sm:text-[2rem]"
          >
            Persons
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/quotes"
            className="p-4 text-xl text-[#bdddff] transition-all hover:bg-[#7b27ca] sm:text-[2rem]"
          >
            Quotes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;

import { Link } from "react-router-dom";

function PageNav() {
  return (
    <nav>
      <ul className="flex justify-center gap-3">
        <li>
          <Link to="/" className=" hover:bg-slate-500">
            Houses
          </Link>
        </li>
        <li>
          <Link to="/persons" className=" hover:bg-slate-500">
            Persons
          </Link>
        </li>
        <li>
          <Link to="/quotes" className=" hover:bg-slate-500">
            Quotes
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;

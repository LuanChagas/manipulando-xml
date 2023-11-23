import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <nav className="border-r-2 border-gray-300 shadow-xl row-span-2">
      <div className="h-20"></div>
      <ul className=" ml-10 flex flex-col">
        <li className="pb-2">
          <Link to="/uploadcsv" className="p-2 hover:bg-gray-200   rounded-md">
            Upload + csv
          </Link>
        </li>
        <li className="pb-2">
          <Link
            to="/servidorcsv"
            className="p-2 hover:bg-gray-200   rounded-md"
          >
            Servidor csv
          </Link>
        </li>
        <li className="pb-2">
          <Link to="/uploadjson" className="p-2 hover:bg-gray-200   rounded-md">
            Json
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;

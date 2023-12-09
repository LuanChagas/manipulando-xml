import { Link, NavLink } from "react-router-dom";

type SideNavProps = {
  isOpen: boolean;
  onToggleSidebar?: React.Dispatch<React.SetStateAction<boolean>>;
};

const SideNav = ({ isOpen, onToggleSidebar }: SideNavProps) => {
  function closeNav() {
    onToggleSidebar!(false);
  }

  const checkIsActive = (path: string) => {
    if (window.location.pathname === path) {
      return "bg-gray-200";
    } else {
      return "";
    }
  };
  return (
    <nav
      className={`border-r-2 absolute h-screen md:border-gray-300 shadow-2xl rounded-xl row-span-2 w-3/5 md:w-1/6 md:relative 
      z-50 md:ml-0  transition-all duration-1000 bg-white ${
        isOpen ? "ml-0" : "ml-[-75%]"
      }`}
    >
      <div className="h-20"></div>
      <ul className=" ml-10 flex flex-col">
        <li className="pb-5">
          <NavLink
            onClick={closeNav}
            to="/uploadcsv"
            className={({ isActive, isPending }) =>
              `p-2 hover:bg-gray-200 rounded-md ${
                isActive ? "bg-gray-300" : ""
              }`
            }
          >
            Upload + csv
          </NavLink>
        </li>
        <li className="pb-5">
          <NavLink
            onClick={closeNav}
            to="/servidorcsv"
            className={({ isActive, isPending }) =>
              `p-2 hover:bg-gray-200 rounded-md ${
                isActive ? "bg-gray-300" : ""
              }`
            }
          >
            Servidor csv
          </NavLink>
        </li>
        <li className="pb-5">
          <NavLink
            onClick={closeNav}
            to="/uploadjson"
            className={({ isActive, isPending }) =>
              `p-2 hover:bg-gray-200 rounded-md ${
                isActive ? "bg-gray-300" : ""
              }`
            }
          >
            Json
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;

const SideNav = () => {
  return (
    <nav className="border-r-2 border-gray-300 shadow-xl row-span-2">
      <div className="h-20"></div>
      <ul className=" ml-10 flex flex-col">
        <li className="pb-2">
          <a href="#" className="p-2 hover:bg-gray-200   rounded-md">
            Upload + csv
          </a>
        </li>
        <li className="pb-2">
          <a href="#" className="p-2 hover:bg-gray-200   rounded-md">
            Servidor csv
          </a>
        </li>
        <li className="pb-2">
          <a href="#" className="p-2 hover:bg-gray-200   rounded-md">
            Json
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;

import React from "react";
import imgHambuger from "../assets/texto.png";

type HeaderProps = {
  onToggleSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ onToggleSidebar }: HeaderProps) => {
  const showNav = () => {
    onToggleSidebar(true);
  };

  return (
    <>
      <header className="w-full  text-4xl p-2 flex justify-between items-start ">
        <div className="flex flex-col">
          <span className="block w-9 md:w-20 border-b-2 border-gray-700 h-1"></span>
          <h1 className="text-left text-2xl md:text-4xl">Manipulando XML</h1>
          <div className="flex w-48 md:w-72 justify-end ">
            <span className="w-9 md:w-20 h-1 border-t-2 border-gray-950"></span>
          </div>
        </div>
        <button onClick={showNav} className="block md:hidden w-5 mt-2 mr-2">
          <img src={imgHambuger} alt="" className="h-7" />
        </button>
      </header>
    </>
  );
};

export default Header;

import React from "react";
import JsonXmlInfo from "./JsonXmlInfo";

type CardXmlsProps = {
  dados: IDataXml[];
  donwloaded: React.Dispatch<React.SetStateAction<boolean>>;
};

const CardXmls = ({ dados, donwloaded }: CardXmlsProps) => {
  const [selectDados, setSelectDados] = React.useState<IDataXml>(dados[0]);
  return (
    <section className="w-full flex flex-col items-center px-3">
      <h3 className="text-2xl mb-5">XML's</h3>
      <input id="files" multiple accept=".xml" className="hidden" type="file" />
      <div className="md:max-w-md border border-gray-100 shadow-md rounded-md flex max-h-80 overflow-auto min-h-[10rem] ">
        <ul className=" flex justify-around flex-wrap gap-10 py-3 px-2  ">
          {dados.map((dado, index) => (
            <li
              key={index}
              onClick={() => setSelectDados(dado)}
              className="px-5 w-36 py-1 border max-h-9 text-sm md:text-base text-center  border-gray-700 rounded-lg shadow-md hover:bg-gray-200 cursor-pointer"
            >
              {dado.Name}
            </li>
          ))}
        </ul>
      </div>
      <JsonXmlInfo dado={selectDados} />
    </section>
  );
};

export default CardXmls;

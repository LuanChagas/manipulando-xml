import JsonXmlInfo from "./JsonXmlInfo";

const CardXmls = () => {
  return (
    <section className="w-full flex flex-col items-center">
      <h3 className="text-2xl mb-5">XML's</h3>
      <input id="files" multiple accept=".xml" className="hidden" type="file" />
      <div className="max-w-md border border-gray-100 shadow-md rounded-md flex max-h-80 overflow-auto min-h-[10rem]">
        <ul className=" flex justify-around flex-wrap gap-10 py-3 px-2  ">
          <li className="px-6 py-1 border max-h-9   border-gray-700 rounded-lg shadow-md hover:bg-gray-200 ">
            xml:1
          </li>
          <li className="px-6 py-1 border max-h-9   border-gray-700 rounded-lg shadow-md hover:bg-gray-200">
            xml:1
          </li>
          <li className="px-6 py-1 border max-h-9   border-gray-700 rounded-lg shadow-md hover:bg-gray-200">
            xml:1
          </li>
        </ul>
      </div>
      <JsonXmlInfo />
    </section>
  );
};

export default CardXmls;

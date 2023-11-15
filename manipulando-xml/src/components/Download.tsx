import SvgCsv from "./SvgCsv";

const Donwload = () => {
  return (
    <section className="flex flex-col items-center">
      <h3 className="text-2xl mb-5">Download</h3>
      <input id="files" multiple accept=".xml" className="hidden" type="file" />
      <label htmlFor="files" className="cursor-pointer">
        <div className="w-64 h-40 border border-gray-100 shadow-md rounded-md flex flex-col items-center">
          <div className="mt-5">
            <SvgCsv />
          </div>
          <div className="mt-5 text-sm">
            <h4>Clique para realizar o donwload</h4>
          </div>
        </div>
      </label>
    </section>
  );
};

export default Donwload;

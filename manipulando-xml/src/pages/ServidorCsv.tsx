import { useEffect, useState } from "react";
import Donwload from "../components/Download";
import { apiUrl } from "../config/api";

const ServidorCsv = () => {
  const urlDownload = `${apiUrl}/download`;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <>
      <section
        className={`transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-2xl ml-10">Servidor Csv</h1>
        <section className="flex w-full justify-center mt-5">
          <Donwload urlDownload={urlDownload} donwloaded={undefined} />
        </section>
      </section>
    </>
  );
};

export default ServidorCsv;

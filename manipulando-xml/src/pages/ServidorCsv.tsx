import Donwload from "../components/Download";

const ServidorCsv = () => {
  const urlDownload = "http://localhost:3000/download";
  return (
    <>
      <h1 className="text-2xl ml-10">Servidor Csv</h1>
      <section className="flex w-full justify-center mt-5">
        <Donwload urlDownload={urlDownload} donwloaded={undefined} />
      </section>
    </>
  );
};

export default ServidorCsv;

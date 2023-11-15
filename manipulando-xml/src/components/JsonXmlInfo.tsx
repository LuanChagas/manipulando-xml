const jsonXmlInfo = () => {
  return (
    <section className="w-full flex flex-col items-center mt-10">
      <input id="files" multiple accept=".xml" className="hidden" type="file" />
      <div className="max-w-4xl h-44 border border-gray-100 shadow-md rounded-md flex max-h-80">
        <div className="flex">
          <div className="flex flex-col py-4 gap-4 px-4 border-r-2 border-gray-300">
            <span>Nome:Luan Chagas</span>
            <span>Idade: 20</span>
            <span>Data de Nascimento:12-12-2012</span>
          </div>
          <div className="flex flex-col py-4 gap-4 px-4 ">
            <span>Front:React JS</span>
            <span>Back end: Nest</span>
            <span>Dados: XML + CSV</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default jsonXmlInfo;

type jsonXmlInfoProps = {
  dado: IDataXml;
};

const jsonXmlInfo = ({ dado }: jsonXmlInfoProps) => {
  return (
    <section className="w-full flex flex-col items-center mt-10">
      <input id="files" multiple accept=".xml" className="hidden" type="file" />
      <div className="max-w-4xl h-44 border border-gray-100 shadow-md rounded-md flex max-h-80">
        <div className="flex">
          <div className="flex flex-col py-4 gap-4 px-4 border-r-2 border-gray-300">
            <span>Nome:{dado.Name}</span>
            <span>Idade: {dado.Age}</span>
            <span>Data de Nascimento: {dado.DateOfBirth.toString()}</span>
          </div>
          <div className="flex flex-col py-4 gap-4 px-4 ">
            <span>Front:{dado.FrontEnd}</span>
            <span>Back end: {dado.BackEnd}</span>
            <span>Dados: {dado.DataFormats}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default jsonXmlInfo;

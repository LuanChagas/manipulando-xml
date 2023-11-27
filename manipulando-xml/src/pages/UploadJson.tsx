import React, { useEffect, useState } from "react";
import CardXmls from "../components/CardXmls";
import Upload from "../components/Upload";
import useFetch from "../hooks/useFetch";
import Button from "../components/Button";
import Loading from "../components/Loading";
import useUpload from "../hooks/useUpload";
const UploadJson = () => {
  const {
    files,
    setFiles,
    numeroArquivos,
    setNumeroArquivos,
    downloaded,
    setDownloaded,
    data,
    loading,
    getFiles,
    enviarArquivos,
    type,
    setType,
  } = useUpload<IUplodtoDonwloadResponse | IUplodtoDonwloadResponseJson>();
  const [isVisible, setIsVisible] = useState(false);
  React.useEffect(() => {
    setType("json");
  }, [type]);
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
        <h1 className="text-2xl ml-10">Upload + Json</h1>
        <section className="flex flex-col items-center w-full justify-center mt-5 transition duration-300 ease-in-out">
          {loading && <Loading />}
          {!data && (
            <>
              <Upload getFiles={getFiles} lengthFiles={numeroArquivos} />
              <Button processarUpload={enviarArquivos} />
            </>
          )}

          {data && isUploadDonwloadResponseJson(data) && !downloaded && (
            <CardXmls dados={data.dados} donwloaded={setDownloaded}></CardXmls>
          )}
        </section>
      </section>
    </>
  );
};

export default UploadJson;

function isUploadDonwloadResponseJson(
  data: IUplodtoDonwloadResponse | IUplodtoDonwloadResponseJson
): data is IUplodtoDonwloadResponseJson {
  return "dados" in data;
}

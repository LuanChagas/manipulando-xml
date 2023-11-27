import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import Donwload from "../components/Download";
import Upload from "../components/Upload";
import Loading from "../components/Loading";
import useUpload from "../hooks/useUpload";

const UplaodCsv = () => {
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
  } = useUpload<IUplodtoDonwloadResponse | IUplodtoDonwloadResponseJson>();
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <>
      <div
        className={`transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-2xl ml-10 ">Upload + Csv</h1>
        <section className="flex flex-col items-center w-full justify-center mt-5 transition duration-300 ease-in-out">
          {loading && <Loading />}
          {!data && (
            <>
              <Upload getFiles={getFiles} lengthFiles={numeroArquivos} />
              <Button processarUpload={enviarArquivos} />
            </>
          )}

          {data && isUploadDonwloadResponse(data) && !downloaded && (
            <Donwload
              urlDownload={data.urlDownload}
              donwloaded={setDownloaded}
            />
          )}
        </section>
      </div>
    </>
  );
};

export default UplaodCsv;

function isUploadDonwloadResponse(
  data: IUplodtoDonwloadResponse | IUplodtoDonwloadResponseJson
): data is IUplodtoDonwloadResponse {
  return "urlDownload" in data;
}

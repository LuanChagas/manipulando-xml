import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import Donwload from "../components/Download";
import Upload from "../components/Upload";
import useFetch from "../hooks/useFetch";

const UplaodCsv = () => {
  const [files, setFiles] = useState<File[] | null>(null);
  const [numeroArquivos, setNumeroArquivos] = useState(0);
  const [downloaded, setDownloaded] = useState(false);
  const { data, error, loading, fetchData, setData } =
    useFetch<IUplodtoDonwloadResponse>("", undefined, false);
  const getFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const novosFiles = Array.from(e.target.files);
      setFiles((x) => {
        const updateFiles = x ? [...x, ...novosFiles] : novosFiles;
        setNumeroArquivos(updateFiles.length);
        return updateFiles;
      });
    }
  };

  const enviarArquivos = () => {
    setDownloaded(false);
    const formData = new FormData();
    if (!files) return;
    for (const file of files) {
      formData.append("file", file);
    }
    fetchData("http://localhost:3000/uploadResponseCSV", {
      method: "POST",
      body: formData,
    });
  };

  React.useEffect(() => {
    console.log("data");
    setFiles(null);
    setNumeroArquivos(0);
    setData(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [downloaded]);

  if (loading) return <h1>Carregando...</h1>;
  return (
    <>
      <h1 className="text-2xl ml-10">Upload + Csv</h1>
      <section className="flex flex-col items-center w-full justify-center mt-5 transition duration-300 ease-in-out">
        {!data && (
          <>
            <Upload getFiles={getFiles} lengthFiles={numeroArquivos} />
            <Button processarUpload={enviarArquivos} />
          </>
        )}

        {data && !downloaded && (
          <Donwload urlDownload={data.urlDownload} donwloaded={setDownloaded} />
        )}
      </section>
    </>
  );
};

export default UplaodCsv;

import React, { useState } from "react";
import useFetch from "./useFetch";
import { apiUrl } from "../config/api";

function useUpload<T>() {
  const [files, setFiles] = useState<File[] | null>(null);
  const [numeroArquivos, setNumeroArquivos] = useState(0);
  const [downloaded, setDownloaded] = useState(false);
  const { data, error, loading, fetchData, setData } = useFetch<T>(
    "",
    undefined,
    false
  );
  const [type, setType] = useState<"csv" | "json">("csv");
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
    const endpoint =
      type === "csv" ? "uploadResponseCSV" : "uploadResponseJson";
    fetchData(`${apiUrl}/${endpoint}`, {
      method: "POST",
      body: formData,
    });
  };

  React.useEffect(() => {
    setFiles(null);
    setNumeroArquivos(0);
    setData(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [downloaded]);

  return {
    files,
    numeroArquivos,
    downloaded,
    data,
    setData,
    error,
    loading,
    setDownloaded,
    getFiles,
    enviarArquivos,
    setType,
    type,
    setFiles,
    setNumeroArquivos,
  };
}
export default useUpload;

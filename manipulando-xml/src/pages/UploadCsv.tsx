import { useEffect, useState } from "react";
import Button from "../components/Button";
import Donwload from "../components/Download";
import Upload from "../components/Upload";

const UplaodCsv = () => {
  const [files, setFiles] = useState<File[] | null>(null);
  const [numeroArquivos, setNumeroArquivos] = useState(0);

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
    const formData = new FormData();
    if (!files) return;
    for (const file of files) {
      formData.append(file.name, file);
    }
    console.log(formData);
  };

  return (
    <>
      <h1 className="text-2xl ml-10">Upload + Csv</h1>
      <section className="flex flex-col items-center w-full justify-center mt-5">
        <Upload getFiles={getFiles} lengthFiles={numeroArquivos} />
        <Button processarUpload={enviarArquivos} />
      </section>
    </>
  );
};

export default UplaodCsv;

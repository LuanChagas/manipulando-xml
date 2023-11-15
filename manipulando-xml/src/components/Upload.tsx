import { useState } from "react";
import Button from "./Button";
import SvgXml from "./SvgXml";

type UploadProps = {
  getFiles: (e: React.ChangeEvent<HTMLInputElement>) => void;
  lengthFiles: number;
};

const Upload = ({ getFiles, lengthFiles }: UploadProps) => {
  return (
    <section className="flex flex-col items-center">
      <h3 className="text-2xl mb-5">Upload</h3>
      <input
        id="files"
        multiple
        accept=".xml"
        className="hidden"
        type="file"
        onChange={getFiles}
      />
      <label htmlFor="files" className="cursor-pointer">
        <div className="w-64 h-40 border border-gray-100 shadow-md rounded-md flex flex-col items-center hover:shadow-xl active:shadow-sm">
          <div className="mt-5">
            <SvgXml />
          </div>
          <div className="mt-5 text-sm">
            <h4>Clique para realizar o Upload</h4>
          </div>
        </div>
      </label>
      <h4 className="mt-5">{lengthFiles}: Arquivos</h4>
    </section>
  );
};

export default Upload;

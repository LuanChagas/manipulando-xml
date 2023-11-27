import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import SvgCsv from "./SvgCsv";
import Loading from "./Loading";

type DonwloadProps = {
  urlDownload: string | undefined;
  donwloaded: React.Dispatch<React.SetStateAction<boolean>> | undefined;
};

const Donwload = ({ urlDownload, donwloaded }: DonwloadProps) => {
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const getDonwload = async () => {
    if (!urlDownload) return;

    setLoading(true);
    window.location.href = urlDownload;
    setLoading(false);
    if (!donwloaded) return;
    donwloaded(true);
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);
  if (loading)
    return (
      <>
        <Loading />
      </>
    );
  return (
    <section className="flex flex-col items-center">
      <h3 className="text-2xl mb-5">Download</h3>
      <input
        id="donwload"
        className="hidden"
        type="button"
        onClick={getDonwload}
      />
      <label htmlFor="donwload" className="cursor-pointer">
        <div className="w-64 h-40 border border-gray-100 shadow-md rounded-md flex flex-col items-center">
          <div className="mt-5">
            <SvgCsv />
          </div>
          <div className="mt-5 text-sm">
            <h4>Clique para realizar o donwload</h4>
          </div>
        </div>
      </label>
    </section>
  );
};

export default Donwload;

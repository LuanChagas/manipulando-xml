import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  processarUpload: () => void;
};

const Button = ({ processarUpload }: ButtonProps) => {
  return (
    <button
      className=" mt-5 px-3 border  border-gray-700 rounded-lg shadow-md text-center"
      onClick={processarUpload}
    >
      Processar
    </button>
  );
};

export default Button;

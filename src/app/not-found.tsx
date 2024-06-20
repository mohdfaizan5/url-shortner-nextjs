import React from "react";
import { AiFillFrown } from "react-icons/ai";
import { FaFaceFrown } from "react-icons/fa6";

const notFound = () => {
  return (
    <div className="flex flex-col items-center min-h-dvh justify-center">
      <h1 className="text-5xl">404</h1>
      <AiFillFrown size={50} />
    </div>
  );
};

export default notFound;

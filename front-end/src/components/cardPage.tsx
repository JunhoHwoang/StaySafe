import React from "react";
import Header from "./header";
import { useParams } from "react-router-dom";
import GetCard from "./hooks/GetCard";

const CardPage = () => {
  return (
    <div className="flex flex-col w-full h-screen items-stretch">
      <Header />
    </div>
  );
};

export default CardPage;

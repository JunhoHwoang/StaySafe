import React from "react";
import Header from "./header";
import { useLocation } from "react-router-dom";

const CardPage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id');

  return (
    <div className="flex flex-col w-full h-screen items-stretch">
      <Header />
    </div>
  );
};

export default CardPage;

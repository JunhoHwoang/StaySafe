import React from "react";
import Header from "./header";
import { useLocation } from "react-router-dom";
import { Progress } from "./ui/progress";

const CardPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const title = queryParams.get("title");
  const description = queryParams.get("description");
  const content = queryParams.get("content");
  const score = queryParams.get("score");

  return (
    <div className="flex flex-col w-full h-screen">
      <Header />
      <div className="flex flex-col justify-center items-center h-full ">
        <div className="flex flex-row justify-center items-center space-x-8">
          <div className="flex flex-col text-center">
            <p className="text-3xl">{title}</p>
            <p className="text-2xl">{id}</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-2xl">{score}</p>
            <Progress value={Number(score) || 0} className="w-64" />
          </div>
        </div>
        <div className="flex flex-col items-start mt-6 text-start">
          <p className="text-2xl">Description:</p>
          <p className="text-xl">{description}</p>
        </div>
        <div className="flex flex-col items-start mt-6 text-start">
          <p className="text-2xl">Solution:</p>
          <p className="text-xl">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default CardPage;

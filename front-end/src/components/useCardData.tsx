import { useEffect, useState } from "react";
import getCardsData from "./service/getCardsData";

export default function useCardData() {
  const [resume, setResume] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const resumeData = await getCardsData();
      console.log(resumeData);
      setResume(resumeData);
    };
    getData();
  }, []);
  return resume;
}

// import { useState } from "react";
import { useEffect, useState } from "react";
import { axiosInstance } from "@/lib/axios";

type Proker = {
  id: number;
  dept?: string;
  title?: string;
  desc?: string;
  img?: string;
};

export const useFetchProker = () => {
  const [proker, setProker] = useState<Proker[]>([]);
  
  useEffect(() => {
    const fetchProker = async () => {
      try {
        const response = await axiosInstance.get<Proker[]>("/proker");
        console.log("Fetched proker:", response.data);
        setProker(response.data);
      } catch (error) {
        console.error("Error fetching mentors:", error);
      }
    };

    fetchProker();
  }, []);

  return { proker };
};
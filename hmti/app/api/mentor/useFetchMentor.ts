// import { useState } from "react";
import { useEffect, useState } from "react";
import { axiosInstance } from "@/lib/axios";

type Mentor = {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
  instagram?: string;
  github?: string;
  linkedin?: string;
};

export const useFetchMentor = () => {
  const [mentors, setMentors] = useState<Mentor[]>([]);
  
  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await axiosInstance.get<Mentor[]>("/mentor");
        console.log("Fetched mentors:", response.data);
        setMentors(response.data);
      } catch (error) {
        console.error("Error fetching mentors:", error);
      }
    };

    fetchMentors();
  }, []);

  return { mentors };
};
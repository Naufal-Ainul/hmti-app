// import { useState } from "react";
import { useEffect, useState } from "react";
import { axiosInstance } from "@/lib/axios";

type Member = {
  id: number;
  name: string;
  role: string;
  departement: string;
  imageUrl: string;
  instagram?: string;
};

export const useFetchMember = (activeDepartment:string) => {
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axiosInstance.get<Member[]>(`/member?department=${activeDepartment}`);
        console.log("Fetched members:", response.data);
        setMembers(response.data);
      } catch (error) {
        console.error("Error fetching members:", error);
      }
    };

    fetchMembers();
  }, [activeDepartment]);

  return { members };
};
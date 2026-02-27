import { useState } from "react";
import { axiosInstance } from "@/lib/axios";

type Aspirasi = {
  id: number;
  nama: string;
  email: string;
  aspirasi: string;
}

export const useFetchAspirasi = () => {
  const [aspirasi, setAspirasi] = useState<Aspirasi[]>([]);

  const fetchAspirasi = async () => {
    try {
      const response = await axiosInstance.get<Aspirasi[]>("/aspirasi")
      console.log(aspirasi);
      setAspirasi(response.data);
    } catch (error) {

    } finally {

    }
  }
};
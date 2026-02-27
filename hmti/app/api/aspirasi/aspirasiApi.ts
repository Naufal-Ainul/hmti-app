import { axiosInstance } from "@/lib/axios";
import {  AspirasiFormData } from "./aspirasiSchema";

export const CreateAspirasi = async (data: AspirasiFormData) => {
  const response = axiosInstance.post("/aspirasi", data);
  
  return (await response).data;
};

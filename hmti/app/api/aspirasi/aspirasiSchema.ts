import { z } from "zod";

export const aspirasiFormSchema = z.object({
  name: z.string().regex(/^[a-zA-Z\s]+$/, "*Nama hanya boleh berisi huruf ").min(3, "*Nama minimal 3 karakter"),
  nim: z.string().regex(/^\d+$/, "*NIM harus berupa angka").min(10, "*NIM harus 10 digit").max(10, "*NIM harus 10 digit"),
  email: z.string().email("*Email tidak valid"),
  aspirasi: z.string().min(5, "*Aspirasi terlalu pendek"),
});

export type AspirasiFormData = z.infer<typeof aspirasiFormSchema>;
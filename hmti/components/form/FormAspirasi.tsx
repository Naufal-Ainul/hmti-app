"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AspirasiFormData,
  aspirasiFormSchema,
} from "@/api/aspirasi/aspirasiSchema";
import { CreateAspirasi } from "@/api/aspirasi/aspirasiApi";
import { Label } from "../ui/form/Label";
import { Input } from "../ui/form/Input";
import { cn } from "@/lib/utils";

type AspirasiProps = {
  name: string;
  nim: string;
  email: string;
  aspirasi: string;
};

export function FormAspirasi() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AspirasiFormData>({
    resolver: zodResolver(aspirasiFormSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      nim: "",
      email: "",
      aspirasi: "",
    },
  });

  const onSubmit = async (data: AspirasiFormData) => {
    try {
      await CreateAspirasi(data);
      alert("Aspirasi berhasil dikirim!");
      reset();
    } catch (error) {
      console.error("Error submitting aspirasi:", error);
      alert("Gagal mengirim aspirasi. Silakan coba lagi.");
    }
  };

  return (
    <div className="shadow-input mx-auto sm:w-full max-w-95 sm:max-w-md rounded-3xl bg-linear-to-br from-slate-500/50 via-black to-slate-500/50 p-4 md:rounded-2xl md:p-8 shadow-2xl shadow-slate-500/40">
      <h2 className="flex items-center justify-center text-xl font-medium text-white mask-b-from-15%">
        Aspiration
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-400">
        Send your Aspiration Here! Your Aspiration is important for us!
      </p>

      <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4 flex space-y-2 space-x-2 flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer className="sm:w-full w-43">
            <Label htmlFor="firstname">Your name</Label>
            <Input
              id="firstname"
              placeholder="Naufal"
              type="text"
              {...register("name")}
            />
            <span className="text-red-400 text-[10px]">
              {errors.name?.message}
            </span>
          </LabelInputContainer>
          <LabelInputContainer className="sm:w-full w-42">
            <Label htmlFor="nim">NIM</Label>
            <Input
              id="nim"
              placeholder="2303040142"
              type="text"
              {...register("nim")}
            />
            <span className="text-red-400 text-[10px]">
              {errors.nim?.message}
            </span>
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="mnaufalainula@gmail.com"
            type="email"
            {...register("email")}
          />
          <span className="text-red-400 text-[10px]">
            {errors.email?.message}
          </span>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="aspirasi">Aspirasi</Label>
          <Input
            id="aspirasi"
            placeholder="Message"
            type="text"
            className="h-20"
            {...register("aspirasi")}
          />
          <span className="text-red-400 text-[10px]">
            {errors.aspirasi?.message}
          </span>
        </LabelInputContainer>

        <button
          disabled={isSubmitting}
          className="group/btn relative block h-10 w-full rounded-md text-white bg-linear-to-tl from-slate-500/50 via-black to-slate-500/50 shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          {isSubmitting ? "Sending..." : "Send"}
          {/* <span className="mask-b-from-25%">Send </span>  &rarr; */}
          <BottomGradient />
        </button>
        <div className="my-8 h-px w-full bg-linear-to-r from-transparent to-transparent via-slate-500" />
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-linear-to-r from-transparent via-blue-400 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-linear-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

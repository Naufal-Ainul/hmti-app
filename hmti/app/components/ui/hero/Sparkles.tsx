"use client";
import { TextEffect } from "@/app/components/ui/text/TextEffect";
import { SparklesCore } from "./SparklesCore";

type props = {
  title: string;
};

export function SparklesPreview({ title }: props) {
  return (
    <div className="h-screen w-full flex flex-col bg-black items-center justify-center overflow-hidden">
      <TextEffect
        per="char"
        preset="fade"
        className="text-white text-3xl mask-b-from-neutral-50"
      >
        {title}
      </TextEffect>
      <div className="w-160 h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-linear-to-r from-transparent via-indigo-500 to-transparent h-0.5 w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-linear-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-linear-to-r from-transparent via-sky-500 to-transparent h-1.25 w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-linear-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={300}
          className="w-full h-full"
          particleColor="#abcdef"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black mask-[radial-gradient(350px_250px_at_top,transparent_0%,white)]"></div>
      </div>
    </div>
  );
}

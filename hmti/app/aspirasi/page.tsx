"use client";
import React from "react";
import Hero from "../../components/hero/Hero";
import { FormAspirasi } from "../../components/form/FormAspirasi";

const Aspirasi = () => {
  return (
    <main className="w-full min-h-screen bg-black">
      <Hero title="Aspirasi Mahasiswa" />
      <div className="flex justify-center items-center py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <FormAspirasi />
      </div>
    </main>
  );
};

export default Aspirasi;

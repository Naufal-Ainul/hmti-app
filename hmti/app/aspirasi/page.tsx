import React from "react";
import { FormAspirasi } from "../components/form/FormAspirasi";

const Aspirasi = () => {
  return (
    <section className="h-screen flex justify-center items-center bg-linear-to-br from-slate-500/75 via-black to-black">
      {/* mt-30 h-[60.5vh] xl:h-[59.5vh] xl:mt-50 md:mt-60 lg:mt-15 */}
      <FormAspirasi />
    </section>
  );
};

export default Aspirasi;

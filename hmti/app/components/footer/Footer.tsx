"use client";
import React from "react";
import GlowLine from "../ui/glowline/Glowline";
import Foot from "../ui/footer/Foot";

const Footer = () => {
  return (
    // mt-50 xl:mt-75
    <div className="">
      <GlowLine
        orientation="horizontal"
        position="50%"
        color="blue"
        className="relative"
      />
      <Foot />
    </div>
  );
};

export default Footer;

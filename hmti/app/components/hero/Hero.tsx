"use client";
import { SparklesPreview } from "../ui/hero/Sparkles";
import GlowLine from "../ui/glowline/Glowline";

interface HeroProps {
  title: string;
}

const Hero = ({ title }: HeroProps) => {
  return (
    <div className="max-h-screen">
      <div className="flex max-h-screen w-full flex-col items-center justify-center overflow-hidden">
        <SparklesPreview title={title} />
      </div>
      <GlowLine
        orientation="horizontal"
        position="50%"
        color="blue"
        className="relative"
      />
    </div>
  );
};

export default Hero;

"use client";
import { SparklesPreview } from "../ui/hero/Sparkles";
import GlowLine from "../ui/glowline/Glowline";

interface HeroProps {
  title: string;
  compact?: boolean;
}

const Hero = ({ title, compact = false }: HeroProps) => {
  return (
    <div className={compact ? "max-h-[50vh]" : "max-h-screen"}>
      <div className={`flex w-full flex-col items-center justify-center overflow-hidden ${compact ? "max-h-[50vh]" : "max-h-screen"}`}>
        <SparklesPreview title={title} compact={compact} />
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

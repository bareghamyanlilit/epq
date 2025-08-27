import { cn } from "@/utils/utils";
import React from "react";
type H2Props = {
  txt: string;
  className?: string;
};

export default function H2({ className, txt }: H2Props) {
  return <h2 className={cn("text-xl sm:text-4xl text-[#004471] font-bold text-center mt-18 mb-10", className)}>{txt}</h2>;
}

import { cn } from "@/utils/utils";
import React from "react";
type PProps = {
  txt: string;
  className?: string;
};

export default function P({ className, txt }: PProps) {
  return <p className={cn("text-sm sm:text-xl/8 text-[#1a1a1a]", className)}>{txt}</p>;
}

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const jumpToReleventDiv = (id: string) => {
  const relevantDiv = document.getElementById(id);
  relevantDiv?.scrollIntoView({ behavior: "smooth" });
};

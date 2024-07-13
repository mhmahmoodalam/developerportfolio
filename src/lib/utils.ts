import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const jumpToReleventDiv = (id: string) => {
  const relevantDiv = document.getElementById(id);
  relevantDiv?.scrollIntoView({ behavior: "smooth" });
};

export const isMobile = (userAgent: string): boolean => {
  return /android.+mobile|iphone/i.test(userAgent);
};
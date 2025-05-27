import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function capitalize(value) {
  if (typeof value !== "string") return "";

  const str = value.trim();
  if (str.length === 0) return "";

  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
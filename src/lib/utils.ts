import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getAssetPath(path: string) {
  return `/assets/${path}`;
}

export function getBasePath() {
  return process.env.NODE_ENV === "production" ? "/dijes-deportivos" : "";
}

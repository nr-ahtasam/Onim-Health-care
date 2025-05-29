import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const capitalize = (value) => {
  if (typeof value !== "string") return "";

  const str = value.trim();
  if (str.length === 0) return "";

  return str[0].toUpperCase() + str.slice(1).toLowerCase();
};

export const parseId = (input) => (Array.isArray(input) ? input[0] : input);

export const buildLookupMap = (items = []) =>
  Object.fromEntries((Array.isArray(items) ? items : []).map(({ id, title }) => [String(id), title?.rendered || "N/A"]));

export const fetchAllPages = async (fetcherFn) => {
  const all = [];
  let page = 1;
  let results;

  do {
    results = await fetcherFn(page);
    all.push(...results);
    page++;
  } while (results.length > 0);

  return all;
};
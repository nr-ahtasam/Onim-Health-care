export const formatDateTime = (datetime) => {
  if (!datetime) return { date: "N/A", time: "N/A" };

  const normalized = datetime.replace(" ", "T");
  const parsed = new Date(normalized);

  if (isNaN(parsed.getTime())) return { date: "Invalid Date", time: "Invalid Time" };

  const date = parsed.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const time = parsed.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return { date, time };
};

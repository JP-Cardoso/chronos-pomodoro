import { format } from "date-fns";

export function formatDate(timestamp: number): string {

  if (!timestamp) return "-";

  const date = new Date(timestamp);

  const formatedDate = format(date, "dd/MM/yyyy HH:mm");

  return formatedDate;
}
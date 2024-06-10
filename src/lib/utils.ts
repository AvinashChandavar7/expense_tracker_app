import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export const formatDate = (inputDate: string): string => {
  const [year, month, day] = inputDate.split('-').map(Number);
  const months: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const formattedDate: string = `${months[month - 1]} ${day}, ${year}`;
  return formattedDate;
};
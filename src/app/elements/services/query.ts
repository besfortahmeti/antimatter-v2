import { useQuery } from "@tanstack/react-query";
import { getElement, getElements } from "./api";

export const useElement = (id: number) => {
  return useQuery({
    queryKey: ["element", id],
    queryFn: () => getElement(id),
  });
};

export const useElements = () => {
  return useQuery({
    queryKey: ["elements"],
    queryFn: () => getElements(),
  });
};

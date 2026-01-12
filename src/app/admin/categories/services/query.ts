import { useQuery } from "@tanstack/react-query";
import { getCategory, getCategories } from "./api";

export const useCategory = (id: number) => {
  return useQuery({
    queryKey: ["category", id],
    queryFn: () => getCategory(id),
  });
};

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
  });
};

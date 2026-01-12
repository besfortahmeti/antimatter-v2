import { useMutation } from "@tanstack/react-query";
import {
  createCategory,
  patchCategory,
  updateCategory,
  deleteCategory,
} from "./api";
import { Category } from "../lib/types";

export const useCreateCategory = () => {
  return useMutation({
    mutationFn: createCategory,
  });
};

export const usePatchCategory = () => {
  return useMutation({
    mutationFn: ({ id, category }: { id: number; category: Partial<Category> }) =>
      patchCategory(id, category),
  });
};

export const useUpdateCategory = () => {
  return useMutation({
    mutationFn: ({ id, category }: { id: number; category: Category }) =>
      updateCategory(id, category),
  });
};

export const useDeleteCategory = () => {
  return useMutation({
    mutationFn: deleteCategory,
  });
};

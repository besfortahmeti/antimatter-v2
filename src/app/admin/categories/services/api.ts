import apiClient from "@/lib/api-client";
import { Category } from "../lib/types";

export const getCategory = async (id: number) => {
  const response = await apiClient.get(`categories/${id}`);
  return response.data;
};

export const getCategories = async () => {
  const response = await apiClient.get("categories");
  return response.data;
};

export const createCategory = async (category: Omit<Category, "id">) => {
  const response = await apiClient.post("categories", category);
  return response.data;
};

export const patchCategory = async (
  id: number,
  category: Partial<Category>
) => {
  const response = await apiClient.patch(`categories/${id}`, category);
  return response.data;
};

export const updateCategory = async (id: number, category: Category) => {
  const response = await apiClient.put(`categories/${id}`, category);
  return response.data;
};

export const deleteCategory = async (id: number) => {
  const response = await apiClient.delete(`categories/${id}`);
  return response.data;
};

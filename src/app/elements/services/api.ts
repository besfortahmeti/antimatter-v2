import apiClient from "@/lib/api-client";
import { Element } from "../lib/types";

export const getElement = async (id: number) => {
  const response = await apiClient.get(`elements/${id}`);
  return response.data;
};

export const getElements = async () => {
  const response = await apiClient.get("elements");
  return response.data;
};

export const createElement = async (element: Element) => {
  const response = await apiClient.post("elements", element);
  return response.data;
};

export const patchElement = async (id: number, element: Partial<Element>) => {
  const response = await apiClient.patch(`elements/${id}`, element);
  return response.data;
};

export const updateElement = async (id: number, element: Element) => {
  const response = await apiClient.put(`elements/${id}`, element);
  return response.data;
};

export const deleteElement = async (id: number) => {
  const response = await apiClient.delete(`elements/${id}`);
  return response.data;
};

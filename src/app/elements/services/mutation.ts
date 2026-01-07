import { useMutation } from "@tanstack/react-query";
import {
  createElement,
  patchElement,
  updateElement,
  deleteElement,
} from "./api";
import { Element } from "../lib/types";

export const useCreateElement = () => {
  return useMutation({
    mutationFn: createElement,
  });
};

export const usePatchElement = () => {
  return useMutation({
    mutationFn: ({ id, element }: { id: number; element: Partial<Element> }) =>
      patchElement(id, element),
  });
};

export const useUpdateElement = () => {
  return useMutation({
    mutationFn: ({ id, element }: { id: number; element: Element }) =>
      updateElement(id, element),
  });
};

export const useDeleteElement = () => {
  return useMutation({
    mutationFn: deleteElement,
  });
};

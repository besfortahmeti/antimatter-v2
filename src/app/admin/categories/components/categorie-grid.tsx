"use client";
import { useCategories } from "@/app/admin/categories/services/query";
import Link from "next/link";
import { Category } from "../lib/types";
import { CategoryItem } from "./categorie-item";

const CategoryGrid = ({
  categories,
  isLoading,
  error,
  refetch,
  columns = 3,
  onEdit,
  onDelete,
}: {
  categories?: Category[];
  isLoading?: boolean;
  error?: any;
  refetch?: () => void;
  columns?: number;
  onEdit?: (category: Category) => void;
  onDelete?: (category: Category) => void;
}) => {
  const gridColsClass =
    {
      1: "grid-cols-1",
      2: "grid-cols-2",
      3: "grid-cols-3",
      4: "grid-cols-4",
      6: "grid-cols-6",
    }[columns as 1 | 2 | 3 | 4 | 6] || "grid-cols-3";

  return (
    <ul className={`mx-auto grid w-full gap-4 ${gridColsClass}`}>
      {categories?.map((item: Category) => (
        <li
          className="w-full space-y-4"
          data-area="result-preview"
          key={item.id}
        >
          <div style={{ cursor: "pointer" }}>
            <CategoryItem
              name={item?.name}
              icon={item?.icon}
              onEdit={() => onEdit?.(item)}
              onDelete={() => onDelete?.(item)}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CategoryGrid;

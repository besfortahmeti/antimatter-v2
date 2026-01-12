"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { CategoryDeleteDialog } from "./components/CategoryDeleteDialog";
import { CategoryCreateDialog } from "./components/CategoryCreateDialog";
import { CategoryEditDialog } from "./components/CategoryEditDialog";
import { Category } from "./lib/types";
import { useCategories } from "./services/query";
import ElementGrid from "./components/categorie-grid";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import Link from "next/link";
import {
  useCreateCategory,
  useDeleteCategory,
  useUpdateCategory,
} from "./services/mutation";
import { toast } from "sonner";

export default function CategoriesPage() {
  const [columns, setColumns] = useState(3);

  const [searchQuery, setSearchQuery] = useState("");

  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [deletingCategory, setDeletingCategory] = useState<Category | null>(
    null
  );

  const { data: categories, isLoading, error, refetch } = useCategories();
  const { mutateAsync: createCategory } = useCreateCategory();
  const { mutateAsync: updateCategory } = useUpdateCategory();
  const { mutateAsync: deleteCategory } = useDeleteCategory();

  const handleDeleteCategory = async (category: Category) => {
    try {
      await deleteCategory(category.id);
      refetch();
      toast.success("Category deleted successfully");
    } catch (error) {
      toast.error("Error deleting category");
    }
  };

  // const filteredCategories = categories.filter((category) =>
  //   category.name?.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Categories</h1>
      </div>

      <Card>
        <CardContent>
          <div className="mx-auto flex max-w-7xl flex-col px-6 pb-20">
            <section className="grid gap-4">
              <h2 className="sr-only">Explore</h2>
              <div
                dir="ltr"
                data-orientation="horizontal"
                className="grid gap-6"
              >
                <div
                  role="tablist"
                  aria-orientation="horizontal"
                  className="flex items-center gap-2"
                  aria-label="Sort Explore"
                  tabIndex={0}
                  data-orientation="horizontal"
                  style={{ outline: "none" }}
                >
                  <div className="relative max-w-sm">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search categories..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-8"
                    />
                  </div>

                  <div className="ml-auto flex items-center gap-3">
                    <span className="text-sm font-medium text-gray-500">
                      Grid
                    </span>
                    <ToggleGroup
                      type="single"
                      value={columns.toString()}
                      onValueChange={(value) => {
                        if (value) setColumns(Number(value));
                      }}
                      variant="outline"
                      className="gap-0 rounded-lg border shadow-none"
                    >
                      {[1, 2, 3, 4, 6].map((num) => (
                        <ToggleGroupItem
                          key={num}
                          value={num.toString()}
                          className="h-8 min-w-[36px] px-2 rounded-none first:rounded-l-[inherit] last:rounded-r-[inherit] border-y-0 border-r border-l-0 last:border-r-0 data-[state=on]:bg-gray-100 data-[state=on]:text-[#171717] hover:bg-gray-50 text-sm font-medium"
                        >
                          {num}
                        </ToggleGroupItem>
                      ))}
                    </ToggleGroup>
                  </div>
                  <Button onClick={() => setIsCreateOpen(true)}>
                    <Plus className="mr-2 h-4 w-4" /> Add Category
                  </Button>
                </div>
                <div
                  data-state="active"
                  data-orientation="horizontal"
                  role="tabpanel"
                  aria-labelledby="radix-:r5:-trigger-recent"
                  id="radix-:r5:-content-recent"
                  tabIndex={0}
                  className="ring-offset-background focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                >
                  <div className="grid auto-cols-[minmax(0,_1fr)]">
                    <div
                      className="col-start-1 row-start-1"
                      style={{ maskImage: "initial" }}
                    >
                      <ElementGrid
                        categories={categories?.items}
                        columns={columns}
                        onEdit={setEditingCategory}
                        onDelete={handleDeleteCategory}
                        refetch={refetch}
                      />
                    </div>
                  </div>
                </div>
                <div
                  data-state="inactive"
                  data-orientation="horizontal"
                  role="tabpanel"
                  aria-labelledby="radix-:r5:-trigger-featured"
                  id="radix-:r5:-content-featured"
                  tabIndex={0}
                  className="ring-offset-background focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  hidden={false}
                ></div>
              </div>
            </section>
          </div>
        </CardContent>
      </Card>

      <CategoryCreateDialog
        open={isCreateOpen}
        onOpenChange={setIsCreateOpen}
        onSuccess={() => refetch()}
      />

      <CategoryEditDialog
        open={!!editingCategory}
        onOpenChange={(open) => !open && setEditingCategory(null)}
        category={editingCategory}
        onSuccess={() => refetch()}
      />

      <CategoryDeleteDialog
        open={!!deletingCategory}
        onOpenChange={(open) => !open && setDeletingCategory(null)}
        category={deletingCategory}
        onSuccess={() => refetch()}
      />
    </div>
  );
}

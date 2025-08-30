export type CategoryItem = {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
};

export type CategoryResponse = {
  categories: CategoryItem[];
};

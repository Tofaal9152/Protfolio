"use client";
import AppImage from "@/components/AppImage";
import LoadingErrorWrapper from "@/components/LoadingWrapper";
import { useFetchData } from "@/hooks/useFetchData";
import { CategoryItem, CategoryResponse } from "@/types/class.type";

const Class = () => {
  const { data, isLoading, isError, error } = useFetchData<CategoryResponse>(
    "https://www.themealdb.com/api/json/v1/1/categories.php",
    "class-api-work"
  );

  return (
    <div className="p-4 bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-center  mb-4">Categories</h1>
      <LoadingErrorWrapper loading={isLoading} isError={isError} error={error}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto">
          {data?.categories.map((item: CategoryItem) => (
            <div
              key={item.idCategory}
              className="border bg-gray-950 shadow-lg rounded-2xl p-4 hover:shadow-xl transition"
            >
              <AppImage
                src={item.strCategoryThumb}
                alt={item.strCategory}
                className="w-full h-40 object-cover rounded-xl"
                width={160}
                height={160}
                quality={100}
              />
              <h2 className="text-xl font-bold mt-3">{item.strCategory}</h2>
              <p className="text-sm mt-2 line-clamp-3">
                {item.strCategoryDescription}
              </p>
            </div>
          ))}
        </div>
      </LoadingErrorWrapper>
    </div>
  );
};

export default Class;

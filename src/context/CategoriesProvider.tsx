import React, { createContext, useContext, useEffect, useState } from "react";

interface CategoryTypes {
  id: number;
  name: string;
}

const CategoriesContext = createContext<{
  categories: CategoryTypes[];
  [x: string]: any;
} | null>(null);

export function useCategories() {
  const ctx = useContext(CategoriesContext);
  if (!ctx) {
    throw new Error("you forgot to wrap component with <CategoriesProvider/>");
  }
  return ctx;
}

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState<CategoryTypes[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/categories")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Couldn't fetch expenses");
        }
        return res.json();
      })
      .then((data) => {
        setCategories(data);
      })

      .catch((err) => {
        console.error("Fetch error:", err.message);
      });
  }, []);
  return (
    <CategoriesContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoriesContext.Provider>
  );
};

export { CategoriesContext };

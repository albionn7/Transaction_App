import React, { createContext, useEffect, useState } from "react";

const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

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

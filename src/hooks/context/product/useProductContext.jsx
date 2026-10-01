import { useContext } from "react";

// Custom hook for using the ProductContext
export const useProductContext = () => {
  const context = useContext(useProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};
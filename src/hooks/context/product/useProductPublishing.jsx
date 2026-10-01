import { useContext, useState } from "react";
import ProductContext from "./ProductProvider";

export const useProductPublishing = (productId) => {
  const context = useContext(ProductContext);
  const [publish, setPublish] = useState(false);

  const togglePublish = async () => {
    setPublish((prev) => !prev);
    await context.updateProduct(productId, { publish: !publish });
  };

  return { publish, togglePublish };
};
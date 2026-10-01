import { useReducer, createContext } from "react";
import api from "../../../api/Api";
import { toast } from "sonner";

const ProductContext = createContext();

const initialState = {
  products: [],
  loading: false,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_PRODUCTS_START":
    case "ADD_PRODUCT_START":
    case "UPDATE_PRODUCT_START":
    case "DELETE_PRODUCT_START":
      return { ...state, loading: true, error: null };

    case "FETCH_PRODUCTS_SUCCESS":
      return { ...state, loading: false, products: action.payload };

    case "ADD_PRODUCT_SUCCESS":
      return {
        ...state,
        loading: false,
        products: [...state.products, action.payload],
      };

    case "UPDATE_PRODUCT_SUCCESS":
      return {
        ...state,
        loading: false,
        products: state.products.map((p) =>
          p.id === action.payload.id ? action.payload : p
        ),
      };

    case "DELETE_PRODUCT_SUCCESS":
      return {
        ...state,
        loading: false,
        products: state.products.filter((p) => p.id !== action.payload),
      };

    case "FETCH_PRODUCTS_ERROR":
    case "ADD_PRODUCT_ERROR":
    case "UPDATE_PRODUCT_ERROR":
    case "DELETE_PRODUCT_ERROR":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async () => {
    dispatch({ type: "FETCH_PRODUCTS_START" });
    try {
      const res = await api.get("/products");
      dispatch({ type: "FETCH_PRODUCTS_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "FETCH_PRODUCTS_ERROR", payload: err });
      toast.error("Failed to load products");
    }
  };

  const addProduct = async (productData) => {
    dispatch({ type: "ADD_PRODUCT_START" });
    try {
      const res = await api.post("/products", productData);
      dispatch({ type: "ADD_PRODUCT_SUCCESS", payload: res.data });
      toast.success("✅ Product Added Successfully");
    } catch (err) {
      dispatch({ type: "ADD_PRODUCT_ERROR", payload: err });
      toast.error("Failed to add product");
    }
  };

  const updateProduct = async (id, updatedData) => {
    dispatch({ type: "UPDATE_PRODUCT_START" });
    try {
      const res = await api.put(`/products/${id}`, updatedData);
      dispatch({ type: "UPDATE_PRODUCT_SUCCESS", payload: res.data });
      toast.success("✅ Product Updated Successfully");
    } catch (err) {
      dispatch({ type: "UPDATE_PRODUCT_ERROR", payload: err });
      toast.error("Failed to update product");
    }
  };

  const deleteProduct = async (id) => {
    dispatch({ type: "DELETE_PRODUCT_START" });
    try {
      await api.delete(`/products/${id}`);
      dispatch({ type: "DELETE_PRODUCT_SUCCESS", payload: id });
      toast.success("🗑️ Product Deleted Successfully");
    } catch (err) {
      dispatch({ type: "DELETE_PRODUCT_ERROR", payload: err });
      toast.error("Failed to delete product");
    }
  };

  return (
    <ProductContext.Provider
      value={{
        ...state,
        getProducts,
        addProduct,
        updateProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;

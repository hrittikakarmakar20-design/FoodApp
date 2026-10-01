import { useEffect, useReducer } from "react";
import Api from "../../../api/Api";
import CartContext from "./CreatecartContext";
import { toast } from "sonner";

const intialState = {
  cart: [],
  loding: true,
};

function reducer(state, action) {
  switch (action.type) {
    case "set_cart":
      return { ...state, cart: action.payload, loading: false };

    case "add_to_cart":
      return { ...state, cart: [...state.cart, action.payload] };

    case "INCREMENT":
      return {
        ...state,
        cart: state.cart.map((it) =>
          it.id === action.id ? { ...it, quantity: (it.quantity || 0) + 1 } : it
        ),
      };

    case "DECREMENT":
      return {
        ...state,
        cart: state.cart
          .map((it) =>
            it.id === action.id
              ? { ...it, quantity: Math.max(0, (it.quantity || 0) - 1) }
              : it
          )
          .filter((it) => it.quantity > 0),
      };

    case "REMOVE":
      return {
        ...state,
        cart: state.cart.filter((it) => it.id !== action.id),
      };

    default:
      return state;
  }
}
export const Cartprovider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  useEffect(() => {
    const fetchData = async () => {
      const res = await Api.get(`/cart`);
      console.log("carts: ", res?.data);
      dispatch({ type: "set_cart", payload: res?.data });
    };
    fetchData();
  }, []);

  const addtoCart = async (product) => {
    const res = await Api.post(`/cart`, product);
    toast.success("Product Added Into Cart");
    dispatch({ type: "add_to_cart", payload: res.data });
  };

  const removeCart = async (productId) => {
    await Api.delete(`/cart/${productId}`);
    dispatch({ type: "remove_cart", payload: productId });
  };

  const increment = (id) => dispatch({ type: "INCREMENT", id });
  const decrement = (id) => dispatch({ type: "DECREMENT", id });
  //   const removeCart = (id) => dispatch({ type: "REMOVE", id });
  return (
    <CartContext.Provider value={{ cart: state.cart, addtoCart, removeCart, increment, decrement }}>
      {children}
    </CartContext.Provider>
  );
};

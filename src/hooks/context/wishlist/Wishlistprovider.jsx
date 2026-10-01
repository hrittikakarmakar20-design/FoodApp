import { useEffect, useReducer } from "react";
import Api from "../../../api/Api";
import { toast } from "sonner";
import Wishlistcontext from "./Wishlistcontext";

const intialState = {
  favourite: [],
  loding: true,
};

function reducer(state, action) {
  switch (action.type) {
    case "set_list":
      return { ...state, favourite: action.payload, loading: false };

    case "set_wish_list":
      return {...state, favourite:[...state.favourite, action.payload]}

    default:
      return state;
  }
}
export const Wishlistprovider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  useEffect(() => {
    const fetchData = async () => {
      const res = await Api.get(`/wishlist`);
      console.log("list: ", res?.data);
      dispatch({ type: "set_list", payload: res?.data });
    };
    fetchData();
  }, []);

  const addToWishlist = async (product) => {
    const res = await Api.post(`/wishlist`, product);
    toast.success("Product Added to your wishlist ❤️❤️❤️");
    dispatch({ type: "set_wish_list", payload: res.data });
  };

  return (
    <Wishlistcontext.Provider value={{ favourite: state.favourite, addToWishlist }}>
      {children}
    </Wishlistcontext.Provider>
  );
};

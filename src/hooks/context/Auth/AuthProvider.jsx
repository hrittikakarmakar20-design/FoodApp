import { useEffect, useReducer} from "react";
import api from "../../../api/Api";
import AuthContext from "./CreateAuthContext";
import { toast } from "sonner";
import Cookies from "js-cookie";

const initialState = {
  user: null,
  loading: false,
  userList: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_USERLIST":
      return { ...state, userList: action.payload };
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
}

export const AuthProvider = ({ children }) => {
  
  
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchUsers = async () => {
    try {
      const response = await api.get(`/users`);
      dispatch({ type: "SET_USERLIST", payload: response.data });
    } catch (error) {
      console.log(error);
      toast.error("Failed to connect to server!");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    const loginData = Cookies.get("loginData");
    if (loginData) {
      dispatch({ type: "LOGIN", payload: JSON.parse(loginData) });
    }
  }, []);

  const signup = async (data, reset, onSwitchToLogin) => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });
      const matchEmailUser = state.userList.find(
        (u) => u?.email?.toLowerCase() === data?.email?.toLowerCase()
      );
      if (!matchEmailUser) {
        await api.post(`/users`, data);
        toast.success("Signup successful!");
        await fetchUsers();
        reset?.();
        onSwitchToLogin?.();
      } else {
        toast.error("Email already used!!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Signup failed!");
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  const login = async (data, reset, handleClose) => {
    try {
      if (state.userList?.length === 0) {
        toast.error("Failed to connect server!");
        return;
      }

      dispatch({ type: "SET_LOADING", payload: true });

      const matchEmailUser = state.userList.find(
        (u) => u?.email?.toLowerCase() === data?.email?.toLowerCase()
      );

      if (matchEmailUser) {
        if (matchEmailUser.password === data.password) {
          toast.success("Login Successful!");
          Cookies.set("loginData", JSON.stringify(matchEmailUser), {
            expires: 7,
          });
          dispatch({ type: "LOGIN", payload: matchEmailUser });
          reset?.();
          handleClose?.();
        } else {
          toast.error("Password is incorrect");
        }
      } else {
        toast.error("Invalid Email or Password!");
      }
    } catch (error) {
      toast.error("An error occurred during login");
      console.log(error);
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  const logout = () => {
    Cookies.remove("loginData");
    dispatch({ type: "LOGOUT" });
    toast.success("Logged out successfully!");
  };

  return (
    <AuthContext.Provider value={{ user: state.user , loading: state.loading, signup, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

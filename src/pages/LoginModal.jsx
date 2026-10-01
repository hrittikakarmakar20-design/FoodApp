import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  Stack,
  IconButton,
  Link,
} from "@mui/material";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CloseIcon from "@mui/icons-material/Close";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import LoginImage from "../assets/Login/login.png";
import SignupModel from "./SignupModel";
import Api from "../api/Api";
import Cookies from "js-cookie";
import { toast } from "sonner";
import AuthContext from "../hooks/context/Auth/CreateAuthContext";

const StyledTextField = (props) => (
  <TextField
    fullWidth
    variant="filled"
    InputProps={{
      disableUnderline: true,
      sx: {
        borderRadius: "4px",
        backgroundColor: "#0a1316",
        "&.Mui-focused": { backgroundColor: "#0a1316" },
        "&:hover": { backgroundColor: "#0a1316" },
      },
      ...props.InputProps,
    }}
    sx={{
      "& .MuiFilledInput-root": { backgroundColor: "#0a1316" },
      "& .MuiInputBase-input": { color: "white" },

      "& .MuiFormHelperText-root": {
        color: "#f44336",
        marginLeft: 0,
      },
      marginBottom: "4px",
    }}
    error={!!props.error}
    helperText={props.helperText}
    {...props}
  />
);

const LoginModal = ({ handleClose }) => {
  const [showSignup, setShowSignup] = useState(false);
  const [userList, setUserList] = useState([]);
  // const [loading, setLoading] = useState(false);\
  const { login, loading } = useContext(AuthContext);
  // 2. Initialize the hook
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await Api.get(`/users`);
        console.log(response?.data);
        setUserList(response?.data);
      } catch (error) {
        console.log(error);
        toast.error("Failed to connect to server!");
      }
    };

    fetchdata();
  }, []);

  // 3. Create a submit handler
  const onSubmit = async (data) => {
    login(data, reset, handleClose);
    // try {
    //   if (userList?.length === 0) {
    //     toast.error("Failed to connect server!");
    //     return;
    //   }

    //   const matchEmailUser = userList?.find(
    //     (u) => u?.email?.toLowerCase() === data?.email?.toLowerCase()
    //   );
    //   setLoading(true);

    //   setTimeout(() => {
    //     if (matchEmailUser) {
    //       if (matchEmailUser.password === data.password) {
    //         toast.success("Login Successful!");
    //         Cookies.set("loginData", JSON.stringify(data));
    //         reset();
    //         handleClose();
    //       } else {
    //         toast.error("password is incorrect");
    //       }
    //     } else {
    //       toast.error("Invalid Email or Password!");
    //     }
    //     // console.log(matchEmailUser);
    //   }, 1000);
    // } catch (error) {
    //   toast.error("An error occured during login");
    //   console.log(error);
    //   // setLoading(false);
    // } finally {
    //   // setLoading(false);
    //   reset();
    //   handleClose();
    // }
  };

  if (showSignup) {
    return (
      <SignupModel
        handleClose={handleClose}
        onSwitchToLogin={() => setShowSignup(false)}
      />
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "#192428",
        borderRadius: "8px",
        overflow: "hidden",
        width: "62rem",
        position: "relative",
        outline: "none",
      }}
    >
      <IconButton
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
          backgroundColor: "#d9832e",
          color: "white",
          "&:hover": { backgroundColor: "#b86e26" },
          zIndex: 1,
        }}
        aria-label="close"
        onClick={handleClose}
      >
        <CloseIcon />
      </IconButton>

      <Box
        sx={{
          width: { xs: "0%", md: "40%" },
          backgroundImage: `url(${LoginImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: { xs: "none", md: "block" },
        }}
      />

      <Box sx={{ flexGrow: 1, p: { xs: 4, md: 6 }, color: "white" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2}>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Email:
            </Typography>
            <StyledTextField
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              error={errors.email}
              helperText={errors.email?.message}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailOutlinedIcon sx={{ color: "grey.500" }} />
                  </InputAdornment>
                ),
              }}
            />

            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Password:
            </Typography>
            <StyledTextField
              type="password"
              {...register("password", { required: "Password is required" })}
              error={errors.password}
              helperText={errors.password?.message}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlinedIcon sx={{ color: "grey.500" }} />
                  </InputAdornment>
                ),
              }}
            />

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mt: 1,
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "#d68240",
                  cursor: "pointer",
                  "&:hover": { textDecoration: "underline" },
                  fontWeight: "bold",
                }}
              >
                Forgot Password?
              </Typography>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#d68240",
                  color: "white",
                  fontWeight: "bold",
                  py: 1,
                  px: 4,
                  borderRadius: "4px",
                }}
                disabled={loading}
              >
                {loading ? "loaDING..." : "lOGIN"}
              </Button>
            </Box>
          </Stack>
        </form>

        <Stack
          direction="row"
          spacing={3}
          sx={{ mt: 5, justifyContent: "center" }}
        >
          <Button
            startIcon={<FacebookIcon />}
            sx={{
              color: "white",
              textTransform: "none",
              fontSize: "1rem",
              "& .MuiSvgIcon-root": { color: "#1877F2" },
            }}
          >
            Facebook
          </Button>
          <Button
            startIcon={<GoogleIcon />}
            sx={{
              color: "white",
              textTransform: "none",
              fontSize: "1rem",
              "& .MuiSvgIcon-root": { color: "#DB4437" },
            }}
          >
            Google
          </Button>
        </Stack>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 3, gap: 1 }}>
          <Typography variant="body2">Don't have an account?</Typography>
          <Link
            component="button"
            variant="body2"
            onClick={() => setShowSignup(true)}
            sx={{
              color: "#d68240",
              cursor: "pointer",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            Sign Up
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginModal;

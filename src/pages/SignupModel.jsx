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

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CloseIcon from "@mui/icons-material/Close";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import LoginImage from "../assets/Login/login.png";
import Api from "../api/Api";
// import { useNavigate } from "react-router-dom";
// import { toast } from "sonner";
import { useContext } from "react";
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
      "& .MuiFormHelperText-root": { color: "#f44336", marginLeft: 0 },
      marginBottom: "4px",
    }}
    error={!!props.error}
    helperText={props.helperText}
    {...props}
  />
);

const SignupModel = ({ handleClose, onSwitchToLogin }) => {
  const { signup, loading } = useContext(AuthContext);
  // const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // console.log("Signup Data:", data);
    // await Api.post(`users`, data)
    // localStorage.setItem("loginData", JSON.stringify(data))
    // toast.success(`Account Created Succesfully ${data.name}`)
    // navigate("/cart");

    signup(data, onSwitchToLogin, handleClose);
  };

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
              Your Name:
            </Typography>
            <StyledTextField
              {...register("name", { required: "Your name is required" })}
              error={errors.name}
              helperText={errors.name?.message}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutlineOutlinedIcon sx={{ color: "grey.500" }} />
                  </InputAdornment>
                ),
              }}
            />

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
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
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
                {loading ? "loading..." : "SIGN UP"}
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
          <Typography variant="body2">Already have an account?</Typography>
          <Link
            component="button"
            variant="body2"
            onClick={onSwitchToLogin}
            sx={{
              color: "#d68240",
              cursor: "pointer",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            Login
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default SignupModel;

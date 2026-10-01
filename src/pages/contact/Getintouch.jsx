import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  InputAdornment,
  Stack,
  Avatar,
} from "@mui/material";

// Importing Icons
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SubjectOutlinedIcon from "@mui/icons-material/SubjectOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";


const StyledTextField = (props) => (
  <TextField
    fullWidth
    variant="filled"
    InputProps={{
      disableUnderline: true, 
      sx: {
        borderRadius: "10px",
        backgroundColor: "#14252a",
        "&.Mui-focused": {
          backgroundColor: "#14252a",
        },
        "&:hover": {
          backgroundColor: "#14252a",
        },
      },
      ...props.InputProps, 
    }}
    sx={{
      "& .MuiFilledInput-root": {
        backgroundColor: "#14252a",
      },
      "& .MuiInputBase-input": {
        color: "white",
      },
    }}
    {...props}
  />
);

const GetInTouch = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#0a1316", color: "white", py: 5 }}>
        <Container>
          <Typography
            variant="h4"
            component="h2"
            fontWeight="bold"
            gutterBottom
          >
            Get In Touch
          </Typography>
          <Grid container>
            {/* Left Side: Form */}

            <Grid item xs={12} sm={6} sx={{ width: "40rem" }}>
              <Typography variant="body2" sx={{ color: "grey.400", mb: 4 }}>
                Your email address will not be published, Required fields are
                marked
              </Typography>

              <form>
                <Grid container spacing={2} sx={{ minWidth: "40rem" }}>
                  <Grid item xs={12} sm={4}>
                    <Typography variant="body1" gutterBottom>
                      Your Name:
                    </Typography>
                    <StyledTextField
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonOutlineOutlinedIcon
                              sx={{ color: "grey.500" }}
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body1" gutterBottom>
                      Email:
                    </Typography>
                    <StyledTextField
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <EmailOutlinedIcon sx={{ color: "grey.500" }} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item size={9.7} xs={12}>
                    <Typography variant="body1" gutterBottom>
                      Subjects:
                    </Typography>
                    <StyledTextField
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SubjectOutlinedIcon sx={{ color: "grey.500" }} />
                          </InputAdornment>
                        ),
                      }}
                    />

                    <Typography variant="body1" gutterBottom>
                      Message:
                    </Typography>
                    <StyledTextField
                      multiline
                      rows={6}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            sx={{ alignItems: "flex-start", mt: 1.5 }}
                          >
                            <EditOutlinedIcon sx={{ color: "grey.500" }} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <br />
                    <Button
                      variant="contained"
                      sx={{
                        mt: 2,
                        backgroundColor: "#d9832e",
                        color: "white",
                        fontWeight: "bold",
                        py: 1.5,
                        px: 4,
                        "&:hover": {
                          backgroundColor: "#b86e26",
                        },
                      }}
                    >
                      SEND MESSAGE
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>

            {/* Right Side: Information */}
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  backgroundColor: "#192428",
                  p: 4,
                  borderRadius: 2,
                  height: "100%",
                }}
              >
                <Stack spacing={4}>
                  <Box>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      Address:
                    </Typography>
                    <Typography variant="body1" sx={{ color: "grey.400" }}>
                      543 Country Club Ave, NC 27587, London, UK+1257 6541120
                    </Typography>
                  </Box>

                  <Box>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      Contact:
                    </Typography>
                    <Typography variant="body1" sx={{ color: "grey.400" }}>
                      Phone: +918348457995
                    </Typography>
                    <Typography variant="body1" sx={{ color: "grey.400" }}>
                      Email: Foodi018@gmail.com
                    </Typography>
                  </Box>

                  <Box>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      Opening Hours:
                    </Typography>
                    <Typography variant="body1" sx={{ color: "grey.400" }}>
                      Monday - Friday: 9:00 AM - 10:00 PM
                    </Typography>
                    <Typography variant="body1" sx={{ color: "grey.400" }}>
                      Saturday - Sunday: 9:00 AM - 7:00 PM
                    </Typography>
                  </Box>

                  <Box>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      Stay Connected:
                    </Typography>
                    <Stack direction="row" spacing={1.5}>
                      <Avatar sx={{ cursor: "pointer" }}>
                        <FacebookIcon fontSize="small" />
                      </Avatar>
                      <Avatar sx={{ cursor: "pointer" }}>
                        <XIcon fontSize="small" />
                      </Avatar>
                      <Avatar sx={{ cursor: "pointer" }}>
                        <InstagramIcon fontSize="small" />
                      </Avatar>
                      <Avatar sx={{ cursor: "pointer" }}>
                        <LinkedInIcon fontSize="small" />
                      </Avatar>
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default GetInTouch;

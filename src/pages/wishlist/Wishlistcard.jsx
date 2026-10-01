import { useContext } from "react"
import Wishlistcontext from "../../hooks/context/wishlist/Wishlistcontext"
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import WishlistcardComponent from "../../components/WishlistcardComponent";

const Wishlistcard = () => {
  const {favourite} = useContext(Wishlistcontext)
  console.log("fav: ", favourite);
  
    return (
    <>
<Box sx={{ backgroundColor: "#0A1316" }}>
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: 10,
            flexWrap: "wrap",
            textAlign: "center",
          }}
        >
          <Typography variant="h2">Your Wish List</Typography>
          <br />
          <Container>
            <Typography>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
              libero at quibusdam quod eos et, deserunt maiores possimus quas,
              nostrum cumque reprehenderit placeat eveniet, architecto dolor
              laboriosam velit repellat soluta.
            </Typography>
          </Container>
        </Container>

        <Container>
          <Box sx={{ flexGrow: 1, p: 3,  }}>
            <Grid container spacing={3}>
              {favourite.map((card) => (
                <Grid item xs={4} key={card.id}>
                  <Paper elevation={3} sx={{ height: "100%", backgroundColor: "#121A1D"}}>
                    <WishlistcardComponent card={card} />
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default Wishlistcard
import { Box, Container, Grid, Typography } from "@mui/material";
import CheifCard from "../../components/CheifCard";

import chef1 from "../../assets/ChefImages/chef1.png";
import chef2 from "../../assets/ChefImages/chef2.png";
import chef3 from "../../assets/ChefImages/chef3.png";
import chef4 from "../../assets/ChefImages/chef4.png";
import chef5 from "../../assets/ChefImages/chef5.png";
import chef6 from "../../assets/ChefImages/chef6.png";
import chef7 from "../../assets/ChefImages/chef7.png";
import chef8 from "../../assets/ChefImages/chef8.png";
import chef9 from "../../assets/ChefImages/chef9.png";
import chef10 from "../../assets/ChefImages/chef10.png";
import chef11 from "../../assets/ChefImages/chef11.png";
import chef12 from "../../assets/ChefImages/chef12.png";

const chefJson = [
  { name: "Masum Rana", chefRole: "Master Chef", image: chef2 },
  { name: "Manisha Agarwal", chefRole: "Senior Chef", image: chef1 },
  { name: "Muhibibur Rashid", chefRole: "Master Chef", image: chef3 },
  { name: "Rashed Kabir", chefRole: "Master Chef", image: chef4 },
  { name: "Jame Radley", chefRole: "Master Chef", image: chef5 },
  { name: "Garima Arora", chefRole: "Senior Chef", image: chef6 },
  { name: "Romy Gill", chefRole: "Senior Chef", image: chef7 },
  { name: "Keneth Conroy", chefRole: "Assistant Chef", image: chef8 },
  { name: "Esther Howard", chefRole: "Master Chef", image: chef9 },
  { name: "Robert Fox", chefRole: "Senior Chef", image: chef10 },
  { name: "Dipna Anand", chefRole: "Master Chef", image: chef11 },
  { name: "Asma Khan", chefRole: "Senior Chef", image: chef12 },
];

const Cheflist = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#0A1316" , p: 5}}>
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
          <Typography variant="h2">Our World Class Chef</Typography>
          <br />
          <Container>
            <Typography>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
              libero at quibusdam quod eos et, deserunt maiores possimus quas,
              nostrum cumque reprehenderit placeat eveniet, architecto dolor
              laboriosam velit repellat soluta.
            </Typography>
          </Container>
          <Container sx={{p: 2, mt: 7}}>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            {chefJson.map((chef, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <CheifCard chef={chef} />
              </Grid>
            ))}
          </Grid>
        </Container>
        </Container>

        
      </Box>
    </>
  );
};

export default Cheflist;

import React, { useState } from "react";
import {Link} from 'react-router-dom';
import './try.css';
import BasicAccordion from "./EventCard";
// import MultiActionAreaCard from "./card";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import "./header.css";

import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import DrawerComp from "./DrawerComps";
const destinations = [
  {
    id: 1,
    name: 'Birthday',
    label:'Register Now',
    image:'https://www.table-art.co.uk/wp-content/uploads/2018/04/1136px-x-675px-peachy-image.jpg',
  },
  {
    id: 2,
    name: 'Stage Performence',
    label:'Register Now',

    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7DlTgePcsSpIAd-y63Fx-gUKMNbjnQkkb4e7H7jJfZprlD2lYg2pkh2kJ67N71fwWeVc&usqp=CAU',
  },
  {
    id: 3,
    name: 'Disco',
    label:'Register Now',

    image: 'https://www.shutterstock.com/image-photo/blur-night-club-have-party-260nw-573239401.jpg', // Replace with the actual image URL
  },
  {
    id: 4,
    name: 'Party',
    label:'Register Now',

    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcL1RLFEzrUEfUgu7xkLMtKJsIrya6fzoQ8ELWKvOZoK7gIzSnam3fq3W1QhYJ0OdiT1s&usqp=CAU',
  },
  {
    id: 5,
    name: 'Wedding',
    label:'Register Now',

    image: 'https://lirp.cdn-website.com/28cd0bb4/dms3rep/multi/opt/traditional+american+wedding-1920w.jpeg',
  },
  {
    id: 6,
    name: 'DJ Nights',
    label:'Register Now',

    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk8BowtVVFfWUn52DjJyDtMd1-RgKMufS_6Q&usqp=CAU',
  },
];
const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
const [event,setEvent]=useState(null);
  return (
    <div className="hi">
    <React.Fragment>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          <AddBusinessRoundedIcon sx={{ transform: "scale(2)", mr:'5px' }} />
          <Typography sx={{ marginLeft: "19px" }}>EVENTS</Typography>
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                Event
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Link to="/a">
                 
                <Tab className="navcolor"label="About Us" style={{color:"white"}} />
                </Link>
                <Link to="/c">

                <Tab className="navcolor" label="Contact" style={{color:"white"}} />
                </Link>
              </Tabs>
              {/* <Link to="/sig">
              <Button sx={{ marginLeft: "auto" }} variant="contained">
                Book Now
              </Button>
              </Link> */}
              <Link to="/reg">
              <Button sx={{ marginLeft: "10px" }} variant="contained" >
                Login

              </Button>
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Container>
        <br></br>
        <br></br>
        
       
      <Grid container spacing={4} justifyContent="center" style={{ marginTop: '30px' ,borderRadius:5}}>
        {destinations.map((destination) => (
          <Grid item key={destination.id}>
            <Card style={{ maxWidth: 500 }}>
              <CardMedia
                component="img"
                height="200"
                image={destination.image}
                alt={destination.name}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {destination.name}<br></br>
                </Typography>
                  <Link to="/sig">
                  <Button variant="contained">{destination.label}</Button>
              </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
        {/* <Box sx={{marginTop:"80px"}}>
          <BasicAccordion name="Events" />
          </Box> */}
    </React.Fragment><br/><br/>
    {/* <MultiActionAreaCard/> */}
    <div>

    </div>
    </div>
  );
};
export default Header;
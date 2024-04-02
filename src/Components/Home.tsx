import React from "react";
import SideNav from "./SideNav";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Navbar from "./Navbar";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import "../Dash.css";
import AccordionDash from "./AccordionDash";

export default function Home() {
  return (
    <>
    <div className="bgcolor">
    <Navbar />
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Stack spacing={2} direction="row">
                <Card
                  sx={{ minWidth: 49 + "%", height: 150 }}
                  className="gradient"
                >
                  <CardContent  className="iconStyle">
                    <div>
                      <CreditCardIcon />
                    </div>
                    <Typography gutterBottom variant="h5" component="div">
                      $500.00
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      sx={{ color: "ccd1d1" }}
                    >
                      Total Earning
                    </Typography>
                  </CardContent>
                </Card>
                <Card
                  sx={{ minWidth: 49 + "%", height: 150 }}
                  className="gradient-light"
                >
                  <CardContent className="iconStyle">
                    <div>
                      <ShoppingBagIcon />
                    </div>
                    <Typography gutterBottom variant="h5" component="div">
                      $900.00
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      sx={{ color: "ccd1d1" }}
                    >
                      Total Order
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={2}>
                <Card sx={{ maxWidth: 345 }}   className="gradient-light">
                  <Stack spacing={2} direction="row">
                    <div className="iconStyle">
                      <StorefrontIcon />
                    </div>
               
                    <div className="paddingall">
                      <span className="pricetitle">$203k</span>
                      <br />
                      <span className="pricesubtitle">Total Income</span>
                    </div>
                
                  </Stack>
                </Card>

                <Card sx={{ maxWidth: 345 }}>
                  <Stack spacing={2} direction="row">
                    <div className="iconStyle-black">
                      <StorefrontIcon />
                    </div>

                    <div className="paddingall">
                      <span className="pricetitle">$203k</span>
                      <br />
                      <span className="pricesubtitle">Total Income</span>
                    </div>
                  </Stack>
                </Card>
              </Stack>
            </Grid>
          </Grid>
          <Box height={20} />
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card sx={{ height: 60 + "vh" }}>
                <CardContent>
                
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card sx={{ height: 60 + "vh" }}>
                <CardContent>
                <div className="paddingall">
                      <span className="pricetitle"> Popular Products</span>
                     
                    </div>
                  Popular Products
                <AccordionDash/>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
    
    </>
  );
}

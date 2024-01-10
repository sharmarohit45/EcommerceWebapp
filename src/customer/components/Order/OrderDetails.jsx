import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { Box, Button, Grid, } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import OrderTraker from './OrderTraker';
import { deepPurple } from "@mui/material/colors";

export default function OrderDetails() {
  return (
    <div className=" px-2 lg:px-36 space-y-7 ">
      <Grid container className="p-3 shadow-lg">
        <Grid xs={12}>
          <p className="font-bold text-lg py-2">Delivery Address</p>
        </Grid>
        <Grid item xs={6}>
          <AddressCard />
        </Grid>
      </Grid>
      <Box className="p-5 shadow-lg border rounded-md">
        <Grid
          container
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Grid item xs={9}>
            <OrderTraker
              activeStep={3}
            />
          </Grid>
          {/* <Grid item>
           {order.order?.orderStatus==="DELIVERED" && <Button sx={{ color: ""}} color="error" variant="text" >
              RETURN
            </Button>}

            {order.order?.orderStatus!=="DELIVERED" && <Button sx={{ color: deepPurple[500] }} variant="text">
              cancel order
            </Button>}
          </Grid> */}
        </Grid>
      </Box>

    

      <Grid container className="space-y-5">
        {[1,1,1,1].map((item)=>  <Grid
            container
            item
            className="shadow-xl rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div className="flex  items-center ">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src="https://rukminim1.flixcart.com/image/612/612/l0wrafk0/dress/l/2/o/3xl-m2s13003-peach-madame-original-imagchhhwbypcann.jpeg"
                  alt=""
                />
                <div className="ml-5 space-y-2">
                  <p className="">Women Slim Mid Rise Jeans</p>
                  <p className="opacity-50 text-xs font-semibold space-x-5">
                    <span>Color: pink</span> <span>Size:M</span>
                  </p>
                  <p>Seller: linaria</p>
                  <p>₹9480 </p>
                </div>
              </div>
            </Grid>
            <Grid item>
            
                <Box
                  sx={{ color: deepPurple[500] }}
                  className="flex items-center cursor-pointer"
                >
                  <StarIcon
                    sx={{ fontSize: "2rem" }}
                    className="px-2 text-5xl"
                  />
                  <span>Rate & Review Product</span>
                </Box>
              
            </Grid>
          </Grid>
    )}
        
      </Grid>
    </div>
  )
}

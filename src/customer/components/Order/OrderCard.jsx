import React from 'react'
import { Box, Grid,} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import AdjustIcon from "@mui/icons-material/Adjust";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from 'react-router-dom';

export default function OrderCard() {

    const navigate=useNavigate();
  return (
    <Box onClick={()=>navigate(`/account/order/${5}`)} className="p-5 shadow-lg hover:shadow-2xl border ">
    <Grid spacing={2} container sx={{ justifyContent: "space-between" }}>
      <Grid item xs={6}>
        <div
          className="flex cursor-pointer"
        >
          <img
            className="w-[5rem] h-[5rem] object-cover object-top"
            src="https://rukminim1.flixcart.com/image/612/612/l0wrafk0/dress/l/2/o/3xl-m2s13003-peach-madame-original-imagchhhwbypcann.jpeg"
            alt=""
          />
          <div className="ml-5">
            <p className="mb-2">Women Slim Mid Rise Jeans</p>
            <p className="opacity-50 text-xs font-semibold space-x-5">
              <span>Size:M</span>
            </p>
          </div>
        </div>
      </Grid>

      <Grid item xs={2}>
        <p>₹9488</p>
      </Grid>
      <Grid item xs={4}>
        <p className="space-y-2 font-semibold">
          {true &&
           <>
           <FiberManualRecordIcon
                sx={{ width: "15px", height: "15px" }}
                className="text-green-600 p-0 mr-2 text-sm"
              />
              <span>Delivered On Mar 03</span>

          </>}
           
           {false &&
            <>
             
              <AdjustIcon
              sx={{ width: "15px", height: "15px" }}
              className="text-green-600 p-0 mr-2 text-sm"
            />
            <span>Expected Delivery On Mar 03</span>
            </>}
          
        </p>
        <p className="text-xs">Your Item Has Been Delivered</p>
        
      </Grid>
    </Grid>
  </Box>
  )
}

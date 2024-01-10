import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOrderById } from '../../State/Order/Action';
import { updatePayment } from '../../State/Payment/Action';
import { Alert, AlertTitle, Grid } from '@mui/material';
import OrderTraker from '../components/Order/OrderTraker';
import AddressCard from '../components/AddressCard/AddressCard';

const PaymentSucess = () => {

    const [paymentId,setPaymentId]=useState()
    const [referenceId,setReferceId]=useState();
    const[paymentStatus,setPaymentStatus]=useState();
    const {orderId}=useParams();
    console.log("orderId",orderId);

    const dispatch=useDispatch();
    const {order}=useSelector(store=>store);

    useEffect(()=>{
        const urlParam=new URLSearchParams(window.location.search);
        setPaymentId(urlParam.get("razorpay_payment_link_id"))
        setPaymentStatus(urlParam.get("razorpay_payment_link_status"))
    },[])

    useEffect(()=>{
        const data={orderId,paymentId}
        dispatch(getOrderById(orderId));
        dispatch(updatePayment(data))

    },[orderId,paymentId])
  return (
    <div className='px-2 lg:px-36'>
        <div className='flex flex-col justify-center items-center'>
            <Alert
            variant='filled'
            severity='success'
            sx={{mb:6,width:"fit-content"}}
            >
                <AlertTitle>Payment Success</AlertTitle>
              Congratulation your Order Get Placed
            </Alert>
        </div>
        <OrderTraker activeStep={1}></OrderTraker>

        <Grid container className='space-y-5 py-5 pt-20'>

           {[1,2,2].map((item)=>
            <Grid container item className='shadow-xl rounded-md p-5'
            sx={{alignItems:"center",justifyContent:"space-between"}}>
                
                <Grid item xs={6}>
                    <div className='flex items-center'>
                       <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/y/c/x/xl-kast107hp-majestic-man-original-imafw49u5uty4agx-bb.jpeg?q=70" alt=""/>
                       <div className='ml-5 space-y-2'>
                        <p>item.product.title</p>
                        <div className='opacity-50 text-xs font-semibold space-x-5'>
                            <span>Color:item.color</span>
                            <span>Size:item.size</span>
                        </div>
                        <p>Seller:item.product.brand</p>
                        <p>₹item.price</p>
                       </div>
                    </div>
    
                </Grid>
                <Grid>
                    <AddressCard address={''}/>

                </Grid>
    
            </Grid>
           )}
       


        </Grid>
     
    </div>
  )
}

export default PaymentSucess

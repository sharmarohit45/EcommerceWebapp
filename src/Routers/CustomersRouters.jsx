import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HPage from '../customer/Pages/HomePages/HPage'
import Cart from '../customer/components/Cart/Cart'
import Nav from '../customer/components/Navigations/Nav'
import Footer1 from '../customer/components/Footer/Footer1'
import Product from '../customer/components/Product/Product'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import Checkout from '../customer/components/Checkout/Checkout'
import Order from '../customer/components/Order/Order'
import OrderDetails from '../customer/components/Order/OrderDetails'
import PaymentSucess from '../customer/Payment/PaymentSucess'

export default function CustomersRouters() {
  return (
    <div>
        <div>
            <Nav/>
        </div>
        <Routes>
        <Route path="/login" element={<HPage/>}></Route>
        <Route path="/register" element={<HPage/>}></Route>
            <Route path="/" element={<HPage/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/:lavelOne/:lavelTwo/:lavelThree' element={<Product/>}></Route>
            <Route path='/product/:productId' element={<ProductDetails/>}></Route>
            <Route path='/checkout' element={<Checkout/>}></Route>
            <Route path='/account/order' element={<Order/>}></Route>
            <Route path='/account/order/:orderId' element={<OrderDetails/>}></Route>
            <Route path='/payment/:orderId' element={<PaymentSucess/>}></Route>


            
       
       
        {/* <Order/> */}
        {/* <OrderDetails/> */}
        
        </Routes>
        <div>
            <Footer1/>
        </div>
    </div>
  
  )
}

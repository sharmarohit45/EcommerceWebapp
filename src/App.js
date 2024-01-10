
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HPage from './customer/Pages/HomePages/HPage';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';
import DeliveryAddressForm from './customer/components/Checkout/DeliveryAddressForm';
import Footer1 from './customer/components/Footer/Footer1';
import Nav from './customer/components/Navigations/Nav';
import Order from './customer/components/Order/Order';
import OrderDetails from './customer/components/Order/OrderDetails';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import CustomersRouters from './Routers/CustomersRouters';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/*' element={<CustomersRouters/>}></Route>
      </Routes>
      
    
     
    </div>
  );
}

export default App;

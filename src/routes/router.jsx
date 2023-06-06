import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main/Main';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Login/Login';
import Signup from '../pages/Singup/Signup';
import Checkout from '../pages/Checkout/Checkout';
import Bookings from '../pages/Bookings/Bookings';
import PrivateRoute from './PrivateRoute';
import About from '../pages/Home/About/About';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<Signup></Signup>
        },
        {
          path:'/checkout/:id',
          element:<Checkout></Checkout>,
          loader:({params})=>fetch(`https://car-doctor-server-phi-rosy.vercel.app/services/${params.id}`)
        },
        {
          path:'/bookings',
          element:<PrivateRoute><Bookings></Bookings></PrivateRoute>
        },
        {
          path:'/about',
          element:<About></About>
        }
      ]
    },
  ]);

export default router;
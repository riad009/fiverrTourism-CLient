import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/Main';
import { ToastContainer } from 'react-toastify';

import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import Estorees from './Components/EStores/Estorees';
import PlanTour from './Components/PlanTour/PlanTour';
import VisitPlaces from './Components/VisitPlaces/VisitPlaces';
import Details from './Components/VisitPlaces/Details';
import PostData from './Components/VisitPlaces/Postdata';
import About from './Components/About/About';
import Registration from './Components/Login/Registration';
import  { url } from './Components/Shared/Shared';
import PostEstoreData from './Components/EStores/PostEstoreData';
import IdWiseProduct from './Components/EStores/IdWiseProduct';
import Cart from './Components/Dashboard/Admin/Order/Cart';

import UserList from './Components/Dashboard/Admin/UserList';
import LayoutDashboard from './Components/Dashboard/LayoutDashboard';
import Dashboard from './Components/Dashboard/Dashboard';
import Order from './Components/Dashboard/Admin/Order/Order';
import IDorder from './Components/Dashboard/Admin/Order/IDorder';
import MyProduct from './Components/Dashboard/Admin/Order/MyProduct';
import PostPlanTour from './Components/PlanTour/PostPlanTour';
import IdTour from './Components/PlanTour/IdTour';











function App() {
  const router=createBrowserRouter(

    [

      {
        path: '/',
        element: <Main></Main>,
        children: [

          {
            path: '/',
            element:  <VisitPlaces></VisitPlaces>
          },
        

        
          {
            path: '/login',
            element:  <Login></Login>
          },
          {
            path: '/registration',
            element:  <Registration></Registration>
          },
      
          {
            path: '/contact',
            element: <Contact></Contact>
          },
          {
            path: '/estores',
            element: <Estorees></Estorees>
          },
          {
            path: '/plantour',
            element: <PlanTour></PlanTour>
          },
      
          {
            path: '/visitplaces',
            element: <VisitPlaces></VisitPlaces>
          },
         
      
          {
            path: '/contact',
            element: <Contact></Contact>
          },
          {
            path: '/about',
            element: <About></About>
          },
      
          {
            path: '/details',
            element: <Details></Details>
          },
      
          {
            path: '/postdata',
            element: <PostData></PostData>
          },
    
          //id wise place load 
          {
            path: '/placeid/:id',
            element: <Details></Details>,
            loader:({params})=>fetch(`${url}/placeid/${params.id}`)
          },
          //id wise product load 
          {
            path: '/estoreid/:id',
            element: <IdWiseProduct></IdWiseProduct>,
            loader:({params})=>fetch(`${url}/estoreid/${params.id}`)
          },
          {
            path: '/get/tour/id/:id',
            element: <IdTour></IdTour>,
            loader:({params})=>fetch(`${url}/get/tour/id/${params.id}`)
          },
         
         
          // {
          //   path: '/addtocard/:id',
          //   element: <AddToCard></AddToCard>,
          //   loader:({params})=>fetch(`${url}/estoreid/${params.id}`)
          // },
          
        
    
          // 
          {
            path: '/dashboard',
            element:   <LayoutDashboard></LayoutDashboard>,
            children:[

              {

                path: '/dashboard',
                element: <Dashboard></Dashboard>
              },
              {

                path: '/dashboard/userlist',
                element: <UserList></UserList>
              },
             
              {

                path: '/dashboard/cart',
                element: <Cart></Cart>
              },
              {

                path: '/dashboard/myorder',
                element: <Order></Order>
              },
              {
                path: '/dashboard/get/idWise/order/:id',
                element: <IDorder></IDorder>,
                loader:({params})=>fetch(`${url}/get/idWise/order/${params.id}`)
              },
              {
                path: '/dashboard/postestore',
                element: <PostEstoreData></PostEstoreData>
              },
            
              {
                path: '/dashboard/myproduct',
                element:<MyProduct></MyProduct>
              },
            
              {
                path: '/dashboard/postplantour',
                element: <PostPlanTour></PostPlanTour>
              },
            
            
            ]
          },
    

        ]
      },
    
      

    ]
    
  )
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>

     <ToastContainer/>
     
    </div>
  );
}

export default App;
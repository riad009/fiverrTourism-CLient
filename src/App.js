import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Component/Home';
import Main from './Component/Main';
import MyTask from './Component/Task/MyTask';
import AddTask from './Component/Task/AddTask';
import CompleTask from './Component/Task/CompleTask';

function App() {

  const router=createBrowserRouter(

    [

      {
        path: '/',
        element: <Main></Main>,
        children: [

          {
            path: '/',
            element:  <MyTask></MyTask>
          },
          {
            path: '/mytask',
            element:  <MyTask></MyTask>
          },
          {
            path: '/addtask',
            element:  <AddTask></AddTask>
          },
          {
            path: '/completask',
            element:  <CompleTask></CompleTask>
          }
         
         

          
         


        ]
      }
      

    ]
    
  )
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

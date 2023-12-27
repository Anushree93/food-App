import React from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header'
import Body from './components/Body';
import Career from "./components/Career";
import Cart from "./components/Cart";
import Error from "./components/Error"; 
import About from "./components/About";
import RestaurantMenu from "./components/RestaurantMenu";

import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';

const FoodApp = () =>{
    return (<div>
        <Header/>
        <Outlet/>
    </div>)
 }

const appRounter = createBrowserRouter([
    {
        path:"/",
        element:<FoodApp/>,
        children: [
            {
                path:"/home",
                element:<Body/>
            },
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/cart",
                element:<Cart/>
            },
            {
                path:"/career",
                element:<Career/>
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>
            }
        ],
        errorElement:<Error/>
    }
]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRounter}/>);
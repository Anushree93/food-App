import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header'
import Body from './components/Body';
import Cart from "./components/Cart";
import Error from "./components/Error"; 
import About from "./components/About";
import { Suspense } from "react";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import UserContext from "./utils/UserContext";

const FoodApp = () =>{

    const[userName, setUserName] = useState();

    useEffect(()=>{
        const data = {
            name: 'Anushree'
        }
        setUserName(data.name);
    },[])

   
    return (
    <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
        <div>
            <Header/>
            <Outlet/>
       </div>
    </UserContext.Provider>
    )
}

const Career = React.lazy(()=>import("./components/Career"));

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
                element:<Suspense><Career/></Suspense>
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
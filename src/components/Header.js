import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {FOOD_LOGO, CART_LOGO, LOGIN_LOGO} from '../utils/config';

const Header = () =>{
    const [isLoggedIn, setIsLoggedIn] = useState('Login');

    return (<div className='flex justify-between border'>
        <div className='my-5 mx-5'>
            <img className="w-40 h-40" src={FOOD_LOGO}/>
        </div>
        <div className='w-1/3'>
            <ul className='flex my-10 mx-10 justify-between cursor-pointer text-xl'>
                <Link to="/home"><li className='my-auto'>Home</li></Link>
                <Link to="/about"><li className='my-auto'>About</li></Link>
                <Link to="/career"><li className='my-auto'>Career</li></Link>
                <Link to="/cart"><li><img className='w-12 h-auto' src={CART_LOGO}/>Cart</li></Link>
                <li className='cursor-pointer w-20' onClick={()=>{
                    isLoggedIn==='Login'?setIsLoggedIn('Logout'):setIsLoggedIn('Login');
                }}><img className='w-12 h-12' src={LOGIN_LOGO}/>{isLoggedIn}</li>
            </ul>
        </div>
    </div>)
}

export default Header
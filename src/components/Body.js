import { useContext, useEffect, useState } from 'react';
import RestroCard from './RestroCard';
import { SEARCH_LOGO } from '../utils/config';
import ShimmerUI from './ShimmerUI';
import { Link } from 'react-router-dom';
import UserContext from '../utils/UserContext';

const Body = () => {

  let [ searchBy, setSearchBy ] = useState('');
  const { setUserName } = useContext(UserContext); 
  const [restroList, setrestroList] = useState([]);
  //const [filteredList, setFilteredList] = useState([]);
  
  console.log('anushree body');
  //there are 2 parameter that useEffect hook takes
  //1 is arrow function and 2nd is dependency Array.
  //when theres no second parameter, it effects after every render & rerender of your component 
  //when there is [], it effects after every render of your body, calls useEffect and rerender the comp again
  //when there is 'state variable', it will effect on every change of that variable.
  useEffect(()=>{
    console.log('anushree ueEffect');
    fetchData();
  },[]);

  const fetchData = async () => {
    const result = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const json = await result.json();
    const restList = json?.data?.cards?.filter(res=> res?.card?.card?.id === "restaurant_grid_listing");
    setrestroList(restList[0].card.card.gridElements.infoWithStyle.restaurants);
  }

  return restroList.length===0?
  (<div>
    <ShimmerUI/>
  </div>):(
  <div className='my-4'>
    <div className='w-58'>
       <input type='text' className='w-52 ml-4 border-black inline' 
        onChange={(e)=>{ 
          setSearchBy(e.target.value);
          setrestroList(restroList.filter(res => res.info.name.toLowerCase().includes(searchBy.toLocaleLowerCase())));
      }}></input>
      <img className='w-6 h-6 inline mx-2' src={SEARCH_LOGO}/>
        <button className='border px-1 color' onClick={()=>{
        setrestroList(restroList.filter(res => res.info.avgRating>4));
       }}>Top Rated</button> 
       <input className='inline border-black ml-4' onChange={(e)=>{
            setUserName(e.target.value);
       }} type='text'/>
    </div>
    <div className='flex flex-wrap'>
    {
        restroList.map(res => <Link to={'/restaurants/'+res.info.id} key={res.info.id}><RestroCard resObj={res}></RestroCard></Link>)
    }
    </div>
  </div>
  )   
}

export default Body
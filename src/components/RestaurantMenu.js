import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { RES_URL } from "../utils/config";

const RestaurantMenu = () => {

    const {resId} = useParams();
    
    const [resData, setResData] = useState([]);

    useEffect(()=>{
      fetchData();
    },[])

    const fetchData = async () => {
       const data = await fetch(RES_URL+resId);
       const result = await data.json();
       setResData(result.data?.cards);
    }

    return (
    <div className="mx-12">
        <div className="flex justify-between font-bold text-xl">
            <div className="inline">{resData[0]?.card?.card?.info?.name}</div>
            <div className="inline">{resData[0]?.card?.card?.info?.avgRating}</div>
        </div>
        <div className="font-bold">{resData[0]?.card?.card?.info?.cuisines.join(", ")}</div>
        <div className="font-bold">{resData[0]?.card?.card?.info?.costForTwoMessage}</div>
    </div>
    )
}

export default RestaurantMenu
import { useEffect, useState } from "react";
import { RES_URL } from "./config";

const useGetRestaurants = (resId) => {

    const [resData, setResData] = useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(RES_URL+resId);
        const result = await data.json();
        setResData(result.data?.cards);
    }

    return resData;
}

export default useGetRestaurants;
import { useParams } from "react-router-dom";
import useGetRestaurants from "../utils/useGetRestaurants";
import { RATING_LOGO, MENU_IMAGE_URL } from "../utils/config";

const RestaurantMenu = () => {

    const {resId} = useParams();
    
    const resData = useGetRestaurants(resId);
    console.log(resData);
  
    return (
       <div className="w-2/5 mx-auto border">
        <div className="flex justify-between font-bold text-xl ml-4 mt-2">
            <div className="inline">{resData[0]?.card?.card?.info?.name}</div>
            <div className="inline mr-4">{resData[0]?.card?.card?.info?.avgRating}
            <img className="mb-1 w-4 h-4 inline ml-1" src={RATING_LOGO}/>
            </div>
        </div>
        <div className="font-bold ml-4">{resData[0]?.card?.card?.info?.cuisines.join(", ")}</div>
        <div className="font-bold ml-4">{resData[0]?.card?.card?.info?.costForTwoMessage}</div>
        <div className="border-solid border-b-2 mt-5 mb-3"/>
        <div>
            {
                resData[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
                    (card) =>!((card?.card?.card?.title) && (card?.card?.card?.itemCards?.length>0))?<div></div> : 
                    <div key={card?.card?.card?.title}>
                        <div className="font-bold ml-4">{card?.card?.card?.title}({card?.card?.card?.itemCards?.length})</div>
                        {card?.card?.card?.itemCards?.map(
                        (menu)=>(
                        <div className="flex flex-wrap justify-between my-8 ml-4" key={menu?.card?.info?.id}>
                            <div>
                                <div className="font-bold">{menu?.card?.info?.name}</div>
                                <div>Rs. {menu?.card?.info?.price/100 || menu?.card?.info?.defaultPrice/100 }</div>
                                <div>{menu?.card?.info?.itemAttribute?.vegClassifier}</div>
                            </div>
                            <div className="w-24 h-28 mr-4">
                                <div>
                                <img className="w-24 h-20" src={MENU_IMAGE_URL + menu?.card?.info?.imageId} />
                                </div>
                                <div>
                                <button className="h-6 w-16 mr-1 ml-4 border rounded-md cursor-pointer" onClick={()=>onAddHandler(menu?.card?.info)}>Add +</button>
                                </div>
                            </div>
                         </div>
                        )
                        )                    
                    }
                    <div className="border-b-2 my-3"/>
                    </div>
                )
            } 
        </div>
    </div>

       )
}

export default RestaurantMenu
import React, { useContext } from 'react';
import { IMAGE_URL, RATING_LOGO, DELIVERY_LOGO} from '../utils/config';
import UserContext from '../utils/UserContext';

const RestroCard = (props) => {
   const { resObj } = props;
   const { loggedInUser } = useContext(UserContext);

    return (
        <div className='w-52 h-76 mx-4 cursor-pointer my-4 rounded-xl'>
            <img className='w-52 h-40 rounded-xl' src={IMAGE_URL+resObj.info.cloudinaryImageId}/>
            <h1 className='px-2 font-bold'>{resObj.info.name}</h1>
            <img className='w-3 h-3 mx-0.5 inline' src={RATING_LOGO}/>
            <h1 className='inline font-bold'>{resObj.info.avgRating}</h1>
            <img className='inline w-8 h-8' src={DELIVERY_LOGO}/>
            <h1 className='inline font-bold'>{resObj.info.sla.deliveryTime} mins</h1>
            <h1 className='px-2'>{resObj.info.costForTwo}</h1>
            <h1 className='px-2'>{resObj.info.cuisines.join(', ')}</h1>
            <h1>Username : {loggedInUser}</h1>
        </div>
    )
}

export const withPromotedLabel = (RestroCard) => {
    return (props)=>{
        return (<div>
            <label className='ml-4 absolute bg-black text-white rounded-md px-1'>promoted</label>
            <RestroCard {...props}/>
        </div>)
    }
}

export default RestroCard;
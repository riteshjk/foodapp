import {IMD_CLD_IMG} from "../constants"

const RestaurantCart =({rest}) =>{
    const {cloudinaryImageId,name,cuisines,avgRating} = rest
    return(
     <div className="cart">
      <img style={{width:200, height:200}} src={IMD_CLD_IMG+cloudinaryImageId} alt="" />
             <h4>{name}</h4>
             {Array.isArray(cuisines) && cuisines.length > 0 ? (
        <p>{cuisines.join(", ")}</p>
      ) : (
        <p>No cuisines available</p>
      )}
             <p>{avgRating}</p>
     </div>
    )
 }

 export default RestaurantCart;
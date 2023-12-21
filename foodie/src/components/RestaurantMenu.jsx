import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu =() =>{
    const [resMenu, setResMenu] = useState([])

    const params =useParams();
    const {id} = params;

    useEffect(()=>{
        getRestaurantInfo()
    },[])

    async function getRestaurantInfo(){
        const res= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.590176900541042&lng=73.88951539993286&restaurantId=3178");
        const req = await res.json();
        console.log(req.data.cards);
        let bag=[];

        for(let i=0;i<req?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.length;i++){
           for(let j=0;j<req?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[i]?.card?.card?.categories?.length;j++){
            for(let k=0;k<req?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[i]?.card?.card?.categories[j]?.itemCards?.length;k++){
                if(req?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[i]?.card?.card?.categories[j]?.itemCards[k]?.card?.info){
                    bag.push(req.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[i].card.card.categories[j].itemCards[k].card.info)
                }
            }
           }
           
        }
        console.log(bag)
       setResMenu(bag)
       console.log(resMenu,"jajaj")
    }


    return (
        <div>
            {resMenu.map((e)=>{
                return(
                    <div>
                    <h1>restaurant: {id}</h1>
                    <p>{e.name}</p>
                    </div>
                )
            })}
           
        </div>
    )
}

export default RestaurantMenu;
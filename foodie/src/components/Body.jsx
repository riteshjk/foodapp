import { useState,useEffect } from "react";

import RestaurantCart from "./RestaurantCart";

import {restaurantData} from "../constants";
import {Link} from "react-router-dom";
import useOnline from ".././utils/useOnline"

function sortData(searchText, allResData) {
    return allResData.filter((res) =>
        res.name.toLowerCase().includes(searchText.toLowerCase())
    );  
}
const Body = () =>{
    const [searchText , setSearchText] = useState("");
    const [filterData, setFilterData] = useState(restaurantData);
    const [allResData , setAllResData] = useState([]);

    const status = useOnline();

    useEffect(()=>{
        getData();
    },[])

    async function getData(){
       let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5900053&lng=73.8900523&collection=83637&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
    let res = await data.json();
    console.log(res.data.cards);

    let arr = [];
    for (let i = 0; i < res.data.cards.length; i++) {
        if (res?.data?.cards[i]?.card?.card?.info) {
            arr.push(res.data.cards[i].card.card.info);
        }
    }

    console.log(arr, "hhahah");
    setFilterData(arr);
    setAllResData(arr)
    }
    
return (!status ? "🔴 Opppppsss Look Like you are Offline ": (
   
    <>
   
    <div className="search">
        <input type="text" placeholder="Seach" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
        <button onClick={()=>{
            let data = sortData(searchText,allResData);
            setFilterData(data)
        }
        }>Search</button>
    </div>
        <div className="data">
           
            {filterData.map((restaurant) => ( 
                <Link to={"/restaurantmenu/"+restaurant.id} key={restaurant.id}><RestaurantCart  rest={restaurant} /></Link>
            ))
            }
        </div>
       
        </>
    ));

}

export default Body

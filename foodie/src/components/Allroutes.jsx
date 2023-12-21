import {Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Restaurantmenu from "./RestaurantMenu";

const Allroutes  =() =>{
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/restaurantmenu/:id" element={<Restaurantmenu/>}></Route>
        </Routes>
        </>
    )
}

export default Allroutes;
import {Link } from "react-router-dom";

const Header =()=>{
    return(
        <div className="container">
        <img className="logo" src="https://i.pinimg.com/originals/75/d8/11/75d8113347755fd2eb070a2cc39d01ba.jpg" alt="" />
        <div className="sections">
            
                <Link to="/"><p>Home</p></Link>
                <Link to="/about"><p>About</p></Link>
                <Link to="/contact"><p>Contact</p></Link>
                <Link to="/login"><p>Login</p></Link>
         
        </div>
        </div>
    )
}

export default Header;
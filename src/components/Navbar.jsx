import React from "react";
import Logo from "../images/Logo/logo.png"



function Navbar(){
    return (
        <div className="navbar">
         <div className="navbar__img">
           <img src={Logo}/>
         </div>
         <ul className="navbar__links">
             <li>
               Home
             </li>
             <li>
               About
             </li>
             <li>
               Vehicle Models
             </li>
             <li>
               Testimonials
             </li>
             <li>
               Our Team
             </li>
             <li>
               Contact
             </li>
         </ul>
         
         <div className="navbar__buttons">
             <button className="navbar__buttons__sign-in">Sign In</button>
             <button className="navbar__buttons__register">Register</button>  
         </div>
        </div>
    )
}

export default Navbar;
import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/">Start</NavLink>
       </div>
    );
}
 
export default Navigation;
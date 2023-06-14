import React from 'react';
import { NavLink } from 'react-router-dom';
import './assets/css/style.css';
import './assets/css/responsive.css';

function Sitemap() {
    return (
        <nav>
        <ul>
            {routes.map(route => {
            return(
                <li key= {route.to}>
                    
                <NavLink 
                  style={({ isActive}) => ({
                    color: isActive ? "salmon" : "pink",
                    })}
                    to={route.to}
                    >
                    {route.text}
                </NavLink>
                </li>
                );
            })}  
        </ul> 
    </nav>          
  );
}

const routes = [];
routes.push({
    to: "/",
    text: "Classroom",
});
export {Sitemap};
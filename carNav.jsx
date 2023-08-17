import React,{Component} from "react";
import { Link } from "react-router-dom";
class CarNav extends Component{ 
       render(){
        return(
            <nav className="navbar navbar-expand-sm navbar-danger bg-danger">
                    <ul  className="navbar-nav mr-auto">
                            <li className="nav-item text-start">
                            <Link className="nav-link text-light" 
                            to={`/cars`}>
                            Home
                            </Link>
                            </li>
                            <li className="nav-item text-end">
                            <Link className="nav-link text-light"
                            to={`/addCar`}>
                            New Car 
                            </Link>
                            </li>
            </ul>
                    </nav>
        );
    
}
}
export default CarNav;
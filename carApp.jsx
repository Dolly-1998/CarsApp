import React,{Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import CarNav from "./carNav";
import Cars from "./cars";
import NewCar from "./newCar";
import DelCar from "./delCar";
class CarApp extends Component{
render(){
    return(
        <div className="container">
            
            <CarNav/>

            <Switch>
            <Route path="/cars/:id/edit" render={(props)=><NewCar {...props} />}/>   
            <Route path="/cars/:id/delete" component={DelCar}/>
            
            <Route path="/addCar" render={(props)=><NewCar {...props} />}/>   
            <Route path="/cars" render={(props)=><Cars {...props} />} />
            <Redirect from="/" to="/cars" />
            </Switch>
        </div>
    )
}
}
export default CarApp;
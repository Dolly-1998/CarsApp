import React,{Component} from "react";
import http from "./httpService";
class DelCar extends Component{
    async componentDidMount(){
        let {id}=this.props.match.params;
        let response=await http.deleteApi(`/cars/${id}`);
        console.log(response);
        this.props.history.push("/cars");    
    }
    
    render(){
    return "";
}
}
export default DelCar;
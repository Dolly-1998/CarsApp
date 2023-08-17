import React,{Component} from "react";
import http from "./httpService";
import { Link } from "react-router-dom"; 
import queryString from "query-string";
import CarOptions from "./carOptions";
import Text from "./text";
 
class Cars extends Component{
state={
    cars:[]
};
   async fetchData(){
let queryParams=queryString.parse(this.props.location.search);
let searchStr=this.makeSearchString(queryParams);
    let response=await http.get(`/cars?${searchStr}`);     
   console.log(response);
        let {data}=response;
        this.setState({cars:data});
    }
    componentDidMount() {
        this.fetchData();
        }
    
        async componentDidUpdate(prevProps,prevState){
        if (prevProps!==this.props)
        this.fetchData();
        }
        callURL=(url,options)=>{
            let searchStr=this.makeSearchString(options);
            this.props.history.push({
                pathname:url,
                search:searchStr});
            };
            
            makeSearchString=(options)=>{
                let {minprice,maxprice,fuel,type,sort}=options;
                let searchStr="";
                searchStr=this.addtoQueryString(searchStr,"minprice",minprice);
                searchStr=this.addtoQueryString(searchStr,"maxprice",maxprice);
                searchStr=this.addtoQueryString(searchStr,"fuel",fuel);
                searchStr=this.addtoQueryString(searchStr,"type",type);
                searchStr=this.addtoQueryString(searchStr,"sort",sort);
                return searchStr;
            }

             addtoQueryString=(str,paramName,paramValue)=>
            paramValue?str?`${str}&${paramName}=${paramValue}`:
            `${paramName}=${paramValue}`
            :str;

            handleOptionChange=(options)=>{
            this.callURL("/cars",options);
            }
            
    render(){
const {cars}=this.state;
let queryParams=queryString.parse(this.props.location.search);
console.log(cars);    
return(
        <div className="container">
            <div className="row">
                <div className="col-3">
             <CarOptions options={queryParams} onOptionChange={this.handleOptionChange}/>
                </div>
                <div className="col-9">

<div>
<h4 className="text-center">All Cars</h4>
<Text options={queryParams} onOptionChange={this.handleOptionChange}/>

   <div className="row">
    {cars.map((n)=>
    <div className="col-3 border bg-warning text-center">
        <h6>{n.model}</h6>
        Price:{n.price}<br/>
        Color:{n.color}<br/>
        Mileage:{n.kms}<br/>
        Manufactured in {n.year}
        <div className="row">
            <div className="col-2">
            <Link to={`/cars/${n.id}/edit`} className="text-dark">
 
            <i className="fas fa-edit" />
 </Link>
 
            </div>
            <div className="col-8">
            </div>
            <div className="col-2">
            <Link to={`/cars/${n.id}/delete`} className="text-dark">
            <i className="fas fa-trash-alt" />
        </Link>
            </div>
            </div>
    </div>
    )}
    </div>
</div>
                </div>
            </div>
        </div>
    )
}
}
export default Cars;
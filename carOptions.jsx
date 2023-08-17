import React,{Component} from "react";
class CarOptions extends Component{
    handleChange=(e)=>{
        let {currentTarget:input}=e;
        let options={...this.props.options};
        if(input.type==="radio"){
            options[input.name]=input.value;
            }
            
        this.props.onOptionChange(options,this.props.location);
    }
    
makeRadios=(arr,selVal,name,label)=>{
    return(
        <React.Fragment>
 <label className="form-check-label font-weight-bold"><h6>
  {label}</h6></label><br/>
 {arr.map((n)=>
 
 <div className="form-check">
 <div>
    <input className="form-check-input" type="radio"
    name={name} value={n}
    checked={selVal===n} 
    onChange={this.handleChange}/>
    <label className="form-check-label">{n}</label>
</div>

</div>
    )}        </React.Fragment>
    )} 

    render(){
    let {fuel='',type='',sort=""}=this.props.options;
    let fuels=["Diesel","Petrol"];
    let types=["Hatchback","Sedan"];
    let sorting=["kms","price","year"];  
      return(
 
 <div className="container">
       
<div className="row border bg-light">
    <div className="col-12">
         {this.makeRadios(fuels,fuel,"fuel","Fuel")}
    </div>
    <div className="col-12">
    {this.makeRadios(types,type,"type","Type")}
    </div>
    <div className="col-12">
    {this.makeRadios(sorting,sort,"sort","Sort")}
    </div>
</div>
        </div>
    )
}
}
export default CarOptions;
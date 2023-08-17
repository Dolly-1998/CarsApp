import React,{Component} from "react";
class Text extends Component{
    handleChange=(e)=>{
        let {currentTarget:input}=e;
        let options={...this.props.options};
            options[input.name]=input.value;
        this.props.onOptionChange(options,this.props.location);
    }
    

render(){
let {minprice="",maxprice=""}=this.props.options;
    return(
        <div className="container">
            <div className="row">
                <div className="col-3">
                    Price Range:</div>
                <div className="col-4"> <input type="text" className="form-control" name="minprice" id="minprice" placeholder="Minimun Price" value={minprice}
    onChange={this.handleChange}/></div>
                <div className="col-4">
                <input type="text" className="form-control" name="maxprice" id="maxprice" placeholder="Maximum Price" value={maxprice}
    onChange={this.handleChange}/><br/>
                
    
</div>
            </div>
        </div>
    )
}
} 
export default Text;
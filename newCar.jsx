import React,{Component} from "react";
import http from "./httpService";
class NewCar extends Component{
    state={
        car:{id:"",price:"",kms:"",model:"",color:"",year:""},carmaster:[]
        ,edit:false
        };
        async componentDidMount(){
            this.fetchData();
            this.fetchData2();
        }
        async componentDidUpdate(prevProps,prevState){
    if(prevProps!==this.props)
    this.fetchData();
    this.fetchData2();
        
    }

        async fetchData2(){
            let response=await http.get(`/carmaster`);
            let {data}=response;
            this.setState({carmaster:data});
              
        }
    
        async fetchData(){
      let {id}=this.props.match.params;
      console.log(id);
      if(id){
        let response=await http.get(`/cars/${id}`);
        let {data}=response;
        console.log("edit");
        this.setState({car:data,edit:true});
      }
      else{
        
        let car={id:"",price:"",kms:"",model:"",color:"",year:""};
        this.setState({car:car,edit:false});
      }
        }
    
        handleChange=(e)=>{
    const {currentTarget:input}=e;
    let s1={...this.state};
    s1.car[input.name]=input.value;
    this.setState(s1);
        }
            
       async postData(url,obj){
    let response=await http.post(url,obj);
    console.log(response);
    this.props.history.push("/cars"); 
    }

    async putData(url,obj){
        let response=await http.put(url,obj);
        console.log(response);
        this.props.history.push("/cars"); 
        }
       
        handleSubmit=(e)=>{
            e.preventDefault();
            let {car,edit}=this.state;
            edit?this.putData(`/cars/${car.id}`,car):this.postData("/cars",car);
        }
    render(){
        let {id,year,kms,color,model,price}=this.state.car;
    let {carmaster}=this.state;
    let models=carmaster.reduce((acc,curr)=>{
        if(acc.includes(curr.model)){}
        else{
            acc.push(curr.model);
        }
        return acc;
    },[]);
    let colors=carmaster.reduce((acc,curr)=>{
        curr.colors.map(color => {
        if (!acc.includes(color)) {
          acc.push(color);
        }
      });
       return acc;
    },[]);
   
    return(
        <div className="container">
        <h4 className="text-center">New Car</h4>
        <div className="form-group">
    <label> Car Id</label>
    <input type="text" className="form-control" name="id" id="id" placeholder="Enter id" value={id}
    onChange={this.handleChange}/>
</div>
<div className="form-group">
    <label>Price</label>
    <input type="text" className="form-control" name="price" id="price" placeholder="Enter price" value={price}
    onChange={this.handleChange}/>
</div>
<div className="form-group">
    <label>Mileage in kms</label>
    <input type="text" className="form-control" name="kms" id="kms" placeholder="Enter mileage" value={kms}
    onChange={this.handleChange}/>
</div>
<div className="form-group">
    <label>Year of Manufacture</label>
    <input type="text" className="form-control" name="year" id="year" placeholder="Enter year" value={year}
    onChange={this.handleChange}/>
</div>
<div className="row">
    <div className="col">
    <label>Model</label>
    <div className="form-group">
        <select className="form-control" name="model" value={model} onChange={this.handleChange}>
            <option value="">Select Model</option>
            {models.map(pr=>
                <option>{pr}</option>
            )}
        </select>
    </div>
    
    </div>
    <div className="col">
    <label>Color</label>
    <div className="form-group">
        <select className="form-control" name="color" value={color} onChange={this.handleChange}>
            <option value="">Select Color</option>
            {colors.map(pr=>
                <option>{pr}</option>
            )}
        </select>
    </div>
    </div>
</div>
<div className="text-center">
    
<button className="btn btn-primary btn-sm m-2" onClick={this.handleSubmit}>Submit</button>
        
</div>

        </div>
    )
}
}
export default NewCar;
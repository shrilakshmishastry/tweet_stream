import React,{Component,props} from 'react';


class Search extends React.Component{

  constructor(props){
    super(props);
    this.state={
      data:this.props.location.state.data
    };
    this.display=this.display.bind(this);
    }
  display(){
    let numbers=this.state.data;
    console.log("hello world");
    console.log(numbers);
    return(
      <li>
        {
          numbers.map((number)=>
            <h3 key={number.toString()}>
            {number}
            </h3>
          )
        }
      </li>
    );
  }

  render(){
    return (
      <div >
        {this.display()}
      </div>
    );
  }
}
export default Search

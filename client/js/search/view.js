import React,{Component,props} from 'react';
import {Link} from 'react-router-dom';
import {Card,CardBody,Container,CardLink} from 'reactstrap';
import axios from 'axios';
class Search extends React.Component{

  constructor(props){
    super(props);
    this.state={
        urls:this.props.location.state.url,
      data:this.props.location.state.data
    };
    this.display=this.display.bind(this);

    }
  display(){
    let numbers=this.state.data;
        console.log(numbers);
        return(
      <li>
        {
          numbers.map((number)=>
            <div key={number.toString()}>
            <Container className='bg-primary'>
            <Card >

            <img src='https://images.pexels.com/photos/87840/daisy-pollen-flower-nature-87840.jpeg?cs=srgb&dl=plant-flower-macro-87840.jpg&fm=jpg' height='100px' width='100px'/>
            <CardBody>

              {number}

            </CardBody>
            </Card>
            </Container>
            </div>
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

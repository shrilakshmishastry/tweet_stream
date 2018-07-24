import React,{Component,props} from 'react';
import {Link} from 'react-router-dom';
import {Card,CardBody,Container,CardLink,CardText} from 'reactstrap';
import axios from 'axios';
class Search extends React.Component{

  constructor(props){
    super(props);
    this.state={

      data:this.props.location.state.tweet,
      name:this.props.location.state.name,
      urls:this.props.location.state.urls

    };
    this.display=this.display.bind(this);

    }
  display(){
      console.log( this.state.data.data);
      let y=this.state.data.data;

      let number=[]
      let created_at=[]
      for(let x in y){
        number.push(x)
        created_at.push(this.state.data.data[x])
      }

        return(
          <li>
       {
         number.map((number)=>
           <div key={number.toString()}>
           <Container className='bg-primary'>
           <Card >
           <img src={this.state.urls} height='100px' width='100px'/>
             {this.state.name}
           <CardBody>
           <CardText>
            created_at:{this.state.data.data[number]}
            </CardText>
             <CardLink href='#'>{number}</CardLink>

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

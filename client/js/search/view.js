import React,{Component,props} from 'react';
import {Link} from 'react-router-dom';
import {Card,CardBody,Container,CardLink,CardText,CardImg,Row} from 'reactstrap';
import axios from 'axios';
class Search extends React.Component{

  constructor(props){
    super(props);
    this.state={
      tweet:this.props.location.state.tweet,
      retweet_count:this.props.location.state.retweet_count,
      favorite_count:this.props.location.favorite_count,
      name:this.props.location.state.name,
      source_urls:this.props.location.state.source_urls,
      img_url:this.props.location.state.img_url

    };
    this.display=this.display.bind(this);

    }
  display(){
    console.log('hello world');
      console.log(typeof this.state.tweet);
      let y=this.state.tweet;
      let number=[]
      for (let x in y){
        console.log(x);
        number.push(x);
      }
      console.log(number);
      console.log(this.state.tweet);
      return(
          number.map((number,i)=>
          <ul key={number.toString()}>
          <li >
          <Card>
            <CardBody>
          <Row className='d-inline-flex flex-row'>
          <CardImg style={{height:'50px',width:'50px'}} src={this.state.img_url[i]} alt='helo world'/>
            {this.state.name[i]}
            </Row>

              {number}

            </CardBody>
          </Card>
          </li>
          </ul>
        )
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

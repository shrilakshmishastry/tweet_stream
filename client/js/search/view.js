import React,{Component,props} from 'react';
import {Link} from 'react-router-dom';
import {Card,Col,CardBody,CardLink,CardText,CardImg,Row,Container,Button} from 'reactstrap';
import styled from 'styled-components';
import axios from 'axios';
const Div=styled.div
`
  @media (min-width:1024px){

    margin-left:150px;
    margin-right:150px;
  }
`;
class Search extends React.Component{

  constructor(props){
    super(props);
    this.state={
      tweet:this.props.location.state.tweet,
      retweet_count:this.props.location.state.retweet_count,
      favorite_count:this.props.location.state.favorite_count,
      name:this.props.location.state.name,
      source_urls:this.props.location.state.source_urls,
      img_url:this.props.location.state.img_url

    };
    this.display=this.display.bind(this);
    this.back=this.back.bind(this);
    }
  display(){
      let y=this.state.tweet;
      let number=[]
      for (let x in y){
      number.push(x);
      }

      return(
          number.map((number,i)=>

          <ul style={{listStyleType:'none'}} key={number.toString()} className='pl-0'>
          <li >
            <Container>
            <Card>
              <CardBody >
            <Row className='d-inline-flex flex-row'>

            <CardImg style={{height:'50px',width:'50px'}} src={this.state.img_url[i]} alt='helo world' className='mr-3 rounded-circle'/>
            <Col>
              <h5 className="font-weight-bold">{this.state.name[i]}</h5>
              <h6 className=' pt-2'>{this.state.tweet[number] }</h6>
              </Col>
              </Row>
              <CardText className='ml-2 '>
                {number}
              </CardText>
              <i className='fa fa-retweet  ml-5 '>{this.state.retweet_count[i]}</i>
              <i className='fa fa-heart  ml-5'>{this.state.favorite_count[i]}</i>
              </CardBody>
            </Card>
            </Container>
          </li>
          </ul>
        )

      );



  }
  back(){

    this.props.history.push({
      pathname:'/'
    })


}
componentWillUnmount(){
  delete this.state.tweet;
  delete this.state.name;
  delete this.state.favorite_count;
  delete this.state.retweet_count;
  delete this.state.img_url;
}

  render(){
    return (
      <Div >

      {this.display()}
    
      <Button outline color='primary' onClick={this.back}>back</Button>
      </Div>
    );
  }
}
export default Search

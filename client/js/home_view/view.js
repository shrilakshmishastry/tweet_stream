import React,{Component,props} from 'react';
import WebFont from 'webfontloader';
import {Container,Row,Col,Jumbotron,Form,FormGroup,Input} from 'reactstrap';
import styled from 'styled-components';
import axios from 'axios';
import push from 'react-router-redux';
require('/home/shri/tweet_stream/client/images/maxresdefault.jpg');


const Div = styled.div
`
  font-family: 'Fredoka One', cursive;,
  height:700px;
`;



WebFont.load({
  google: {
    families: ['Gloria Hallelujah', 'cursive']
  }
});

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state={value:'',
    data:'',
    urls:'',
    name:'',
    favorite_count:'',
    retweet_count:''
  };
    this.handleInput=this.handleInput.bind(this);
    this.handleDisplay=this.handleDisplay.bind(this);

  }
  handleInput(event){
    this.setState({value:event.target.value});

  }


  handleDisplay(event){
      event.preventDefault();
      let keyword=this.state.value;
      console.log(this.state.value);
      var text;
      axios.post('/search',{
      keyword
      })
      .then( response=>{
        console.log(response.data);
        var f=response.data.favorite_count;
        var r=response.data.retweets;
        var t=response.data.t;
        var s=response.data.source_url;
        var n=response.data.screen_name;
        this.setState({
          data:t,
          favorite_count:f,
          retweet_count:r,
          name:n,
          urls:s
        });
        console.log(this.state.data);
      })

        }


    render(){
      return(
        <Div>
            <Jumbotron style={{backgroundImage:'url('+'/home/shri/tweet_stream/client/dist/maxresdefault.jpg'+')',height:'700px'}}>
              <Container>
              <Row className="mt-5" >
            </Row>
            <Row className="mt-5" >
            </Row>
            <div className="  mt-5  h1  text-center" style={{color:'orange'}} >TWEETSTREAM
            </div>
              <Row>
              <Col md={{size:8,offset:2}}>
              <Form onSubmit={this.handleDisplay}>
                <FormGroup >
                  <Input outline={{color:'secondary'}} type="text" placeholder="search " value={this.state.value} className="text-center pb-2 pt-2"  onChange={this.handleInput} required="true" >
                  </Input>
                </FormGroup>
              </Form>
              </Col>
              </Row>
              </Container>
            </Jumbotron>
        </Div>
      );
    }
}
export default Home

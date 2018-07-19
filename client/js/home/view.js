import React,{Component,props} from 'react';
import WebFont from 'webfontloader';
import {Container,Row,Col,Jumbotron,Form,FormGroup,Input} from 'reactstrap';
import styled from 'styled-components';
import axios from 'axios';
import push from 'react-router-redux';

const Div = styled.div
`
  font-family: 'Fredoka One', cursive;
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
    data:''};
    this.handleInput=this.handleInput.bind(this);
    this.handleDisplay=this.handleDisplay.bind(this);

  }
  handleInput(event){
    this.setState({value:event.target.value});

  }


  handleDisplay(event){
      event.preventDefault();
      console.log(this.state.value);
      const name=this.state.value
      axios.post('/search',{
        "name":name
            })
      .then(response=>{
      let text=response.data;
      console.log(typeof text)
      let a = [];
      for(let x in text){
       a.push(x);

        console.log(x)

      }
       console.log(a);
      this.setState({data:text});
          console.log(this.state.data);
      this.props.history.push({
          pathname:'/search',
          state:{
              data:a
          }
      });
    })
    console.log(this.state.data);

  }

    render(){
      return(
        <div>
          <Jumbotron className="bg-white mt-md-5">
            <Container className="">
            <Row className="  mt-5" >
            </Row>
            <Row className="  mt-5" >
            </Row>
            <Div className="  mt-5  h1  text-center text-success" >Tweet_stream
            </Div>
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
        </div>
      );
    }
}
export default Home

import React,{Component} from 'react';
import WebFont from 'webfontloader';
import {Container,Row,Col,Jumbotron,Form,FormGroup,Input} from 'reactstrap';
import styled from 'styled-components'

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
              <Form >
                <FormGroup >
                  <Input outline={{color:'secondary'}} type="text" placeholder="search " className="text-center pb-3 pt-3"  required="true" >
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

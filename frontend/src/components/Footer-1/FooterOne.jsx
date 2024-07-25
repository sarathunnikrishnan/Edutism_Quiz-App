import React from 'react'
import './FooterOne.css'
import { Nav} from "react-bootstrap";
import { FooterData } from './FooterData'
import { Container } from 'react-bootstrap'
import { Link } from "react-router-dom";

const FooterOne = () => {
  const data = FooterData
  return (
    <div className='footer-one'>
        <h1>Tests You Might Enjoy</h1>
       <Container>
        <div className='col-12 col-md-3 footer-card d-inline-block '>
          <img alt='kids' src={require('./Images/kids.jpg')}></img>
          <h3>{data[0].head}</h3>
          <p>{data[0].content}</p>
          <Nav.Link className='footerCard-link' as={Link} to="kidsiqtest">{data[0].btn}</Nav.Link>
        </div>
        <div className='col-12 col-md-3 footer-card d-inline-block'>
          <img alt='kids' src={require('./Images/kids.jpg')}></img>
          <h3>{data[1].head}</h3>
          <p>{data[1].content}</p>
          <Nav.Link className='footerCard-link' as={Link} to="freeiqtest">{data[1].btn}</Nav.Link>
        </div>
        <div className='col-12 col-md-3 footer-card d-inline-block'>
          <img alt='kids' src={require('./Images/kids.jpg')}></img>
          <h3>{data[2].head}</h3>
          <p>{data[2].content}</p>
          <Nav.Link className='footerCard-link' as={Link} to="personalitytest">{data[2].btn}</Nav.Link>
        </div>
       </Container>
    </div>
  )
}

export default FooterOne

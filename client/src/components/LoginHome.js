import Footer from "./footer"
import '../css/header.css';
import Icon from '../images/Icon.png';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Cards from './cards';
import { Link } from 'react-router-dom';
import ProfileDrop from "./modals/ProfileDd";
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

// Pages
import LoginDetailTour from "./LoginDetailTour";

// Icons
import Percent from '../images/Icon/Percent.png';
import Outline from '../images/Icon/Outline.png';
import PersonA from '../images/Icon/PersonA.png';
import PersonB from '../images/Icon/PersonB.png';
import Hibiscus from "../images/hibiscus.png";
import Palm from "../images/palm.png";

import { useQuery } from 'react-query';
import { API } from '../config/api';

const LoginNav = ({isLogin}) => {
  return (
    <nav>
      <div className="left-side">
        <ul>
          <li><Link to='/home' element={LoginHome}><img src={Icon} alt="Icon" /></Link></li>
        </ul>
      </div>

      <div className="right-side">
        <ProfileDrop isLogin={isLogin}/>
      </div>
    </nav>
  )
}

const LoginHome = ({ isLogin }) => {




  return (
    <div className="main">
          <div>
            <header className="header">
                <div className="search">

                <img style={{
                  position: "absolute",
                  top: "450px",
                  left: "1230px"
                }} src={Hibiscus} alt="hibiscus" />

                {/* <img style={{
                  position: "absolute",
                  top: "1625px",
                  left: "1225px"
                }} src={Vector} alt="vector" /> */}

                <img style={{
                  position: "absolute",
                  top: "800px",
                  right: "1230px"
                }} src={Palm} alt="palm" />

                  <LoginNav isLogin={isLogin}/>

                  <div className="welcome-text">
                    <p>Explore</p>
                    <p>Your amazing city together</p>
                  </div>
                  <div className="search-input">
                    <p>Find great place to holiday</p>
                      <InputGroup className="mb-3">
                        <Form.Control
                          aria-label="Recipient's username"
                          aria-describedby="basic-addon2"
                          placeholder="Search something here BRUV artinya CUACA HARI INI CERAH YA :D"
                          onChange={e => 
                            {setTerm(e.target.value)}}
                        />
                      </InputGroup>
                  </div>

                  <div className="card-group">
                    <Cards icon={Percent} title="Best Price Guarantee"/>
                    <Cards icon={Outline} title="Travellers Love Us"/>
                    <Cards icon={PersonB} title="Best Travel Agent"/>
                    <Cards icon={PersonA} title="Our Dedicated Support"/>
                  </div>

                </div>
            </header>
    </div>
      <div>
        <div className='container'>
          <div className='content'>
            <h1>Group Tour</h1>
          </div>
          <div className='tour-card-cont'>
            
      {
        cards?.map((tour) => (
          <Card style={{ width: '330px', padding: '10px', height: '330px', margin: '20px' }} className="card-wrapper">
            <div className="quantity">
              {tour?.qtyCounter}/{tour?.quota}
            </div>
            <Card.Img className="card-image" variant="top" src={tour?.image} />
            <div className='m-0 p-0'>
              <p style={{margin: '10px 0'}}><Link to={`/l-trip/${tour?.id}`} element={<LoginDetailTour />}>{tour?.title}</Link></p>
              <ul>
                <li>IDR. {tour?.price.toLocaleString()}</li>
                <li>{tour?.country.name}</li>
              </ul>
            </div>
          </Card>
        ))
      }

          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default LoginHome;
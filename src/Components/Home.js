import React from 'react';
import { motion } from 'framer-motion';
import { Col, Row, Container } from 'react-bootstrap';

import Header from './Header';
import sample from '../Assets/BG_Vid.mp4';

const Home = () => {

    return (
        <Container fluid className="home_container">
            <Header />
           <Row style={{ marginTop: "10vh" }}>
                <Col lg={{ span: 3, offset: 1 }}>
                    <h1 className="subHead" >Home</h1>
                </Col>
            </Row>
           <Row style={{ marginTop: "2vh" }}>
               <Col lg={{ span: 2, offset: 1 }}>
                    <h4 className="body">
                        The Official Iraq Crimeline is an interactive online timeline that analyzes one of the worst 21st Century geo-political disasters. 
                    </h4>
               </Col>
               <Col lg={2}>
                    <h4 className="body">
                        It outlines fringe worthy events that have either been under reported or long forgotten, this timeline is created as a nostalgic refresher for ones familiar with the details of the wars in Iraq and acts as a educational tool for people who want to know more details.                     
                    </h4>
               </Col>
               <Col lg={2}> 
                    <h1 className="subHead">1990–2011</h1>
               </Col>
           </Row>
        </Container>
    )
}

export default Home
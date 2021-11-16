import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'

import Header from './Header'

const Sources = () => {
    return (
        <Container fluid className="home_container">
            <Header />
            <Row style={{ marginTop: "10vh" }}>
                <Col lg={{ span: 3, offset: 1 }}>
                    <h1 className="subHead" >Sources</h1>
                </Col>
            </Row>
            <Row style={{ marginTop: "2vh" }}>
               <Col lg={{ span: 4, offset: 1 }}>
                    <h4 className="body">
                    Design and Development by Gideon Chrapko with reporting interpreted from Brendan James and Noah Kulwin’s Blowback Season 1. Project was completed at the AUART’s University in Calgary, Canada under instructor Jackie Bagely                      </h4>
               </Col>
               <Col lg={2}> 
                    <h1 className="subHead">1990–2011</h1>
               </Col>
           </Row>
        </Container>
    )
}

export default Sources
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

import Outline from '../Assets/Iraq_Outline.svg'

const Header = () => {
    const history = useHistory();

    return (
        <Container fluid>
            <Row style={{ marginTop: "15vh" }}>
                <Col lg={{ span: 5, offset: 1 }}>
                    <h1 className="headline">The Iraq Crimeline</h1>
                    <img 
                        src={Outline} 
                        alt="Outline of Iraq"
                        className="img_header"
                    />
                </Col>
                <Col lg={{ span: 3, offset: 2}}>
                    <h1 onClick={() => history.push('/Crimeline')} style={{ cursor: "pointer" }}> Enter </h1>
                </Col>
           </Row>
        </Container>
    )
}

export default Header
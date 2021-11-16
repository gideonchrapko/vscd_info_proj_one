import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Col, Row } from 'react-bootstrap'

import './navbar.css'

import Logo from '../../Assets/Logo_Crimeline.svg'

const NavBar = () => {
    return (
        <Container fluid className="nav_master_container">
            <Row>
                <Col lg={1}>
                    <Link to="/">
                        <img 
                            src={Logo} 
                            alt="Home"
                            className="logo_nav"
                        />
                    </Link>
                </Col>
                <Col lg={7}>
                    <ul className="nav-container">
                        <li><Link className="nav_text" to="/Recommendations">Recommendations</Link></li>
                        <li><Link className="nav_text" to="/Credits">Credits</Link></li>
                        <li><Link className="nav_text" to="/Donations">Donations</Link></li>
                        <li><Link className="nav_text" to="Sources">Sources</Link></li>
                    </ul>
                </Col>
                <Col lg={{ span: 1, offset: 3}}>
                    <ul className="nav-container">
                        <li><Link className="nav_text" >En</Link></li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default NavBar
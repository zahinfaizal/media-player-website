import React from 'react'
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Navbar className="bg-success">
            <Container>
                <Navbar.Brand>
                    <Link
                        to={"/"} className="fs-4"
                        style={{ textDecoration: "none", color: "white" }}>
                        <i className="fa-solid fa-cloud-arrow-up fa-bounce"></i>
                        MOPLAYER
                    </Link>
                </Navbar.Brand>
            </Container>
        </Navbar>

    );
}
<div>Header</div>


export default Header
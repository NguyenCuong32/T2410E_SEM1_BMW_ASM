import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import '../style/header.css';
import '../style/footer.css'
function Footer_js() {
    return (
        <Navbar className='bg-dark text-center footer' expand='lg'>
            <Container className='d-flex flex-column align-items-center'>
                <NavLink className='navbar-brand'>
                    <img src='JSON.png' width='50' height='50' className='d-inline-block align-top' alt='JShop logo' />{' '}
                    <span className='text-light' style={{ fontSize: '2rem' }}>JShop.com</span>
                </NavLink>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-5 col-5'>
                        <div className='d-flex justify-content-start w-100'>
                        <p className='text-light m-1' style={{ fontSize: '1rem' }}>© 2025 Copyright: JShop.com</p>
                        </div>
                    </Nav>
                    <Nav className='ms-5 col-9'>
                        <div className='d-flex justify-content-end '>
                        <p style={{ fontSize: '1rem' }} className='text-light m-1'>Address: F3 Hotel Debord, Quartier Narbonnais, Court of Fontaine, Fontaine Republic, Teyvat</p>
                        </div>
                    </Nav>
                </Navbar.Collapse>
             </Container>
        </Navbar>
    );
}
export default Footer_js;
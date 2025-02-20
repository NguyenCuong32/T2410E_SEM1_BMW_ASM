import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import '../style/header.css'
function Header_js()
{
    return(
        <Navbar className='bg-secondary' exapnd='lg'>
            <Container>
                <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
                <NavLink to='/homepage' className='navbar-brand'>
                    <img src='JSON.png' width='30' height='30' className='d-inline-block align-top' />{' '}
                    JShop.com
                </NavLink>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <NavLink to='/productpage' className='m-2 nav-link'>Sản phẩm</NavLink>
                        <NavLink to='/retailerpage' className='m-2 nav-link'>Liên hệ đại lý</NavLink>   
                        <NavLink to='/aboutuspage' className='m-2 nav-link'>Về chúng tôi</NavLink>
                    </Nav>
                    <Nav className='ms-auto'>
                        <NavLink to='/placeholder' className='m-2 emailtext'>Contact Us: jshop@enterprise.com</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default Header_js;
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'bootstrap';
import './navbar.css'
import { Link, useNavigate } from 'react-router-dom';

const Navbars = () => {
  const navigate = useNavigate();

    return (
        <>

<Navbar className="bg-body-tertiary ">
   <Container >
      <Navbar.Brand href="#home">
            <img
              src="https://www.hrforecast.de/wp-content/uploads/2019/03/HRF_Logo_Wordpress.png"
              width="150"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="lists">
            Home
          </Navbar.Text>
          <Navbar.Text className="lists">
            About Us
          </Navbar.Text>
          <Navbar.Text className="lists">
            Services
          </Navbar.Text>
          <Navbar.Text className="lists">
            Contact us
          </Navbar.Text>
<button className="buttons" onClick={navigate('/login')}>login</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>


        </>
    )
};

export default Navbars;
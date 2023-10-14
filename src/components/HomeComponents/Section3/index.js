import './section3.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img2 from '../../../assets/img2.webp';

const Section3 = () => {

    return (
        <>
         <div className="parents">
      <Row >
        <Col className="suheads"><h1 className="Headss">Manage your <br/> Employees</h1>
        <p>Manage your employees and their details like a <br/> rofessionals. Add new employee and fill in the details 
        <br/>along with current job details
        </p>
        </Col>
        <Col><img src={img2} className="imgss" alt="img" /></Col>
      </Row>

    </div>


        </>
    )
};

export default Section3;
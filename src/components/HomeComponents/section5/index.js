import './section5.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img4 from '../../../assets/img4.webp';

const Section5 = () => {

    return (
        <>
         <div className="parentst">
      <Row >
        <Col className="suheadst"><h1 className="Headst">Provide Employee <br/> Retention Strategies</h1>
        <p>Get to know why employee is likely to leave and how can  you keep <br/>the employee for a long period of time
        </p>
        </Col>
        <Col><img src={img4} className="imgst" alt="img" /></Col>
      </Row>

    </div>


        </>
    )
};

export default Section5;
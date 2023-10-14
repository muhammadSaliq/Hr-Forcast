import './section2.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from '../../../assets/img1.webp';

const Section2 = () => {

    return (
        <>
         <div className="parent">
      <Row >
        <Col className="suhead"><h1 className="Heads">Easy-to-use <br/> Hr Software</h1>
        <p>No steep learning curves or bloated interfaces. HrForcast <br/> platform is simple yet powerful, 
         accessible and relevant <br/> to all HR rofessionals.</p>
        </Col>
        <Col><img src={img1} className="imgs" alt="img" /></Col>
      </Row>

    </div>


        </>
    )
};

export default Section2;
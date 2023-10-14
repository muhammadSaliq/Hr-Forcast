import './section4.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img3 from '../../../assets/img3.webp';

const Section4 = () => {

    return (
        <>
         <div className="parentsss">
      <Row >
        <Col className="suheadsss"><h1 className="Headsss">AI-Powered  <br/> Employee Attrition</h1>
        <p>HrForast AI Engine simplifies the whole employee management <br/> process by predicting the 
             candidates likely to leave in near future.</p>
        </Col>
        <Col><img src={img3} className="imgssss" alt="img" /></Col>
      </Row>

    </div>


        </>
    )
};

export default Section4;
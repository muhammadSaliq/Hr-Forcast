import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'bootstrap';
import './subimage.css'
import Navbars from "../../components/navbar";

const Subimage = () => {

    return (
        <>
        <div className='images'>
        <Navbars/>
            <div className='subdiv'>
                <h1 className="texts">Your complete HR <br/> Management System</h1>
                <h6 className='subtext'>Automate and simplify HR processes. Fast. <br/> Accurate. Simple to use.</h6>
                <button className='buttonss'>Get Your Free Demo</button>
            </div>
        </div>

        </>
    )
};

export default Subimage;
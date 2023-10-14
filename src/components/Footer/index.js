import './footer.css';
import fb from '../../assets/fb.png';
import twitter from '../../assets/twitter.png';
import linkedin from '../../assets/linkedin.png';
import insta from '../../assets/insta.png';
import Test from '../../assets/test';
const Footer = () => {

    return(
<div className = "footer">
            <div className = "sb__footer section__padding">
            <div className = "sb_footer-links">
                <div className="sb__footer-links_div">
                <h4>Company</h4>
                    <a href = "./home">
                        <p>Home</p>
                    </a>
                    <a href = "./aboutus">
                        <p>About us</p>
                    </a>
                    <a href = "./services">
                        <p>Services</p>
                    </a>
                    <a href = "./contact">
                        <p>Contact us</p>
                    </a>
                </div>
                <div className="sb__footer-links_div">
                    <h4>Coming Soon on</h4>
                    <div className="socialmedia">
                        <p><img src={fb} alt=""/></p>
                        <p><img src={twitter} alt=""/></p>
                        <p><img src={linkedin} alt=""/></p>
                        <p><img src={insta} alt=""/></p>
                    </div>
                </div>

            </div>

            <hr></hr>

            <div className="sb__footer-below">
                <div className="sb__footer-copyright">
                    <p>
                        @{new Date().getFullYear()} HR Forecast Pro. All right reserved
                    </p>
                </div>
                <div className="sb__footer-below-links">
                    <a href="/terms"><div><p> Terms and Conditions‎ ‎ ‎ ‎‎ ‎‎ ‎ ‎ ‎‎ ‎ </p></div></a>
                    <a href="/privacy"><div><p>Privacy‎ ‎ ‎ ‎‎ ‎‎ ‎ ‎ ‎‎ ‎ </p></div></a>
                    <a href="/security"><div><p>Security‎ ‎ ‎ ‎‎ ‎‎ ‎ ‎ ‎‎ ‎ </p></div></a>
                    <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
                </div>
            </div>


            </div>
            

        </div>


    )
}
export default Footer;
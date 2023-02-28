import { Email, Phone,} from '@mui/icons-material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './footer.css';
import {FaFacebookF, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa';

export default function Footer() {
  return (
    <div className='footer'>
        <div className="footerContainer">
            <div className="leftFooterContainer">
                <img src="assets/logo.png" alt="" />
                <p>
                We are an <span> Education and Innovation Incubator</span>that recognize, groom and nurture high-potential candidates of 
                African descent with a desire to pursue a post-graduation career 
                working around Sustainable Tech-oriented or Tech-anchored Innovation 
                as a Pioneer <span> (Founder/ CEO)</span> or Contributor 
                <span> (Employee/ Co-Founder)</span> as part of our long-term mission to 
                groom Leaders who aid the development of the African Continent.
                </p>
            </div>
            <div className="rightFooterContainer">
                <h2>Contact Information</h2>
                <div className="contactInfo">
                    <LocationOnIcon className='icon'/>
                    <label><span className='span'> US HQ : </span> Assigned Filling No: 70449658, The Green, 
                        Ste A, Dover, DE 19901.</label>
                </div>
                <div className="contactInfo">
                    <LocationOnIcon className='icon'/>
                    <label><span className='span'> US HQ : </span> 111/114, Oshodi Apapa Expressway, 
                    Off International Airport Road, Lagos State, Nigeria.</label>
                </div>
                <div className="contactInfo">
                    <Phone className='icon'/>
                    <label>+234 8116526872</label>
                </div>
                <div className="contactInfo">
                    <Phone className='icon'/>
                    <label>+234 8103086494</label>
                </div>
                <div className="contactInfo">
                    <Phone className='icon'/>
                    <label>+234 9072024401</label>
                </div>
                <div className="contactInfo">
                    <Email className='icon'/>
                    <label>proconnectpay@gmail.com</label>
                </div>
            </div>
        </div>
        <div className="socialMedialContainer">
            <div className="leftSocialMedialContainer">
                <label>Copyright@ 2023, Ometere Oghene-Godwin. All  Right Reserved.</label>
            </div>
            <div className="rightSocialMedialContainer">
                <div className="socialMedia">
                    <a href=""><FaFacebookF className='mediaIcon facebook'/></a>
                    <a href=""><FaLinkedin className='mediaIcon linkedIn'/></a>
                    <a href=""><FaTwitter className='mediaIcon twitter'/></a>
                    <a href=""><FaInstagram className='mediaIcon instagram'/></a>
                </div>
        </div>
        
            </div>
    </div>
  )
}

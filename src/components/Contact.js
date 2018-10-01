import React from "react";
import {Link} from 'react-router-dom';
import Icons from "./Icons";

class Contact extends React.Component {
  handleContactPage = () => {

  }
  render() {
    return (
      <div className="contact" id="contact">
        <div className="contact__box" >
        <div className="contact__box-inner">
            <h3 className="contact__title">Contact Me!</h3>
            <p className="contact__body">If you have any questions or discussion topics, you can send me an email. I'd be happy to talk.</p>
            <Link className="contact__link portfolio__box-link" to="/contact">Email Me Here!</Link>
            <div className='contact-icons'>
            <Icons />
            </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Contact;

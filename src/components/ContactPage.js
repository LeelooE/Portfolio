import React from "react";

const ContactPage = () => (
  <div className="form-layout">
  <div className="outer-form-box">
    <form
      className="contact-form-box"
      action="https://formspree.io/leeloonita@gmail.com"
      method="POST"
    >
      <h1 className="contact-form-box__title">Contact Me</h1>
      <div className="contact-form-box__item">
        <h3>Message:</h3>
        <input placeholder="Enter your message here" type="text" name="name" />
      </div>
      <div className="contact-form-box__item">
        <h3>Email:</h3>
        <input
          placeholder="Enter your email here"
          type="email"
          name="_replyto"
        />
      </div>
      <input type="submit" value="Send" className="portfolio__box-link"/>
    </form>
    </div>
  </div>
);

export default ContactPage;

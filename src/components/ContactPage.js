import React from "react";

const ContactPage = () => (
  <div className="form-layout">
    <div className="outer-form-box">
      <div className="contact-form-box__title">
        <div className="contact-line" />
        <h1>Contact Me</h1>
        <div className="contact-line" />
      </div>
      <form
        className="contact-form-box"
        action="https://formspree.io/leeloonita@gmail.com"
        method="POST"
      >
        <div className="contact-form-box__item">
          <h2>Message:</h2>
          <input
            placeholder="Enter your message here"
            type="text"
            name="name"
          />
        </div>
        <div className="contact-form-box__item">
          <h2>Email:</h2>
          <input
            placeholder="Enter your email here"
            type="email"
            name="_replyto"
          />
        </div>
        <input type="submit" value="Send" className="portfolio__box-link" />
      </form>
    </div>
  </div>
);

export default ContactPage;

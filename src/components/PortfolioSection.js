import React from "react";

const PortfolioSection = () => (
  <div id="portfolio" className="portfolio">
    <div>
      <h1 className="portfolio__title">Portfolio</h1>
    </div>
    <div className="portfolio__layout">
      <div className="portfolio__box hover-effect-container link-overlay">
        <div className="hover-effect-wax">
          <h1 className="portfolio__box-title">Expensify</h1>
          <h3 className="portfolio__box-body">
            An app that tracks your expenses. Created while learning React.
          </h3>
          <a
            className="portfolio__box-link"
            href="https://expense-react-course-app.herokuapp.com/"
          >
            Visit Website
          </a>
        </div>
        <span className="hover-effect-wane">&nbsp;</span>
      </div>
      <div className="portfolio__box hover-effect-container link-overlay">
        <div className="hover-effect-wax">
          <h1 className="portfolio__box-title">Indecision</h1>
          <h3 className="portfolio__box-body">
            An app that decides what you should do. Created while learning
            React.
          </h3>
          <a
            className="portfolio__box-link"
            href="https://expense-react-course-app.herokuapp.com/"
          >
            Visit Website
          </a>
        </div>
        <span className="hover-effect-wane">&nbsp;</span>
      </div>
      <div className="portfolio__box hover-effect-container link-overlay">
        <div className="hover-effect-wax">
          <h1 className="portfolio__box-title">Quirky Twitter</h1>
          <h3 className="portfolio__box-body">
            Mock app of twitter. Created while practicing new learned skills.
          </h3>
          <a
            className="portfolio__box-link"
            href="https://expense-react-course-app.herokuapp.com/"
          >
            Visit Website
          </a>
        </div>
        <span className="hover-effect-wane">&nbsp;</span>
      </div>
      <div className="portfolio__box hover-effect-container link-overlay">
        <div className="hover-effect-wax">
          <h1 className="portfolio__box-title">Brew-tea-ful</h1>
          <h3 className="portfolio__box-body">
            A blog about all and everything about tea. Created as a draft for
            hopefully a future blog.
          </h3>
          <a
            className="portfolio__box-link"
            href="https://expense-react-course-app.herokuapp.com/"
          >
            Visit Website
          </a>
        </div>
        <span className="hover-effect-wane">&nbsp;</span>
      </div>
    </div>
  </div>
);

export default PortfolioSection;

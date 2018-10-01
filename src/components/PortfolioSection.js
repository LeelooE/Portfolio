import React from "react";
import Icon from 'react-icons-kit';
import { dollar } from 'react-icons-kit/fa/dollar';

const PortfolioSection = () => (
  <div id="portfolio" className="portfolio">
    <div className="portfolio__title">
    <div className="portfolio-line"></div>
      <h1>Portfolio</h1>
      <div className="portfolio-line"></div>
    </div>
    <div className="portfolio__layout">
      <div className="portfolio__box1">
      <h1 className="portfolio__box-title">Expensify</h1>
          <h3 className="portfolio__box-body">
            Allows you to track expenses. Created while learning React.
          </h3>
      <div className="overlay">
        <div className="in-box-hover">
          <h1 className="portfolio__box-title">Expensify</h1>
          <h3 className="portfolio__box-body">
            Allows you to track expenses. Created while learning React.
          </h3>
          <a
            className="portfolio__box-link"
            href="https://expense-react-course-app.herokuapp.com/"
          >
            Visit Website
          </a>
        </div>
        </div>
      </div>
      <div className="portfolio__box">
      <h1 className="portfolio__box-title">Indecision</h1>
          <h3 className="portfolio__box-body">
            Let the machine decide for you! Created while learning
            React.
          </h3>
        <div className="overlay">
        <div className="in-box-hover">
          <h1 className="portfolio__box-title">Indecision</h1>
          <h3 className="portfolio__box-body">
            Let the machine decide for you! Created while learning
            React.
          </h3>
          <a
            className="portfolio__box-link"
            href="https://indecision-app-42a85.firebaseapp.com/"
          >
            Visit Website
          </a>
        </div>
        </div>
      </div>
      <div className="portfolio__box">
      <h1 className="portfolio__box-title">Wiki-App</h1>
          <h3 className="portfolio__box-body">
            A browser app that allows you to search up wiki articles with an input.
          </h3>
        <div className="overlay">
        <div className="in-box-hover">
          <h1 className="portfolio__box-title">Wiki-App</h1>
          <h3 className="portfolio__box-body">
            A browser app that allows you to search up Wiki articles with an input.
          </h3>
          <a
            className="portfolio__box-link"
            href="https://wiki-app-2779e.firebaseapp.com/"
          >
            Visit Website
          </a>
        </div>
        </div>
      </div>
      <div className="portfolio__box">
      <h1 className="portfolio__box-title">Quote-App</h1>
          <h3 className="portfolio__box-body">
            A random quote generator with the ability to share on Twitter.
          </h3>
        <div className="overlay">
        <div className="in-box-hover">
          <h1 className="portfolio__box-title">Quote-App</h1>
          <h3 className="portfolio__box-body">
            A random quote generator with the ability to share on Twitter.
          </h3>
          <a
            className="portfolio__box-link"
            href="https://quote-app-75238.firebaseapp.com/"
          >
            Visit Website
          </a>
        </div>
        </div>
      </div>
      <div className="portfolio__box">
      <h1 className="portfolio__box-title">Weather-App</h1>
          <h3 className="portfolio__box-body">
            See your local weather or search it up using location name.
          </h3>
        <div className="overlay">
        <div className="in-box-hover">
          <h1 className="portfolio__box-title">Weather App</h1>
          <h3 className="portfolio__box-body">
          See your local weather or search it up using location name.
          </h3>
          <a
            className="portfolio__box-link"
            href="https://quote-app-75238.firebaseapp.com/"
          >
            Visit Website
          </a>
        </div>
        </div>
      </div>
      <div className="portfolio__box">
      <h1 className="portfolio__box-title">Steep</h1>
          <h3 className="portfolio__box-body">
            Tea blog in the workings...
          </h3>
        <div className="overlay">
        <div className="in-box-hover">
          <h1 className="portfolio__box-title">Steep</h1>
          <h3 className="portfolio__box-body">
          Tea blog in the workings...
          </h3>
          <a
            className="portfolio__box-link"
            href="https://github.com/LeelooE/Steep"
          >
            Visit Website
          </a>
        </div>
        </div>
      </div>
    </div>
  </div>
);

export default PortfolioSection;

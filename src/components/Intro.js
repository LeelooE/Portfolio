import React from 'react';

class Intro extends React.Component {
  render() {
    return (
        <div className="intro">
        <div className="intro__box">
          <div>
            <h1 className="intro__title">Anita S.</h1>
          </div>
          <div>
            <h3 className="intro__body">
              Hello! I'm a front-end developer and a student based in Washington
              state, focused on learning and broadening my horizons.
            </h3>
          </div>
        </div>
        </div>
    );
  }
}

export default Intro;

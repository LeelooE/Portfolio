import Github from 'react-icons/lib/fa/github';
import Pinterest from 'react-icons/lib/fa/pinterest';
import Codepen from 'react-icons/lib/fa/codepen';
import Angellist from 'react-icons/lib/fa/angellist';
import React from "react";

class Icons extends React.Component {
    render() {
      return (
          <div className="nav__icons">
          <a href="https://github.com/LeelooE"><Github className="icon"/></a>
          <a href="https://www.pinterest.com/leeloonita/"><Pinterest className="icon"/></a>
          <a href="https://codepen.io/LeelooE/#"><Codepen className="icon"/></a>
          <a href="https://angel.co/anita-silva-2?al_content=view+your+profile&al_source=transaction_feed%2Fnetwork_sidebar"><Angellist className="icon"/></a>
          </div>
          
      );
    }
  }
  
  export default Icons;
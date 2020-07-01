import React from "react";

export default class Header extends React.Component {
    render () {
      return (
  
        <div className="callout primary" style={{backgroundColor: 'darkred'}}>
          <div className="row column"style={{color: 'gainsboro'}}>
            <h1 className="text-center"><b>Greetings &amp; Salutations!</b></h1> 
            <h2 className="text-center"><b>Welcome to the Portfolio of Charles A. Sisson</b></h2>
            <h4 className="text-center">Below is a curated assortment of web dev projects and applications I've worked on independently or as part of a group.<p />
            </h4><h4 className="text-center">The quantity &amp; quality of such undertakings should increase as I develop my programming acumen.<p />
            </h4></div>
        </div>
      );
    }
  }
import React from "react";

export default class InfoSidebar extends React.Component {
  render () {
    return (
  
        <div className="off-canvas position-left reveal-for-large" id="my-info" data-off-canvas data-position="left" style={{backgroundColor: 'red'}} aria-hidden="true" data-offcanvas="lxhohf-offcanvas">
          <div className="row column">
            <br />
            <img className="thumbnail" src="../img/CS-casual-headshot.jpg" alt='personal-pic' />
            <ul className="text-left">
              <li style={{color: 'gainsboro'}}><b>
                I am a deferred biologist turned delivery person, and am currently working to make a programmer/developer out of myself.
              </b></li> 
              <br /> 
              <li style={{color: 'gainsboro'}}><b>
                I hope to eventually transition into a position within the life science/biotech/pharmaceutical sectors, involving bioinformatics, computational/systems/synthetic biology, data science, and/or information tech.
                </b></li>
              <br /> 
              <li style={{color: 'gainsboro'}}><b>
                I was born and raised in West Haven, CT.
                </b></li> 
              <br />
              <li style={{color: 'gainsboro'}}><b>
                Some of my hobbies include guitar, piano, reading, and writing.
                </b></li>
            </ul>
          </div>
        </div>
      );
    }
  }
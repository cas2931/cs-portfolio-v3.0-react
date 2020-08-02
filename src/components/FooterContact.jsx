import React from "react";

export default class FooterContact extends React.Component {
  render () {
    return (
      <div className="row">
        {/* <div class="medium-12 columns" class="button-group align-center"> */}
        <h3 className="text-center"><b>Contact Me</b></h3> 
        <div className="expanded button-group">
          <a className="secondary button" href="https://www.linkedin.com/in/charles-sisson-533a50a8/" target="blank">LinkedIn</a>
          <a className="secondary button" href="https://github.com/cas2931" target="blank">GitHub</a>
          <a className="secondary button" href="mailto:charles_sisson1392@yahoo.com">Email</a>
          <a className="secondary button" href="https://resume.creddle.io/resume/2xzu0d58tvt" target="blank">Resume</a>  
          <a className="secondary button" href="tel:2039275697" target="blank">Cell: 203-927-5697</a>
        </div>
      </div>
    );
  }
}

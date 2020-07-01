import React from "react";

export default class MenuBar extends React.Component {
  render () {
    return (
  
        <div className="off-canvas-content" data-off-canvas-content>
          <div className="title-bar hide-for-large">
            <div className="title-bar-left">
              <button className="menu-icon" type="button" data-open="my-info" />
              <span className="title-bar-title">Charles Sisson</span>
            </div>
          </div>
        </div>
      );
    }
  }
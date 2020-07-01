import React from "react";

export default class ProjectGrid extends React.Component {
  render () {
    return (
  
        <div className="row small-up-2 medium-up-3 large-up-4">
          <div className="column"> 
            <a href="https://cas2931.github.io/bcsProject1/" target="blank">
              <img className="thumbnail-project" src="https://ih1.redbubble.net/image.1106992107.8689/flat,750x,075,f-pad,750x1000,f8f8f8.jpg" alt="Corona & Chill" />
            </a>
            <h5><b>Corona &amp; Chill</b></h5>  
            <a href="https://github.com/cas2931/bcsProject1" target="blank" className="alert button"><h5>[GitHub Repo]</h5></a>
          </div>
          <div className="column"> 
            <a href="https://calm-hamlet-69028.herokuapp.com/" target="blank">
              <img className="thumbnail-project" src="https://blog.cloud66.com/content/images/2015/11/database-parts.jpg" alt='database-stack' />
            </a>
            <h5><b>Full Stax Record Swap</b></h5>
            <a href="https://github.com/cas2931/Project2" target="blank" className="alert button"><h5>[GitHub Repo]</h5></a>
          </div> 
          <div className="column"> 
            <a href="https://cas2931.github.io/bcs-charles_sisson-hmwk-repo/CS-HMWK3-PasswordGenerator/" target="blank">
              <img className="thumbnail-project" src="https://i.pcmag.com/imagery/articles/04Uac9ZA9dH1zEKUiIv0nOu-7.fit_scale.size_2698x1517.v1569489914.jpg" alt='password'/>
            </a>
            <h5><b>Random Password Generator</b></h5> 
            <a href="https://github.com/cas2931/bcs-charles_sisson-hmwk-repo/tree/master/CS-HMWK3-PasswordGenerator" className="alert button"><h5>[GitHub Repo]</h5></a>
          </div>
          <div className="column"> 
            <a href="https://young-dusk-13613.herokuapp.com/" target="blank">
              <img className="thumbnail" src="https://sevenscribes.com/wp-content/uploads/2015/07/goodburger-1.png" alt='burgers' /> 
            </a>
            <h5><b>Burger Time</b></h5> 
            <a href="https://github.com/cas2931/CS-BCS-HK11-BurgerApp" target="blank" className="alert button"><h5>[GitHub Repo]</h5></a>
          </div>
          <div className="column"> 
            <a href="https://cas2931.github.io/bcs-charles_sisson-hmwk-repo/CS-HMWK4-CodeQuiz/" target="blank">
              <img className="thumbnail" src="https://blogs.imf.org/wp-content/uploads/2018/12/BLOG-1024x600-quiz-global-economy-nirodesign-gettyimages-iStock-498307386.jpg" alt='quiz' />
            </a>
            <h5><b>Code Quiz</b></h5> 
            <a href="https://github.com/cas2931/bcs-charles_sisson-hmwk-repo/tree/master/CS-HMWK4-CodeQuiz" target="blank" className="alert button"><h5>[GitHub Repo]</h5></a>
          </div>
          <div className="column">
            <img className="thumbnail" src="https://news.blr.com/app/uploads/sites/8/2019/07/Time-clock-wage-and-hour.jpg" alt='punch-clock'/>
            <h5><b>Employee Tracker [Back-end/Node.js app]</b></h5> 
            <a href="https://github.com/cas2931/CS-BCS-HMWK10-EmployeeTracker" target="blank" className="alert button"><h5>[GitHub Repo]</h5></a>
          </div>
          {/* <div class="column">
                <img class="thumbnail" src="https://placehold.it/550x550">
                <h5>My Site</h5>
              </div>
              <div class="column">
                <img class="thumbnail" src="https://placehold.it/550x550">
                <h5>My Site</h5>
              </div> */}
          {/* <div class="column">
                <img class="thumbnail" src="https://placehold.it/550x550">
                <h5>My Site</h5>
              </div> */}
          {/* <div class="column">
                <img class="thumbnail" src="https://placehold.it/550x550">
                <h5>My Site</h5>
              </div>
              <div class="column">
                <img class="thumbnail" src="https://placehold.it/550x550">
                <h5>My Site</h5>
              </div> */}
          {/* <div class="column">
                <img class="thumbnail" src="https://placehold.it/550x550">
                <h5>My Site</h5>
              </div>
            </div> */}
      </div>
    
      );
    } 
  }

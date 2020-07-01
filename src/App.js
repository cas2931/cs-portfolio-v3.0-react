import React from 'react';
import './App.css'; 
import FooterContact from './components/FooterContact'; 
import Header from './components/Header'; 
import InfoSidebar from "./components/InfoSidebar"; 
import ProjectGrid from './components/ProjectGrid'; 
import MenuBar from './components/MenuBar';

function App() {
  return (
    <div class="off-canvas-wrapper">
    <div class="off-canvas-wrapper-inner" data-off-canvas-wrapper>
      <InfoSidebar></InfoSidebar>  
    <div class="off-canvas-content" data-off-canvas-content> 
      <MenuBar></MenuBar>
      <Header></Header>  
      <InfoSidebar></InfoSidebar> 
      <ProjectGrid></ProjectGrid>
      <FooterContact></FooterContact> 
    </div>
    </div> 
    </div>
  );
}

export default App;

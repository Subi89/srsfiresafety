import React, { Component } from 'react';
import logo from './logo.svg';
import {SideMenu, Item} from 'react-sidemenu';
//import Carousel from 'reactjs-carousel';
//import Carousel  from 'react-responsive-carousel';
import './App.css';



var Carousel = require('react-responsive-carousel').Carousel;
const items = [
  {divider: true, label: 'Our Products', value: 'main-nav'},
    {label: 'Fire Extinguishers', value: 'fireExtinguishers', icon: 'fa-fire-extinguisher',
      children: [
        {label: 'Powder Fire Extinguishers', value: 'powderFireExtinguishers'},
        {label: 'Clean Agent Fire Extinguishers', value: 'cleanAgentFireExtinguishers'},
        {label: 'Water Fire Extinguishers', value: 'waterFireExtinguishers'},
        {label: 'Foam Fire Extinguishers', value: 'foamFireExtinguishers'},
        {label: 'Carbon dioxide Fire Extinguishers', value: 'carbonDioxideFireExtinguishers'},
        {label: 'Water Mist Fire Extinguishers', value: 'waterMistFireExtinguishers'},
        {label: 'Backup Trolley Mount Fire Extinguishers', value: 'backupTrolleyFireExtinguishers'},
        {label: 'Automatic Fire Extinguishers', value: 'automaticFireExtinguishers'}
        ]
    },
    {label: 'Fire Hydrant System', value: 'fireHydrantSystem', icon: 'fa-automobile',
    children: [
        {label: 'Yard Fire Hydrant System', value: 'yardFireHydrantSystem'},
        {label: 'Hose Reel System', value: 'hoseReelSystem'},
        {label: 'Down Corner System', value: 'downCornerSystem'},
        {label: 'Dry Riser System', value: 'dryRiserSystem'},
        {label: 'Wet Riser System', value: 'wetRiserSystem'},
        {label: 'Automatic Sprinkler System', value: 'automaticSprinklerSystem'}
        ]
    },
    {label: 'Smoke And Fire Detection System', value: 'smokeAndFireDetectionSystem', icon: 'fa-automobile',
    children: [
        {label: 'Conventional Fire Alarm System', value: 'conventionalFireAlarmSystem'},
        {label: 'Addressable Fire Alarm System', value: 'addressableFireAlarmSystem'},
        {label: 'Stand Alone Fire Alarm System', value: 'standAloneFireAlarmSystem'}
        ]
    },
    {label: 'Escape Signs And Directional Lighting System', value: 'escapeSignsAndDirectionalLightingSystem', icon: 'fa-automobile',
    children: [
        {label: 'Photo Luminescent Sign Boards', value: 'conventionalFireAlarmSystem'},
        {label: 'LED Sign Boards', value: 'ledSignBoards'},
        {label: 'Normal Sign Boards', value: 'normalSignBoards'},
        {label: 'Emergency Exit Lights', value: 'emergencyExitLights'}
        ]
    },
    {label: 'Safety Suits', value: 'escapeSignsAndDirectionalLightingSystem', icon: 'fa-automobile',
    children: [
        {label: 'Photo Luminescent Sign Boards', value: 'conventionalFireAlarmSystem'},
        {label: 'LED Sign Boards', value: 'ledSignBoards'},
        {label: 'Normal Sign Boards', value: 'normalSignBoards'},
        {label: 'Emergency Exit Lights', value: 'emergencyExitLights'}
        ]
    },
    {label: 'Personal Protective Equipments', value: 'safetySuits', icon: 'fa-automobile',
    children: [
        {label: 'Photo Luminescent Sign Boards', value: 'conventionalFireAlarmSystem'},
        {label: 'LED Sign Boards', value: 'ledSignBoards'},
        {label: 'Normal Sign Boards', value: 'normalSignBoards'},
        {label: 'Emergency Exit Lights', value: 'emergencyExitLights'}
        ]
    },
    {label: 'Suppression Systems', value: 'escapeSignsAndDirectionalLightingSystem', icon: 'fa-automobile',
    children: [
        {label: 'Photo Luminescent Sign Boards', value: 'conventionalFireAlarmSystem'},
        {label: 'LED Sign Boards', value: 'ledSignBoards'},
        {label: 'Normal Sign Boards', value: 'normalSignBoards'},
        {label: 'Emergency Exit Lights', value: 'emergencyExitLights'}
        ]
    },
  {divider: true, label: 'Motors', value: 'motors-nav'},
    {label: 'item 3', value: 'item3', icon: 'fa-beer'}
];

class App extends Component {
  render() {
    return (
      <div className="App">
	  <div class ="container">
	  <div class = "header">
			<div class ="logo">
			
			 <img class="srs-logo" src={require('./images/srs-enterprises-logo-120x120.jpg')} alt="SRS" width="200" height="200"/>
			</div>
	 <div class = "main-menu">
	 <h1>SRS ENTERPRISES</h1>
        <section>
		<ul>
		<li><a class="active" href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
		</ul>
          
        </section>
		</div>
		 </div>
		 <div class="content">
		  <div class="content-carousel">
		
<Carousel autoPlay={true} infiniteLoop={true}>
                <div>
                    <img src={require('./images/1.jpg')} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={require('./images/2.jpg')} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={require('./images/1.jpg')} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={require('./images/2.jpg')} />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src={require('./images/1.jpg')}/>
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                    <img src={require('./images/2.jpg')} />
                    <p className="legend">Legend 6</p>
                </div>
            </Carousel>
		 </div>
		 <div class="side-menu">
          <SideMenu items={items}/>	  
		  
         </div>
		 </div>
        
		
		
		</div>
      </div>
    );
  }
}



           
       

export default App;

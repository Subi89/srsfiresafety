import React, { Component } from 'react';
import {SideMenu} from 'react-sidemenu';
import sideMenuStyles from '../../node_modules/react-sidemenu/dist/react-sidemenu.css';
import PubSub from 'pubsub-js';
import flatIconStyle from '../css/flaticon.css';

const style = {
//    background: 'black',
    display: 'inline-block',
    maxWidth: '320px',
    minWidth: '310px',
    borderRadius: '15px',
    position: 'relative',
    overflow: 'auto',
    marginTop: '10px'
};

const items = [
    {divider: true, label: 'Our Products', value: 'main-nav'},
    {label: 'Fire Extinguishers', value: 'fireExtinguishers', icon: 'flaticon-fire-extinguisher-1'},
    {label: 'Fire Hydrant System', value: 'fireHydrantSystem', icon: 'flaticon-hydrant'},
    {label: 'Smoke And Fire Detection System', value: 'smokeAndFireDetectionSystem', icon: 'flaticon-fire-alarm'},
    {label: 'Escape Signs And Lighting', value: 'escapeSignsAndLighting', icon: 'flaticon-man-silhouette-running-escaping'},
    {label: 'Safety Suits', value: 'safetySuits', icon: 'flaticon-diving-suit'},
    {label: 'Personal Protective Equipment', value: 'personalProtetiveEquipment', icon: 'flaticon-construction'},
    {label: 'Suppression System', value: 'suppressionSystem', icon: 'flaticon-fire-extinguisher'},
    {divider: true, label: 'Our Services', value: 'other'},
    {label: 'Fire safety Consultant', value: 'fireSafetyConsultant', icon: 'flaticon-professor-consultation'},
    {label: 'Fire NOC Approval', value: 'fireNocApproval', icon: 'flaticon-verified-text-paper'},
    {label: 'Fire License Approval', value: 'fireLicenseApproval', icon: 'flaticon-id-card'},
    {label: 'Fire Hydrant Drawing', value: 'fireHydrantDrawing', icon: 'flaticon-sketchbook'},
    {label: 'Fire Training Certification', value: 'fireTrainingCertification', icon: 'flaticon-diploma'},
    {label: 'Live Fire Extinguisher Demo', value: 'liveFireExtinguisherDemo', icon: 'flaticon-announcement'},
    {divider: true, label: 'Information', value: 'information'},
    {label: 'About Us', value: 'aboutUs', icon: 'flaticon-about-successful-man'},
    {label: 'Contact Us', value: 'contactUs', icon: 'flaticon-phone-book'}
];

class sideMenuLeft extends Component {

    itemClicked = (value) =>{
        PubSub.publish('sideMenu.left', {selection: value});
    };

    render() {
        return(
            <div style={style}>
                    <SideMenu items={items} shouldTriggerClickOnParents={true} onMenuItemClick={this.itemClicked} renderMenuItemContent={(item) =>
                     (<span><i class={'fa ' + item.icon}></i><strong style={{color: "white", fontWeight: "300", fontFamily: '"Lucida Console", Courier, monospace;'}}>  {item.label}</strong></span>)}/>
            </div>
        );
    }
}

export default sideMenuLeft;
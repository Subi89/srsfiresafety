import React, { Component } from 'react';
import {SideMenu} from 'react-sidemenu';
import sidemenuStyles from '../../node_modules/react-sidemenu/dist/react-sidemenu.min.css';

const style = {
    background: 'black',
    display: 'inline-block',
    maxWidth: '300px',
    margin: '0 0 1vh 0',
    float: 'right',
    height: 'auto',
    borderRadius: '15px',
    overflow: 'auto'
};

const items =    [{divider: true, label: 'Our Services', value: 'other'},
    {label: 'Fire safety Consultant', value: 'fireSafetyConsultant', icon: 'fa-beer'},
    {label: 'Fire NOC Approval', value: 'fireNocApproval', icon: 'fa-beer'},
    {label: 'Fire License Approval', value: 'fireLicenseApproval', icon: 'fa-beer'},
    {label: 'Fire Hydrant Drawing', value: 'fireHydrantDrawing', icon: 'fa-beer'},
    {label: 'Fire Training Certification', value: 'fireTrainingCertification', icon: 'fa-beer'},
    {label: 'Live Fire Extinguisher Demo', value: 'liveFireExtinguisherDemo', icon: 'fa-beer'},
    {divider: true, label: 'Other', value: 'other'},
    {label: 'About Us', value: 'aboutUs', icon: 'fa-beer'},
    {label: 'Contact Us', value: 'contactUs', icon: 'fa-beer'}];


class sidemenuRight extends Component {
    render() {
        return(
            <div style={style}>
                <div className={"sidemenuStyles.Side-menu"} rtl={true}>
                    <SideMenu items={items}/>
                </div>
            </div>
        );
    }
}

export default sidemenuRight;

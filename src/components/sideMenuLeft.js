import React, { Component } from 'react';
import {SideMenu} from 'react-sidemenu';
import sideMenuStyles from '../../node_modules/react-sidemenu/dist/react-sidemenu.css';

const style = {
//    background: 'black',
    display: 'inline-block',
    maxWidth: '300px',
    borderRadius: '15px',
    position: 'absolute',
    overflow: 'auto'
};

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
    {label: 'Escape Signs And Lighting System', value: 'escapeSignsAndLightingSystem', icon: 'fa-automobile',
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
    {label: 'Safety Suits', value: 'safetySuits', icon: 'fa-automobile',
        children: [
            {label: 'Boiler Suits', value: 'boilerSuits'},
            {label: 'Industrial Suits', value: 'industrialSuits'},
            {label: 'Fire Suits', value: 'fireSuits'}
        ]
    },
    {label: 'Personal Protective Equipment', value: 'personalProtetiveEquipment', icon: 'fa-automobile',
        children: [
            {label: 'Head Protection', value: 'headProtection'},
            {label: 'Eye Protection', value: 'eyeProtection'},
            {label: 'Ear Protection', value: 'earProtection'},
            {label: 'Face Protection', value: 'faceProtection'},
            {label: 'Hand Protection', value: 'handProtection'},
            {label: 'Leg Protection', value: 'legProtection'}
        ]
    },
    {label: 'Suppression System', value: 'suppressionSystem', icon: 'fa-automobile',
        children: [
            {label: 'Gas Suppression System', value: 'gasSuppressionSystem'},
            {label: 'Kitchen Suppression System', value: 'kitchenSuppressionSystem'},
            {label: 'Water Mist Suppression System', value: 'waterMistSuppressionSystem'}
        ]
    }
];

class sideMenuLeft extends Component {
    render() {
        return(
            <div style={style}>
                    <SideMenu items={items} shouldTriggerClickOnParents={true}/>
            </div>
        );
    }
}

export default sideMenuLeft;
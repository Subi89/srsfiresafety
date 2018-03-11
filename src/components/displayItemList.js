import React, { Component } from 'react';
import MapComponents from 'react-map-components';
import DisplayItem from './displayItem';

const attributeList = {
    "fireExtinguishers": [{"image": "./fireExtinguishers/automaticFireExtinguishers.png", "title": "Automatic Fire Extinguishers"},
                          {"image": "./fireExtinguishers/backupTrolleyFireExtinguishers.png", "title": "Backup Trolley Mount Fire Extinguishers"},
                          {"image": "./fireExtinguishers/carbonDioxideFireExtinguishers.png", "title": "Carbon dioxide Fire Extinguishers"},
                          {"image": "./fireExtinguishers/cleanAgentFireExtinguishers.png", "title": "Clean Agent Fire Extinguishers"},
                          {"image": "./fireExtinguishers/foamFireExtinguishers.png", "title": "Foam Fire Extinguishers"},
                          {"image": "./fireExtinguishers/mriSafeFireExtinguishers.png", "title": "MRI Safe Fire Extinguishers"},
                          {"image": "./fireExtinguishers/powderFireExtinguishers.png", "title": "Powder Fire Extinguishers"},
                          {"image": "./fireExtinguishers/waterFireExtinguishers.png", "title": "Water Fire Extinguishers"},
                          {"image": "./fireExtinguishers/waterMistFireExtinguishers.png", "title": "Water Mist Fire Extinguishers"}],
    "safetySuits":      [{"image": "./safetySuits/boilerSuits.png", "title": "Boiler Suits"},
                        {"image": "./safetySuits/fireSuits.png", "title": "Fire Suits"},
                        {"image": "./safetySuits/industrialSuits.png", "title": "Industrial Suits"}]
    };

const style = {
    background: '#222d32',
//    background: '#E7AD36',
    display: 'inline-block',
    width: 'calc(100% - 560px)',
    margin: '0 0 0 10px',
    minHeight: '49vh',
    borderRadius: '15px',
    position: 'relative',
    verticalAlign: 'top',
    overflow: 'auto',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center'
};


class displayItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {itemList: attributeList.safetySuits};
    }

    componentDidMount() {
        this.setState({itemList: attributeList.safetySuits});
    }

    render(){
        return (
            <div className = "displayItemList" style = {style}>
                <MapComponents component={DisplayItem} for={this.state.itemList} />
            </div>
        );
    }
}

export default displayItemList;
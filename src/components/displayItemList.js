import React, { Component } from 'react';
import MapComponents from 'react-map-components';
import DisplayItem from './displayItem';

const itemList = [
    {"image": "../images/Transp/Automatic fire extinguisher.png"},
    {"image": "../images/Transp/Backup trolley mount fire extinguisher.png"},
    {"image": "../images/FireExtinguishers/Automatic fire extinguisher.png"}];

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
        this.state = {itemList: itemList};
    }

    componentDidMount() {
        this.setState({itemList: itemList});
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
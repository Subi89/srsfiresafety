import React, { Component } from 'react';
import MapComponents from 'react-map-components';
import DisplayItem from './displayItem';

const itemList = [{"title": "First Fire Extinguisher"}, {"title": "Second Fire Extinguisher"}, {"title": "Third Fire Extinguisher"}];

const style = {
//    background: '#222d32',
    background: '#222D32',
    display: 'inline-block',
    width: 'calc(100% - 330px)',
    margin: '0 0 1vh 310px',
    minHeight: '49vh',
    borderRadius: '15px',
    position: 'absolute',
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
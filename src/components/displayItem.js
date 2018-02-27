import React, { Component } from 'react';

const style = {
    background: 'black',
    display: 'inline-block',
    width: '200px',
    margin: '25px',
    height: '150px',
//    borderRadius: '5px',
    position: 'relative',
    overflow: 'auto'
};

const imageStyle = {
   maxWidth: '100%',
   maxHeight: '100%'
};

const captionStyle = {
    textAlign: 'center'
}

class displayItem extends Component {

    constructor(props){
        super(props);
        this.state = {title: []};
    }

    componentWillReceiveProps(newProps) {
        this.setState({title: newProps.title});
    }

    render(){
        let { title } = this.props;
        return(
                <div style={style}>
                    <img src={require('../images/background.png')} alt={""}  style={imageStyle} />
                    <p style={captionStyle}>{title}</p>
                </div>
        );
    }
}

export default displayItem;
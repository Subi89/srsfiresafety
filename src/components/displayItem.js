import React, { Component } from 'react';

const style = {
    background: 'black',
    display: 'inline-block',
    // width: '64vw',
    margin: '40px',
    // height: '49vh',
    borderRadius: '28px',
    position: 'relative',
    overflow: 'auto'
};

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
                    <img src={require('../images/background.png')} alt={""}  />
                    <p>{title}</p>
                </div>
        );
    }
}

export default displayItem;
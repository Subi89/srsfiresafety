import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import '../../node_modules/react-responsive-modal/lib/react-responsive-modal.css';

const style = {
    background: 'white',
    display: 'inline-block',
    width: '200px',
    margin: '13px',
    padding: '5px',
    height: '200px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px 0 #002B36, 0 6px 20px 0 #002B36',
    position: 'relative',
    overflow: 'auto'
};

const buttonStyle = {
	background: '#4CAF50', /* Green */
    border: 'none',
    color: 'white',
    padding: '5px 10px',
    textAlign: 'center',
    textDecoration: 'none',
	display: 'inline-block',
    fontSize: '14px',
    margin: '2px 2px',
    cursor: 'pointer',
    webkitTransitionDuration: '0.4s', /* Safari */
    transitionDuration: '0.4s',
	boxShadowhadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
};

const imageStyle = {
   maxWidth: '100%',
   maxHeight: '70%',
    margin: 'auto'
};

const captionStyle = {
    textAlign: 'center'
};

class displayItem extends Component {
    state = {
    open: false,
    //title:[],
    };

    onOpenModal = () => {
    this.setState({ open: true });
    };

    onCloseModal = () => {
    this.setState({ open: false });
    };

    render(){
		const { open } = this.state;
        let { image } = this.props;
        console.log(image);
        return(
                <div style={style}>
                    <div style={imageStyle}>
                        <img src={require('../images/Transp/Backup trolley mount fire extinguisher.png')} style={imageStyle} alt={""}  />
                    </div>
					<div className="example">
                        <p style={captionStyle}>
                    <button className="btn btn-action" style= {buttonStyle} onClick={this.onOpenModal}>
                      View More
                    </button></p>
                    <Modal
                      open={open}
                      onClose={this.onCloseModal}
                      little
                      classNames={{
                        transitionEnter: 'transition-enter',
                        transitionEnterActive: 'transition-enter-active',
                        transitionExit: 'transition-exit-active',
                        transitionExitActive: 'transition-exit-active',
                      }}
                      animationDuration={1000}
                    >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                    pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                    hendrerit risus, sed porttitor quam.
                  </p>
                </Modal>
            </div>
        </div>
        );
    }
}


export default displayItem;

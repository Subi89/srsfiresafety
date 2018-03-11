import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import '../../node_modules/react-responsive-modal/lib/react-responsive-modal.css';



const style = {
    background: 'linear-gradient(lavender, lightgrey)',
    display: 'inline-block',
    width: '200px',
    margin: '13px',
    padding: '5px',
    height: '230px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px 0 #002B36, 0 6px 20px 0 #002B36',
    position: 'relative',
    overflow: 'auto'
};

const buttonStyle = {
	background: '#4CAF50', /* Green */
    border: 'none',
    borderRadius: '4px',
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
    margin: 'auto',
    overflow: 'hidden'
};

const captionStyle = {
    textAlign: 'center',
    color: 'black',
    fontSize: '14px',
    fontWeight: 'bold'
};

var images = require.context('../images', true);

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
        let { image, title } = this.props;
        let img_src = images(image);
        return(
            <div style={style}>
                <div style={imageStyle}>
                    <img src={img_src} style={imageStyle} alt=""  />
                </div>
                <div style={captionStyle}>{title}</div>
                <div style={captionStyle}>
                    <button className="btn btn-action" style= {buttonStyle} onClick={this.onOpenModal}>
                      View More
                    </button>
                </div>
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
                  animationDuration={300} closeIconSize = {18}
                >
                <table style={{color:'red'}}>
                    <tr>
                        <th colspan="2">Fire Extinguisher</th>
                    </tr>
                        <tr>
                            <td><img src={img_src}  alt=""/> </td>
                            <td><p style={{color:'red'}}>
                            Description:<br/><br/>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                                pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                                hendrerit risus, sed porttitor quam.
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td style={{color:'red'}}><p>Options:</p>

                            <form class="boxed">
                                <input type="radio" id="one" name="weight" value="1KG"/>
                                <label for="one">1KG</label>

                                <input type="radio" id="two" name="weight" value="2KG"/>
                                <label for="two">2KG</label>

                                <input type="radio" id="three" name="weight" value="3KG"/>
                                <label for="three">3KG</label>

                                <input type="radio" id="Four" name="weight" value="4KG"/>
                                <label for="four">4KG</label>

                                <input type="radio" id="Five" name="weight" value="5KG"/>
                                <label for="five">5KG</label>

                                <br/><br/>

                                <button style= {buttonStyle} name="callBack"> Request CallBack</button>
                                <button style= {buttonStyle} name="enquiry"> Send Enquiry</button>

                            </form>
                            </td>
                        </tr>
                    </table>
                </Modal>
            </div>
        );
    }
}

export default displayItem;
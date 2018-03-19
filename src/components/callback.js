import React, { Component } from 'react';


const callbackStyle = {
    width: '30vw',
    minWidth: '300px',
    float: 'left',
    marginRight: '21px',
    background: '#222D32',
    borderRadius: '6px',
    padding: '10px',
    border: '2px solid white'
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
    WebkitTransitionDuration: '0.4s', /* Safari */
    transitionDuration: '0.4s',
	boxShadowhadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
};

class callback extends Component {

    onSubmitClick = () => {
        fetch('/send?subject=callback - ' + this._name.value + ' - ' + this._mobile.value + ' - ' + this._email.value +
            '&text=' + this._message.value)
            .then(function(response) {
                console.log(response.status);
              });
    }

    render(){
        return(
        <div style={callbackStyle}>
            <h3>Request Callback</h3>

            <form>
                <table width="257" border="0" align="center" cellPadding="0" cellSpacing="5">
                    <tbody><tr>
                        <td width="100">Name*</td>
                        <td width="10">:</td>
                        <td><input name="Name" type="text" id="Name" ref={input => this._name = input} /></td>
                    </tr>

                    <tr>
                        <td>Mobile*</td>
                        <td>:</td>
                        <td><input type="text" name="Mobile" id="Mobile" ref={input => this._mobile = input} /></td>
                    </tr>

                    <tr>
                        <td>Email*</td>
                        <td>:</td>
                        <td><input type="text" name="Email" id="Email" ref={input => this._email = input} /></td>
                    </tr>

                    <tr>
                        <td>Query</td>
                        <td>:</td>
                        <td><textarea name="Message" id="Message" rows="5" cols="25" ref={input => this._message = input}></textarea></td>
                    </tr>

                    <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td><input type="button" id="submit" value="Send Request" style={buttonStyle} onClick ={this.onSubmitClick}/></td>
                    </tr>
                </tbody></table>
            </form>
        </div>
        )
    }
}

export default callback;
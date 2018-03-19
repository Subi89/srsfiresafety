import React, { Component } from 'react';


const callbackStyle = {
    width: '297px',
    float: 'left',
    marginRight: '21px',
    background: '#222D32',
    borderRadius: '6px',
    padding: '10px'
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

class callback extends Component {

    onSubmitClick = () => {
        }


    render(){
        return(
        <div style={callbackStyle}>
            <h3>Request Callback</h3>

            <form>
                <table width="257" border="0" align="center" cellpadding="0" cellspacing="0">
                    <tbody><tr>
                        <td width="100" class="form_text">Name</td>
                        <td width="10" class="form_text">:</td>
                        <td><input name="Name" type="text" class="form_w" id="Name" required="" /></td>
                    </tr>

                    <tr>
                        <td class="form_text">Mobile</td>
                        <td class="form_text">:</td>
                        <td><input type="text" name="Mobile" class="form_w" id="Mobile" required="" /></td>
                    </tr>

                    <tr>
                        <td class="form_text">Email</td>
                        <td class="form_text">:</td>
                        <td><input type="text" name="Email" class="form_w" id="Email" required="" /></td>
                    </tr>

                    <tr>
                        <td class="form_text">Address</td>
                        <td class="form_text">:</td>
                        <td><input type="text" name="Address" class="form_w" id="Address" required="" /></td>
                    </tr>

                    <tr>
                        <td class="form_text">Query</td>
                        <td class="form_text">:</td>
                        <td><textarea name="Message" class="form_w" id="Message" required=""></textarea></td>
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
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import ProgressBar from 'react-bootstrap/ProgressBar';

export class FormUserDetails extends Component {
  continue = e =>{
    const {values:{firstName, lastName, email, occupation, city, bio}} = this.props;
      if(firstName!=='' && lastName!=='' && email!=='' && /[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/.test((email)))   //email validation /^[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,}/.test(email)
      {
      e.preventDefault();
      this.props.nextStep();
      }
  }
  render() {
    const {values:{firstName, lastName, email, occupation, city, bio},handleChange} = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
            <AppBar title="Enter User Details"/>
            <TextField type="text" className="akshat"
                hintText = "Enter Your First Name"
                floatingLabelText="First Name"
                onChange={handleChange('firstName')}
                defaultValue={firstName}
            />
            <br/>
            <TextField type="text"
                hintText = "Enter Your Last Name"
                floatingLabelText="Last Name"
                onChange={handleChange('lastName')}
                defaultValue={lastName}
            />
            <br/>
            <TextField type="email"
                hintText = "Enter Your Email"
                floatingLabelText="Email"
                onChange={handleChange('email')}
                defaultValue={email}
            />
            <br/>
            <RaisedButton
                label="Continue"
                primary={true}
                style={styles.button}
                onClick={this.continue}
            />
            <br/>
            <br/>
            <br/>
            <div className="progress" style={{width:'40%',height:'10px',marginLeft:'30%'}}>
                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width:'0%'}} aria-valuemax="100"> 
                </div>
            </div>
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

const styles={
    button:{
        margin:15
    }
}
export default FormUserDetails;

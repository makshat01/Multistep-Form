import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import ProgressBar from 'react-bootstrap/ProgressBar';

export class FormUserPersonal extends Component {
  continue = e =>{
    const {values:{firstName, lastName, email, occupation, city, bio}} = this.props;
      if(city!='' && occupation!='' && bio!='')
      {
      e.preventDefault();
      this.props.nextStep();
      }
  }
  back=e=>{
      e.preventDefault();
      this.props.prevStep();
  }
  render() {
    const {values:{firstName, lastName, email, occupation, city, bio},handleChange} = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
            <AppBar title="Enter Personal Details"/>
            <TextField type="text"
                hintText = "Enter Your Occupation"
                floatingLabelText="Occupation"
                onChange={handleChange('occupation')}
                defaultValue={occupation}
            />
            <br/>
            <TextField type="text"
                hintText = "Enter Your City"
                floatingLabelText="City"
                onChange={handleChange('city')}
                defaultValue={city}
            />
            <br/>
            <TextField
                hintText = "Enter Your Bio"
                floatingLabelText="Bio"
                onChange={handleChange('bio')}
                defaultValue={bio}
            />
            <br/>
            <RaisedButton
                label="Continue"
                primary={true}
                style={styles.button}
                onClick={this.continue}
            />
            <RaisedButton
                label="Back"
                primary={false}
                style={styles.button}
                onClick={this.back}
            />
             <br/>
            <br/>
            <br/>
            <div className="progress" style={{width:'40%',marginLeft:'30%',height:'10px'}}>
                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width:'33%'}} aria-valuemax="100"> 
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
export default FormUserPersonal;

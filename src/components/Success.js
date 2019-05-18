import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Success extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
            <AppBar title="Confirm User Details"/>
            <h1>Thank You For Your Submission</h1>
            <p>You Will Shortly Receieve An Email Confirmation</p>
            <br/>
            <br/>
            <br/>
            <div className="progress" style={{width:'40%',marginLeft:'30%',height:'10px',position:'5px auto'}}>
                <div className="progress-bar progress-bar-striped" style={{width:'100%'}} aria-valuemax="100"> 
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
export default Success;

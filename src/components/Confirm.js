import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List,ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {
  continue = e =>{
    const {values:{firstName, lastName, email, occupation, city, bio}} = this.props;
      if(firstName!='' || lastName!='' || email!='')
      {
      e.preventDefault();
      //HERE YOU WOULD PROCESS YOUR DATA
      this.props.nextStep();
      }
  }
  back=e=>{
    e.preventDefault();
    this.props.prevStep();
}
  render() {
    const {values:{firstName, lastName, email, occupation, city, bio}} = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
            <AppBar title="Confirm User Details"/>
            <List>
                <ListItem
                    primaryText="FirstName"
                    secondaryText={firstName}
                />
                <ListItem
                    primaryText="LastName"
                    secondaryText={lastName}
                />
                <ListItem
                    primaryText="Email"
                    secondaryText={email}
                />
                <ListItem
                    primaryText="Occupation"
                    secondaryText={occupation}
                />
                <ListItem
                    primaryText="City"
                    secondaryText={city}
                />
                <ListItem
                    primaryText="Bio"
                    secondaryText={bio}
                />
            </List>
            <br/>
            <RaisedButton
                label="Confirm & Continue"
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
            <div className="progress" style={{width:'40%',marginLeft:'30%',height:'10px',marginBottom:'7px'}}>
                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width:'67%'}} aria-valuemax="100"> 
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
export default Confirm;

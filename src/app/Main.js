/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { Router, Route, hashHistory, browserHistory } from 'react-router';

const styles = {
  container: {
    textAlign: 'center',
  },
  drawer: {
    top: 64,
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleRoute = this.handleRoute.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);

    this.state = {
      open: false,
    };
  }

  handleRoute(path) {
    
  }

  handleTouchTap() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
         <AppBar onLeftIconButtonTouchTap={this.handleTouchTap} title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
         <Drawer open={this.state.open} containerStyle={styles.drawer} onRequestChange={(open) => this.setState({open})}>
          <MenuItem onTouchTap={this.handleRoute("/#/rec")}>诗词推荐</MenuItem>
          <MenuItem onTouchTap={this.handleRoute("/#/search")}>诗词搜索</MenuItem>
         </Drawer>
         {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;

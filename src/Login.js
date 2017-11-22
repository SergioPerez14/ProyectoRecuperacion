import React, { Component } from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import {Menu, MenuItem} from 'material-ui/Menu';


import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import Download from 'material-ui/svg-icons/file/file-download';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


import AppBar from 'material-ui/AppBar';

import injectTapEventPlugin from 'react-tap-event-plugin';

import logo from './logo.svg';
import './App.css';
import Form4 from './Form4.js';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
	"palette": {
        "primary1Color": "#FF9800",
        "accent1Color": "#FF5722",
        "disabledColor": "#000000",
        "textColor": "rgba(0, 0, 0, 0.54)",
        "pickerHeaderColor": "#424242"

    }
});

class App extends Component {

	constructor(){
		super();
		this.state = {
			drawerOpened: false
		};
	};

	_toogleDrawer () {
		this.setState({
			drawerOpened: !this.state.drawerOpened
		});
	};

	state = {
		fields: {}
	};

	onChange = updatedValue => {
		this.setState({
			fields: {
				...this.state.fields,
				...updatedValue
			}
		});
	};



  render() {
    return (
      	<MuiThemeProvider muiTheme={(muiTheme)}>
	      <div className="App">

	        <AppBar
			    align='left' title="Sistema de Pedidos" onLeftIconButtonTouchTap={() => this._toogleDrawer()} />

			<Drawer open={this.state.drawerOpened} docked={false} onRequestChange={() => this._toogleDrawer()}>

			<Menu>
				<h2>MENU</h2>
				<Divider />
				<h3 />
				<MenuItem
				    primaryText="Acerca de nosotros"
				/>
				<MenuItem
					primaryText="Ayuda y Soporte"
				/>
				<MenuItem
					primaryText="Version del Sistema"
				/>
			</Menu>

			</Drawer>

	        <header align="center" className="App-header"><h3>Login</h3></header>

			<br /><br /><br /><br />
	        <Form4 onChange={fields => this.onChange(fields)} />
	      </div>
      	</MuiThemeProvider>
    );
  }
}

export default App;

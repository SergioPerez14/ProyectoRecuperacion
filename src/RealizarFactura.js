import React, { Component } from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import {Menu, MenuItem} from 'material-ui/Menu';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';


import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import Download from 'material-ui/svg-icons/file/file-download';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


import AppBar from 'material-ui/AppBar';

import injectTapEventPlugin from 'react-tap-event-plugin';

import logo from './logo.svg';
import './App.css';
import Form14 from './Form14.js';
import Table7 from './Table7.js';

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

	handleOpen = () => {
    	this.setState({open: true});
  	};

	handleClose = () => {
	    this.setState({open: false});
	};

  render() {

  		const actions = [
	      <FlatButton
	        label="Cancelar"
	        primary={true}
	        onClick={this.handleClose}
	      />,
	      <FlatButton
	        label="Imprimir"
	        primary={true}
	        keyboardFocused={true}
	        onClick={this.handleClose}
	      />,
    	];


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
				    primaryText="Dashboard"
				/>
				<MenuItem
				    primaryText="Clientes"
				    rightIcon={<ArrowDropRight />}
				    menuItems={[
				    <MenuItem primaryText="Buscar Cliente" />,
				    <MenuItem primaryText="Alta de Cliente" />,
				    <MenuItem primaryText="Modificar Cliente" />,
				    <MenuItem primaryText="Eliminar Cliente" />,
				    ]}
				/>
				<MenuItem
				    primaryText="Ventas"
				    rightIcon={<ArrowDropRight />}
				    menuItems={[
				    <MenuItem primaryText="Realizar Pedido" />,
				    <MenuItem primaryText="Consultar estado de Venta" />,
				    <MenuItem primaryText="Buscar Producto" />,
				    <MenuItem primaryText="Alta de Productos" />,
				    <MenuItem primaryText="Baja de Productos" />,
				    <MenuItem primaryText="Actualizar Productos" />,
				    <MenuItem primaryText="Busqueda de Productos" />,
				    ]}
				/>
				<MenuItem
				    primaryText="Cobranza"
				    rightIcon={<ArrowDropRight />}
				    menuItems={[
				    <MenuItem primaryText="Realizar Cobranza" />,
				    <MenuItem primaryText="Consultar Cobranzas" />,
				    <MenuItem primaryText="Consultar Cobranzas pendientes" />,
				    <MenuItem primaryText="Enviar Mensajes de Pagos" />,
				    ]}
				/>
				<MenuItem
				    primaryText="Presupuesto"
				    rightIcon={<ArrowDropRight />}
				    menuItems={[
				    <MenuItem primaryText="Realizar Presupuesto" />,
				    ]}
				/>
					<MenuItem
				    primaryText="Talleres"
				    rightIcon={<ArrowDropRight />}
				    menuItems={[
				    <MenuItem primaryText="Consultar Informacion del Taller" />,
				    <MenuItem primaryText="Asignar tareas al taller" />,
				    <MenuItem primaryText="Verificar disposición del Taller" />,
				    ]}
				/>
					<MenuItem
				    primaryText="Ord. Servicios"
				    rightIcon={<ArrowDropRight />}
				    menuItems={[
				    <MenuItem primaryText="Realizar Orden de Servicio" />,
				    <MenuItem primaryText="Consultar Ordenes de Servicios" />,
				    <MenuItem primaryText="Consultar Estado de las Ordenes de servicios"/>,
				    ]}
				/>
					<MenuItem
				    primaryText="Facturacion"
				    rightIcon={<ArrowDropRight />}
				    menuItems={[
				    <MenuItem primaryText="Realizar Facturacion" />,
				    <MenuItem primaryText="Consultar Facturacaion" />,
				    <MenuItem primaryText="Verificar Facturacaion" />,
				    ]}
				/>
					<MenuItem
				    primaryText="Reportes"
				    rightIcon={<ArrowDropRight />}
				    menuItems={[
				    <MenuItem primaryText="Generar Reporte" />,
				    <MenuItem primaryText="Reporte de Ventas" />,
				    <MenuItem primaryText="Reporte Cobranzas Realizadas" />,
				    <MenuItem primaryText="Reporte Cobranzas Pendientes" />,
				    ]}
				/>
				<Divider />
				<h3 />
				<MenuItem>Cerrar Sesión</MenuItem>
			</Menu>

			</Drawer>

	        <header className="App-header"><h3>Realizar Factura</h3></header>
			<br />
			<br />
	        <Form14 onChange={fields => this.onChange(fields)} />
			<br /><br />
			
			<p align="center"><h3>Factura Generada</h3> </p>
			<RaisedButton label="Ver detalles de la Factura" onClick={this.handleOpen} primary style='' />
		        <Dialog
		          title="Venta: 27235  -  Estado de la Venta: Cancelada"
		          actions={actions}
		          modal={false}
		          open={this.state.open}
		          onRequestClose={this.handleClose}
		        >
	        	<Table7 />
	        	<p align="right">Total de la Venta: $39.00</p>		        	
		        </Dialog>

		    <br /><br /><br />
	      </div>
      	</MuiThemeProvider>
    );
  }
}

export default App;

import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import CircularProgress from 'material-ui/CircularProgress';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';


import './App.css';
import Table16 from './Table16.js';

export default class Form extends React.Component{
	state = {
		firstName: "",
		lastName: "",
		username: "",
		email: "",
		password: "",
		open: false
	}


	handleOpen = () => {
    	this.setState({open: true});
  	};

	handleClose = () => {
	    this.setState({open: false});
	};

	change = (e) => {
		this.props.onChange({ [e.target.name]: e.target.value})
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	onSubmit = e => {
		e.preventDefault();
		//this.props.onSubmit(this.state);
		//console.log(this.state);
		this.setState({
			firstName: "",
			lastName: "",
			username: "",
			email: "",
			password: ""
		});
		this.props.onChange({
			firstName: "",
			lastName: "",
			username: "",
			email: "",
			password: ""
		});
	};

	  state = {
    	value: 1,
  	  };

  		handleChange = (event, index, value) => this.setState({value});

	render(){

		const actions = [
	      <FlatButton
	        label="Cancelar"
	        primary={true}
	        onClick={this.handleClose}
	      />,
	      <FlatButton
	        label="Aceptar"
	        primary={true}
	        keyboardFocused={true}
	        onClick={this.handleClose}
	      />,
    	];

		return (
		<div>
			<form>
			    <TextField
			    name="prep"
			    hintText="896876"
			    floatingLabelText="Presupuesto N°"
			    value={this.state.prep}
				onChange = {e => this.change(e)}
			    floatingLabelFixed
			    style = {{width: 800}}
			    />
				<br /><br /><br />
				<RaisedButton label="Buscar" onClick={this.handleOpen} primary style='' />
		        <Dialog
		          title="Buscando Presupuesto Solicitado"
		          actions={actions}
		          modal={false}
		          open={this.state.open}
		          onRequestClose={this.handleClose}
		        >
		       	Espere un momento, por favor
		        <p className="App-intro4"> <CircularProgress /> </p>
		        </Dialog>
		        <br /><br />
			    <TextField
			    name="firstName"
			    hintText="Sergio"
			    floatingLabelText="Nombre(s)"
			    value={this.state.firstName}
			    disabled={true}
				onChange = {e => this.change(e)}
			    floatingLabelFixed
			    style = {{width: 800}}
			    />
			    <TextField
			    name="dir"
			    hintText="Colonia Revolucion Verde"
			    floatingLabelText="Direccion"
			    value={this.state.dir}
			    disabled={true}
				onChange = {e => this.change(e)}
			    floatingLabelFixed
			    style = {{width: 800}}
			    />
				<br />
			    <TextField
			    name="cd"
			    hintText="Ciudad Victoria"
			    floatingLabelText="Ciudad"
			    value={this.state.cd}
			    disabled={true}
				onChange = {e => this.change(e)}
			    floatingLabelFixed
			    style = {{width: 800}}
			    />
				<br />
			    <TextField
			    name="tel"
			    hintText="834615792"
			    floatingLabelText="Telefono"
			    value={this.state.tel}
			    disabled={true}
				onChange = {e => this.change(e)}
			    floatingLabelFixed
			    style = {{width: 800}}
			    />
				<br />
				<DatePicker
				hintText="2017/11/21"
				floatingLabelText="Fecha Solicitud"
			    textFieldStyle={{width: '59%'}}
			    disabled={true}
			    floatingLabelFixed
			    />
			    <br />
			    <TextField
			    name="pago"
			    hintText="Credito"
			    floatingLabelText="Metodo de pago"
			    value={this.state.pago}
			    disabled={true}
				onChange = {e => this.change(e)}
			    floatingLabelFixed
			    style = {{width: 800}}
			    />
				<br /><br />

			</form>
	      </div>
		);
	}

}
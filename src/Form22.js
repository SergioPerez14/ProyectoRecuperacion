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
			    name="id"
			    hintText="Taller01"
			    floatingLabelText="Clave"
			    value={this.state.id}
				onChange = {e => this.change(e)}
			    floatingLabelFixed
			    style = {{width: 800}}
			    />
				<br /><br /><br />
				<RaisedButton label="Buscar" onClick={this.handleOpen} primary style='' />
		        <Dialog
		          title="Buscando Informacion del Taller"
		          actions={actions}
		          modal={false}
		          open={this.state.open}
		          onRequestClose={this.handleClose}
		        >
		        Espere un momento, por favor
		        <p className="App-intro4"> <CircularProgress /> </p>
		        </Dialog>
		        <br /><br /><br />
			    <TextField
			    name="firstName"
			    hintText="Taller R/G"
			    floatingLabelText="Nombre"
			    value={this.state.firstName}
			    disabled={true}
				onChange = {e => this.change(e)}
			    floatingLabelFixed
			    style = {{width: 800}}
			    />
				<br />
			    <TextField
			    name="descp"
			    hintText="Este taller permite el proceso para la reclamacion por garantia..."
			    floatingLabelText="Descripcion"
			    value={this.state.descp}
			    disabled={true}
				onChange = {e => this.change(e)}
			    floatingLabelFixed
			    style = {{width: 800}}
			    />
				<br />
				<DatePicker
				hintText="2017-11-21"
				floatingLabelText="Fecha"
				disabled={true}
			    textFieldStyle={{width: '59%'}}
			    floatingLabelFixed
			    />
				<br />
			    <TextField
			    name="email"
			    hintText="taller01@mail.com"
			    floatingLabelText="Email de Contacto"
			    value={this.state.email}
			    disabled={true} 
				onChange = {e => this.change(e)}
			    floatingLabelFixed
			    style = {{width: 800}}
			    />
			    <br />
			    <TextField
			    name="phone"
			    hintText="834165782"
			    floatingLabelText="Telefono"
			    value={this.state.phone}
			    disabled={true} 
				onChange = {e => this.change(e)}
			    floatingLabelFixed
			    style = {{width: 800}}
			    />
				<br />
				<br />
				<br />

				<br />
				<br />
				<br />
			</form>
	      </div>
		);
	}

}
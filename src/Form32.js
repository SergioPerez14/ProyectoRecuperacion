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
			    name="codigo"
			    hintText=""
			    floatingLabelText="Codigo"
			    value={this.state.codigo}
				onChange = {e => this.change(e)}
			    floatingLabelFixed
			    style = {{width: 800}}
			    />
				<br />
			<TextField
			    name="cuenta"
			    //hintText="Cobranzas Pendientes"
			    floatingLabelText="Cuenta"
			    value={this.state.cuenta}
				onChange = {e => this.change(e)}
			    floatingLabelFixed
			    style = {{width: 800}}
			    />
				<br />
			<TextField
			    name="firstName"
			    //hintText="Cobranzas Pendientes"
			    floatingLabelText="Nombre(s)"
			    value={this.state.firstName}
				onChange = {e => this.change(e)}
			    floatingLabelFixed
			    style = {{width: 800}}
			    />
				<br />
				<DatePicker
				hintText="2017-11-21"
				floatingLabelText="Fecha Inicial"
			    textFieldStyle={{width: '59%'}}
			    floatingLabelFixed
			    />
				<br />
				<DatePicker
				hintText="2017-11-21"
				floatingLabelText="Fecha Final"
			    textFieldStyle={{width: '59%'}}
			    floatingLabelFixed
			    />
				<br />
			<TextField
			    name="numt"
			    //hintText="Cobranzas Pendientes"
			    floatingLabelText="No. de Tarjeta"
			    value={this.state.numt}
				onChange = {e => this.change(e)}
			    floatingLabelFixed
			    style = {{width: 800}}
			    />
				<br />
			<TextField
			    name="prec"
			    //hintText="Cobranzas Pendientes"
			    floatingLabelText="Pagos recibidos"
			    value={this.state.prec}
				onChange = {e => this.change(e)}
			    floatingLabelFixed
			    style = {{width: 800}}
			    />
				<br />
			<TextField
			    name="mont"
			    //hintText="Cobranzas Pendientes"
			    floatingLabelText="Monto"
			    value={this.state.mont}
				onChange = {e => this.change(e)}
			    floatingLabelFixed
			    style = {{width: 800}}
			    />
				<br />
			<TextField
			    name="estado"
			    //hintText="Cobranzas Pendientes"
			    floatingLabelText="Estado"
			    value={this.state.estado}
				onChange = {e => this.change(e)}
			    floatingLabelFixed
			    style = {{width: 800}}
			    />
				<br /><br /><br />
				<RaisedButton label="Realizar Cobranza" onClick={this.handleOpen} primary style='' />
		        <Dialog
		          title="Recopilando la informacion necesaria"
		          actions={actions}
		          modal={false}
		          open={this.state.open}
		          onRequestClose={this.handleClose}
		        >
		       	Espere un momento, por favor
		        <p className="App-intro4"> <CircularProgress /> </p>
		        </Dialog>
				<br />
				<br />

			</form>
	      </div>
		);
	}

}
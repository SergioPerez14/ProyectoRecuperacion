import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';

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
			    name="clave"
			    hintText="1530083"
			    floatingLabelText="Clave"
			    value={this.state.clave}
				onChange = {e => this.change(e)}
			    floatingLabelFixed
			    style = {{width: 800}}
			    />
				<br /><br />
				<RaisedButton label="Buscar" onClick={this.handleOpen} primary style='' />
		        <Dialog
		          title="Usuario Encontrado"
		          actions={actions}
		          modal={false}
		          open={this.state.open}
		          onRequestClose={this.handleClose}
		        >
		        La clave del usuario se encontro
		        </Dialog>
		        <br />
			    <TextField
			    name="firstName"
			    hintText="Alejandro"
			    disabled={true}
			    floatingLabelText="Nombre(s)"
			    value={this.state.firstName}
				onChange = {e => this.change(e)}
			    floatingLabelFixed
			    style = {{width: 800}}
			    />
		        <br />
			    <TextField
			    name="lastName"
			    disabled={true}
			    hintText="Perez"
			    floatingLabelText="Apellidos"
			    value={this.state.lastName} 
				onChange = {e => this.change(e)}
			    floatingLabelFixed
			    style = {{width: 800}}
			    />
				<br />
				<DatePicker
			    disabled={true}
			    hintText="2015-11-21"
				floatingLabelText="Fecha Ingreso"
			    textFieldStyle={{width: '59%'}}
			    floatingLabelFixed
			    />
				<br />
			    <TextField
			    disabled={true}
			    name="username"
			    hintText="1530083"
			    floatingLabelText="Username"
			    value={this.state.username} 
				onChange = {e => this.change(e)}
			    floatingLabelFixed
			    style = {{width: 800}}
			    />
				<br />
			    <TextField
			    name="email"
			    disabled={true}
			    hintText="1530083@upv.edu.mx"
			    floatingLabelText="Email"
			    value={this.state.email} 
				onChange = {e => this.change(e)}
			    floatingLabelFixed
			    style = {{width: 800}}
			    />
				<br />
				<br />
				<br />


	        <RaisedButton label="Eliminar" onClick={this.handleOpen} primary style='' />
		        <Dialog
		          title="Usuario Eliminado"
		          actions={actions}
		          modal={false}
		          open={this.state.open}
		          onRequestClose={this.handleClose}
		        >
		          El usuario ha sido eliminado correctamente
		        </Dialog>

				<br />
				<br />
				<br />
			</form>
	      </div>
		);
	}

}
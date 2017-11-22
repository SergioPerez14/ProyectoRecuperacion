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
			<form>
			    <TextField
			    name="firstName"
			    //hintText="First Name"
			    floatingLabelText="Nombre(s)"
			    value={this.state.firstName}
				onChange = {e => this.change(e)}
			    floatingLabelFixed
			    style = {{width: 800}}
			    />
				<br />
			    <TextField
			    name="lastName"
			    //hintText="Last Name"
			    floatingLabelText="Apellidos"
			    value={this.state.lastName} 
				onChange = {e => this.change(e)}
			    floatingLabelFixed
			    style = {{width: 800}}
			    />
				<br />
				<DatePicker
				floatingLabelText="Fecha Ingreso"
			    textFieldStyle={{width: '59%'}}
			    floatingLabelFixed
			    />
				<br />
			    <TextField
			    name="username"
			    //hintText="Email"
			    floatingLabelText="Username"
			    value={this.state.username} 
				onChange = {e => this.change(e)}
			    floatingLabelFixed
			    style = {{width: 800}}
			    />
				<br />
			    <TextField
			    name="email"
			    //hintText="Email"
			    floatingLabelText="Email"
			    value={this.state.email} 
				onChange = {e => this.change(e)}
			    floatingLabelFixed
			    style = {{width: 800}}
			    />
				<br />
			    <TextField
			    name="password"
			    //hintText="Password"
			    floatingLabelText="Contraseña"
			    type='password'
			    value={this.state.password} 
				onChange = {e => this.change(e)}
			    floatingLabelFixed
			    style = {{width: 800}}
			    />
				<br />
				<br />
				<br />

	      <div>
	        <RaisedButton label="Guardar" onClick={this.handleOpen} primary style='' />
		        <Dialog
		          title="Usuario Añadido"
		          actions={actions}
		          modal={false}
		          open={this.state.open}
		          onRequestClose={this.handleClose}
		        >
		          El usuario se ha guardado correctamente
		        </Dialog>
	      </div>
				<br />
				<br />
				<br />
			</form>

		);
	}

}
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
			    name="id"
			    //hintText="First Name"
			    floatingLabelText="Codigo"
			    value={this.state.id}
				onChange = {e => this.change(e)}
			    floatingLabelFixed
			    style = {{width: 800}}
			    />
				<br />
			    <TextField
			    name="firstName"
			    //hintText="Last Name"
			    floatingLabelText="Nombre"
			    value={this.state.firstName} 
				onChange = {e => this.change(e)}
			    floatingLabelFixed
			    style = {{width: 800}}
			    />
				<br />
				<DatePicker
				floatingLabelText="Fecha de Captura"
			    textFieldStyle={{width: '59%'}}
			    floatingLabelFixed
			    />
				<br />
			    <TextField
			    name="unidades"
			    //hintText="Email"
			    floatingLabelText="Unidades"
			    value={this.state.unidades} 
				onChange = {e => this.change(e)}
			    floatingLabelFixed
			    style = {{width: 800}}
			    />
				<br />
			    <TextField
			    name="descripcion"
			    //hintText="Email"
			    floatingLabelText="Descripcion"
			    value={this.state.descripcion} 
				onChange = {e => this.change(e)}
			    floatingLabelFixed
			    style = {{width: 800}}
			    />
				<br />
			    <TextField
			    name="brand"
			    //hintText="Password"
			    floatingLabelText="Marca"
			    value={this.state.brand} 
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
		          title="Producto Añadido"
		          actions={actions}
		          modal={false}
		          open={this.state.open}
		          onRequestClose={this.handleClose}
		        >
		          El producto se ha guardado correctamente
		        </Dialog>
	      </div>
				<br />
				<br />
				<br />
			</form>

		);
	}

}
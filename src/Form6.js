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
			    name="firstName"
			    hintText="Sergio"
			    floatingLabelText="Nombre(s)"
			    value={this.state.firstName}
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
		          Se han encontrado varios resultados
		        </Dialog>

				<br />
				<br />
				<br />
			</form>
	      </div>
		);
	}

}
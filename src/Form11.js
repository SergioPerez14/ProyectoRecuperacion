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
			    name="id"
			    hintText="Producto3"
			    floatingLabelText="Codigo"
			    value={this.state.id}
				onChange = {e => this.change(e)}
			    floatingLabelFixed
			    style = {{width: 800}}
			    />
				<br />
	      	 <TextField
			    name="units"
			    hintText="2"
			    floatingLabelText="Cantidad"
			    value={this.state.units}
				onChange = {e => this.change(e)}
			    floatingLabelFixed
			    style = {{width: 800}}
			    />
				<br /><br /><br />
				<RaisedButton label="Añadir a la Venta" onClick={this.handleOpen} primary style='' />
		        <Dialog
		          title="Producto Disponible"
		          actions={actions}
		          modal={false}
		          open={this.state.open}
		          onRequestClose={this.handleClose}
		        >
		        Productos añadidos a la venta
		        </Dialog>
		        <br /><br /><br />
				<p><h3> Detalles de la Venta </h3></p>
				<br />
				<br />
	      	 <TextField
			    name="folio"
			    hintText="27235"
			    floatingLabelText="Clave de Venta"
			    value={this.state.folio}
			    disabled={true}
				onChange = {e => this.change(e)}
			    floatingLabelFixed
			    style = {{width: 800}}
			    />


			</form>
	      </div>
		);
	}

}
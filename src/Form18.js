import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import CircularProgress from 'material-ui/CircularProgress';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

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
			    hintText="ODS1"
			    floatingLabelText="Clave de Orden"
			    value={this.state.id}
				onChange = {e => this.change(e)}
			    floatingLabelFixed
			    style = {{width: 800}}
			    />
				<br /><br /><br />
				<RaisedButton label="Buscar" onClick={this.handleOpen} primary style='' />
		        <Dialog
		          title="Buscando Orden de Servicio"
		          actions={actions}
		          modal={false}
		          open={this.state.open}
		          onRequestClose={this.handleClose}
		        >
		        Espere un momento, por favor
		        <p className="App-intro4"> <CircularProgress /> </p>
		        </Dialog>
				<br /><br /><br />
			<p className="App-intro5"><b> Datos del Cliente </b></p>
				<br />
				<TextField
			    name="company"
			    hintText="Honda S.A"
			    floatingLabelText="Empresa"
			    value={this.state.id}
			    disabled={true}
				onChange = {e => this.change(e)}
			    floatingLabelFixed
			    style = {{width: 800}}
			    />
				<br />
	      	 <TextField
			    name="name"
			    hintText="Juan"
			    floatingLabelText="Nombre"
			    value={this.state.name}
			    disabled={true}
				onChange = {e => this.change(e)}
			    floatingLabelFixed
			    style = {{width: 800}}
			    />
			    <br />
	      	 <TextField
			    name="rfc"
			    hintText="ADASDSVD27235"
			    floatingLabelText="RFC"
			    value={this.state.rfc}
			    disabled={true}
				onChange = {e => this.change(e)}
			    floatingLabelFixed
			    style = {{width: 800}}
			    />
			    <br />
			    <br />
			    <p className="App-intro5"><b> Tipo de Servicio </b></p>
				<br />
		        <SelectField
		          floatingLabelText=""
		          value={this.state.value}
		          disabled={true}
		          onChange={this.handleChange}
		          style = {{width: 800}}
		        >
		          <MenuItem value={1} primaryText="Mantenimiento Regular" />
		          <MenuItem value={2} primaryText="Reparacion" />
		          <MenuItem value={2} primaryText="Reclamo de Garantia" />
		          <MenuItem value={3} primaryText="Verificacion" />
		        </SelectField>
		        <br /><br />
   			    <p className="App-intro5"><b> Datos del Vehiculo </b></p>
				<br />
	      	 <TextField
			    name="model"
			    hintText="CGL-125"
			    floatingLabelText="Modelo"
			    value={this.state.model}
			    disabled={true}
				onChange = {e => this.change(e)}
			    floatingLabelFixed
			    style = {{width: 800}}
			    />
			    <br />
	      	 <TextField
			    name="ano"
			    hintText="2008"
			    floatingLabelText="Año de Fabricacion"
			    value={this.state.ano}
			    disabled={true}
				onChange = {e => this.change(e)}
			    floatingLabelFixed
			    style = {{width: 800}}
			    />
			    <br />
	      	 <TextField
			    name="km"
			    hintText="10053"
			    floatingLabelText="Kilometros"
			    value={this.state.km}
			    disabled={true}
				onChange = {e => this.change(e)}
			    floatingLabelFixed
			    style = {{width: 800}}
			    />
				<br />
				<br />
			</form>
	      </div>
		);
	}

}
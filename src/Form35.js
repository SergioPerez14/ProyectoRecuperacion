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
	            <SelectField
		          value={this.state.value}
		          onChange={this.handleChange}
		          style = {{width: 800}}
		          disabled={true}
		        >
		          <MenuItem value={1} primaryText="Cobranzas atrasadas con los pagos" />
		        </SelectField>
				<br /><br /><br />
				<RaisedButton label="Buscar" onClick={this.handleOpen} primary style='' />
		        <Dialog
		          title="Procesando la solicitud"
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
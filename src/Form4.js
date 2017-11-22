import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';

export default class Form extends React.Component{
	state = {
		firstName: "",
		lastName: "",
		username: "",
		email: "",
		password: ""
	}

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
		return (
			<form>
			    <TextField
			    name="username"
			    floatingLabelText="Username"
			    value={this.state.username} 
				onChange = {e => this.change(e)}
			    floatingLabelFixed
			    style = {{width: 800}}
			    />
				<br /><br /><br /><br />
			    <TextField
			    name="password"
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
				<br />
				<br />
				<RaisedButton label="Iniciar Sesion" onClick={e => this.onSubmit(e)} primary style='' />
				<br />
				<br />
				<br />
			</form>

		);
	}

}
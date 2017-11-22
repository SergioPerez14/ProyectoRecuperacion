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

    	const styles = {
		  headline: {
		    fontSize: 24,
		    paddingTop: 16,
		    marginlelf: 12,
		    fontWeight: 400,
		  },
		};

		return (
	      <div>
	      	<form>
			<Tabs className="App-Tab">
			    <Tab label="Taller de Sistemas" >
			      <div>
			        <h2 style={styles.headline}>Descripcion</h2>
			        <p className="App-Tab2">
			          Dentro del taller de sistemas se controla la mayor parte de administracion de este sistema, asi como el buen uso de la informacion. La informática, también llamada computación, es una ciencia que estudia métodos, técnicas, procesos, con el fin de almacenar, procesar y transmitir información y datos en formato digital. La informática, que se ha desarrollado rápidamente a partir de la segunda mitad del siglo XX con la aparición de tecnologías como el circuito integrado, el Internet y el teléfono móvil, es la rama de la tecnología que estudia el tratamiento automático de la información.
			        </p>
			      </div>
			    </Tab>
			    <Tab label="Taller Mecanico" >
			      <div>
			        <h2 style={styles.headline}>Descripcion</h2>
			        <p className="App-Tab2">
			          Un taller mecánico es un lugar donde uno o más técnicos mecánicos reparan automóviles, motocicletas y otros vehículos. Mecánico es la denominación genérica que reciben los profesionales que se ocupan de la construcción, montaje y mantenimiento de los equipos industriales y maquinarias.

Existen mecánicos especializados en desarrollar tareas específicas. En los talleres y fábricas de construcción de equipos y maquinaria, los mecánicos se especializan según la máquina herramienta que manejen, por ejemplo: ajustadores, torneros, fresadores, rectificadores, soldadores, etc. Los mecánicos que se ocupan del montaje de maquinaria se denominan mecánicos montadores, mientras que a los mecánicos que se ocupan del mantenimiento de maquinaria reciben el nombre de: mecánicos de automoción, mecánicos de barcos, mecánicos de trenes, mecánicos de aviones, etc.
			        </p>
			      </div>
			    </Tab>
			</Tabs>
				<br /><br /><br />
			</form>
	      </div>
		);
	}

}
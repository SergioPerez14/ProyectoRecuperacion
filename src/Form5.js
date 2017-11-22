import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

export default class Form extends React.Component{

	render(){

			const styles = {
			  root: {
			    display: 'flex',
			    flexWrap: 'wrap',
			    justifyContent: 'space-around',
			  },
			  gridList: {
			    width: 800,
			    height: 750,
			    overflowY: 'auto',
			  },
			};

			const tilesData = [
			  {
			    img: "./ej.jpg",
			    title: 'Producto Destacado',
			    author: 'Sergio',
			    featured: true,
			  },
			  {
			    img: 'images/grid-list/burger-827309_640.jpg',
			    title: 'Producto 2',
			    author: 'pashminu',
			  },
			  {
			    img: 'images/grid-list/camera-813814_640.jpg',
			    title: 'Prodcuto 3',
			    author: 'Danson67',
			  },
			  {
			    img: 'images/grid-list/morning-819362_640.jpg',
			    title: 'Producto Destacado',
			    author: 'fancycrave1',
			    featured: true,
			  },
			  {
			    img: 'images/grid-list/hats-829509_640.jpg',
			    title: 'Producto 4',
			    author: 'Hans',
			  },
			  {
			    img: 'images/grid-list/honey-823614_640.jpg',
			    title: 'Producto 5',
			    author: 'fancycravel',
			  },
			  {
			    img: 'images/grid-list/vegetables-790022_640.jpg',
			    title: 'Producto 6',
			    author: 'jill111',
			  },
			  {
			    img: 'images/grid-list/water-plant-821293_640.jpg',
			    title: 'Producto 7',
			    author: 'BkrmadtyaKarki',
			  },
			];

		return (

			  <div style={styles.root}>
			    <GridList
			      cols={2}
			      cellHeight={200}
			      padding={1}
			      style={styles.gridList}
			    >
			      {tilesData.map((tile) => (
			        <GridTile
			          key={tile.img}
			          title={tile.title}
			          actionIcon={<IconButton><StarBorder color="black" /></IconButton>}
			          actionPosition="left"
			          titlePosition="top"
			          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
			          cols={tile.featured ? 2 : 1}
			          rows={tile.featured ? 2 : 1}
			        >
			          <img src={tile.img} />
			        </GridTile>
			      ))}
			    </GridList>
			  </div>

		);
	}

}
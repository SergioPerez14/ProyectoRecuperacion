import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


export default () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>Clave</TableHeaderColumn>
        <TableHeaderColumn>Nombre</TableHeaderColumn>
        <TableHeaderColumn>Apellido</TableHeaderColumn>
        <TableHeaderColumn>Email</TableHeaderColumn>
        <TableHeaderColumn>Username</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn>1530073</TableRowColumn>
        <TableRowColumn>Sergio</TableRowColumn>
        <TableRowColumn>Perez</TableRowColumn>
        <TableRowColumn>1530073@upv.edu.mx</TableRowColumn>
        <TableRowColumn>1530073</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>1530074</TableRowColumn>
        <TableRowColumn>Sergio</TableRowColumn>
        <TableRowColumn>Mendez</TableRowColumn>
        <TableRowColumn>1530074@upv.edu.mx</TableRowColumn>
        <TableRowColumn>1530074</TableRowColumn>        
      </TableRow>
      <TableRow>
        <TableRowColumn>1530075</TableRowColumn>
        <TableRowColumn>Sergio</TableRowColumn>
        <TableRowColumn>Hernandez</TableRowColumn>
        <TableRowColumn>1530075@upv.edu.mx</TableRowColumn>
        <TableRowColumn>1530075</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>1530076</TableRowColumn>
        <TableRowColumn>Sergio</TableRowColumn>
        <TableRowColumn>Picazo</TableRowColumn>
        <TableRowColumn>1530076@upv.edu.mx</TableRowColumn>
        <TableRowColumn>1530076</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>1530077</TableRowColumn>
        <TableRowColumn>Sergio</TableRowColumn>
        <TableRowColumn>Garcia</TableRowColumn>
        <TableRowColumn>1530077@upv.edu.mx</TableRowColumn>
        <TableRowColumn>1530077</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
);
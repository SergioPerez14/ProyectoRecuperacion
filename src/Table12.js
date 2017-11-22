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
        <TableHeaderColumn>Nombre</TableHeaderColumn>
        <TableHeaderColumn>Trabajo Actual</TableHeaderColumn>
        <TableHeaderColumn>Estado</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn>Taller Mecanico</TableRowColumn>
        <TableRowColumn>Si</TableRowColumn>
        <TableRowColumn>No disponible</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Taller R/G</TableRowColumn>
        <TableRowColumn>Ninguno</TableRowColumn>
        <TableRowColumn>Disponible!</TableRowColumn>
      </TableRow>
      </TableBody>
  </Table>
);
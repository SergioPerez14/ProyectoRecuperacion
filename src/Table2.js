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
        <TableHeaderColumn>Codigo</TableHeaderColumn>
        <TableHeaderColumn>Nombre</TableHeaderColumn>
        <TableHeaderColumn>Unidades</TableHeaderColumn>
        <TableHeaderColumn>Descripcion</TableHeaderColumn>
        <TableHeaderColumn>Marca</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn>Jumex250</TableRowColumn>
        <TableRowColumn>Jugo de Manzana</TableRowColumn>
        <TableRowColumn>20</TableRowColumn>
        <TableRowColumn>Jugo de 250ml</TableRowColumn>
        <TableRowColumn>Jumex</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
);
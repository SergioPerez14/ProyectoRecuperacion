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
        <TableHeaderColumn>Producto</TableHeaderColumn>
        <TableHeaderColumn>Cantidad</TableHeaderColumn>
        <TableHeaderColumn>Descripcion</TableHeaderColumn>
        <TableHeaderColumn>Unidades</TableHeaderColumn>
        <TableHeaderColumn>Precio Unitario</TableHeaderColumn>
        <TableHeaderColumn>Precio</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn>Producto1</TableRowColumn>
        <TableRowColumn>1</TableRowColumn>
        <TableRowColumn>Placa 10</TableRowColumn>
        <TableRowColumn>102</TableRowColumn>
        <TableRowColumn>442.00</TableRowColumn>
        <TableRowColumn>442.00</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Producto2</TableRowColumn>
        <TableRowColumn>1</TableRowColumn>
        <TableRowColumn>Placa 20</TableRowColumn>
        <TableRowColumn>100</TableRowColumn>
        <TableRowColumn>800.00</TableRowColumn>
        <TableRowColumn>80000.00</TableRowColumn>
      </TableRow>
      </TableBody>
  </Table>
);
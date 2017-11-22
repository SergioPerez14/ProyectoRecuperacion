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
        <TableHeaderColumn>Precio Unitario</TableHeaderColumn>
        <TableHeaderColumn>Unidades Vendidas</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn>1</TableRowColumn>
        <TableRowColumn>Placa 10</TableRowColumn>
        <TableRowColumn>Descripcion 1</TableRowColumn>
        <TableRowColumn>$ 442.00</TableRowColumn>
        <TableRowColumn>102</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>2</TableRowColumn>
        <TableRowColumn>Placa 20</TableRowColumn>
        <TableRowColumn>Descripcion 2</TableRowColumn>
        <TableRowColumn>$ 800.00</TableRowColumn>
        <TableRowColumn>100</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>3</TableRowColumn>
        <TableRowColumn>Placa 30</TableRowColumn>
        <TableRowColumn>Descripcion 3</TableRowColumn>
        <TableRowColumn>$ 500.00</TableRowColumn>
        <TableRowColumn>0</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>4</TableRowColumn>
        <TableRowColumn>Placa 40</TableRowColumn>
        <TableRowColumn>Descripcion 4</TableRowColumn>
        <TableRowColumn>$ 900.00</TableRowColumn>
        <TableRowColumn>0</TableRowColumn>
      </TableRow>
      </TableBody>
  </Table>
);
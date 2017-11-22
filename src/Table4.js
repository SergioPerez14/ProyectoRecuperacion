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
        <TableHeaderColumn>Precio</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn>Producto</TableRowColumn>
        <TableRowColumn>Jugo 1</TableRowColumn>
        <TableRowColumn>1</TableRowColumn>
        <TableRowColumn>Jugo de 250ml</TableRowColumn>
        <TableRowColumn>$ 5.00</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Producto1</TableRowColumn>
        <TableRowColumn>Jugo 2</TableRowColumn>
        <TableRowColumn>1</TableRowColumn>
        <TableRowColumn>Jugo de 250ml</TableRowColumn>
        <TableRowColumn>$ 8.00</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Producto2</TableRowColumn>
        <TableRowColumn>Jugo 3</TableRowColumn>
        <TableRowColumn>1</TableRowColumn>
        <TableRowColumn>Jugo de 250ml</TableRowColumn>
        <TableRowColumn>$ 10.00</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Producto3</TableRowColumn>
        <TableRowColumn>Jugo 4</TableRowColumn>
        <TableRowColumn>2</TableRowColumn>
        <TableRowColumn>Jugo de 250ml</TableRowColumn>
        <TableRowColumn>$ 8.00</TableRowColumn>
      </TableRow>
      </TableBody>
  </Table>
);
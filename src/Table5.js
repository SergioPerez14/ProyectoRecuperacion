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
        <TableHeaderColumn>Clave de Venta</TableHeaderColumn>
        <TableHeaderColumn>Total de Productos</TableHeaderColumn>
        <TableHeaderColumn>Estado de la Venta</TableHeaderColumn>
        <TableHeaderColumn>Total a pagar</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn>27235</TableRowColumn>
        <TableRowColumn>5</TableRowColumn>
        <TableRowColumn>Cancelada</TableRowColumn>
        <TableRowColumn>$ 39.00</TableRowColumn>
      </TableRow>
      </TableBody>
  </Table>
);
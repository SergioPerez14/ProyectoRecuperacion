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
        <TableHeaderColumn>Num. ventas</TableHeaderColumn>
        <TableHeaderColumn>Producto mas Vendido</TableHeaderColumn>
        <TableHeaderColumn>Dinero Recaudado</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn>2</TableRowColumn>
        <TableRowColumn>Placa 10</TableRowColumn>
        <TableRowColumn>$ 94512.72</TableRowColumn>
      </TableRow>
      </TableBody>
  </Table>
);
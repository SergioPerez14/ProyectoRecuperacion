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
        <TableHeaderColumn>Num. Presupuestos</TableHeaderColumn>
        <TableHeaderColumn>Producto mas solicitado</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn>1</TableRowColumn>
        <TableRowColumn>Placa 10</TableRowColumn>
      </TableRow>
      </TableBody>
  </Table>
);
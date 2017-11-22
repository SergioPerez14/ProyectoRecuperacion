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
        <TableHeaderColumn>Clave Cobranza</TableHeaderColumn>
        <TableHeaderColumn>Cuenta</TableHeaderColumn>
        <TableHeaderColumn>Num. Tarjeta</TableHeaderColumn>
        <TableHeaderColumn>Pagos realizados</TableHeaderColumn>
        <TableHeaderColumn>Fecha Final</TableHeaderColumn>
        <TableHeaderColumn>Estado</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn>Cobranza9</TableRowColumn>
        <TableRowColumn>6564456489652</TableRowColumn>
        <TableRowColumn>101010101</TableRowColumn>
        <TableRowColumn>2</TableRowColumn>
        <TableRowColumn>----</TableRowColumn>
        <TableHeaderColumn>Falta Pagar</TableHeaderColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Cobranza10</TableRowColumn>
        <TableRowColumn>6564456489753</TableRowColumn>
        <TableRowColumn>010101010</TableRowColumn>
        <TableRowColumn>3</TableRowColumn>
        <TableRowColumn>----</TableRowColumn>
        <TableHeaderColumn>Falta Pagar</TableHeaderColumn>
      </TableRow>
      </TableBody>
  </Table>
);
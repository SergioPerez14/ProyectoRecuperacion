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
        <TableRowColumn>Cobranza1</TableRowColumn>
        <TableRowColumn>1090967825</TableRowColumn>
        <TableRowColumn>333333333</TableRowColumn>
        <TableRowColumn>24</TableRowColumn>
        <TableRowColumn>2017-11-21</TableRowColumn>
        <TableHeaderColumn>Finalizado</TableHeaderColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Cobranza2</TableRowColumn>
        <TableRowColumn>2031456454</TableRowColumn>
        <TableRowColumn>555555555</TableRowColumn>
        <TableRowColumn>18</TableRowColumn>
        <TableRowColumn>2017-11-5</TableRowColumn>
        <TableHeaderColumn>Finalizado</TableHeaderColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Cobranza3</TableRowColumn>
        <TableRowColumn>304575125</TableRowColumn>
        <TableRowColumn>777777777</TableRowColumn>
        <TableRowColumn>6</TableRowColumn>
        <TableRowColumn>2017-11-10</TableRowColumn>
        <TableHeaderColumn>Finalizado</TableHeaderColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Cobranza4</TableRowColumn>
        <TableRowColumn>405456874</TableRowColumn>
        <TableRowColumn>999999999</TableRowColumn>
        <TableRowColumn>36</TableRowColumn>
        <TableRowColumn>2017-11-19</TableRowColumn>
        <TableHeaderColumn>Finalizado</TableHeaderColumn>
      </TableRow>
      </TableBody>
  </Table>
);
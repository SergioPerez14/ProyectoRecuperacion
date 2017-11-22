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
        <TableHeaderColumn>Fecha Inicio</TableHeaderColumn>
        <TableHeaderColumn>Estado</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn>Cobranza5</TableRowColumn>
        <TableRowColumn>9987809151</TableRowColumn>
        <TableRowColumn>222222222</TableRowColumn>
        <TableRowColumn>10</TableRowColumn>
        <TableRowColumn>2017-01-21</TableRowColumn>
        <TableRowColumn>Pendiente</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Cobranza6</TableRowColumn>
        <TableRowColumn>5651221311</TableRowColumn>
        <TableRowColumn>444444444</TableRowColumn>
        <TableRowColumn>9</TableRowColumn>
        <TableRowColumn>2017-03-01</TableRowColumn>
        <TableRowColumn>Pendiente</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Cobranza7</TableRowColumn>
        <TableRowColumn>6541313543</TableRowColumn>
        <TableRowColumn>666666666</TableRowColumn>
        <TableRowColumn>12</TableRowColumn>
        <TableRowColumn>2016-12-01</TableRowColumn>
        <TableRowColumn>Pendiente</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Cobranza8</TableRowColumn>
        <TableRowColumn>9874563123</TableRowColumn>
        <TableRowColumn>888888888</TableRowColumn>
        <TableRowColumn>7</TableRowColumn>
        <TableRowColumn>2017-04-17</TableRowColumn>
        <TableRowColumn>Pendiente</TableRowColumn>
      </TableRow>
      </TableBody>
  </Table>
);
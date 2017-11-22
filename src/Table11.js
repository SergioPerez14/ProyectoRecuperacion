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
        <TableHeaderColumn>Empresa</TableHeaderColumn>
        <TableHeaderColumn>Nombre</TableHeaderColumn>
        <TableHeaderColumn>RFC</TableHeaderColumn>
        <TableHeaderColumn>T. Servicio</TableHeaderColumn>
        <TableHeaderColumn>Modelo</TableHeaderColumn>
        <TableHeaderColumn>Año Fabricacion</TableHeaderColumn>
        <TableHeaderColumn>Kilometros</TableHeaderColumn>
        <TableHeaderColumn>Estado</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn>Honda S.A</TableRowColumn>
        <TableRowColumn>Juan</TableRowColumn>
        <TableRowColumn>ADASDSVD27235</TableRowColumn>
        <TableRowColumn>Mantenimiento Regular</TableRowColumn>
        <TableRowColumn>CGL-125</TableRowColumn>
        <TableRowColumn>2008</TableRowColumn>
        <TableRowColumn>10053</TableRowColumn>
        <TableRowColumn>En proceso...</TableRowColumn>
      </TableRow>
      </TableBody>
  </Table>
);
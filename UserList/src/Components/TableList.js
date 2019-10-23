import React from 'react';
import { connect } from 'react-redux';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


export const TableList = props => (
 
          <div>
            <Table>
              <TableHeader
                displaySelectAll={false}
                adjustForCheckbox={false}
                enableSelectAll={false}
              >
                <TableRow
                  onCellClick={(e, columnId, columnNumber) => { props.sortByColumn(columnNumber) }}
                >
                  <TableHeaderColumn value="ID">ID</TableHeaderColumn>
                  <TableHeaderColumn>firstName</TableHeaderColumn>
                  <TableHeaderColumn>lastName</TableHeaderColumn>
                  <TableHeaderColumn>dateOfBirth</TableHeaderColumn>
                  <TableHeaderColumn>company</TableHeaderColumn>
                  <TableHeaderColumn>note</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody
              displayRowCheckbox={false}
              >
                {props.rows.map((item) =>
                  <TableRow
                    key={item.id}
                  >
                    <TableRowColumn>{item.id}</TableRowColumn>
                    <TableRowColumn>{item.firstName}</TableRowColumn>
                    <TableRowColumn>{item.lastName}</TableRowColumn>
                    <TableRowColumn>{item.dateOfBirth}</TableRowColumn>
                    <TableRowColumn>{item.company}</TableRowColumn>
                    <TableRowColumn>{item.note}</TableRowColumn>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          
          </div>
        
    
 
);


export default TableList;
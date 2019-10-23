import React, { Component } from "react";
import "./Contact.css";
import PropTypes from "prop-types";
import Display from "./Display";


function Displa2y(){
  return(<h1>xxxx</h1>)
  }




export default class Contact  extends React.Component{
  render(){
  return (
    
       <tr onClick={() => Displa2y()}>
        <td>{this.props.id}</td>
        <td id = "makeTextLeft"><img src={this.props.avatar}></img>
        <span>{this.props.firstName} {this.props.lastName}</span>     </td>
        <td><span class="ss">{this.props.jobTitle}</span></td>
        <td>{this.props.email}</td>
        <td>{this.props.companyName}</td>
        </tr>
   
    );
  }
}
  Contact.propTypes = {
    name: PropTypes.string.isRequired
  };


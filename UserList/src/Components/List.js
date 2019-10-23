import React from "react";
import "./List.css";
// import the Contact component
import Contact from "./Contact";
import sortTable from "./Sort"

function addRowHandlers() {
  var i;
  var table = document.getElementById("myTable");
  var rows = table.getElementsByTagName("tr");
  for (i = 0; i < rows.length; i++) {
    var currentRow = table.rows[i];
    var createClickHandler = function(row) {
      return function() {
        var cell = row.getElementsByTagName("td")[0];
        var id = cell.innerHTML;
        alert("id:" + id);
      };
    };
    currentRow.onclick = createClickHandler(currentRow);
  }
}



class List  extends React.Component  {
 
  render() {
    
  return (
    
    <div class="fff">
    <addRowHandlers />
    <table id="myTable" align="center">
    
      <tr>
        <th>#</th>
    <th onclick="{sortTable(1)}">Name</th>
    <th>Job title</th>
    <th>Email</th>
    <th>Company</th>
  </tr>
      
      {this.props.contacts.map((c,index) => 
      <Contact id={++index} firstName={c.firstName} lastName = {c.lastName} avatar={c.avatar} jobTitle={c.jobTitle} email={c.email} companyName={c.company.name}/> 
      )}
    
     </table> 
     </div>


  ); 
} 
}

export default List;
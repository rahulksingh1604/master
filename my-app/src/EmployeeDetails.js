import { Component } from "react";
class EmployeeDetails extends Component {
  render() {
    return (
      <div>
        <h1>Employee Details</h1>
        <label>Name: </label>
        {this.props.empName}
        <br />
        <label>Age: </label>
        {this.props.empAge}
        <br />
        <label>Department: </label>
        {this.props.empDepartment}
      </div>
    );
  }
}

export default EmployeeDetails;
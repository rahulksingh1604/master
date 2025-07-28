import { Component } from "react";
import EmployeeDetails from './EmployeeDetails';

class Employee extends Component {
    constructor() {
        super();
        this.state = {
            empName: "Rahul Singh",
            empAge: 30,
            empDepartment: "IT"
        }
    }
    render() {
        return (
            <EmployeeDetails empName={this.state.empName}
                empAge={this.state.empAge}
                empDepartment={this.state.empDepartment} />
        );
    }
}

export default Employee;
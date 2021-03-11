import React, { useContext } from 'react';
import {EmployeeDataContext} from '../context/EmployeeData';
import EmployeeDetails from './EmployeeDetails';

const Employee = () => {

    const { Employees }  = useContext(EmployeeDataContext);
    //console.log(Employee);
    
    return Employees.length ? 
    <table className="table">
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Delete</th>
                <th>Edit</th>
            </tr>
        </thead>
        <tbody>
            {Employees.map( Employee => (
                <tr key={Employee.id}>
                    <EmployeeDetails Employee = {Employee} />
                </tr>
            ))}
        </tbody>
    </table> 
    : 
    <div>No data</div>;
        
    
}

export default Employee;
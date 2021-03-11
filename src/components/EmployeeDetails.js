import React, { useContext } from 'react';
import { EmployeeDataContext} from '../context/EmployeeData';

const EmployeeDetails = ({Employee}) => {

    const { dispatch } = useContext(EmployeeDataContext);

    return(
        <>
        <td>{Employee.id}</td>
        <td>{Employee.name}</td>
        <td>{Employee.email}</td>
        <td>{Employee.phone}</td>
        <td> 
            <button type="button" 
                   // Passing Action (REMOVE_EMPLOYEE)
                    onClick={ () => dispatch(
                        { type: "REMOVE_EMPLOYEE", id: Employee.id}
                    )} 
                    className="btn btn-danger">Delete</button> 
        </td>
        <td> 
            <button type="button" 
                    onClick="" 
                    className="btn btn-primary">Edit</button> 
        </td>
        </>
    )
}

export default EmployeeDetails;

/*
const EmployeeDetails = (props) => {
    return(
        <>
        <td>{props.Employee.name}</td>
        <td>{props.Employee.email}</td>
        <td>{props.Employee.phone}</td>
        <td> 
            <a href="">Delete</a> 
        </td>
        </>
    )
}
*/
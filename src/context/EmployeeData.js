import React,{ createContext, useEffect, useReducer } from 'react';
import {EmployeeReducer} from '../reducers/EmployeeReducer';

// create Context
export const EmployeeDataContext = createContext();

// Provider Component
const EmployeeDataProvider = (props) => {

    // usrReducer
    const [employees, dispatch] = useReducer(EmployeeReducer, [], 
    // Show Data from 
    () => {
        const localData = localStorage.getItem('employees');
        return localData ? JSON.parse(localData) : [];
    });  
    
    // Set Item In LocalStorage

    useEffect ( () => {
        localStorage.setItem("employees", JSON.stringify(employees))
    }, [employees]);

    return(
        // Provider
        <EmployeeDataContext.Provider value={{ Employees : employees, dispatch}}>
            {props.children}
        </EmployeeDataContext.Provider>
    );
}

export default EmployeeDataProvider







/*

import React,{ createContext, useState} from 'react';

// create Context
export const EmployeeDataContext = createContext();

// Provider Component
const EmployeeDataProvider = (props) => {

    // State
    const [employees, setEmployees ] = useState([
        {id: 1, name:'Munna', email: 'munna@gmail.com', phone: '111-111-111'},
        {id: 2, name:'Shanu', email: 'shanu@gmail.com', phone:'222-222-222'},
        {id: 3, name:'Aman', email: 'aman@gmail.com', phone:'333-333-333'}
    ]);

    // Action

    // ADD EMPLOYEE IN Input Field
    const addEmployee = employee => {
        setEmployees([...employees, employee])
    }

    // Delete Employee
    const removeEmployee = id => {
        if(window.confirm("Are you sure want to delete")){
            const filtered = employees.filter( employee => employee.id !== id);
            setEmployees(filtered);
        }        
    }   

    return(
        // Provider
        <EmployeeDataContext.Provider value={{ Employees : employees, addEmployee, removeEmployee}}>
            {props.children}
        </EmployeeDataContext.Provider>
    );
}

export default EmployeeDataProvider

*/










// // usrReducer
// const [employees, dispatch] = useReducer(EmployeeReducer, [
//     {id: 1, name:'Munna', email: 'munna@gmail.com', phone: '111-111-111'},
//     {id: 2, name:'Shanu', email: 'shanu@gmail.com', phone:'222-222-222'},
//     {id: 3, name:'Aman', email: 'aman@gmail.com', phone:'333-333-333'}
// ], 
// // Show Data from 
// () => {
// const localData = localStorage.getItem('employees');
// return localData ? JSON.parse(localData) : [];
// });
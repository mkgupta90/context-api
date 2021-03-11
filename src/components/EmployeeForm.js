import InputHook from '../hooks/InputHook';
import {EmployeeDataContext} from '../context/EmployeeData';
import { useContext } from 'react';
import uuid from 'react-uuid';

const EmployeeForm = () => {

    //const { addEmployee } = useContext(EmployeeDataContext)
    const { dispatch } = useContext(EmployeeDataContext)

    const [name, setName, clearName] =InputHook("");
    const [email, setEmail, clearEmail] = InputHook("");
    const [phone, setPhone, clearPhone] = InputHook("");

    // Handle Submit Form
    const handleSubmit = (e) => {
        e.preventDefault();
        //addEmployee({id: uuid(), name: name, email:email, phone:phone});

        // Passing Action (ADD_EMPLOYEE)
        dispatch({
            type: "ADD_EMPLOYEE",
            newEmployee : {id: uuid(), name: name, email:email, phone:phone}
        });
        clearName();
        clearEmail();
        clearPhone();
    }

    return(
        <form onSubmit={handleSubmit}>
            <h3>Add Employee</h3>
            <div className="form-group">
                <input className="form-control"
                       type="text"
                       name="name"
                       placeholder="Enter Name..."
                       value={name}
                       onChange={setName} />
            </div>
            <div className="form-group">
                <input className="form-control"
                       type="email"
                       name="email"
                       placeholder="Enter Email..."
                       value={email}
                       onChange={setEmail} />
            </div>
            <div className="form-group">
                <input className="form-control"
                       type="text"
                       name="phone"
                       placeholder="Enter Phone..."
                       value={phone}
                       onChange={setPhone} />
            </div>
            <div className="form-group">
                <input className="btn btn-info btn-block"
                       type="submit" value="Add Employee" />
            </div>
        </form>
    )
}

export default EmployeeForm;
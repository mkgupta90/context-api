import React from 'react';
import 'bootswatch/dist/materia/bootstrap.min.css';
import Navbar from './components/Navbar';
import EmployeeDataProvider from './context/EmployeeData';
import Employee from './components/Employee';
import EmployeeForm from './components/EmployeeForm';

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
      <EmployeeDataProvider>
        <EmployeeForm />
        <Employee />
      </EmployeeDataProvider>
      </div>
    </>
  );
}

export default App;


/*
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';

import UserDataProvider from './context/UserData';


import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div style={{maxWidth: "30rem", margin: "4rem auto"}}>
      <UserDataProvider>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/add' component={AddUser} />
            <Route exact path='/edit/:id' component={EditUser} />
          </Switch>
        </Router>
      </UserDataProvider>

    </div>
  );
}

export default App;

*/

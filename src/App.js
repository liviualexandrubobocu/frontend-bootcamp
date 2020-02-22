import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Link,
  Redirect
} from 'react-router-dom';
import UsersList from './components/users/users.list';
import CreateUser from './components/users/create.user';
import EditUser from './components/users/edit.user';
import Login from './components/auth/login';
import Register from './components/auth/register';

const App = () => {
  return (
    <Router>
      {/* <nav>
        <Link to="/users">List Of Users</Link>
        <Link to="/users/create">Create User</Link>
      </nav> */}
      <Redirect to='/login'/>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/users">
        <UsersList />
      </Route>
      <Route path="/users/create">
        <CreateUser />
      </Route>
      <Route path="/users/:id">
        <EditUser />
      </Route>
    </Router>
  );
}

export default App;
import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';
import UsersList from './components/users/users.list';
import CreateUser from './components/users/create.user';

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/users">List Of Users</Link>
        <Link to="/users/create">Create User</Link>
      </nav>
      <Route path="/users">
        <UsersList />
      </Route>
      <Route path="/users/create">
        <CreateUser />
      </Route>
    </Router>
  );
}

export default App;
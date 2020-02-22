import React from 'react';
import { GroupContextProvider, GroupContextConsumer } from '../../context/group.context';
import { UserContextProvider, UserContextConsumer } from '../../context/user.context';
import { appState } from '../../state/app.state';
import { Link, Redirect, useHistory } from 'react-router-dom';

const UsersList = () => {
  const history = useHistory();
  const goToEdit = (userId) => {
    history.push('/users/', userId);
  };
  return (
    <UserContextProvider value={appState.user}>
      <UserContextConsumer>
        {user => (
          <GroupContextProvider user={user}>
            <GroupContextConsumer>
              {group => (
                <div>
                  <h1>User Groups</h1>
                  <h3>{group.name}</h3>
                  {group.users.map(user => (
                    <div key={user.id}>
                      <span><b>Name:</b></span><br />
                      <span>{user.name}</span><br />
                      <span><b>Email:</b></span><br />
                      <span>{user.email}</span>
                      <a href="#" onClick={goToEdit(user.id)}>Edit</a>
                    </div>
                  ))}

                  <p>
                    {!group.added ? (
                      <button onClick={group.addUser}>
                        Add User
                        </button>
                    ) : (
                        <button onClick={group.removeUser}>
                          RemoveUser
                        </button>
                      )}
                  </p>
                </div>
              )}
            </GroupContextConsumer>
          </GroupContextProvider>
        )}
      </UserContextConsumer>
    </UserContextProvider>
  )
}

export default UsersList;

import React from 'react';
import { appState } from '../state/app.state';
import { userReducer } from '../reducers/user.reducer';

const GroupContext = React.createContext();

export const GroupContextProvider = ({ user, ...props }) => {
    const [state, dispatch] = React.useReducer(userReducer, appState.group);
    return (
        <GroupContext.Provider
            value={
                {
                    ...state,
                    addUser: () => dispatch({ type: 'addUser', payload: user }),
                    removeUser: () => dispatch({ type: 'removeUser', payload: user })
                }
            }
        >
            {props.children}
        </GroupContext.Provider>
    )
}
export const GroupContextConsumer = GroupContext.Consumer;

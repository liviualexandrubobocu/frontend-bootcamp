export const userReducer = (state, action) => {
    switch (action.type) {
        case 'addUser':
            return {
                ...state,
                users: [...state.users, action.payload],
                added: true
            }
        case 'removeUser':
            return {
                ...state,
                users: state.users.filter(user => {
                    return user.id !== action.payload.id;
                }

                ),
                added: false
            }
        default:
            return state;
    }
}
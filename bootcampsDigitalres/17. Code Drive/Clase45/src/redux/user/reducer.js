const userState = {
    currentUser: false
};

export default function userReducer(prevState = userState, action)
{
    switch (action.type) {
        case 'user/LOGIN_SUCCESS':
            return {
                currentUser: action.user
            }
            
        case 'user/LOGIN_ERROR':
        case 'user/LOGOUT':
            return {
                currentUser: false
            }
    
        default:
            return prevState;
    }
}

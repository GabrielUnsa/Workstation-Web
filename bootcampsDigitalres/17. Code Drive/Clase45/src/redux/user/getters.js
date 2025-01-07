export function isLoggedIn(state) {
    return state.user.currentUser !== false
}
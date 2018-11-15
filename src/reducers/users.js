

const initialState = {
    logined: false
}
const users = (state = initialState, action = {}) =>{
    switch(action.type){
        case 'LOGIN':
            return {...state, logined: true, }
        default:
            return state
    }
}
export default users;
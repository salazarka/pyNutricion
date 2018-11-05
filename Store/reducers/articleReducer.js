export default function(state = {}, action) {
    switch (action.type) { //the switch is going to be listening for the action
        case 'GET_ARTICLES':
            return {...state, articles: action.payload }
            //is needed a default case
        default:
            return state;
    }
}
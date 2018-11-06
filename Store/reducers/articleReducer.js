export default function(state={},action){
    switch(action.type){
        case 'GET_ARTICLES':
            return {...state,articles:action.payload}
        case 'ADD_POST':
            return {...state,postSuccess:action.payload}
        default:
            return state;
    }
}
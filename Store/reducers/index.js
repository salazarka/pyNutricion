import { combineReducers } from 'redux';
// import all the reducers that we have
import articles from './articleReducer'
const rootReducer = combineReducers({
    articles
});

export default rootReducer;
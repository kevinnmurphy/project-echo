import { combineReducers } from 'redux';
import manageSongs from './manageSongs';

const rootReducer = combineReducers({
  restaurants: manageSongs,
});

export default rootReducer;

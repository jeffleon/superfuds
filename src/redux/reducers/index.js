import favorites from "./favorites"
import {combineReducers} from 'redux';

const allreducers = combineReducers({
    favorites: favorites
})

export default allreducers
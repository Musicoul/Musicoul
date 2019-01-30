import { createStore ,combineReducers  } from 'redux';
import { reducer as formReducer } from 'redux-form'
import { myReducer } from './reducer';
import {initialStateTypes } from './initialState'
//


const rootReducer = combineReducers({
    myReducer,
    form : formReducer
})
export interface StoreType {
    myReducer :initialStateTypes,
    form : object
}

export const store = createStore(rootReducer);
store.subscribe(() => console.log("STATE CHANGED",store.getState()))
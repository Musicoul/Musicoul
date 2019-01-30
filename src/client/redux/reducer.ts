import {initialState,initialStateTypes} from './initialState'
export interface actionTypes {
    type : string,
    data : object
}
export const myReducer = (state = <initialStateTypes>initialState() , action : actionTypes) => {
    switch (action.type) {
        case "INCREASE_TEST_COUNTER":
            console.log("WORKING REDUX",state);
            return Object.assign(state,{
                testIncrementor : parseInt(state.testIncrementor) + parseInt(action.data)
            })
            break;
        default:
            return state

    }

}



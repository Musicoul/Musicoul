export interface initialStateTypes {
        csrf_token : string,
        loggedInUser : object,
        testIncrementor : number




}

export const initialState = <initialStateTypes>() => ({
    csrf_token : '',
    loggedInUser : {},
    testIncrementor : 1,

})
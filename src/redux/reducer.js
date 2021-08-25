const initialState={
    email:null,
    password:null,
    name:null,
}

const reducer=(state=initialState,action)=>
{
    switch(action.type)
    {
        case "ADD_NAME":
            console.log("inside name");
            return {...state,name:action.payload};
        case "ADD_PASSWORD":
            console.log("inside password")
            return {...state,password:action.payload};
        case "ADD_EMAIL":
            console.log("inside email")
            return {...state,email:action.payload};
        default:
            return state;
    }
}

export default reducer;
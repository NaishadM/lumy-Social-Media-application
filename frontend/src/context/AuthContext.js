import { createContext, useReducer } from "react";
import  AuthReducer  from "./AuthReducer";
const InitialState={
user:{
    _id:"620e6637e93cbad13411d2cf",
    username:"naishad",
    email:"naishad13122001@gmail.com",
    password:"$2b$10$rA8cn7WW.DI7ZFR3xslVReGrCE/21EtiSBcBcgXcZgzbUhqldBbr.",
    profilePic:"",
    coverPic:"",
    followers:["61fc05698a0d985353d883f5","61fc05808a0d985353d883f7"],
    followings:["61fc05698a0d985353d883f5","61fc05808a0d985353d883f7"],
    city:"tirupur",
    relationship:1,
    from:"tamil nadu"
},
isFetching:false,
error:false

};
export const AuthContext=createContext(InitialState);
export const AuthContextProvider=({children})=>{

    const [state, dispatch] = useReducer(AuthReducer, InitialState);
    return(
        <AuthContext.Provider value={{user:state.user,isFetching:state.isFetching,error:state.error,dispatch}}>
 {children}
    </AuthContext.Provider>
    )
}
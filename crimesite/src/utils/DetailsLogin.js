import React,{useContext} from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../context/AuthContext';


const DetailsRoute = () => {
    let {user} = useContext(AuthContext)
    return(
        user ? <Outlet/> : <Navigate to ="/loginpage"/>
    )
}

export default DetailsRoute
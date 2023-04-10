import React,{useContext} from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../context/AuthContext';


const AdminPrivateRoute = () => {
    let {user} = useContext(AuthContext)
    return(
        user ? <Outlet/> : <Navigate to ="/adminlogin"/>
    )
}

export default AdminPrivateRoute
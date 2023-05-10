import React,{useContext} from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../context/AuthContext';


const DetailsRoute = () => {
    let {isFormFilled} = useContext(AuthContext)
    return(
        isFormFilled ? <Outlet/> : <Navigate to ="/personaldetails"/>
    )
}

export default DetailsRoute
    import { createContext,useState,useEffect } from "react";
import jwt_decode from 'jwt-decode'
import {useNavigate} from 'react-router-dom'
import axios from "axios";
const AuthContext = createContext()

export default AuthContext

export const AuthProvider = ({children}) =>{
 
    
    let [authTokens,setAuthTokens]=useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [adminAuthTokens,setAdminAuthTokens]=useState(()=> localStorage.getItem('adminAuthTokens') ? JSON.parse(localStorage.getItem('adminAuthTokens')) : null)
    let[user,setUser]=useState(()=> localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)
    let[adminUser,setAdminUser]=useState(()=> localStorage.getItem('adminAuthTokens') ? jwt_decode(localStorage.getItem('adminAuthTokens')) : null)
    let[loading,setLoading] =useState(true)
    let[isFormFilled,setIsFormFilled] = useState(false)
    //let [adminAuthTokens,setAdminAuthTokens]=useState(()=> localStorage.getItem('adminAuthTokens') ? JSON.parse(localStorage.getItem('adminAuthTokens')) : null)
    //let [adminUser,setAdminUser]=useState('')
    
    const navigate = useNavigate()

    let loginUser = async(e) =>{
        e.preventDefault()
        //console.log("form Submitted")
        let response= await fetch('http://127.0.0.1:8000/api/token/',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'username':e.target.username.value, 'password':e.target.password.value})
        })
        let data = await response.json()
        console.log('data:',data)
        console.log('response:',response)
        
        if( response.status === 200   ){
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens',JSON.stringify(data))
            navigate('/')
        }
        else {
            alert('Something went wrong!')
        }
    }

    const logoutUser=()=>{
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
    }

    let updateToken = async()=>{
        console.log('Update Token Called')
        let response= await fetch ('http://127.0.0.1:8000/api/token/refresh/',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'refresh':authTokens.refresh})
        })
        let data = await response.json()
        console.log(jwt_decode(data.access))
        if(response.status === 200){
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            
            localStorage.setItem('authTokens',JSON.stringify(data))
        }
        else{
            logoutUser()
        }
    }

    let loginSuperUser = async(e) =>{
        
        e.preventDefault()
        //console.log("form Submitted")
        let response= await fetch('http://127.0.0.1:8000/superuser-verify/',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'username':e.target.username.value, 'password':e.target.password.value})
        })
        let data = await response.json()
        console.log('data:',data)
        console.log('response:',response)

        if( response.status === 200){
            setAdminAuthTokens(data)
            setAdminUser(jwt_decode(data.access_token))
            console.log(user)
            localStorage.setItem('adminAuthTokens',JSON.stringify(data))
            navigate('/administrator/home')
        }
        else {
            alert('Check your Admin User Credentials and try again!')
        }
    }

    const userdetails=async(e)=>{
        e.preventDefault()

        const post = { 
          name:e.target.name.value,
          dob:e.target.dob.value,
          gender:e.target.gender.value,
          email:e.target.email.value,
          address:e.target.address.value,
          mobile:e.target.mobile.value,
          district:e.target.district.value,
          aadhar:e.target.aadhar.value,
          career:e.target.career.value
          
       }
       
      try {
        const res = await axios.post('http://127.0.0.1:8000/peopleusers/details/', post)
        console.log(res.data)
        alert('Details registered successfully')
        setIsFormFilled(true)
        navigate('/')
      } catch (e) {
        alert(e)
      }
      }
    

    let contextData={
        user:user,
        adminUser:adminUser,
        authTokens:authTokens,
        adminAuthTokens:adminAuthTokens,
        isFormFilled:isFormFilled,
        loginUser:loginUser,
        logoutUser:logoutUser,
        loginSuperUser:loginSuperUser,
        userdetails:userdetails
    }

    



    useEffect(()=>{
        let fourMinutes= 1000 * 60 * 4
       let interval =  setInterval(()=>{
            if(authTokens){
                updateToken()
            }
        },fourMinutes)
        return ()=>clearInterval(interval)
    }, [authTokens,loading]  )


    return(
        <AuthContext.Provider value = {contextData}>
            {children}
        </AuthContext.Provider>
    )
    }
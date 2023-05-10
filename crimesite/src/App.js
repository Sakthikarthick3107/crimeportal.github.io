import {BrowserRouter as Router,  Routes,Route} from 'react-router-dom'
import ComplaintPage from './Pages/ComplaintPage';
import HomePage from "./Pages/HomePage";
import { ThemeProvider } from '@mui/material/styles';
import Custom from './Theme/Custom';
import PersonalDetailPage from './Pages/PersonalDetailPage';
import PrivateRoute from './utils/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Login';
import LoginPage from './Pages/LoginPage';
import Header from './components/Header';
import AdminLogin from './components/AdminLogin';
import AdminHome from './Administrator/AdminHome';
import AdminPrivateRoute from './utils/AdminPrivateRoute';
import CreatePost from './Administrator/CreatePost';
import NewsFeedPage from './Pages/NewsFeedPage';
import RegisterPage from './Pages/RegisterPage';
import DisplayComplaints from './AdminComponent/DisplayComplaints';
import UserDisplayComplaints from './Pages/UserDisplayComplaints';
import DetailsRoute from './utils/DetailsRoute';
import DetailsLogin from './utils/DetailsLogin'

 
function App() {
  return (
    <div className="App" >
        <Router>
        <ThemeProvider theme={Custom}>
        <AuthProvider>
        <Routes >

          <Route element ={<PrivateRoute/>}>
              
              <Route path='/newsfeed' element={<NewsFeedPage/>}/>
              <Route path='/mycomplaints' element={<UserDisplayComplaints/>}/>
          </Route>

          <Route element ={<DetailsRoute/>}>
              <Route element={<ComplaintPage/>} path='complaintpage'/>
              
          </Route>
          <Route element ={<DetailsLogin/>}>
              <Route element={<PersonalDetailPage/>} path='personaldetails'/>
              
          </Route>

            <Route path='/' element={<HomePage/>} exact/>
            
            <Route path='/loginpage' element={<LoginPage/>}/>
            <Route path='registerpage' element={<RegisterPage/>}/>
            
            <Route path='/administrator/login' element={<AdminLogin/>}/>
            

            <Route element={<AdminPrivateRoute/>}>
              <Route  element={<AdminHome/>} path='/administrator/home'/>
              <Route element={<CreatePost/>} path='administrator/createpost'/>
              <Route path='/administrator/complaints' element={<DisplayComplaints/>}/>
            </Route>
            
          </Routes>
          
          </AuthProvider>
          </ThemeProvider>
        </Router>
        
      
    </div>
  );
}

export default App;

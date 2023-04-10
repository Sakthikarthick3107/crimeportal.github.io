import {BrowserRouter as Router,  Routes,Route} from 'react-router-dom'
import ComplaintPage from './Pages/ComplaintPage';
import HomePage from "./Pages/HomePage";
import { ThemeProvider } from '@mui/material/styles';
import Custom from './Theme/Custom';
import RegisterPage from './Pages/RegisterPage';
import MyComplaints from './Pages/MyComplaints';
import PrivateRoute from './utils/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Login';
import LoginPage from './Pages/LoginPage';
import Header from './components/Header';
import AdminLogin from './components/AdminLogin';
import AdminHome from './Administrator/AdminHome';
import AdminPrivateRoute from './utils/AdminPrivateRoute';
import CreatePost from './Administrator/CreatePost';



 
function App() {
  return (
    <div className="App" >
      <ThemeProvider theme={Custom}>
        <AuthProvider>
        <Router>
        
          <Routes >

          <Route element ={<PrivateRoute/>}>
              <Route element={<ComplaintPage/>} path='complaintpage'/>
            </Route>

            <Route path='/' element={<HomePage/>} exact/>
            <Route path='/registerpage' element={<RegisterPage/>}/>
            <Route path='/loginpage' element={<LoginPage/>}/>
            <Route path='/mycomplaints' element={<MyComplaints/>}/>
            <Route path='/administrator/login' element={<AdminLogin/>}/>
            

            <Route element={<AdminPrivateRoute/>}>
              <Route element={<AdminHome/>} path='/administrator/home'/>
            </Route>
            <Route path='/administrator/createpost' element={<CreatePost/>}/>
          </Routes>
        </Router>
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;

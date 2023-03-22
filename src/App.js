import {Routes,Route} from 'react-router-dom'
import ComplaintPage from './Pages/ComplaintPage';
//import background from './images/background.jpg'
import HomePage from "./Pages/HomePage";
import { ThemeProvider } from '@mui/material/styles';
import Custom from './Theme/Custom';


 
function App() {
  return (
    <div className="App" >
      <ThemeProvider theme={Custom}>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='complaintpage' element={<ComplaintPage/>}/>
      </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
// style={{
//   backgroundImage:`url(${background})`,backgroundRepeat:'no-repeat',backgroundAttachment:'fixed',backgroundSize:'100% 100%'
  

// }}
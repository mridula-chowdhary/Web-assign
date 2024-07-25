import { Routes,Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Registration from './Pages/Registration';
import Login from './Pages/Login';
// import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Navbar/> */}
    <Routes>
      <Route path ='/registration' element={<Registration/>}/>
      <Route path ='/' element={<Registration/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

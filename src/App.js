import { Route, Routes } from 'react-router-dom';
import './App.css';
import HeaderPage from './components/HeaderPage';
import HomePage from './components/HomePage';
import LogInPage from './components/LogInPage';
import SignUp from './components/SignUp';
import DashBoard from './components/DashBoard';
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
    function clickHandler() {
        navigate("/dashboard");
    }

  return (
    <div className="wrapper">
        <HeaderPage></HeaderPage>
        
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/dashboard' element={<DashBoard></DashBoard>}></Route>
          <Route path='/signin' element={<LogInPage fun={clickHandler}></LogInPage>}></Route>
          <Route path='/signup' element={<SignUp fun={clickHandler}></SignUp>}></Route>
        </Routes>
    </div>

  );
}

export default App;

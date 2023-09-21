import { Route, Routes } from 'react-router-dom';
import './App.css';
import HeaderPage from './components/HeaderPage';
import HomePage from './components/HomePage';
import LogInPage from './components/LogInPage';
import SignUp from './components/SignUp';


function App() {
  return (
    <div className="wrapper">
        <HeaderPage></HeaderPage>
        
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/signin' element={<LogInPage></LogInPage>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
        </Routes>
    </div>

  );
}

export default App;

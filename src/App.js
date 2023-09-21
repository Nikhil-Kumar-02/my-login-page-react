import './App.css';
import HeaderPage from './components/HeaderPage';
import HomePage from './components/HomePage';
import LogInPage from './components/LogInPage';
import SignUp from './components/SignUp';


function App() {
  return (
    <div className="wrapper">
        <HeaderPage></HeaderPage>
        {/* <div className='homePage'>
          <HomePage></HomePage>
        </div> */}
        {/* <LogInPage></LogInPage> */}
        <SignUp></SignUp>
    </div>
  );
}

export default App;

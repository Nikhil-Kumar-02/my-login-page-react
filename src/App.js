import './App.css';
import HeaderPage from './components/HeaderPage';
import HomePage from './components/HomePage';
import LogInPage from './components/LogInPage';


function App() {
  return (
    <div className="wrapper">
        <HeaderPage></HeaderPage>
        {/* <div className='homePage'>
          <HomePage></HomePage>
        </div> */}
        <LogInPage></LogInPage>
    </div>
  );
}

export default App;

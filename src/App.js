import './App.css';
import HeaderPage from './components/HeaderPage';
import HomePage from './components/HomePage';


function App() {
  return (
    <div className="wrapper">
        <HeaderPage></HeaderPage>
        <div className='homePage'>
          <HomePage></HomePage>
        </div>
    </div>
  );
}

export default App;

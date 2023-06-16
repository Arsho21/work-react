import { Routes, Route } from 'react-router-dom'
import './App.css';
import Login from './pages/Login';
import Main from './pages/Main';
import Register from './pages/Register';
import Header from './components/header/Header';


function App() {



  return (
    <div className="App">


      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;

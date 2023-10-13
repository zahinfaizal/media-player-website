import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import LandinPage from './Pages/LandinPage';
import WatchHistory from './Pages/WatchHistory';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path='/' element={<LandinPage/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/watch-history' element={<WatchHistory/>}/>
        </Routes>
        <hr />
      <Footer/>

    </div>
  );
}

export default App;
import './App.css';
import { Routes, Route } from "react-router-dom"

import Nav from './components/Nav'
import Home from './pages/Home';
import TarotList from './pages/TarotList';
import TarotPage from './pages/TarotPage';
import LearnMore from './pages/LearnMore';



function App() {

  return (
        <div className='App'>
        <Nav />
        
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/tarot' element={<TarotList/>} />
        <Route path="/tarot/:name" element={<TarotPage/>} />
        <Route path='/learn-more' element={<LearnMore/>} />
        </Routes>
        
        </div>
    );
  }
    


export default App;

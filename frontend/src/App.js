import './App.css';
import { Routes, Route } from "react-router-dom"

import Nav from './components/Nav'
import Home from './pages/Home';
import TarotList from './pages/TarotList';
import TarotPage from './pages/TarotPage';
import LearnMore from './pages/LearnMore';



function App() {
  return (
        <>
        <Nav />
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/tarot' element={<TarotList/>} />
        <Route path="/tarot/:id" element={<TarotPage/>} />
        <Route path='/learn-more' element={<LearnMore/>} />
        </Routes>
        </>
    );
  }
    


export default App;

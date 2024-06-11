import logo from './logo.svg';
import './App.css';
import  Addcourse  from './components/Addcourse';
import Search from './components/Search';
import Viewcourse from './components/Viewcourse';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Addcourse/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/viewcourse' element={<Viewcourse/>}/>
      </Routes></BrowserRouter>
    
  );
}

export default App;

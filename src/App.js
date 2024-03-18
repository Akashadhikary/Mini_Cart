
import {BrowserRouter  as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import MainFile from './MainFile';
import Cart from './Cart';



function App() {


  return (
    <div >
      <header className='header'>
        
        
        <Router>
        {/* <MainFile/> */}
          <Routes>
            <Route path="/" element={<MainFile/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
          </Routes>
        </Router>
      </header>  
    </div>
  );
}

export default App;

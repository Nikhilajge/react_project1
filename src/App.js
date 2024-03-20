
import './App.css';
import Navbar from './Comp/Navbar';
import Login from './Comp/login';
import Register from './Comp/register';
import Add from './Comp/add';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <>
  
    <BrowserRouter>
  
<div className='bg-light'>
 
    <Navbar></Navbar>

    
       
  <Routes>

<Route path="/" element={<Login></Login>}></Route>

</Routes>
    
  <Routes>
    
<Route path="/add" element={<Add></Add>}></Route>

</Routes>
    
  <Routes>

    <Route path="/register"element={<Register></Register>}></Route>

  </Routes>
 
  </div>
 
   </BrowserRouter>
  
   </>
  );
}

export default App;

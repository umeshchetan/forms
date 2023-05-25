import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, useParams } from 'react-router-dom';
import HomeComp from './Components/HomeComponent/HomeComp';
import LoginComp from './Components/Login/LoginComp';
import { useState } from 'react';
import CrudComp from './Components/CrudComp';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorPage from './Components/ErrorPage';
import EditComp from './Components/EditComp';

function App() {
  // const [show, setShow] = useState(false);
  const [show, setShow] = useState(false);

   

  const handleOpen = () => {
      setShow(true)
  }

  const { id } = useParams()

//   const handleClose = () => {
//     setShow(false)
// }
 
  return ( 
    <div className="App">
      <Routes>
        <Route exact path='/' element={<LoginComp />} />
        <Route path='/home' element={<HomeComp handleOpenModal={handleOpen} />} />
        <Route path='/employee' element={<CrudComp />} />
        <Route path='/employee/edit/:id' element={<EditComp />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;

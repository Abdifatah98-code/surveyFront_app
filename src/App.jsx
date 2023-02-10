import { useState } from 'react'
import reactLogo from './assets/react.svg'
import SurveyPage from './pages/SurveyPage'
import {Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import ReviewingPage from './comonents/ReviewingPage';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SurveyPage/>}/>
        <Route path='/invite' element={<ReviewingPage/>}/>
      </Routes>
    </div>
  )
}

export default App

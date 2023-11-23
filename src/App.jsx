import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import {Route,Routes} from "react-router-dom"
import Nav from './components/Nav'
import About from './pages/About'
import Home from './pages/Home'
import NASAList from './pages/NASAList'
// import Form from './components/Form'

function App() {
  // // create a variable to hold my api key
  // const apiKey = "o5oCvxIvoJqTskhYDDFX0VU9877IXtgAFNYm7QOJ";

  // // create state to hold the movie data
  // const [nasa, setNasa] = useState(null);

 

  return (
   <div className='App'>
    <Nav />
    
    
    <Routes>
    <Route path='/home' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/nasaList' element={<NASAList/>} />
    </Routes>
    </div>
  )
}

 export default App







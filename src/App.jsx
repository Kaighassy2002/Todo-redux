
import { Route, Routes } from 'react-router-dom'
import './App.css'
import View from './pages/View'


function App() {
  

  return (
    <>
       <Routes>
        <Route path ='/' element={<View/>} />
       </Routes>
      
    </>
  )
}

export default App

import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Forside from './pages/Forside'
import Medarbejder from './pages/Medarbejder'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Forside/>} />
      <Route path="/medarbejder" element={<Medarbejder/>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App

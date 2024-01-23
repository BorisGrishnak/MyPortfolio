import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Beranda from './pages/Beranda'

function App() {

  return (
    <>
      <Router>
          <Routes>
            <Route path="/" element={<Beranda />} />
        </Routes>
      </Router>
    </>
    )
}

export default App

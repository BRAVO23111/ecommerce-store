import './App.css'
import Navabar from './components/Navabar'
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import Store from './pages/store'
import Success from './pages/success'
import Cancel from './pages/cancel'
function App() {

  return (
    <>
      <Router>
      <Navabar/>
      <Routes>
        <Route  index element={<Store/>}/>
      <Route path='/success' element={<Success/>}/>
      <Route path='/failed' element={<Cancel/>}/>

      </Routes>
      </Router>
    </>
  )
}

export default App

import './App.css'
import Navabar from './components/Navabar'
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import Store from './pages/store'
import Success from './pages/success'
import Cancel from './pages/cancel'
import CartPage from './pages/cartPage'
import { CartProvider } from './Cartcontext'
function App() {

  return (
    <>
    <CartProvider>
    <Router>
      <Navabar/>
      <Routes>
        <Route  index element={<Store/>}/>
      <Route path='/success' element={<Success/>}/>
      <Route path='/failed' element={<Cancel/>}/>
      <Route path='/cart' element={<CartPage/>}/>
      </Routes>
      </Router>
    </CartProvider>
    </>
  )
}

export default App

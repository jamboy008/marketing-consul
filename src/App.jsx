import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Home from './pages/Home'
import About from './pages/About'
import ProductDetail from './pages/ProductDetail'

function App() {
	return (
		<CartProvider>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/product/:id' element={<ProductDetail />} />
				<Route path='/about' element={<About />} />
			</Routes>
		</CartProvider>
	)
}

export default App

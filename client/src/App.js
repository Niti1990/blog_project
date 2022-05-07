import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Header from './components/header'
import Footer from './components/footer'
import ErrorPage from './pages/ErrorPage'


function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path='/' element={<Homepage />} />
				{/* <Route path='/article/:id' element={<SingleView />} />
				<Route path='/about/' element={<About />} />
				<Route path='/login/' element={<Login />} /> */}
				<Route path='*' element={<ErrorPage />} />
			</Routes>
			<Footer />
		</Router>
	)
}

export default App;

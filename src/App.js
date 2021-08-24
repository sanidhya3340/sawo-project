import './App.css'
import './index.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Pricing from './components/pages/Pricing'
import Home from './components/pages/Home'

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Route exact path="/" component={Home}></Route>
				<Route exact path="/pricing" component={Pricing}></Route>
				<Footer />
			</Router>
		</>
	)
}

export default App

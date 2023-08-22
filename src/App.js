import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import MainLayout from "./Layouts/MainLayout"
import Home from "./Pages/Home"
import Game from "./Pages/Game"
import Games from "./Pages/Games"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Howtobuy from "./Pages/Howtobuy"
import FAQs from "./Pages/FAQs"
import FAQC from "./Components/FAQ"
import FAQP from "./Pages/FAQ"

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainLayout/>}>
					<Route index element={<Home/>}/>
					<Route path="game/:id" element={<Game/>} />
					<Route path="games" element={<Games/>} />
					<Route path="about" element={<About/>} />
					<Route path="contact" element={<Contact/>} />
					<Route path="howtobuy" element={<Howtobuy/>}/>
					<Route path="faqs" element={<FAQs/>}/>
					<Route path="faqs/:id" element={<FAQP/>} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

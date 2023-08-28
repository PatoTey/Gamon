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
import FAQP from "./Pages/FAQ"
import ShoppingCart from "./Pages/ShoppingCart"
import FavoriteGames from "./Pages/FavoriteGames"
import NotFound from "./Pages/NotFound"
import CheckOut from "./Pages/CheckOut"
import PaySucces from "./Pages/PaySucces"

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
					<Route path="cart" element={<ShoppingCart/>}/>
					<Route path="favorites" element={<FavoriteGames/>}/>
					<Route path="checkout" element={<CheckOut/>}/>
					<Route path="*" element={<NotFound/>}/>
					<Route path="paysuccess" element={<PaySucces/>}/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

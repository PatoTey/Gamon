import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import MainLayout from "./Layouts/MainLayout"
import Home from "./Pages/Home"

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainLayout/>}>
					<Route index element={<Home/>}/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

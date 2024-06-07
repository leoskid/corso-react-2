import { useState } from "react";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Benvenuto from "./components/Welcome";
import Counter from "./components/Counter";
import WelcomeClass from "./components/WelcomeClass";
import Timer from "./components/Timer";
import UserProfile from "./components/UserProfile";
function App() {
	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img
						src={reactLogo}
						className="logo react"
						alt="React logo"
					/>
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
			<Benvenuto
				isLoggedIn={true}
				nome="Leonardo"
				saluta={() => alert("Ciao")}
				heading={<h1>Heading</h1>}
				timer={Timer}
			></Benvenuto>
			<UserProfile
				name="Leonardo"
				age={20}
				hobbies={["Videogame", "Coding", "Cinema"]}
			></UserProfile>
			<Counter></Counter>
			<WelcomeClass></WelcomeClass>
			<Timer></Timer>
		</>
	);
}

export default App;

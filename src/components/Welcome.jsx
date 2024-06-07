import React from "react";

function Benvenuto(props) {
<<<<<<< HEAD
	return <h1>Ciao! Benvenuto {props.nome} !</h1>;
=======
	const nomi = ["Leonardo", "Roberta", "Samuele", "Gioele"];
	const Timer = props.timer;
	const renderMessaggio = () => {
		if (props.isLoggedIn) {
			return "CIAONE";
		} else {
			return "Registrati!";
		}
	};
	return (
		<>
			{props.heading}
			<h1>
				Ciao! Benvenuto{" "}
				{props.isLoggedIn ? props.nome : "utente Anonimo"}
				!!!!
			</h1>
			<h2>{props.isLoggedIn && <span>Se un utente registrato</span>}</h2>
			<h3>{renderMessaggio()}</h3>
			<ul>
				{nomi.map((nome, index) => (
					<li key={index}>{nome}</li>
				))}
			</ul>
			<button onClick={props.saluta}>Clicca per essere salutato</button>
			<Timer></Timer>
		</>
	);
>>>>>>> dev
}

export default Benvenuto;

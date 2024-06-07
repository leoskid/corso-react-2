import React, { useState } from "react";

function Counter() {
	const [count, setCount] = useState(0);
	return (
		<div>
			<button onClick={() => setCount((count) => count + 1)}>
				Hai cliccato {count} volte !
			</button>
		</div>
	);
}

export default Counter;

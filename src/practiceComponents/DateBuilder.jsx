import { useState } from "react";

const DateBuilder = () => {
	const [step, setStep] = useState(0);
	const [count, setCount] = useState(0);
	const today = new Date();
	today.setDate(today.getDate() + count);

	return (
		<div>
			<h1>DateBuilder</h1>
			<div>
				<button onClick={() => setStep((step) => step - 1)}>-</button>
				<span>Step:{step}</span>
				<button onClick={() => setStep((step) => step + 1)}>+</button>
			</div>
			<div>
				<button onClick={() => setCount((count) => count - step)}>-</button>
				<span>Count:{count}</span>
				<button onClick={() => setCount((count) => count + step)}>+</button>
			</div>
			<p>
				{count == 0
					? `Today is `
					: count < 0
					? `${count * -1} days ago was `
					: `${count} days from today will `}
				{today.toLocaleDateString()}
			</p>
		</div>
	);
};

export default DateBuilder;

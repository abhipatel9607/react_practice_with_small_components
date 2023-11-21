import { useState } from "react";

const DateBuilder2 = () => {
	const [step, setStep] = useState(1);
	const [count, setCount] = useState(0);
	const today = new Date();
	today.setDate(today.getDate() + count);

	function handleRest() {
		setStep(1);
		setCount(0);
	}

	return (
		<div>
			<div>
				<input
					type="range"
					min="1"
					max="10"
					step="1"
					value={step}
					onChange={(e) => setStep(parseInt(e.target.value))}
				></input>
				<span>{step}</span>
			</div>
			<div>
				<button onClick={() => setCount(count - step)}>--</button>
				<input
					type="text"
					value={count}
					onChange={(e) =>
						setCount(
							!e.target.value || e.target.value == "-"
								? 0
								: Number(e.target.value)
						)
					}
				/>
				<button onClick={() => setCount(count + step)}>+</button>
			</div>
			<p>
				{count == 0
					? "Today is "
					: count < 0
					? `${count} days ago was `
					: `${count} days after will `}
				{today.toDateString()}
			</p>

			{(step != 1 || count != 0) && <button onClick={handleRest}>Reset</button>}
		</div>
	);
};

export default DateBuilder2;

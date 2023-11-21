import { useState } from "react";

import "../styles/Steps.css";

function Steps() {
	const [count, setCount] = useState(1);
	const [isOpen, setIsOpen] = useState(true);

	const goNext = () => {
		if (count < 3) setCount((c) => c + 1);
	};

	const goPrev = () => {
		if (count > 1) setCount((c) => c - 1);
	};

	return (
		<div>
			<button
				className="close"
				onClick={() => {
					setIsOpen((isOpen) => !isOpen);
				}}
			>
				&times;
			</button>
			{isOpen && (
				<div className="steps">
					<div className="numbers">
						<div className={count >= 1 ? "active" : ""}>1</div>
						<div className={count >= 2 ? "active" : ""}>2</div>
						<div className={count >= 3 ? "active" : ""}>3</div>
					</div>
					<p className="message"></p>
					<div className="buttons">
						<button
							style={{ backgroundColor: "#7950f2", color: "#fff" }}
							onClick={goPrev}
						>
							Previous
						</button>
						<button
							style={{ backgroundColor: "#7950f2", color: "#fff" }}
							onClick={goNext}
						>
							Next
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default Steps;

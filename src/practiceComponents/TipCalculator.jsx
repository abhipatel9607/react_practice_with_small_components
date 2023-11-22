/** @format */

import { useState } from "react";
import "../styles/TipCalculator.css";

function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [feedback, setFeedback] = useState("0");
  const [friendFeedback, setFriendFeedback] = useState("0");
  const totalTip =
    (bill * ((Number(feedback) + Number(friendFeedback)) / 2)) / 100;
  const showReset = bill != 0 || feedback != "0" || friendFeedback != "0";

  function handleReset() {
    setBill(0);
    setFeedback("0");
    setFriendFeedback("0");
  }

  return (
    <div>
      <h1>TipCalculator</h1>

      <Bill bill={bill} setBill={setBill} />

      <Feedback feedback={feedback} setFeedback={setFeedback}>
        How did you like the service?
      </Feedback>

      <Feedback feedback={friendFeedback} setFeedback={setFriendFeedback}>
        How did your friend like the service?
      </Feedback>

      <TotalBill bill={bill} totalTip={totalTip} />

      {showReset && <button onClick={handleReset}>Reset</button>}
    </div>
  );
}
// ###############################################################
// eslint-disable-next-line react/prop-types
function Bill({ bill, setBill }) {
  return (
    <div className="bill">
      <span>How much was the bill?</span>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
    </div>
  );
}
// ################################################################
// eslint-disable-next-line react/prop-types
function Feedback({ feedback, setFeedback, children }) {
  return (
    <div>
      <span>{children}</span>
      <select
        name=""
        id=""
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
      >
        <option value="0">DisSatisfied (0%)</option>
        <option value="5">It was Okay (5%)</option>
        <option value="10">It was Good (10%)</option>
        <option value="15">Absolutely amazing (15%)</option>
      </select>
    </div>
  );
}
// ################################################################
// eslint-disable-next-line react/prop-types
function TotalBill({ bill, totalTip }) {
  return (
    <div>
      <h3>
        You pay ${bill + totalTip} (${bill} + ${totalTip}tip)
      </h3>
    </div>
  );
}

export default TipCalculator;

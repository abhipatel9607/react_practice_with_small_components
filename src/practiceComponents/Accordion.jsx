/** @format */

import { useState } from "react";
import "../styles/Accordion.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

const Accordion = () => {
  return (
    <div>
      <h1 className="accordion">
        {faqs.map((el, i) => (
          <AccordionItem
            key={i + 1}
            num={i + 1}
            title={el.title}
            text={el.text}
          />
        ))}
      </h1>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const AccordionItem = ({ num, title, text }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`item ${isOpen ? "open" : ""}`}
      onClick={() => setIsOpen((isOpen) => !isOpen)}
    >
      <p className="number">{num < 9 ? `0${num}` : num}</p>
      <p className="text">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
};

export default Accordion;

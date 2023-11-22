/** @format */

import { useState } from "react";
import "../styles/AccordionVersion2.css";

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

const AccordionVersion2 = () => {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div>
      <h1 className="accordion">
        {faqs.map((el, i) => (
          <AccordionItem
            key={i + 1}
            num={i + 1}
            title={el.title}
            curOpen={curOpen}
            setCurOpen={setCurOpen}
          >
            {el.text}
          </AccordionItem>
        ))}
      </h1>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const AccordionItem = ({ num, title, curOpen, setCurOpen, children }) => {
  const isOpen = curOpen === num;
  return (
    <div
      className={`item ${isOpen ? "open" : ""}`}
      onClick={() => setCurOpen(isOpen ? null : num)}
    >
      <p className="number">{num < 9 ? `0${num}` : num}</p>
      <p className="text">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
};

export default AccordionVersion2;

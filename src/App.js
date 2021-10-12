import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [index, setIndex] = useState(0);
  const [review, setReview] = useState(data[index]);
  const { image, name, title, quote } = review;
  const handleIndex = (value) => {
    if (value < 0) {
      const newIndex = data.length - 1;
      setIndex(newIndex);
      setReview(data[newIndex]);
    } else if (value > data.length - 1) {
      const newIndex = 0;
      setIndex(newIndex);
      setReview(data[newIndex]);
    } else {
      const newIndex = value;
      setIndex(newIndex);
      setReview(data[newIndex]);
    }
  };
  useEffect(() => {
    const interval = setInterval(() => handleIndex(index + 1), 5000);
    return () => clearInterval(interval);
  });

  return (
    <>
      <main className="section">
        <header className="title">
          <h2>
            <span>/</span>Reviews
          </h2>
        </header>
        <article className="section-center">
          <button className="prev" onClick={() => handleIndex(index - 1)}>
            <FiChevronLeft />
          </button>
          <div>
            <img src={image} alt={name} className="person-img" />
            <h4>{name}</h4>
            <p className="title">{title}</p>
            <div className="text">{quote}</div>
            <FaQuoteRight className="icon" />
          </div>
          <button className="next" onClick={() => handleIndex(index + 1)}>
            <FiChevronRight />
          </button>
        </article>
      </main>
    </>
  );
}

export default App;

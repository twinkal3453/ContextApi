import React, { useContext } from "react";
import "../styles/home.css";
import counterContext from "../context/counter/counterContext";

const Home = () => {
  const a = useContext(counterContext);
  const increment = () => {
    a.countIncrement(5);
  };
  const decremented = () => {
    a.countDecrement(5);
  };
  return (
    <div className="home__main">
      <div className="inc__dec">
        <button onClick={decremented}>Decrement</button>
        <h2 style={{ padding: ".5rem 1rem" }}>{a.state}</h2>
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  );
};

export default Home;

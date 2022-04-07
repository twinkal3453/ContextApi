import React, { useState } from "react";

import CounterContext from "./counterContext";

const CountState = (props) => {
  const [state, setState] = useState(0);

  const countIncrement = (value) => {
    setState(state + value);
  };

  const countDecrement = (value) => {
    setState(state - value);
  };

  return (
    <CounterContext.Provider value={{ state, countDecrement, countIncrement }}>
      {props.children}
    </CounterContext.Provider>
  );
};

export default CountState;

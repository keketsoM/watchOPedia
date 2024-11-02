import { useState } from "react";

const Counter = () => {
  const [counterState, setCounter] = useState(() => {
    return { counter: 10 };
  });

  function handleDecrement() {
    setCounter((previous) => {
      return { counter: previous.counter - 1 };
    });
  }

  function handleIncrement() {
    setCounter((previous) => {
      return { counter: previous.counter + 1 };
    });
  }
  return (
    <div className=" col-12 col-md-2 offset-md-5 border text-white text-center">
      <span className="h2 pt-4 m-2 text-white-50">Fun Counter</span>
      <br />
      <button className="btn btn-success m-1" onClick={handleIncrement}>
        +1
      </button>
      <button className="btn btn-danger" onClick={handleDecrement}>
        -1
      </button>
      <br />
      <span className="h4">
        Counter:&nbsp;
        <span className="text-success">{counterState.counter}</span>
      </span>
    </div>
  );
};

export default Counter;

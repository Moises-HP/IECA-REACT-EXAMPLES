import React, { useReducer } from "react";

const ReducerComponent = () => {
  const [sum, increment] = useReducer((state, type) => {
    switch (type) {
      case "by_one":
        return state + 1;
      case "by_two":
        return state + 2;
      default:
        return state;
    }
  }, 0);

  return (
    <div className="w-full flex text-xl items-center gap-4 p-4">
      <span>{sum}</span>
      <button
        className="bg-blue-200 font-bold p-2"
        onClick={() => increment("by_one")}
      >
        +1
      </button>
      <button
        className="bg-blue-200 font-bold p-2"
        onClick={() => increment("by_two")}
      >
        +2
      </button>
    </div>
  );
};

export default ReducerComponent;

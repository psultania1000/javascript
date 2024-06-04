import React, { useCallback, useEffect, useState } from "react";

const PassedValue = (props) => {
  console.log("passed");
  const [counter, setCounter] = useState(0);
  const ans = props.data;
  //   const count = counter;

  useEffect(() => {
    !!ans && setCounter(counter + 1);
  }, [ans]);
  return (
    <div>
      <h2>Answer: </h2>

      <p>{ans} </p>
      <p>{counter}</p>
    </div>
  );
};

export default PassedValue;

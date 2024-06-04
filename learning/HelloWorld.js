import React, { useState } from "react";
import PassedValue from "./PassedValue";

const HelloWorld = () => {
  //   console.log("Hello World!");
  const [text, setText] = useState("");
  const [pass, setPass] = useState("");
  const handle = () => {
    setPass({ data: text });
  };
  return (
    <>
      <h1>Hello, World! </h1>

      <textarea
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button onClick={handle} type="button">
        Send state
      </button>
      {console.log(text)}
      <PassedValue data={pass.data} />
    </>
  );
};

export default HelloWorld;

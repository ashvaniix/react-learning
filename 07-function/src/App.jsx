import React from "react";

const btnclicked = () => {
  console.log("btn clicked");
};
const mouseEnter = () => {
  console.log("Mouse Entered");
};

const App = () => {
  return (
    <div>
      <h2>Hello, Guys</h2>
      {/* <button onMouseEnter={mouseEnter} onClick={btnclicked}>click here</button>
      <button onClick={btnclicked}>click here</button> */}
      <button
        onClick={() => {
          console.log("hello");
        }}
      >
        click
      </button>

      <input
        onChange={(elem) => {
          console.log(elem.target.value);
        }}
        type="text"
        placeholder="Enter your name"
      />

      <div
        id="box"
        onMouseMove={(elem) => {
          console.log(elem.clientX);
        }}
      ></div>
    </div>
  );
};

export default App;

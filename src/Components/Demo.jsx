import React, { useState } from "react";

const Demo = () => {
  const [color, setColor] = useState("black");
  return (
    <div className="py-14 font-body text-center">
      <h1 className="text-5xl mb-4 font-semibold">
        My favorite color is <span style={{ color: `${color}` }}>{color}</span>!
      </h1>
      <button
        className="px-8 py-2 rounded bg-blue text-white mx-1"
        type="button"
        onClick={() => setColor("black")}
      >
        Black
      </button>
      <button
        className="px-8 py-2 rounded bg-blue text-white mx-1"
        type="button"
        onClick={() => setColor("blue")}
      >
        Blue
      </button>
      <button
        className="px-8 py-2 rounded bg-blue text-white mx-1"
        type="button"
        onClick={() => setColor("red")}
      >
        Red
      </button>
      <button
        className="px-8 py-2 rounded bg-blue text-white mx-1"
        type="button"
        onClick={() => setColor("pink")}
      >
        Pink
      </button>
      <button
        className="px-8 py-2 rounded bg-blue text-white mx-1"
        type="button"
        onClick={() => setColor("green")}
      >
        Green
      </button>
      <button
        className="px-8 py-2 rounded bg-blue text-white mx-1"
        type="button"
        onClick={() => setColor("yellow")}
      >
        Yellow
      </button>
    </div>
  );
};
export default Demo;

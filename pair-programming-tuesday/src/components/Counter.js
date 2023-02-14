import { useState } from "react"; //imported useState from React

const Counter = () => {
  //creates the initial state of 0
  const [count, setCount] = useState(0);
  return (
    <div>
      {/* displays the state count */}
      <div> Count= {count}</div>
      {/* created buttons */}
      {/* button adds 1 to the count using state on click*/}
      <button onClick={() => setCount(count + 1)}>Plus 1</button>
      {/* button subtracts 1 from the count using state on click */}
      <button onClick={() => setCount(count - 1)}>Minus 1</button>
      {/* button sets count back to 0 using state */}
      <button onClick={() => setCount(0)}>Reset Count</button>
    </div>
  );
};
//export component
export default Counter;

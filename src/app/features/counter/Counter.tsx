import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, 
          decrement,
          reset,
          incrementByAmount 
} from './counterSlice';
import { useState } from "react";


// Define the type of your Redux state (assumed state structure)
interface RootState {
  counter: {
    count: number;
  };
}

const Counter: React.FC = () => {
  // Type the useSelector hook to reflect the structure of your state
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState (0);
  const addValue = Number(incrementAmount) || 0;
  const resetAll = () => {
    setIncrementAmount(0);
    dispatch (reset());
  }

  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <input
      type="text"
      value={incrementAmount}
      onChange={(e) => setIncrementAmount (e.target.value)}
      />
      <div>
        <button onClick={()=> dispatch(incrementByAmount(addValue))}>Add Amount</button>
      </div>
    </section>
  );
};

export default Counter;

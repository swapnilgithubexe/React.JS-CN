import { useSelector, useDispatch } from "react-redux";
import { pauseTimer, resetTimer, startTimer } from "../redux/actions/timerActions";

export const Buttons = () => {
  const dispatch = useDispatch();
  const { isRunning } = useSelector((state) => state);

  return (
    <div className="actions">
      {/* disptach startTimer action here */}
      <button disabled={isRunning} onClick={() => dispatch(startTimer())}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/7709/7709039.png"
          alt="start"
        />
      </button>
      {/* disptach pauseTimer action here */}
      <button disabled={!isRunning} onClick={() => dispatch(pauseTimer())}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2404/2404385.png"
          alt="pause"
        />
      </button>
      {/* disptach resetTimer action here */}
      <button onClick={() => dispatch(resetTimer())}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/9923/9923627.png"
          alt="reset"
        />
      </button>
    </div>
  );
};

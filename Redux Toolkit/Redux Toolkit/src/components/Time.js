import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// change the timer actions imports
import { timerActions } from "../redux/reducers/timerReducer";

export const Time = () => {
  const dispatch = useDispatch();
  // change as per the store implementation
  const { isRunning, elapsedTime } = useSelector((state) => state.timer);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        dispatch(timerActions.increment());
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isRunning, dispatch]);

  return <b>{elapsedTime}</b>;
};

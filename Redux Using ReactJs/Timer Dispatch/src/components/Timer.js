import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementTimer } from "../redux/actions/timerActions";

export const Timer = () => {
  const dispatch = useDispatch();
  const { isRunning, elapsedTime } = useSelector((state) => state);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        // disptach incrementTimer action here
        dispatch(incrementTimer())

      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  return <b>{elapsedTime}</b>;
};

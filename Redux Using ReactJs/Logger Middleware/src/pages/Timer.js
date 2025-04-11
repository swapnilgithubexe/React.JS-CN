import { TimerActions } from "../components/TimerActions";
import { Time } from "../components/Time";

export const Timer = () => {
  return (
    <div className="page">
      <h1>Simple Timer</h1>
      <Time />
      <TimerActions />
    </div>
  );
};

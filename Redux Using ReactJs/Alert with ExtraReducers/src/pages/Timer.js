import { TimerActions } from "../components/TimerActions";
import { Time } from "../components/Time";

export const Timer = () => {
  // get alert message here
  // create effect to reset alert message here

  return (
    <div className="page">
      {/* conditionally show the below div with alert message */}
      <div className="alert"></div>
      <h1>Simple Timer</h1>
      <Time />
      <TimerActions />
    </div>
  );
};

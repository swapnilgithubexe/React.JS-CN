import { useSelector } from "react-redux";

export const Count = () => {
  const { count } = useSelector((state) => state.counter);
  return <b>{count}</b>;
};

import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchError,
  fetchLoading,
  fetchSuccess,
} from "./redux/actions/fetchActions";

export default function App() {
  const dispatch = useDispatch();
  const { isLoading, data, error } = useSelector((state) => state);
  const getData = async () => {
    try {
      dispatch(fetchLoading());
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();

      dispatch(fetchSuccess(data));
    } catch (e) {
      dispatch(fetchError({ message: "Failed to fetch." }));
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }
  if (error) {
    return <h3>{error.message}</h3>;
  }
  return (
    <div className="App">
      <h3>Internet Users</h3>
      <div className="list">
        {data.map((u) => (
          <div className="card" key={u.id}>
            <h3>{u.name}</h3>
            <p>{u.email}</p>
            <p>{u.address.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

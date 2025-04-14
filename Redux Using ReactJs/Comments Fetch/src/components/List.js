// import comments selector function here

import { useSelector } from "react-redux";
import { commentSelector } from "../redux/reducers/commentsReducer";

export const List = () => {
  // remove the 3 declarations below and replace with state values
  const { comments, isLoading, error } = useSelector(commentSelector)
  console.log(comments);


  if (isLoading) {
    return <div className="message">Loading...</div>;
  }
  if (error) {
    return <div className="message">{error}</div>;
  }
  return (
    <div className="list">
      {comments.map((c) => (
        <div className="card" key={c.id}>
          <h3>Name: {c.email.split("@")[0]}</h3>
          <p>{c.body.length <= 100 ? c.body : c.body.substring(100)}</p>
        </div>
      ))}
    </div>
  );
};

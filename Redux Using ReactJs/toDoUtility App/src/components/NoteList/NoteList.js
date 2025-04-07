import { deleteNote } from "../../redux/actions/noteAction";
import "./NoteList.css";
import { useSelector, useDispatch } from "react-redux";

function NoteList() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.noteReducer.notes);

  return (
    <div className="container">
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            <p>{note.createdOn.toLocaleDateString()}</p>
            <p className="note-content">{note.text}</p>
            <button onClick={() => dispatch(deleteNote(index))} className="btn btn-danger">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteList;

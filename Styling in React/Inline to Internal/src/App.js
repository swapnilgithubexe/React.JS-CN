import "./styles.css";
//create a object to store all the styles.
const styles = {
  app: {
    width: "60%",
    margin: "50px auto",
    display: "flex",
    flexDirection: "column",
    gap: 20
  },
  heading: { fontSize: "2rem", letterSpacing: 2 },
  input: { padding: 10 },
  secondDiv: {
    display: "flex",
    justifyContent: "center",
    gap: 20
  },
  cancelButton: {
    outline: "none",
    paddingBlock: 5,
    width: 100,
    backgroundColor: "red",
    color: "white",
    cursor: "pointer"
  },
  loginButton: {
    outline: "none",
    paddingBlock: 5,
    width: 100,
    backgroundColor: "red",
    color: "white",
    cursor: "pointer"
  }
}
export default function App() {
  return (
    <div className="App">
      {/* Refactor the inline style to use the internal style. */}
      <form
        style={styles.app}
      >
        {/* Refactor the inline style to use the internal style. */}
        <h3 style={styles.heading}>Sign Up</h3>
        <input style={styles.input} placeholder="Username" />
        <input style={styles.input} placeholder="Email" />
        <input style={styles.input} placeholder="Password" />
        {/* Refactor the inline style to use the internal style. */}
        <div
          style={styles.secondDiv}
        >
          {/* Refactor the inline style to use the internal style. */}
          <button
            style={styles.cancelButton}
          >
            Cancel
          </button>
          {/* Refactor the inline style to use the internal style. */}
          <button
            style={styles.loginButton}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

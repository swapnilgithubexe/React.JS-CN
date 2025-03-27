export const Contact = () => {
  return (
    <div className="contact page">
      <h3>Contact page</h3>
      <form>
        <input type="text" placeholder="Name" />
        <input type="tel" placeholder="Phone" />
        <textarea placeholder="Message" rows="3"></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
};

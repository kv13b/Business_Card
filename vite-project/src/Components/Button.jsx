export default function Buttons() {
  return (
    <div className="buttons">
      <button
        id="btn-email"
        onClick={() =>
          (window.location.href = "mailto:karthikbhatt22@gmail.com")
        }
      >
        <i className="fa fa-envelope"></i>Email
      </button>
      <button
        id="btn-linkedin"
        onClick={() =>
          window.open("https://www.linkedin.com/in/kv13b/", "_blank")
        }
      >
        <i className="fab fa-linkedin"></i>LinkedIn
      </button>
    </div>
  );
}

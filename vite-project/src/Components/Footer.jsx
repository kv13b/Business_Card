export default function Footer() {
  return (
    <footer>
      <i
        className="fab fa-twitter fa-lg"
        onClick={() => window.open("https://x.com/kv13b", "_blank")}
      ></i>
      <i
        className="fab fa-linkedin fa-lg"
        onClick={() =>
          window.open("https://www.linkedin.com/in/kv13b/", "_blank")
        }
      ></i>
      <i
        className="fab fa-instagram fa-lg"
        onClick={() =>
          window.open("https://www.instagram.com/karthikbhatt22/", "_blank")
        }
      ></i>
      <i
        className="fab fa-github fa-lg"
        onClick={() => window.open("https://github.com/kv13b", "_blank")}
      ></i>
    </footer>
  );
}

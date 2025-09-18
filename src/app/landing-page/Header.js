export default function Header() {
  return (
    <header style={{ display: "flex", justifyContent: "space-between", padding: "1rem 2rem", background: "#f5f5f5" }}>
      <h1 style={{ fontWeight: "bold" }}>ClientLogo</h1>
      <nav>
        <a href="#features" style={{ margin: "0 1rem" }}>Features</a>
        <a href="#about" style={{ margin: "0 1rem" }}>About</a>
        <a href="#contact" style={{ margin: "0 1rem" }}>Contact</a>
      </nav>
    </header>
  );
}

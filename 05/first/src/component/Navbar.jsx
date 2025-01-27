import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="company_logo">Zomato</h1>
      <div className="search_section">
        <input type="text" placeholder="Ywca, 1, Ashok Rd, Hanuman Mandir" />
        ||
        <input
          type="text"
          placeholder="Search for restaurant, cuisine or a dish"
        />
      </div>

      <div className="accountSection">
        <button className="btn">Log in</button>
        <button className="btn">Sign up</button>
      </div>
    </nav>
  );
}

export default Navbar;

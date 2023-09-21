const Navbar = ({ searchInput, onChange }) => {
  const icon = "public/images/icon/img2.svg";
  return (
    <>
      <nav className="notes-nav">
        <div className="notes-nav-left">
          <img src={icon} alt="Icon Web" />
          <h1>Personal Notes</h1>
        </div>
        <div className="notes-nav-right">
          <input
            value={searchInput}
            onChange={onChange}
            type="text"
            placeholder="Search for notes..."
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;

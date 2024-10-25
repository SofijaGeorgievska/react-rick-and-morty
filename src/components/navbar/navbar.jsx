import { Link } from "react-router-dom";
// import "./navbar.scss";
import SearchBar from "../searchBar/searchBar";
const Navbar = () => {
  return (
    <nav style={{backgroundColor: "#50854a", color: "white", width: "100vw", height: "50px", display: "flex", alignItems: "center", position: "absolute", left: "0", top: "0"}} >
      <ul style={{display: "flex", gap: "20px", listStyle: "none"}} >
        <li>
          <Link to="/" style={{color: "white"}}> Characters Page </Link>
        </li>
        <li>
          <Link to="/favourites" style={{color: "white"}}> Favourites </Link>
        </li>
        <li> <SearchBar /> </li>
      </ul>
    </nav>
  );
};

export default Navbar;

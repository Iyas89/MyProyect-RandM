import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";


function Nav({onSearch, randomize, setAcces}) {
  return (
    <div>
      <SearchBar onSearch={onSearch} />
      <button onClick={randomize}>ADD RANDOM</button>
      <br/>
      <Link to="/Favorites">
      <button>Favorites</button>
      </Link>
      <div>
      <Link to="/About">
      <button>About</button>
      </Link>

      <Link to="/home">
        <button>Home</button>
      </Link>
      <Link to="/">
        <button>
          Log Out
          </button>
          </Link>
      </div>
    </div>
  );
}

export default Nav;

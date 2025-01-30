import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex border justify-between items-center p-2">
      <div className="flex space-x-4">
        <Link to={"/"}>Home</Link>
        <Link to={"/watchlist"}>Watchlist</Link>
      </div>
    </header>
  );
}

export default Header;

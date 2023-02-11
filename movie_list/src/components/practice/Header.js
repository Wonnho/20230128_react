import { Link } from "react-router-dom";

function Headers() {
  return (
    <headers>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </headers>
  );
}

export default Headers;

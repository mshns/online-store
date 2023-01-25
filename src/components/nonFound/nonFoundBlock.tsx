import { Link } from "react-router-dom";

import "./notFound.scss";

export const NonFoundBlock = () => {
  return (
    <div className="notFound">
      <h1 className="notFound_title">Page not found</h1>
      <Link to="/" className="notFound_link">
        Back to store
      </Link>
    </div>
  );
};

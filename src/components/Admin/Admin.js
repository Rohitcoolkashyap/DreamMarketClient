import React from "react";
import { Link } from "react-router-dom";
export default function Admin(props) {
  return (
    <div className="admin">
      <nav className="admin-nav">
        <ul>
          <li>users</li>
          <li>
            <Link to={"/store"}>products</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

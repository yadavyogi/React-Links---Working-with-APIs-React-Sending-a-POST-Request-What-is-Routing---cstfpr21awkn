import React from "react";
import { Link, useHistory } from "react-router-dom";

const Topics = () => {
  const history = useHistory();
  return (
    <div id="topics-div">
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to="/topics/rendering">
            <h2 id="rendering">Rendering</h2>
          </Link>
        </li>
        <li>
          <Link to="/topics/components">
            <h2 id="components">Components</h2>
          </Link>
        </li>
      </ul>
      <hr />
      <button id="topics-back-button" onClick={() => history.push("/")}>
        Back
      </button>
    </div>
  );
};

export default Topics;

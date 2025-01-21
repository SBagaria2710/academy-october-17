import React from "react";

function ConditionalRendering({ isLoggedIn, username }) {
  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome, {username}</h1>
      ) : (
        <h1>Please log in to continue</h1>
      )}
    </div>
  );
}

export default ConditionalRendering;

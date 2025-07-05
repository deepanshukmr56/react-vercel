import React, { useState } from "react";

function form() {
  const [username, changedUsername] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(username);
    changedUsername("");
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          value={username}
          onChange={(e) => {
            changedUsername(e.target.value);
          }}
          type="text"
          placeholder=""
        />
        <button>Submit</button>
      </form>
    </>
  );
}

export default form;

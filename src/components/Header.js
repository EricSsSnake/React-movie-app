import React, { useState } from "react";

const Header = (props) => {
  const [name, setName] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (name === "") {
      window.location.reload();
    }
    props.search({ name });
  };

  return (
    <nav>
      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="Search..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
    </nav>
  );
};

export default Header;

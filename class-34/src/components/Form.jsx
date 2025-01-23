import { useState } from "react";

const SimpleForm = () => {
  // Initializing state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Handling form Submission
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({ name, email });

    // Resetting the values
    setName("");
    setEmail("");
  };

  const handleNameUpdate = (event) => {
    console.log("here", event.target.value);
    setName(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameUpdate}
        ></input>
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        ></input>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default SimpleForm;

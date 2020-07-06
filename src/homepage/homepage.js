import React, { useState } from "react";

const Homepage = (props) => {
  const [location, setLocation] = useState("");

  function handleLocation(event) {
    setLocation(event.target.value);
  }

  return (
    <div>
      <div>This will be the logo.</div>
      <form>
        <label for="location">Location:</label>
        <input
          type="text"
          placeholder="e.g. Manchester"
          id="location"
          onChange={handleLocation}
        />
        <button onClick={(event) => props.submitLocation(event, location)}>
          Search
        </button>
      </form>
    </div>
  );
};

export default Homepage;

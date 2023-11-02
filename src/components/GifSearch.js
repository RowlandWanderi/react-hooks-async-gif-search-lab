
import React, { useState } from "react";

function GifSearch({ onSubmitSearch }) {
  const [gifSearch, setGifSearch] = useState("");


  function handleSearchChange(e) {
    setGifSearch(e.target.value);
  }
  //console.log(gifSearch)
  function handleGifSearch(e) {
    e.preventDefault();
    onSubmitSearch(gifSearch);
  }

  

  return (
    <div>
      <form onSubmit={handleGifSearch}>
        <div className="form-group">
          <label htmlFor="search">Search for a GIF:</label>
          <input
            id="search"
            className="form-control"
            type="text"
            value={gifSearch}
            onChange={handleSearchChange}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Find Gifs
        </button>
      </form>
    </div>
  );
}

export default GifSearch;
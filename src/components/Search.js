import React from "react";

function Search({ handleSearchInput }) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={handleSearchInput} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;

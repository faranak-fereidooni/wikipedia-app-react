import React from "react";

const SearchBox = (props) => {
  const { onSubmit } = props;
  return (
    <form className="text-center text-white" onSubmit={onSubmit}>
      <input
        type="text"
        name="search"
        className="searchInput form-control p-2 my-2"
        placeholder="What are you looking for?"
        onSubmit={onSubmit}
      />
    </form>
  );
};

export default SearchBox;

import React from "react";

const searchbox = ({ search, setSearch, data, setData }) => {
  const clickHandler = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    setData(data.filter((d) => d.title.includes(search)).splice(0, 3));
  };

  return (
    <div>
      <input
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={clickHandler}>Button</button>
    </div>
  );
};

export default searchbox;

// import react from "react";
import "./App.css";
import Searchbox from "./components/searchbox";
import Table from "./components/table";
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(0);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  useEffect(() => {
    (async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setData(data);
      setLoading(false);
    })();
  }, []);

  return (
    <>
      <Searchbox
        search={search}
        data={data}
        setData={setData}
        setSearch={setSearch}
      />
      <Table loading={loading} data={data} />
    </>
  );
}

export default App;

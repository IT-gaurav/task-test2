import React from "react";

const Table = ({ data, loading }) => {
  return (
    <form>
      {!loading ? (
        <table>
          <tbody>
            <tr>
              <td></td>
              <td>Title</td>
            </tr>
            {data.map((d) => (
              <tr key={d.id}>
                <td>{d.id}</td>
                <td>{d.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h1>loading</h1>
      )}
    </form>
  );
};

export default Table;

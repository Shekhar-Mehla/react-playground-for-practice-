import React from "react";
import FliterList from "./FliterList";

function List() {
  // rendenring the list using the map function
  const list = [1, 2, 3, 4, 5, 6, 7];

  const lis = list.map((item) => <li key={item}>{item}</li>);

  return (
    <>
      <h2>orginal list</h2>
      <ul>{lis}</ul>
      <FliterList list={list}></FliterList>
    </>
  );
}
export default List;

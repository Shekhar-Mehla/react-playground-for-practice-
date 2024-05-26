import React from "react";

function DISPLAYLIST({ objlist }) {
  const newobj = objlist.map((item) => {
    return (
      <li key={item.id}>
        <div>{item.name}</div>
        <div>{item.age}</div>
      </li>
    );
  });
  return (
    <>
      <ul>{newobj}</ul>
    </>
  );
}
export default DISPLAYLIST;

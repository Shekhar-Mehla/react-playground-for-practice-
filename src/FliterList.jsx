import React from "react";

function FliterList(props) {
  const filterlist = props.list.filter((item, i) => {
    return item === 5;
  });
  const flt = filterlist.map((item) => <li>{item}</li>);
  return (
    <div>
      <h3>filtered list </h3>
      <ul>{flt}</ul>
    </div>
  );
}
export default FliterList;

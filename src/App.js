import React, { useReducer } from "react";
import DISPLAYLIST from "./DISPLAYLIST";

export default function App() {
  const objList = [
    { name: "shekhar", id: 1, age: 27, address: "123addfjjd" },
    { name: "shekhar1", id: 2, age: 27, address: "123addfjjd" },
    { name: "shekhardfghgf", id: 3, age: 27, address: "123addfjjd" },
    { name: "shekhar4", id: 4, age: 27, address: "123addfjjd" },
    { name: "shekhar5", id: 5, age: 27, address: "123addfjjd" },
    { name: "shekhar6", id: 6, age: 27, address: "123addfjjd" },
    { name: "shekhar7", id: 7, age: 27, address: "123addfjjd" },
  ];
  // use reducer function

  function myreducer(state, action) {
    if (action.type === "add") {
      const newstate = [...state, { name: "mehla", id: action.id }];
      return newstate;
    }
    if (action.type === "delete") {
      const newstat = state.filter((item) => {
        return action.id !== item.id;
      });
      return newstat;
    }
  }
  const [state, dispatch] = useReducer(myreducer, objList);

  const onAddHnadler = () => {
    console.log("click");
    dispatch({
      type: "add",
      id: 2,
    });
  };
  const ondeleteHnadler = () => {
    objList.map((item) => {
      dispatch({
        type: "delete",
        id: item.id,
      });
    });
  };
  return (
    <>
      <DISPLAYLIST objlist={state}></DISPLAYLIST>
      <button onClick={onAddHnadler}>add</button>
      <button onClick={ondeleteHnadler}>delete</button>
    </>
  );
}

import { useState } from "react";
import Homepage from "./Homepage";
import List from "./List";

function App() {
  const [vari, setvari] = useState("hello world");
  const [varij, setvarij] = useState("hello world");
  const [varik, setvarik] = useState("hello world");
  function h() {
    setvari("123");
  }
  function i() {
    setvarij("345");
  }
  function j() {
    setvarik("768");
  }

  return (
    <>
      {/* sending the props */}
      <Homepage vari={vari} varij={varij} varik={varik} h={h} i={i} j={j} />

      {/* "list component" */}
      <List></List>
    </>
  );
}

export default App;

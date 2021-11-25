import React from "react";
import "./styles.css";
import { TodoItem } from "../";
import { RootState } from "../../Redux/store";
import { useSelector } from "react-redux";

export function TodoContainer() {
  const count = useSelector((state: RootState) => state.value);
  return (
    <div className={"todo"}>
      {count.map((item, index) => {
        return <TodoItem text={item.text} />;
      })}
    </div>
  );
}

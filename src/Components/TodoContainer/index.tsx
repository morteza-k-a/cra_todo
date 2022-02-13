import React from "react";
import "./styles.css";
import { TodoItem } from "../";
import { RootState } from "../../Redux/store";
import { useSelector } from "react-redux";
import { EmptyList } from "../";
export function TodoContainer() {
  const todos = useSelector((state: RootState) => state.todos.value);
  if(todos.length !==0)
  return (
    <div className={"todo"}>
      { todos.map((item,index) => {
        return <TodoItem key={`itemNumber${index}`} text={item.text} id={item.id}/>;
      })}
    </div>
  );
  else
  return(<EmptyList/>)
}

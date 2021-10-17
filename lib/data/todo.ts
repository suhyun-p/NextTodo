import { readFileSync, writeFileSync } from "fs";
import { TodoType } from "../../types/todo";

let todos: TodoType[] = [
  { id: 1, text: "마트 가서 장보기", color: "red", checked: false },
  { id: 2, text: "수학 숙제하기", color: "orange", checked: false },
  { id: 3, text: "코딩하기", color: "yellow", checked: true },
  { id: 4, text: "넥스트 공부하기", color: "green", checked: true },
  { id: 5, text: "요리 연습하기", color: "blue", checked: false },
  { id: 6, text: "분리수거 하기", color: "navy", checked: false },
];

//* 투두리스트 데이터 불러오기
const getList = () => {
  /*
    const todosBuffer = fs.readFileSync("data/todos.json");
    const todosString = todos.toString();
    if(!todosString) {
        return [];
    }
    const todos: TodoType[] = JSON.parse(todosString);
    */

  return todos;
};

//* id의 투두가 있는지 확인하기ß
const exist = ({ id }: {id: number}) => {
  const todos = getList();
  const todo = todos.some((todo) => todo.id === id);
  return todo;
};

//* 투두리스트 저장하기
const write = async (changedTodos: TodoType[]) => {
  // writeFileSync("data/todos.json", JSON.stringify(todos));
  todos = changedTodos;
};

export default { getList, exist, write };

import { useState } from "react";
import { AppHeader } from "./components/AppHeader";
import { TodoItem } from "./components/TodoItem";

const defaultItems: ITodo[] = [
  {
    id: 1,
    title: "리액트 배우기",
    completed: false,
    createdAt: 1234,
  },
  {
    id: 2,
    title: "리액트 앱 만들어보기",
    completed: false,
    createdAt: 1234,
  },
  {
    id: 3,
    title: "자바스크립트 공부하기",
    completed: true,
    createdAt: 1234,
  },
];

interface ITodo {
  id: number;
  title: string;
  completed: boolean;
  createdAt: number;
}

// Smart Component
// 비즈니스 로직을 들고 있는 컴포넌트
function App() {
  const [items, setItems] = useState<ITodo[]>(defaultItems);

  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <AppHeader title="Todo" description="또 하나의 투두" />
      <h1>{inputValue}</h1>
      <div className="section">
        할일
        <input
          type="text"
          className="input"
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
        <button
          className="button is-info"
          onClick={
            (/* event */) => {
              // object literal
              const newTodo: ITodo = {
                id: Date.now(),
                title: inputValue,
                completed: false,
                createdAt: Date.now(),
              };

              // array literal, rest parameter
              const newItems = [...items, newTodo];
              setItems(newItems);
            }
          }
        >
          추가
        </button>
      </div>

      {items.map((item) => {
        return (
          <TodoItem
            // Unique key for loop
            key={item.id}
            title={item.title}
            completed={item.completed}
          />
        );
      })}
    </div>
  );
}

export default App;

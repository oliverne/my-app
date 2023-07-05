import { MyButton } from "./MyButton";

// readonly
interface Props {
  title: string;
  completed: boolean;
}

// Dumb Component
// Presentational Component
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
export function TodoItem({ title, completed = false }: Props) {
  return (
    <div className="card">
      <div className="card-content">
        {completed ? (
          <p className="title">
            <s>{title}</s>
          </p>
        ) : (
          <p className="title">{title}</p>
        )}
      </div>
      <footer className="card-footer">
        <p className="card-footer-item">
          {completed ? (
            <MyButton text="다시 하기" type="warning" />
          ) : (
            <MyButton text="완료시키기" type="success" />
          )}
        </p>
        <p className="card-footer-item">
          {/* <span>
            Share on <a href="#">Facebook</a>
          </span> */}
        </p>
      </footer>
    </div>
  );
}

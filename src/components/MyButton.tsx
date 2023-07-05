interface Props {
  text: string;
  type: "info" | "success" | "warning" | "danger";
}

export function MyButton({ text, type = "info" }: Props) {
  return <button className={`button is-${type}`}>{text}</button>;
}

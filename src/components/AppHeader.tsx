interface Props {
  title: string;
  description?: string;
}

export function AppHeader(props: Props) {
  return (
    <section className="hero is-small is-primary">
      <div className="hero-body">
        <p className="title">{props.title}</p>
        <p className="subtitle">{props.description}</p>
      </div>
    </section>
  );
}

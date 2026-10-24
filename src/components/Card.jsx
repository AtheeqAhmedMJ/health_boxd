export default function Card({ kicker, title, children, delay = 0 }) {
  return (
    <article className="card glass reveal" style={{ transitionDelay: `${delay}ms` }}>
      {kicker && <small>{kicker}</small>}
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}

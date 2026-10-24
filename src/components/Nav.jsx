export default function Nav({ items }) {
  return (
    <nav className="nav">
      <a className="logo" href="#top"><span className="pill-mark" />Health BoxD</a>
      <div className="nav-actions">
        {items.map((i) => (
          <a
            key={i.label}
            className="btn btn-line btn-sm"
            href={i.href}
            {...(i.external && { target: "_blank", rel: "noopener noreferrer" })}
          >
            {i.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
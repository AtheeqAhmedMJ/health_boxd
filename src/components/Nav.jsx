const goHome = (e) => {
  e.preventDefault();
  history.pushState(null, "", location.pathname + location.search); 
  dispatchEvent(new Event("hashchange"));                            
  scrollTo({ top: 0, behavior: "smooth" });
};

export default function Nav({ items }) {
  return (
    <nav className="nav">
      <a className="logo" href="/" onClick={goHome}>
        <span className="pill-mark" />Health BoxD
      </a>
      <div className="nav-actions">
        {items.map((i) => (
          <a
            key={i.label}
            className="btn btn-line btn-sm"
            href={i.href === "#top" ? "/" : i.href}
            onClick={i.href === "#top" ? goHome : undefined}
            {...(i.external && { target: "_blank", rel: "noopener noreferrer" })}
          >
            {i.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

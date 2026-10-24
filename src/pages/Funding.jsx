import { lazy, Suspense } from "react";
import Nav from "../components/Nav";
import Card from "../components/Card";
import Footer from "../components/Footer";
import MailLink from "../components/MailLink";
import useReveal from "../hooks/useReveal";
import { MAIL, PATENT_PENDING, gmail, steps, benefits, status } from "../data/content";

const Capsule = lazy(() => import("../components/Capsule"));
const SUBJECT = "Investment enquiry: Health BoxD";

export default function Funding() {
  useReveal();
  return (
    <>
      <Nav
        items={[
          { label: "← Home", href: "#top" },
          { label: "Contact", href: gmail(SUBJECT), external: true },
        ]}
      />

      <section className="section hero" id="top">
        <div>
          {PATENT_PENDING && <span className="badge rise">Patent pending</span>}
          <h1 className="rise d1">We’re raising our first round.</h1>
          <p className="lead rise d2">Health BoxD is building a shared network where doctors and clinics find each other, one consultation session at a time.</p>
          <MailLink className="btn rise d3" subject={SUBJECT}>Email us to invest</MailLink>
        </div>
        <Suspense fallback={<div className="stage" />}><Capsule /></Suspense>
      </section>

      <div className="band sweep">
        <section className="section">
          <h2 className="reveal">The idea</h2>
          <p className="lead reveal">Clinics often rely on fixed employment or personal ties to cover consultations. Health BoxD adds a flexible layer on top: a network of participating facilities and verified doctors.</p>
          <ol className="grid steps">
            {steps.map((s, i) => (
              <li key={s.title} className="card glass-dark reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <span className="num">{i + 1}</span><h3>{s.title}</h3><p>{s.note}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>

      <section className="section">
        <h2 className="reveal">Who it helps</h2>
        <div className="grid">
          {benefits.map((b, i) => (
            <Card key={b.title} kicker={b.kicker} title={b.title} delay={i * 100}>{b.note}</Card>
          ))}
        </div>
      </section>

      <div className="band">
        <section className="section">
          <h2 className="reveal">Where we are</h2>
          <div className="row reveal">
            {[...status, ...(PATENT_PENDING ? ["Patent pending"] : [])].map((s) => (
              <span key={s} className="chip glass-dark">{s}</span>
            ))}
          </div>
          <p className="lead reveal">Technical details of our approach are shared with investors under NDA.</p>
        </section>
      </div>

      <section className="section center">
        <h2 className="reveal">Invest with us</h2>
        <p className="lead reveal">
          For investment enquiries, write to <MailLink subject={SUBJECT}>{MAIL}</MailLink>.
        </p>
        <MailLink className="btn" subject={SUBJECT}>Email us</MailLink>
      </section>

      <Footer />
    </>
  );
}
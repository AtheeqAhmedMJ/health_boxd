import { lazy, Suspense } from "react";
import Nav from "../components/Nav";
import Card from "../components/Card";
import Marquee from "../components/Marquee";
import Footer from "../components/Footer";
import MailLink from "../components/MailLink";
import useReveal from "../hooks/useReveal";
import { MAIL, journey, roles, status } from "../data/content";

const Capsule = lazy(() => import("../components/Capsule"));

export default function Home() {
  useReveal();
  return (
    <>
      <Nav items={[{ label: "Invest", href: "#funding" }, { label: "Join us", href: "#join" }]} />

      <section className="section hero" id="top">
        <div>
          <p className="eyebrow rise">Bengaluru · Building in stealth</p>
          <h1 className="rise d1">Care, on call.<br />Reimagined.</h1>
          <p className="lead rise d2">Health BoxD is a healthtech startup rethinking how doctors and clinics come together. More soon.</p>
          <div className="row rise d3">
            <a className="btn" href="#join">Work with us</a>
            <a className="btn btn-line" href="#funding">We’re raising funds</a>
          </div>
        </div>
        <Suspense fallback={<div className="stage" />}><Capsule /></Suspense>
      </section>

      <section className="section" id="founder">
        <div className="split">
          <div className="reveal">
            <p className="eyebrow">Founder</p>
            <h2>Jameel Ahmed</h2>
            <p className="lead">An engineer by training, he left college bored and found his calling in healthcare, where he has spent 20+ years.</p>
          </div>
          <ol className="timeline">
            {journey.map((j, i) => (
              <li key={j.title} className="reveal" style={{ transitionDelay: `${i * 120}ms` }}>
                <b>{j.title}</b><span>{j.note}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Marquee />

      <div className="band">
        <section className="section">
          <h2 className="reveal">Guided by experience</h2>
          <div className="grid">
            <Card kicker="Primary Advisor" title="Dr Shaik Sehran">MBBS, FCC, CACC (AHERF).</Card>
            <Card kicker="Mentors" title="Seasoned engineers" delay={120}>Senior engineers from leading MNCs guide our build.</Card>
          </div>
        </section>
      </div>

      <section className="section">
        <h2 className="reveal">Where we are</h2>
        <div className="row reveal">{status.map((s) => <span key={s} className="chip glass">{s}</span>)}</div>
      </section>

      <div className="band">
        <section className="section" id="join">
          <h2 className="reveal">We’re hiring</h2>
          <p className="lead reveal">
            Apply by email to <MailLink subject="Application: Health BoxD">{MAIL}</MailLink>. Tap a role to start your application.
          </p>
          {roles.map((r) => (
  <MailLink key={r} className="role reveal" subject={`Application: ${r}`}>
    <span>{r}</span><em>Apply →</em>
  </MailLink>
))}
        </section>
      </div>

      <Footer />
    </>
  );
}
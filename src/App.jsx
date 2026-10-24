import { lazy, Suspense, useEffect, useRef, useState } from "react";
import Backdrop from "./components/Backdrop";

const Home = lazy(() => import("./pages/Home"));
const Funding = lazy(() => import("./pages/Funding"));
const isFunding = () => location.hash === "#funding";

export default function App() {
  const [funding, setFunding] = useState(isFunding);
  const first = useRef(true);

  useEffect(() => {
    const sync = () => setFunding(isFunding());
    addEventListener("hashchange", sync);
    return () => removeEventListener("hashchange", sync);
  }, []);

  useEffect(() => {
    if (first.current) { first.current = false; return; }
    scrollTo(0, 0);
  }, [funding]);

  return (
    <>
      <Backdrop />
      <Suspense fallback={null}>{funding ? <Funding /> : <Home />}</Suspense>
    </>
  );
}

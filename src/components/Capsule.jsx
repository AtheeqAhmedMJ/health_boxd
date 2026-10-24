import { useEffect, useRef } from "react";
import {
  WebGLRenderer, Scene, PerspectiveCamera, AmbientLight, DirectionalLight, PointLight,
  MeshPhysicalMaterial, CylinderGeometry, SphereGeometry, Group, Mesh,
} from "three";

const R = 0.62;
const L = 1.05;

export default function Capsule() {
  const host = useRef(null);

  useEffect(() => {
    const el = host.current;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const renderer = new WebGLRenderer({ antialias: true, alpha: true, powerPreference: "low-power" });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    el.appendChild(renderer.domElement);

    const scene = new Scene();
    const camera = new PerspectiveCamera(35, 1, 0.1, 50);
    camera.position.set(0, 0, 7.2);
    scene.add(new AmbientLight(0xffffff, 0.7));
    const key = new DirectionalLight(0xffffff, 1.6); key.position.set(3, 4, 5); scene.add(key);
    const fill = new PointLight(0xb9a3e3, 40, 20); fill.position.set(-4, -2, 3); scene.add(fill);

    const cyl = new CylinderGeometry(R, R, L, 48, 1);
    const sph = new SphereGeometry(R, 48, 32);
    const mats = [0xf4e8fa, 0xb48fe0].map(
      (color) => new MeshPhysicalMaterial({ color, roughness: 0.28, metalness: 0.05, clearcoat: 1, clearcoatRoughness: 0.15 })
    );
    const half = (mat, s) => {
      const g = new Group();
      const body = new Mesh(cyl, mat); body.rotation.z = Math.PI / 2; body.position.x = (s * L) / 2;
      const cap = new Mesh(sph, mat); cap.position.x = s * L;
      g.add(body, cap);
      return g;
    };
    const capsule = new Group();
    capsule.add(half(mats[0], -1), half(mats[1], 1));
    capsule.rotation.z = -0.35;
    scene.add(capsule);

    let raf = 0, visible = true, mx = 0, my = 0, t = 0;
    const resize = () => {
      const { clientWidth: w, clientHeight: h } = el;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    const frame = () => {
      if (!visible || document.hidden) return;
      t += 0.012;
      if (!reduce) { capsule.rotation.y += 0.004; capsule.position.y = Math.sin(t) * 0.08; }
      capsule.rotation.x += (my * 0.35 - capsule.rotation.x) * 0.05;
      capsule.position.x += (mx * 0.25 - capsule.position.x) * 0.05;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(frame);
    };
    const restart = () => { cancelAnimationFrame(raf); frame(); };
    const onMove = (e) => {
      const b = el.getBoundingClientRect();
      mx = ((e.clientX - b.left) / b.width - 0.5) * 2;
      my = ((e.clientY - b.top) / b.height - 0.5) * 2;
    };

    resize();
    const ro = new ResizeObserver(resize); ro.observe(el);
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) restart(); }); io.observe(el);
    addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("visibilitychange", restart);
    frame();

    return () => {
      cancelAnimationFrame(raf); ro.disconnect(); io.disconnect();
      removeEventListener("pointermove", onMove);
      document.removeEventListener("visibilitychange", restart);
      cyl.dispose(); sph.dispose(); mats.forEach((m) => m.dispose()); renderer.dispose();
      el.replaceChildren();
    };
  }, []);

  return <div className="stage" ref={host} role="img" aria-label="Health BoxD capsule logo in 3D" />;
}

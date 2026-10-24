# Health BoxD website

React 18 + Vite + three.js.

    npm install
    npm run dev      # local
    npm run build    # production build in dist/

- Routes: `/` home, `/#funding` investor page (hash routing, works on any static host).
- Content lives in `src/data/content.js`. Set `PATENT_PENDING` to false until an application is filed.
- Performance: pages and the 3D capsule are lazy-loaded; three.js and React ship as separate chunks; rendering pauses off-screen and in background tabs; reduced-motion is respected.

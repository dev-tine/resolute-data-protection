import { useEffect, useMemo, useState } from "react";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import { site } from "./data/site.js";

const routes = {
  "/": Home,
  "/about": About,
  "/services": Services,
  "/contact": Contact,
};

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

function stripBasePath(pathname) {
  if (!basePath || basePath === "") return pathname;
  if (pathname === basePath) return "/";
  if (pathname.startsWith(`${basePath}/`)) {
    return pathname.slice(basePath.length) || "/";
  }
  return pathname;
}

function getPath() {
  const path = stripBasePath(window.location.pathname);
  return routes[path] ? path : "/";
}

function scrollToHash(hash) {
  if (!hash) return;
  const target = document.querySelector(hash);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function App() {
  const [path, setPath] = useState(getPath);

  useEffect(() => {
    document.title = site.title;

    const handlePopState = () => {
      setPath(getPath());
      window.setTimeout(() => scrollToHash(window.location.hash), 0);
    };

    window.addEventListener("popstate", handlePopState);
    window.setTimeout(() => scrollToHash(window.location.hash), 0);

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const Page = useMemo(() => routes[path] ?? Home, [path]);

  const navigate = (href) => {
    const url = new URL(href, window.location.origin);
    const requestedPath = stripBasePath(url.pathname);
    const nextPath = routes[requestedPath] ? requestedPath : "/";
    const browserPath = `${basePath}${nextPath === "/" ? "/" : nextPath}`;

    if (nextPath === path && !url.hash && !url.search) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    window.history.pushState({}, "", `${browserPath}${url.search}${url.hash}`);
    setPath(getPath());

    window.setTimeout(() => {
      if (url.hash) {
        scrollToHash(url.hash);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 0);
  };

  return (
    <Layout currentPath={path} onNavigate={navigate}>
      <Page onNavigate={navigate} />
    </Layout>
  );
}

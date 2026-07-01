import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({ as: Component = "div", children, className = "", ...props }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.16 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Component ref={ref} className={`scroll-reveal ${visible ? "is-visible" : ""} ${className}`} {...props}>
      {children}
    </Component>
  );
}

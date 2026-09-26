import { type ReactNode, useEffect, useRef } from "react";

export function AnchoredDisclosure({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  const ref = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    let frame = 0;
    const revealHash = () => {
      if (window.location.hash !== `#${id}` || !ref.current) return;
      ref.current.open = true;
      frame = requestAnimationFrame(() => ref.current?.scrollIntoView({ block: "start" }));
    };
    revealHash();
    window.addEventListener("hashchange", revealHash);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", revealHash);
    };
  }, [id]);

  return <details ref={ref} id={id} className="source-disclosure"><summary>{title}</summary>{children}</details>;
}

import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ReferenceDetail } from "../../types/reference";
import { componentReadingHint, defaultCollapsedComponents, matchingComponents, parsePrefabReader, PrefabReaderSource } from "../../lib/prefabReader";
import { headingId } from "../../lib/text";
import { CopyValueButton } from "../common/CopyValueButton";
import { ReferenceRelationList } from "./ReferenceUi";

function MatchText({ text, query }: { text: string; query: string }) {
  const value = query.trim();
  if (!value) return <>{text}</>;
  const parts = [];
  let offset = 0;
  let next = text.toLowerCase().indexOf(value.toLowerCase());
  while (next >= 0) {
    parts.push(text.slice(offset, next), <mark key={next}>{text.slice(next, next + value.length)}</mark>);
    offset = next + value.length;
    next = text.toLowerCase().indexOf(value.toLowerCase(), offset);
  }
  parts.push(text.slice(offset));
  return <>{parts}</>;
}

export function PrefabReader({ detail }: { detail: ReferenceDetail }) {
  const sources = detail.readerSources!;
  const [params, setParams] = useSearchParams();
  const source = sources.find(item => item.id === params.get("snapshot")) ?? sources[0];
  return <PrefabReaderDocument key={detail.path + source.id} detail={detail} source={source} onSourceChange={id => {
    const next = new URLSearchParams(params);
    if (id === sources[0].id) next.delete("snapshot"); else next.set("snapshot", id);
    setParams(next, { replace: true });
  }} />;
}

function PrefabReaderDocument({ detail, source, onSourceChange }: {
  detail: ReferenceDetail; source: PrefabReaderSource; onSourceChange: (id: string) => void;
}) {
  const components = useMemo(() => parsePrefabReader(source.text, source.format), [source]);
  const [query, setQuery] = useState("");
  const [wrap, setWrap] = useState(true);
  const [closed, setClosed] = useState<Set<number>>(() => defaultCollapsedComponents(components));
  const [activeMatch, setActiveMatch] = useState(0);
  const [jumpTarget, setJumpTarget] = useState<number | null>(null);
  const [showSource, setShowSource] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState("");
  const refs = useRef<Array<HTMLElement | null>>([]);
  const matches = useMemo(() => matchingComponents(components, query), [components, query]);
  const docs = new Map((detail.relationGroups?.find(group => group.title === "Components")?.items ?? []).map(item => [item.title, item.path]));
  const guid = detail.stats?.find(row => row.label === "GUID")?.value;
  const related = (detail.relationGroups ?? []).filter(group => group.title !== "Components" && group.items.length > 0);

  useEffect(() => {
    const url = URL.createObjectURL(new Blob([source.text], { type: "text/plain;charset=utf-8" }));
    setDownloadUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [source]);

  function jump(index: number) {
    setClosed(previous => { const next = new Set(previous); next.delete(index); return next; });
    setJumpTarget(index);
  }

  useEffect(() => {
    if (jumpTarget === null) return;
    const element = refs.current[jumpTarget];
    element?.scrollIntoView({ block: "start", behavior: "auto" });
    (element?.querySelector("summary") ?? element)?.focus({ preventScroll: true });
    setJumpTarget(null);
  }, [jumpTarget]);

  useEffect(() => {
    const id = window.location.hash.slice(1);
    const index = components.findIndex(component => "detail-" + headingId(component.name) === id);
    if (index >= 0) jump(index);
  }, [components]);

  function moveMatch(direction: number) {
    if (!matches.length) return;
    const next = (activeMatch + direction + matches.length) % matches.length;
    setActiveMatch(next);
    jump(matches[next]);
  }

  return <article className="prefab-reader">
    <header className="reader-heading">
      <p className="text-sm text-[var(--database-accent-soft)]">Prefab</p>
      <h1 className="mt-2 text-2xl font-semibold leading-tight sm:text-3xl">{detail.title}</h1>
      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[var(--database-muted)]">
        {guid ? <span className="inline-flex items-center gap-2"><span className="font-mono">{guid}</span><CopyValueButton value={guid} label="Copy GUID" /></span> : null}
        <span>{components.length} components</span>
        <CopyValueButton value={detail.title} label="Copy name" />
      </div>
    </header>

    <div className="reader-toolbar">
      <div className="flex flex-wrap items-center gap-3">
        {(detail.readerSources?.length ?? 0) > 1 ? <label className="flex flex-wrap items-center gap-2 text-sm">
          Snapshot
          <select aria-label="Snapshot" className="database-input rounded-lg px-3 py-2" value={source.id} onChange={event => onSourceChange(event.target.value)}>
            {detail.readerSources!.map(item => <option key={item.id} value={item.id}>{item.label}</option>)}
          </select>
        </label> : <span className="text-sm text-[var(--database-muted)]">{source.label}</span>}
        <span className="text-xs text-[var(--database-muted)]">Game build not recorded</span>
        <CopyValueButton value={source.text} label={source.format === "dump" ? "Copy dump" : "Copy source"} />
        <a href={downloadUrl || undefined} download={source.filename} className="reader-button">Download {source.format === "dump" ? ".txt" : ".md"}</a>
        <a href="#reader-source" className="text-sm text-[var(--database-accent-soft)] underline underline-offset-4" onClick={() => setShowSource(true)}>Source details</a>
      </div>
      <div className="mt-3 flex flex-wrap items-end gap-2">
        <label className="min-w-0 basis-full text-xs text-[var(--database-muted)] sm:flex-1 sm:basis-0">
          Find in components
          <input type="search" value={query} onChange={event => { setQuery(event.target.value); setActiveMatch(0); }} placeholder="Field, value, or component" className="database-input mt-1 block w-full min-w-0 rounded-lg px-3 py-2 text-sm" />
        </label>
        <button type="button" className="reader-button" onClick={() => setClosed(new Set())}>Expand all</button>
        <button type="button" className="reader-button" onClick={() => setClosed(new Set(components.map((_, index) => index)))}>Collapse all</button>
        <button type="button" className="reader-button" aria-pressed={wrap} onClick={() => setWrap(!wrap)}>Wrap lines</button>
      </div>
      {query.trim() ? <div className="mt-2 flex flex-wrap items-center gap-3 text-sm">
        <span role="status">{matches.length ? `${activeMatch + 1} of ${matches.length} matching components` : "No matching components"}</span>
        <button type="button" className="reader-button" disabled={!matches.length} onClick={() => moveMatch(-1)}>Previous</button>
        <button type="button" className="reader-button" disabled={!matches.length} onClick={() => { if (matches.length) jump(matches[activeMatch]); }}>Go to match</button>
        <button type="button" className="reader-button" disabled={!matches.length} onClick={() => moveMatch(1)}>Next</button>
      </div> : null}
    </div>

    <div className="reader-layout">
      <aside className="reader-outline">
        <nav aria-label="Component outline">
          <p className="mb-3 text-xs font-semibold text-[var(--database-muted)]">Components</p>
          <ol>{components.map((component, index) => <li key={index}>
            <a href={`#detail-${headingId(component.name)}`} onClick={event => { event.preventDefault(); jump(index); window.history.replaceState(window.history.state, "", `#detail-${headingId(component.name)}`); }} title={component.name}>{component.name}</a>
          </li>)}</ol>
        </nav>
      </aside>
      <div className="min-w-0">
        <label className="mb-4 block text-sm lg:hidden">Jump to component
          <select className="database-input mt-1 block w-full min-w-0 rounded-lg p-2" aria-label="Jump to component" value="" onChange={event => jump(Number(event.target.value))}>
            <option value="" disabled>Select a component…</option>
            {components.map((component, index) => <option value={index} key={index}>{component.name}</option>)}
          </select>
        </label>
        <div className="reader-document">
          {components.length === 0 ? <p className="p-4">No component blocks were recognized. The complete source is available below.</p> : null}
          {components.map((component, index) => {
            const matched = matches.includes(index);
            if (!component.text.trim()) return <section key={index} id={`detail-${headingId(component.name)}`} ref={element => { refs.current[index] = element; }} tabIndex={-1} aria-label={component.name} className="reader-component reader-tag">
              <h2><MatchText text={component.name} query={query} /></h2>
              <span className="reader-component-kind">{componentReadingHint(component)}</span>
              <div className="reader-component-actions">
                {(component.path ?? docs.get(component.name)) ? <Link to={(component.path ?? docs.get(component.name))!}>Definition ↗</Link> : <span>No component doc</span>}
                <CopyValueButton value={component.name} label="Copy component" />
              </div>
            </section>;
            return <details key={index} id={`detail-${headingId(component.name)}`} ref={element => { refs.current[index] = element; }} className="reader-component" open={matched || !closed.has(index)}>
              <summary onClick={event => { event.preventDefault(); setClosed(previous => { const next = new Set(previous); if (next.has(index)) next.delete(index); else next.add(index); return next; }); }}>
                <h2><MatchText text={component.name} query={query} /></h2>
                <span className="reader-component-kind">{componentReadingHint(component)}</span>
              </summary>
              <div className="reader-component-actions">
                {(component.path ?? docs.get(component.name)) ? <Link to={(component.path ?? docs.get(component.name))!}>Definition ↗</Link> : <span>No component doc</span>}
                <CopyValueButton value={component.name + (component.text ? "\n" + component.text : "")} label="Copy component" />
              </div>
              <pre className={wrap ? "reader-values reader-wrap" : "reader-values"}><MatchText text={component.text} query={query} /></pre>
            </details>;
          })}
        </div>
      </div>
    </div>

    <section className="reader-secondary" aria-label="Related records and source">
      {related.map(group => <details key={group.title}>
        <summary>{group.title === "DB Records" ? "Gameplay records" : group.title} <span className="text-[var(--database-muted)]">({group.totalCount ?? group.items.length})</span></summary>
        <ReferenceRelationList items={group.items} totalCount={group.totalCount} />
      </details>)}
      <details id="reader-source" open={showSource}>
        <summary onClick={event => { event.preventDefault(); setShowSource(!showSource); }}>Source details</summary>
        <div className="space-y-3 p-3 text-sm">
          <p>{source.format === "dump" ? "Original text dump, preserved unchanged." : "Values are presented from the repository's Markdown snapshot. The original Markdown is preserved below."} The game build and capture date are not recorded.</p>
          {(detail.readerSources?.length ?? 0) > 1 ? <p>These snapshots contain different values. Switching snapshots changes the displayed data; neither has been used to overwrite the other.</p> : null}
          <dl className="space-y-2"><dt>Source</dt><dd className="break-all font-mono">{source.sourcePath}</dd><dt>SHA256</dt><dd className="break-all font-mono text-xs">{source.sha256}</dd></dl>
          {showSource ? <pre className="reader-original">{source.text}</pre> : null}
        </div>
      </details>
    </section>
  </article>;
}

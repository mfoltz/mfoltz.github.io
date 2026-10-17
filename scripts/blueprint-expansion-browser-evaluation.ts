/** Browser source stays independent of tsx's Node-side function-name helpers. */
export const clipboardMockSource = String.raw`(() => {
  Object.defineProperty(navigator, "clipboard", { configurable: true,
    value: { writeText: async value => { window.copiedGuid = value; } } });
})()`;

type Box = { x: number; y: number; right: number; bottom: number };
export type ExpansionPageMeasurement = {
  width: number; overflow: number;
  cards: { card: Box; title: Box; prefab: Box; metadata: Box | null; metadataContent: Box | null;
    fields: { text: string | null; box: Box; overflow: number }[] }[];
};

export const measureReferenceSource = String.raw`(() => ({ width: innerWidth, overflow: document.documentElement.scrollWidth - innerWidth,
  cards: [...document.querySelectorAll("[data-db-reference]")].filter(node => node.getBoundingClientRect().width > 0).map(node => {
    const box = element => { const r = element.getBoundingClientRect(); return { x: r.x, y: r.y, right: r.right, bottom: r.bottom }; };
    const title = node.querySelector("[data-db-reference-title]"), prefab = node.querySelector("[data-db-reference-prefab]");
    const metadata = node.querySelector("[data-db-reference-metadata]");
    return { card: box(node), title: box(title), prefab: box(prefab), metadata: metadata ? box(metadata) : null,
      metadataContent: metadata?.firstElementChild ? box(metadata.firstElementChild) : null,
      fields: [...node.querySelectorAll("[data-db-reference-title],[data-db-reference-prefab],[data-db-reference-metadata]")]
        .map(element => ({ text: element.textContent, box: box(element), overflow: element.scrollWidth - element.clientWidth })) };
  }) }))()`;

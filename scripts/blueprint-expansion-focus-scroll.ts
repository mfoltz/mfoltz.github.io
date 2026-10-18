import assert from "node:assert/strict";
type FocusObservation = { identity: string; geometry: string };
export async function waitForFocusScroll(observe: () => Promise<FocusObservation>, pause: (ms:number) => Promise<void>, now: () => number = Date.now) {
 const deadline=now()+5000;let previous="",stableSince=now();const samples: (FocusObservation & {time:number})[]=[];
 while(true){
  const observation=await observe(),time=now(),key=JSON.stringify([observation.identity,observation.geometry]);samples.push({...observation,time});
  if(key!==previous){previous=key;stableSince=time;}
  if(time-stableSince>=250)return samples;
  assert(time<deadline,"Intermediate keyboard focus scroll did not settle");await pause(50);
 }
}

export async function settleExpansionKeyboardFocus(page: import("playwright").Page) {
 await waitForFocusScroll(() => page.evaluate(() => {
  const state = window as unknown as { __blueprintExpansionFocus?: { node: Element | null; id: number } };
  const active = document.activeElement;
  if (state.__blueprintExpansionFocus?.node !== active)
   state.__blueprintExpansionFocus = { node: active, id: (state.__blueprintExpansionFocus?.id ?? 0) + 1 };
  const box = active!.getBoundingClientRect();
  return { identity: String(state.__blueprintExpansionFocus!.id),
   geometry: JSON.stringify([scrollX, scrollY, box.x, box.y, box.width, box.height]) };
 }), milliseconds => page.waitForTimeout(milliseconds));
}

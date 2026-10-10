export function toBanglaNumber(value: number | string): string {
  return new Intl.NumberFormat("bn-BD", {
    maximumFractionDigits: 2,
    useGrouping: true,
  }).format(Number(value));
}

const unitMap: Record<string, string> = {
  kg: "কেজি",
  g: "গ্রাম",
  mg: "মিলিগ্রাম",
  liter: "লিটার",
  litre: "লিটার",
  l: "লিটার",
  ml: "মিলিলিটার",
  pcs: "পিস",
  pc: "পিস",
  piece: "পিস",
  pieces: "পিস",
  dozen: "ডজন",
  pack: "প্যাকেট",
  packet: "প্যাকেট",
  bottle: "বোতল",
  bag: "বস্তা",
  box: "বাক্স",
};

export function toBanglaUnit(unit: string): string {
  return unitMap[unit.trim().toLowerCase()] ?? unit;
}
// ─── Dice & Random Utilities ──────────────────────────────────────

export function secureRandInt(max: number): number {
  const arr = new Uint32Array(1);
  crypto.getRandomValues(arr);
  return (arr[0] % max) + 1;
}

export function rollD20({ advantage = false, disadvantage = false }: { advantage?: boolean; disadvantage?: boolean } = {}) {
  const r1 = secureRandInt(20);
  if (!advantage && !disadvantage) return { rolls: [r1], result: r1 };
  const r2 = secureRandInt(20);
  return { rolls: [r1, r2], result: advantage ? Math.max(r1, r2) : Math.min(r1, r2) };
}

export function rollFormula(formula: string) {
  const clean = formula.replace(/\s+/g, '');
  const m = clean.match(/^(\d*)d(\d+)([+-]\d+)?$/i);
  if (!m) {
    const n = parseInt(clean);
    return isNaN(n) ? null : { rolls: [], mod: 0, total: n, formula };
  }
  const n = m[1] ? parseInt(m[1]) : 1;
  const die = parseInt(m[2]);
  const mod = m[3] ? parseInt(m[3]) : 0;
  const rolls: number[] = [];
  for (let i = 0; i < n; i++) rolls.push(secureRandInt(die));
  return { rolls, mod, total: rolls.reduce((a, b) => a + b, 0) + mod, formula };
}

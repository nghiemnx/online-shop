export function isPositiveInteger(input: unknown): boolean {
  if (typeof input === 'number' && Number.isInteger(input) && input > 0) {
    return true;
  }
  if (typeof input === 'string' && /^\d+$/.test(input)) {
    return true;
  }
  return false;
}

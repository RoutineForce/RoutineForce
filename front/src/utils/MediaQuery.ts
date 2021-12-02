export function mediaQueryMaker(minWidth: number, maxWidth: number): string {
  return `(min-width: ${minWidth}px) and (max-width: ${maxWidth}px)`;
}

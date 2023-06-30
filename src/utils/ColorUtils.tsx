export function brightenHex(hexColor: string, rate: number): string {
  // Convert hex to RGB
  let r = parseInt(hexColor.substring(1, 3), 16);
  let g = parseInt(hexColor.substring(3, 5), 16);
  let b = parseInt(hexColor.substring(5, 7), 16);

  // Increase brightness by 30%
  r = Math.min(Math.round(r * rate), 255);
  g = Math.min(Math.round(g * rate), 255);
  b = Math.min(Math.round(b * rate), 255);

  // Convert RGB back to hex
  return (
    "#" +
    ("0" + r.toString(16)).slice(-2) +
    ("0" + g.toString(16)).slice(-2) +
    ("0" + b.toString(16)).slice(-2)
  );
}

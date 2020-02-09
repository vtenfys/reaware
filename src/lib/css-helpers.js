export function rem(pixels) {
  return `${pixels / 16}rem`;
}

export function color(name) {
  return `var(--color-${name})`;
}

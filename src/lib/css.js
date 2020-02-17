import Color from "color";

export function rem(pixels) {
  return `${pixels / 16}rem`;
}

export const lighten = color =>
  Color(color)
    .lighten(0.125)
    .hex();

export const darken = color =>
  Color(color)
    .darken(0.125)
    .hex();

export const colors = {
  light: "#eee",
  medium: "#ccc",
  dark: "#333",
  white: "#fff",
  primary: "#00575c",
  secondary: "#42505c",
  emoji: "#ffc56b",
};

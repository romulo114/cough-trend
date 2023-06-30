import { CoughDynamicStatus } from "./types";

export const colors = {
  white: "#FFFFFF",
  blue: "#243966",
  lightGrey: "#EAECEF",
  lighterGrey: "#F7F7F9",
  lighterGrey2: "#778397",
  lighterGrey3: "#F1F1F3",
  lighterGrey4: "#D7DBE0",
  dark: "#24282F",
  darkGrey: "#778397",
  darkerGrey: "#2A426F",
  red: "#E3655B",
  purple: "#396df1",
};

export const statusColorVariants: Record<CoughDynamicStatus, string> = {
  worse: "#F08770",
  somewhat_worse: "#FDCD70",
  same: "#A1AFC6",
  somewhat_better: "#91CDEFCC",
  better: "#9FEAB8CC",
};

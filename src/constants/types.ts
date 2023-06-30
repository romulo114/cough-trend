export type CoughDynamicStatus =
  | "worse"
  | "somewhat_worse"
  | "same"
  | "somewhat_better"
  | "better";

export type CoughDynamicRecord = {
  coughs: number;
  session_time_s: number;
  time: string;
};

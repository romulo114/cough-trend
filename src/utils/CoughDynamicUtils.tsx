import { CoughDynamicRecord, CoughDynamicStatus } from "constants/types";
import { ReactNode } from "react";
import { ReactComponent as WorseSvg } from "assets/svg/getting-worse.svg";
import { ReactComponent as SomewhatWorseSvg } from "assets/svg/somewhat-worse.svg";
import { ReactComponent as SameSvg } from "assets/svg/about-same.svg";
import { ReactComponent as SomewhatBetterSvg } from "assets/svg/somewhat-better.svg";
import { ReactComponent as BetterSvg } from "assets/svg/much-better.svg";
import { statusColorVariants } from "constants/colors";
import { brightenHex } from "./ColorUtils";

export function getCoughDynamicStatusFromValue(
  value: number
): CoughDynamicStatus {
  if (value >= 0.5) return "worse";
  if (value >= 0.1) return "somewhat_worse";
  if (value >= -0.1) return "same";
  if (value >= -0.5) return "somewhat_better";
  return "better";
}

export function formatPercentText(value: number): string {
  return `${value > 0 ? "+" : ""}${Math.round(value * 100)}%`;
}

export function getSvgFromStatus(status: CoughDynamicStatus): ReactNode {
  const map: Record<CoughDynamicStatus, ReactNode> = {
    worse: <WorseSvg />,
    somewhat_worse: <SomewhatWorseSvg />,
    same: <SameSvg />,
    somewhat_better: <SomewhatBetterSvg />,
    better: <BetterSvg />,
  };
  return map[status];
}

export function getMessageFromStatus(status: CoughDynamicStatus): string {
  const map: Record<CoughDynamicStatus, string> = {
    worse: "It's getting worse",
    somewhat_worse: "Somewhat worse",
    same: "About the same",
    somewhat_better: "Somewhat better",
    better: "Much better",
  };
  return map[status];
}

export function getAngleFromStatus(status: CoughDynamicStatus): number {
  const map: Record<CoughDynamicStatus, number> = {
    worse: -30,
    somewhat_worse: -15,
    same: 0,
    somewhat_better: 15,
    better: 30,
  };
  return map[status];
}

export function getGradientFromStatus(status: CoughDynamicStatus): string {
  let baseColor = statusColorVariants[status];
  if (status === "same")
    return `linear-gradient(270deg, ${baseColor}, ${baseColor})`;
  return `linear-gradient(270deg, ${brightenHex(
    baseColor,
    1.05
  )}, ${brightenHex(baseColor, 1.2)})`;
}

export function getAverageCoughsFromArray(data: CoughDynamicRecord[]): number {
  const [coughs, sessionTime] = data.reduce(
    ([coughs, sessionTime], item) => [
      coughs + item.coughs,
      sessionTime + item.session_time_s,
    ],
    [0, 0]
  );
  if (!sessionTime) return 0;
  return coughs / sessionTime;
}

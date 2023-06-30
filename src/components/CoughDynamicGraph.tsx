import { colors } from "constants/colors";
import { rotateIn } from "constants/keyframes";
import { CoughDynamicStatus } from "constants/types";
import { styled } from "styled-components";
import {
  getAngleFromStatus,
  getGradientFromStatus,
} from "utils/CoughDynamicUtils";

export function CoughDynamicGraph({
  status,
  isLoading,
}: {
  status: CoughDynamicStatus;
  isLoading: boolean;
}) {
  return (
    <Wrapper isLoading={isLoading}>
      {isLoading ? null : (
        <>
          <Triangle />
          <BaseLine />
          <TrendLine status={status} />
          <CenterCircle />
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div<{ isLoading: boolean }>`
  position: relative;
  width: 117px;
  height: 66px;
  background: ${({ isLoading }) =>
    isLoading ? colors.lighterGrey3 : colors.lighterGrey + "CC"};
  transition: all 0.3s ease-in-out;
`;

const Triangle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-left: 4.33px solid transparent;
  border-right: 4.33px solid transparent;
  border-bottom: 28px solid ${colors.lighterGrey4};
  transform: translateX(-50%);
`;

const BaseLine = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 85px;
  height: 0;
  border-bottom: 2px dashed ${colors.lighterGrey4};
  transform: translate(-50%, -50%);
  transition: all 0.5s ease-in-out;
`;

const TrendLine = styled.div<{ status: CoughDynamicStatus }>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 87px;
  height: 6px;
  border-radius: 999px;
  background: ${({ status }) => getGradientFromStatus(status)};
  transform: ${({ status }) =>
    `translate(-50%, -50%) rotate(${getAngleFromStatus(status)}deg)`};
  transition: all 0.5s ease-in-out;
  animation: ${rotateIn} 0.3s ease-in-out;
`;

const CenterCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  border-radius: 100%;
  border: 1px solid ${colors.darkerGrey};
  background: ${colors.white};
  transform: translate(-50%, -50%);
  box-sizing: border-box;
`;

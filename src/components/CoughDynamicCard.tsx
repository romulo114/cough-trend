import { colors, statusColorVariants } from "constants/colors";
import { CoughDynamicStatus } from "constants/types";
import { styled } from "styled-components";
import {
  formatPercentText,
  getCoughDynamicStatusFromValue,
} from "utils/CoughDynamicUtils";
import { CoughDynamicGraph } from "./CoughDynamicGraph";
import { EmojiMessage } from "./EmojiMessage";
import { fadeIn } from "constants/keyframes";

export function CoughDynamicCard({
  value,
  isLoading,
}: {
  value: number;
  isLoading: boolean;
}) {
  const status: CoughDynamicStatus = getCoughDynamicStatusFromValue(value);

  return (
    <Wrapper>
      <LeftPart>
        <Title>Cough dynamic</Title>
        <Description>Last 24h comparing to the previous week</Description>
        <SEmojiMessage status={status} isLoading={isLoading} />
      </LeftPart>
      <RightPart>
        {isLoading ? (
          <PercentTextPlaceholder />
        ) : (
          <PercentText status={status}>{formatPercentText(value)}</PercentText>
        )}
        <CoughDynamicGraph status={status} isLoading={isLoading} />
      </RightPart>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  background-color: ${colors.white};
  padding: 12px 16px;
  border-radius: 8px;
  filter: drop-shadow(0px 1px 8px rgba(0, 0, 0, 0.05));
`;

const LeftPart = styled.div`
  max-width: 186px;
`;

const RightPart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
`;

const Title = styled.h6`
  color: #24282f;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
`;

const Description = styled.p`
  color: #778397;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  margin-top: 4px;
`;

const PercentText = styled.span<{
  status: CoughDynamicStatus;
}>`
  top: 0;
  right: 0;
  color: ${({ status }) => statusColorVariants[status]};
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  transition: all 0.5s ease-in-out;
  animation: ${fadeIn} 0.3s ease-in-out;
`;

const PercentTextPlaceholder = styled.div`
  width: 70px;
  height: 32px;
  background: ${colors.lighterGrey3};
  animation: ${fadeIn} 0.3s ease-in-out;
`;

const SEmojiMessage = styled(EmojiMessage)`
  margin-top: 13px;
`;

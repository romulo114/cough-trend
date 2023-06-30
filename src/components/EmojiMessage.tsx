import { colors } from "constants/colors";
import { fadeIn } from "constants/keyframes";
import { CoughDynamicStatus } from "constants/types";
import { styled } from "styled-components";
import {
  getMessageFromStatus,
  getSvgFromStatus,
} from "utils/CoughDynamicUtils";

export function EmojiMessage({
  status,
  isLoading,
  className,
}: {
  status: CoughDynamicStatus;
  isLoading: boolean;
  className?: string;
}) {
  return isLoading ? (
    <Wrapper className={className}>
      <IconPlaceholder />
      <TextPlaceholder />
    </Wrapper>
  ) : (
    <Wrapper className={className}>
      {getSvgFromStatus(status)}
      <Text>{getMessageFromStatus(status)}</Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  width: fit-content;
  align-items: center;
  border-radius: 999px;
  padding: 4px 12px;
  background: ${colors.lighterGrey3};
  animation: ${fadeIn} 0.3s ease-in-out;
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.36;
  color: ${colors.darkGrey};
  animation: ${fadeIn} 0.3s ease-in-out;
`;

const IconPlaceholder = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 100%;
  background: ${colors.lighterGrey3};
`;

const TextPlaceholder = styled.div`
  height: 19px;
  width: 100px;
  background: ${colors.lighterGrey3};
`;

import { ReactComponent as CancelSvg } from "assets/svg/cancel.svg";
import { colors } from "constants/colors";
import { fadeIn } from "constants/keyframes";
import { styled } from "styled-components";

export const ModalHeader = styled.div`
  background-color: #243966;
  height: 95px;
  color: #eaecef;
  padding-top: 51px;
  text-align: center;
  line-height: 24px;
`;

export const ModalBody = styled.div`
  padding: 16px;
`;

export const Modal = ({
  title,
  open,
  onClose,
  children,
}: {
  title: string;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  if (!open) return null;
  return (
    <Wrapper>
      <Header>
        <CloseButton onClick={onClose}>
          <CancelSvg />
        </CloseButton>
        <Title>{title}</Title>
      </Header>
      <Body>{children}</Body>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  animation: ${fadeIn} 0.3s ease-in-out;
`;

const Header = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  background-color: ${colors.blue};
  padding: 51px 16px 20px;
`;

const Title = styled.h4`
  color: ${colors.lightGrey};
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
  text-align: center;
`;

const CloseButton = styled.button`
  position: absolute;
  left: 16px;
  bottom: 20px;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  background: none;
  padding: 0px;
  margin: 0px;
`;

const Body = styled.div`
  flex-grow: 1;
  padding: 16px;
  background-color: ${colors.lighterGrey};
`;

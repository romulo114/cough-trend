import { keyframes } from "styled-components";

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const rotateIn = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
`;

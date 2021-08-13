import React, { FunctionComponent } from "react";
import styled, { keyframes } from "styled-components";
import { Opacity } from "../../utils/opacity";

export interface LoaderProps {
  readonly size?: number;
}

const ripple = (opacity: Opacity) => keyframes`
  from {
    transform: scale(0);
    opacity: ${opacity[100]};
  }

  to {
    transform: scale(1);
    opacity: ${opacity[0]};;
  }
`;

const Wave = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: ${({ theme }) =>
    `${theme.spacing["1.5"]} solid ${theme.colors.black}`};
  animation: ${({ theme }) => `1.5s ${ripple(theme.opacity)} infinite;`};
`;

const StyledLoader = styled.div<{ size: number }>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ size }) => `${size}rem`};
  height: ${({ size }) => `${size}rem`};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${Wave}:nth-child(2) {
    animation-delay: 0.5s;
  }
`;

export const Loader: FunctionComponent<LoaderProps> = (props) => {
  const { size = 2 } = props;
  return (
    <StyledLoader size={size}>
      <Wave />
      <Wave />
    </StyledLoader>
  );
};

Loader.displayName = "Loader";

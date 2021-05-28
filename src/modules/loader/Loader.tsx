import React, { FunctionComponent } from "react";
import styled, { keyframes } from "styled-components";

import { black } from "../../utils/colors";

export interface LoaderProps {
  readonly size?: number;
}

const ripple = keyframes`
  from {
    transform: scale(0);
    opacity: 1;
  }

  to {
    transform: scale(1);
    opacity: 0;
  }
`;

const Wave = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 0.3rem solid ${black};
  animation: 1.5s ${ripple} infinite;
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

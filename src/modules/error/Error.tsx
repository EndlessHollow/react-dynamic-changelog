import React, { FC } from "react";
import styled from "styled-components";

export interface ErrorProps {
  error: string;
}

const ErrorMessage = styled.p`
  text-align: center;
`;

export const Error: FC<ErrorProps> = (props): JSX.Element => {
  const { error } = props;
  return (
    <>
      <ErrorMessage>{error}</ErrorMessage>;
    </>
  );
};

Error.displayName = "Error";

import React, { FunctionComponent } from "react";
import ReactJson from "react-json-view";
import styled from "styled-components";
import { ReactComponent as PlusIcon } from "../../assets/plus.svg";
import { ReactComponent as RemoveIcon } from "../../assets/remove.svg";
import { ReactComponent as ShuffleIcon } from "../../assets/shuffle.svg";
import { black, green, grey, red, yellow } from "../../utils/colors";
import { IconType } from "../types/icons";

export interface CardProps {
  iconType: IconType;
  diff: any;
}

const StyledCard = styled.div`
  display: grid;
  row-gap: 0.5rem;
  padding: 1.5rem;
  border-radius: 0.625rem;
  box-shadow: 0.25rem 0.75rem 2.9375rem 0 rgb(0 0 0 / 10%);
`;

const HeadlineContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${black};
`;

const Headline = styled.div`
  font-weight: 500;
`;

const Subheading = styled.div`
  color: ${grey};
`;

const StyledAddIcon = styled(PlusIcon)<{ size: number }>`
  width: ${({ size }) => `${size}rem`};
  height: ${({ size }) => `${size}rem`};
  fill: ${green};
`;

const StyledShuffleIcon = styled(ShuffleIcon)<{ size: number }>`
  width: ${({ size }) => `${size}rem`};
  height: ${({ size }) => `${size}rem`};
  fill: ${yellow};
`;

const StyledRemoveIcon = styled(RemoveIcon)<{ size: number }>`
  width: ${({ size }) => `${size}rem`};
  height: ${({ size }) => `${size}rem`};
  fill: ${red};
`;

const CodeBlock = styled.code`
  overflow: scroll;
`;

export const Card: FunctionComponent<CardProps> = (props) => {
  const { iconType, diff } = props;
  const {
    propName,
    propPath,
    value: { before, after },
  } = diff;

  return (
    <StyledCard>
      <HeadlineContainer>
        <Headline>{propName}</Headline>
        {iconType === IconType.Addition && <StyledAddIcon size={1} />}
        {iconType === IconType.Change && <StyledShuffleIcon size={1} />}
        {iconType === IconType.Removal && <StyledRemoveIcon size={1} />}
      </HeadlineContainer>

      <Subheading>{propPath.replaceAll(".", " > ")}</Subheading>
      {before && (
        <CodeBlock>
          <ReactJson
            src={{ before }}
            collapsed={1}
            collapseStringsAfterLength={15}
          />
        </CodeBlock>
      )}
      {after && (
        <CodeBlock>
          <ReactJson
            src={{ after }}
            collapsed={1}
            collapseStringsAfterLength={15}
          />
        </CodeBlock>
      )}
    </StyledCard>
  );
};

Card.displayName = "Card";

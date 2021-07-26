import React, { FunctionComponent } from "react";
import ReactJson from "react-json-view";
import styled from "styled-components";
import { ReactComponent as PlusIcon } from "../../assets/plus.svg";
import { ReactComponent as RemoveIcon } from "../../assets/remove.svg";
import { ReactComponent as ShuffleIcon } from "../../assets/shuffle.svg";
import { IconType } from "../types/icons";

//TODO: Finish types for diff
export interface CardProps {
  iconType: IconType;
  diff: any;
}

const StyledCard = styled.div`
  border-radius: ${({ theme }) => theme.spacing[2.5]};
  box-shadow: 0.25rem 0.75rem 2.9375rem 0 rgb(0 0 0 / 10%);
  display: grid;
  padding: ${({ theme }) => theme.spacing[6]};
  row-gap: ${({ theme }) => theme.spacing[2]};
`;

const HeadlineContainer = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: space-between;
`;

const Headline = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.fontMedium};
`;

const Subheading = styled.div`
  color: ${({ theme }) => theme.colors.grey};
`;

const StyledAddIcon = styled(PlusIcon)<{ size: number }>`
  fill: ${({ theme }) => theme.colors.green};
  height: ${({ size }) => `${size}rem`};
  width: ${({ size }) => `${size}rem`};
`;

const StyledShuffleIcon = styled(ShuffleIcon)<{ size: number }>`
  fill: ${({ theme }) => theme.colors.yellow};
  height: ${({ size }) => `${size}rem`};
  width: ${({ size }) => `${size}rem`};
`;

const StyledRemoveIcon = styled(RemoveIcon)<{ size: number }>`
  fill: ${({ theme }) => theme.colors.red};
  height: ${({ size }) => `${size}rem`};
  width: ${({ size }) => `${size}rem`};
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

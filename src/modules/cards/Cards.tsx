import { getDiff, Obj } from "json-schema-changelog";
import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { IconType } from "../types/icons";
import { Card } from "./Card";

export interface CardsProps {
  readonly schemas: [Obj, Obj];
}

const CardsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const CardsWrapper = styled.div`
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing[0]} ${theme.spacing[2]}`};

  @media (min-width: ${({ theme }) => theme.screens.sm}) {
    width: ${({ theme }) => `calc(50% - ${theme.spacing[4]})`};
  }

  & > div {
    margin-bottom: ${({ theme }) => theme.spacing[4]};
  }
`;

const CardsHeadline = styled.h2`
  font-size: ${({ theme }) => theme.fontSize["text-xl"]};
  font-weight: ${({ theme }) => theme.fontWeight.fontMedium};
  color: ${({ theme }) => theme.colors.grey};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing[5]};
`;

const StyledText = styled.p`
  text-align: center;
`;

export const Cards: FunctionComponent<CardsProps> = (props) => {
  const { schemas } = props;

  const diffMaps = getDiff(...schemas);
  const additions = diffMaps.additions;
  const removals = diffMaps.removals;
  const changes = diffMaps.changes;

  return (
    <CardsContainer>
      {additions && additions.size ? (
        <CardsWrapper>
          <CardsHeadline>Added</CardsHeadline>
          {Array.from(additions.values()).map((item, index) => (
            <Card key={index} iconType={IconType.Addition} diff={item} />
          ))}
        </CardsWrapper>
      ) : (
        <CardsWrapper>
          <CardsHeadline>Added</CardsHeadline>
          <StyledText>No Additional Properties</StyledText>
        </CardsWrapper>
      )}
      {changes && changes.size ? (
        <CardsWrapper>
          <CardsHeadline>Changed</CardsHeadline>
          {Array.from(changes.values()).map((item, index) => (
            <Card key={index} iconType={IconType.Change} diff={item} />
          ))}
        </CardsWrapper>
      ) : (
        <CardsWrapper>
          <CardsHeadline>Changed</CardsHeadline>
          <StyledText>No Changed Properties</StyledText>
        </CardsWrapper>
      )}
      {removals && removals.size ? (
        <CardsWrapper>
          <CardsHeadline>Removed</CardsHeadline>
          {Array.from(removals.values()).map((item, index) => (
            <Card key={index} iconType={IconType.Removal} diff={item} />
          ))}
        </CardsWrapper>
      ) : (
        <CardsWrapper>
          <CardsHeadline>Removed</CardsHeadline>
          <StyledText>No Removed Properties</StyledText>
        </CardsWrapper>
      )}
    </CardsContainer>
  );
};

Cards.displayName = "Cards";

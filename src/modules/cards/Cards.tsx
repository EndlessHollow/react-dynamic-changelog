import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { Card } from "./Card";
import { getDiff, Obj } from "json-schema-changelog";
import { grey } from "../../utils/colors";
import { IconType } from "../types/icons";
import breakpoints from "../../utils/breakpoints";

export interface CardsProps {
  readonly schemas: [Obj, Obj];
}

const CardsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const CardsWrapper = styled.div`
  width: 100%;
  padding: 0 0.5rem;

  @media (min-width: ${breakpoints.mobileDevice}) {
    width: calc(50% - 1rem);
  }

  & > div {
    margin-bottom: 1rem;
  }
`;

const CardsHeadline = styled.h2`
  font-size: 1.25rem;
  font-weight: 500;
  color: ${grey};
  text-align: center;
  margin-bottom: 1.25rem;
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

  console.log("additions", additions);
  console.log("changes", changes);

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

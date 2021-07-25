import React from "react";
import styled from "styled-components";
import { useFetchSchemas } from "../../utils/use-fetch-schema";
import { Cards } from "../cards/Cards";
import { Loader } from "../loader/Loader";

const DashboardContainer = styled.div`
  margin: ${({ theme }) => `${theme.spacing[0]} ${theme.spacing[4]}`};
`;

//TODO: Font size
const DashboardHeadline = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.spacing[7]};
  font-weight: ${({ theme }) => theme.fontWeight.fontBold};
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  text-align: center;
`;

//TODO: Make its own component and style it
const ErrorMessage = styled.p``;

export const Dashboard = () => {
  const { loading, schemas, error } = useFetchSchemas();

  return (
    <DashboardContainer>
      <DashboardHeadline>Schema Differences</DashboardHeadline>
      {loading && <Loader />}
      {schemas && <Cards schemas={schemas} />}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </DashboardContainer>
  );
};

Dashboard.displayName = "Dashboard";

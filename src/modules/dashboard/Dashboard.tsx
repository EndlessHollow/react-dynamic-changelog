import React from "react";
import styled from "styled-components";
import { useFetchSchemas } from "../../utils/use-fetch-schema";
import { Cards } from "../cards/Cards";
import { Loader } from "../loader/Loader";
import { Error } from "../error/Error";

const DashboardContainer = styled.div`
  margin: ${({ theme }) => `${theme.spacing[0]} ${theme.spacing[4]}`};
`;

const DashboardHeadline = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize["text-2xl"]};
  font-weight: ${({ theme }) => theme.fontWeight.fontBold};
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  text-align: center;
`;

export const Dashboard = () => {
  const { loading, schemas, error } = useFetchSchemas();

  return (
    <DashboardContainer>
      <DashboardHeadline>Schema Differences</DashboardHeadline>
      {loading && <Loader />}
      {schemas && <Cards schemas={schemas} />}
      {error && <Error error={error} />}
    </DashboardContainer>
  );
};

Dashboard.displayName = "Dashboard";

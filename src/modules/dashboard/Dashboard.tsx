import React from "react";
import styled from "styled-components";

import { black } from "../../utils/colors";
import { Cards } from "../cards/Cards";
import { Loader } from "../loader/Loader";
import { useFetchSchemas } from "../../utils/use-fetch-schema";

const DashboardContainer = styled.div`
  margin: 0 1rem;
`;

const DashboardHeadline = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${black};
  text-align: center;
  margin-bottom: 2rem;
`;

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

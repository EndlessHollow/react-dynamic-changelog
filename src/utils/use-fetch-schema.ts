import { Obj } from "json-schema-changelog";
import React, { useState } from "react";
import { fetchSchema } from "./fetch-schema";
import { getFetchOptions } from "./get-fetch-options";

export const useFetchSchemas = () => {
  const [schemas, setSchemas] = useState<[Obj, Obj] | undefined>();
  const [loading, setLoading] = useState<boolean>();
  const [error, setError] = useState<string | null>(null);
  const [optionsA, optionsB] = getFetchOptions();

  React.useEffect(() => {
    setLoading(true);

    Promise.all([fetchSchema(optionsA), fetchSchema(optionsB)])
      .then((data) => {
        setSchemas(data);
      })
      .catch((error) => {
        console.warn(error.message);
        setError(`Error fetching schemas`);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    loading,
    schemas,
    error,
  };
};

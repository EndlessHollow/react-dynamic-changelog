import { FetchOptions } from "./types/fetch-schema";

const replacePlaceholder = (vars: Record<string, string>) => {
  return (word: string) => {
    const [, key] = word.match(/^%([\w-]+)%$/) ?? [];

    return key ? vars[key] : word;
  };
};

export const composeUrl = (
  urlTemplate: string,
  vars: Record<string, string>
) => {
  return urlTemplate
    .split(/(%[\w-]+%)/)
    .map(replacePlaceholder(vars))
    .join("");
};

export const fetchSchema = async (args: FetchOptions) => {
  const { urlTemplate, vars, headers } = args;

  const url = vars ? composeUrl(urlTemplate, vars) : urlTemplate;

  const resp = await fetch(url, {
    method: "GET",
    headers,
  });

  if (!resp.ok) {
    throw new Error(`Failed to get response from the server ${resp.status}`);
  }

  return resp.json();
};

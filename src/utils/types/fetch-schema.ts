export interface FetchOptions {
  urlTemplate: string;
  vars?: Record<string, string>;
  headers?: Record<string, string>;
}

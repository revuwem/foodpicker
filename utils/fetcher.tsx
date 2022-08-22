const fetcher = (url: string) => fetch(url).then((res) => res.json());

const randomRecipeFetcher = (url: string) =>
  fetcher(url).then((data) => data.recipes[0]);

const recipeInformationBulkFetcher = (url: string) =>
  fetcher(url).then((data) => data);

const recipeInformationFetcher = (url: string) =>
  fetcher(url).then((data) => data);

export {
  randomRecipeFetcher,
  recipeInformationBulkFetcher,
  recipeInformationFetcher,
};

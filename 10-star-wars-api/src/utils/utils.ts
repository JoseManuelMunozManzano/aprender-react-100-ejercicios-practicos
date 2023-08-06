export const getIdFromUrl = (url: string): string => {
  const url_splited = url.split('/');
  const w = url_splited.length;
  return url_splited[w - 2];
};

export const getPaginationLinks = (elementsAmount: number, elementsPerPage: number): number[] => {
  const pagesAmount = elementsAmount / elementsPerPage;
  const linksData = [];

  for (let i = 0; i < pagesAmount; i++) {
    linksData.push(i);
  }

  return linksData;
};

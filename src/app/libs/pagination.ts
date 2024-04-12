type Item = any;

const paginate = (
  items: Item[],
  pageNumber: number,
  pageSize: number
): Item[] => {
  const startIndex = (pageNumber - 1) * pageSize;
  return items.slice(startIndex, startIndex + pageSize);
};

export default paginate;

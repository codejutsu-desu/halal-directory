import { useRestaurantContext } from "../providers/RestaurantContext";

interface PaginationProps {
  items: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  items,
  pageSize,
  currentPage,
  onPageChange,
}) => {
  const pagesCount = Math.ceil(items / pageSize);

  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
  console.log(pages);

  return (
    <div className="p-2">
      <ul className="flex justify-end gap-1 items-center">
        {pages.map((page) => (
          <li
            key={page}
            className={
              page === currentPage
                ? "flex justify-center gap-1 items-center w-8 h-8 rounded-md border-solid border-#eaeaea"
                : "flex justify-center gap-1 items-center w-8 h-8 rounded-md border-solid border-#eaeaea bg-green-500"
            }
          >
            <a
              className="cursor-pointer text-2xl"
              onClick={() => onPageChange(page)}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;

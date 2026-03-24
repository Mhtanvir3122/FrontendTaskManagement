import clsx from "clsx";
import { memo, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Select } from "../Select";
import { IMeta } from "@/components/myComponent/interface/common.interface";
import { numEnToBn } from "../input/checkValidation";
import { searchParamsToObject } from "../utils/makeObject";
import Separator from "../Separator/Separator";

interface IPaginationProps {
  meta: IMeta;
  pageNeighbours?: number;
  onPageChanged?: (metaData: IMeta) => void;
  isLimitChangeable?: boolean;
  hideDataCount?: boolean;
  setSearchParams?: boolean;
  limitOptions?: { text: string; value: number | null }[];
}

const defaultLimitOptions = [
  { text: "৫", value: 5 },
  { text: "১০", value: 10 },
  { text: "২০", value: 20 },
  { text: "৩০", value: 30 },
  { text: "৪০", value: 40 },
  { text: "৫০", value: 50 },
  { text: "৬০", value: 60 },
  { text: "৭০", value: 70 },
  { text: "৮০", value: 80 },
  { text: "৯০", value: 90 },
  { text: "১০০", value: 100 },
];

const LEFT_PAGE = "LEFT";
const RIGHT_PAGE = "RIGHT";

const range = (from: number, to: number, step = 1) => {
  let i = from;
  const range = [];
  while (i <= to) {
    range.push(i);
    i += step;
  }
  return range;
};

const Pagination: React.FC<IPaginationProps> = ({
  meta,
  pageNeighbours = 1,
  isLimitChangeable = true,
  hideDataCount,
  onPageChanged,
  setSearchParams,
	limitOptions=defaultLimitOptions
}: IPaginationProps) => {
  const [params, setParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState<number>(meta?.page || 0);
  const totalPages: number = meta?.totalPageCount as number;
  const pageLimit: number = meta?.limit as number;
  const totalRecords: number = meta?.totalRecords as number;

  useEffect(() => {
    setCurrentPage((meta?.page as number) + 1);
  }, [meta?.page]);

  const gotoPage = (page: number) => {
    const currentPage = Math.max(0, Math.min(page, totalPages)) - 1;
    setCurrentPage(currentPage);
    setSearchParams &&
      setParams({
        ...searchParamsToObject(params),
        page: currentPage.toString(),
      });
    onPageChanged && onPageChanged({ ...meta, page: currentPage });
  };

  const onLimitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchParams &&
      setParams({
        ...searchParamsToObject(params),
        limit: e.target.value,
        page: "0",
      });
    onPageChanged &&
      onPageChanged({
        ...meta,
        page: 0,
        limit: +e.target.value,
      });
  };

  const handleClick = (page: number, evt: any) => {
    evt.preventDefault();
    gotoPage(page);
  };

  const handleMoveLeft = (evt: any) => {
    evt.preventDefault();
    gotoPage(currentPage - pageNeighbours * 2 - 1);
  };

  const handleMoveRight = (evt: any) => {
    evt.preventDefault();
    gotoPage(currentPage + pageNeighbours * 2 + 1);
  };

  const fetchPageNumbers = () => {
    const totalNumbers = pageNeighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      let pages = [];

      const leftBound = currentPage - pageNeighbours;
      const rightBound = currentPage + pageNeighbours;
      const beforeLastPage = totalPages - 1;

      const startPage = leftBound > 2 ? leftBound : 2;
      const endPage = rightBound < beforeLastPage ? rightBound : beforeLastPage;

      pages = range(startPage, endPage);

      const pagesCount = pages.length;
      const singleSpillOffset = totalNumbers - pagesCount - 1;

      const leftSpill = startPage > 2;
      const rightSpill = endPage < beforeLastPage;

      const leftSpillPage = LEFT_PAGE;
      const rightSpillPage = RIGHT_PAGE;

      if (leftSpill && !rightSpill) {
        const extraPages = range(startPage - singleSpillOffset, startPage - 1);
        pages = [leftSpillPage, ...extraPages, ...pages];
      } else if (!leftSpill && rightSpill) {
        const extraPages = range(endPage + 1, endPage + singleSpillOffset);
        pages = [...pages, ...extraPages, rightSpillPage];
      } else if (leftSpill && rightSpill) {
        pages = [leftSpillPage, ...pages, rightSpillPage];
      }

      return [1, ...pages, totalPages];
    }
    return range(1, totalPages);
  };

  if (!totalRecords) return null;
  const pages = fetchPageNumbers();

  return (
    <div className="row px-3 pb-3">
      <Separator />
      {isLimitChangeable || !hideDataCount ? (
        <div
          className={clsx(
            "d-flex align-items-center gap-3 justify-content-center justify-content-md-start",
            {
              "col-md-3 col-xl-2": hideDataCount,
              "col-md-5": !hideDataCount,
            }
          )}
        >
          {isLimitChangeable && (
            <Select
              options={limitOptions}
              textKey="text"
              valueKey="value"
              value={pageLimit}
              acceptNull={false}
              noMargin
              onChange={onLimitChange}
            />
          )}
          {hideDataCount ? null : (
            <span>
              {numEnToBn(currentPage * pageLimit + 1 - pageLimit)} থেকে&nbsp;
              {numEnToBn(currentPage * pageLimit)} পর্যন্ত দেখানো হচ্ছে,&nbsp;
              <b>মোট {numEnToBn(totalRecords)}</b>
            </span>
          )}
        </div>
      ) : null}

      {pages?.length > 1 && (
        <div
          className={clsx(
            "col-md-7 d-flex align-items-center justify-content-center justify-content-md-end",
            {
              "col-md-12 justify-content-md-center": !isLimitChangeable && hideDataCount,
              "col-md-9 col-xl-10": hideDataCount,
            }
          )}
        >
          <ul className="pagination mt-3 mt-md-0">
            {pages.map((page, index) => {
              if (page === LEFT_PAGE)
                return (
                  <li key={index} className="page-item">
                    <button className="page-link" aria-label="Previous" onClick={handleMoveLeft}>
                      <span aria-hidden="true">&laquo;</span>
                    </button>
                  </li>
                );

              if (page === RIGHT_PAGE)
                return (
                  <li key={index} className="page-item">
                    <button className="page-link" aria-label="Next" onClick={handleMoveRight}>
                      <span aria-hidden="true">&raquo;</span>
                    </button>
                  </li>
                );

              return (
                <li key={index} className={clsx(["page-item", { active: currentPage === page }])}>
                  <button
                    className="page-link"
                    onClick={(e) => currentPage !== page && handleClick(page as number, e)}
                  >
                    {numEnToBn(page)}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}; 
 
 export default memo(Pagination);

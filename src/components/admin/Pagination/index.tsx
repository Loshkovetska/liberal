import { ArrowDown } from "@/assets/icons";
import Button from "@/components/ui/button";
import { classNames } from "@/lib/utils";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import Select from "../../common/Select/Select";
import "./pagination.scss";
const Pagination = observer(
  ({ data, get }: { data: any; get: (val: any) => void }) => {
    const countPages = [5, 10, 15, 20, 50];

    const [paginationOptions, setOptions] = useState({
      pageCount: Math.ceil(data && data.length / 5),
      pageSize: 5,
      pageIndex: 0,
      canNextPage: false,
      canPreviousPage: false,
    });

    useEffect(() => {
      if (data) {
        const { pageSize, pageIndex } = paginationOptions;
        const dt = data.slice(pageSize * pageIndex, pageSize * (pageIndex + 1));
        get(dt);
      }
    }, [data, paginationOptions.pageIndex, paginationOptions.pageSize]);

    useEffect(() => {
      if (!paginationOptions.pageIndex) {
        setOptions({
          ...paginationOptions,
          canPreviousPage: true,
          canNextPage: false,
        });
      }

      if (paginationOptions.pageIndex + 1 === paginationOptions.pageCount) {
        setOptions({
          ...paginationOptions,
          canNextPage: true,
          canPreviousPage: false,
        });
      }

      if (paginationOptions.pageCount === 1) {
        setOptions({
          ...paginationOptions,
          canPreviousPage: true,
          canNextPage: true,
        });
      }
    }, [paginationOptions.pageIndex, paginationOptions.pageCount]);

    const previousPage = () => {
      if (!paginationOptions.pageIndex) {
        setOptions({
          ...paginationOptions,
          canPreviousPage: true,
          canNextPage: false,
        });
        return;
      }

      setOptions({
        ...paginationOptions,
        pageIndex: paginationOptions.pageIndex - 1,
        canPreviousPage: false,
        canNextPage: false,
      });
    };

    const nextPage = () => {
      if (paginationOptions.pageIndex + 1 === paginationOptions.pageCount) {
        setOptions({
          ...paginationOptions,
          canNextPage: true,
          canPreviousPage: false,
        });
        return;
      }

      const ind = paginationOptions.pageIndex;

      setOptions({
        ...paginationOptions,
        pageIndex: ind + 1,
        canNextPage: false,
        canPreviousPage: false,
      });
    };

    return (
      <div className="bets-pagination">
        <div className="bets-pagination__btns">
          <Button
            onClick={previousPage}
            className={classNames(
              "button--pag button--pag-prev",
              paginationOptions.canPreviousPage && "button--pag-disabled",
            )}
            disabled={paginationOptions.canPreviousPage}
          >
            Previous
          </Button>

          <Button
            onClick={previousPage}
            className={classNames(
              "button--pag button--pag-arrow button--pag-prev",
              paginationOptions.canPreviousPage && "button--pag-disabled",
            )}
            disabled={paginationOptions.canPreviousPage}
          >
            <ArrowDown />
          </Button>
          <div className="bets-pagination__content">
            Page
            <input
              className="bets-pagination__input"
              type="number"
              value={paginationOptions.pageIndex + 1}
              max={paginationOptions.pageCount}
              min={1}
              onChange={(e) => {
                setOptions({
                  ...paginationOptions,
                  pageIndex: +e.target.value - 1,
                });
              }}
            />
            of {paginationOptions.pageCount}
          </div>
          <Button
            onClick={nextPage}
            disabled={paginationOptions.canNextPage}
            className={classNames(
              "button--pag button--pag-next",
              paginationOptions.canNextPage && "button--pag-disabled",
            )}
          >
            Next
          </Button>
          <Button
            onClick={nextPage}
            className={classNames(
              "button--pag button--pag-arrow button--pag-next",
              paginationOptions.canNextPage && "button--pag-disabled",
            )}
            disabled={paginationOptions.canNextPage}
          >
            <ArrowDown />
          </Button>
        </div>
        <div className="bets-pagination__count">
          Show{" "}
          <Select
            data={countPages}
            defaultValue={paginationOptions.pageSize}
            change={(val: any) =>
              setOptions({
                ...paginationOptions,
                pageSize: +val,
                pageCount: Math.ceil(data && data.length / +val),
                pageIndex: 0,
              })
            }
          />
        </div>
      </div>
    );
  },
);

export default Pagination;

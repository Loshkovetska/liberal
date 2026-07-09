import { ArrowDown } from "@/assets/icons";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { classNames } from "@/lib/utils";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";

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
      <div className="mt-10 flex items-center justify-between px-8 max-xl:px-0 max-md:flex-col max-md:gap-4">
        <div className="flex items-center">
          <Button
            onClick={previousPage}
            className={classNames(
              "text-white hover:text-secondary flex items-center",
              paginationOptions.canPreviousPage &&
                "opacity-50 pointer-events-none",
            )}
            disabled={paginationOptions.canPreviousPage}
          >
            <span className="max-sm:hidden">Previous</span>
            <ArrowDown className="rotate-90 hidden max-sm:flex" />
          </Button>
          <div className="whitespace-nowrap mx-8 flex items-center text-[rgba(255,255,255,0.5)] max-sm:mx-4">
            Page
            <Input
              variant="dark"
              type="number"
              wrapperClass="w-[56px] h-10 mx-4"
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
              "text-white hover:text-secondary",
              paginationOptions.canNextPage && "opacity-50 pointer-events-none",
            )}
          >
            <span className="max-sm:hidden">Next</span>
            <ArrowDown className="-rotate-90 hidden max-sm:flex" />
          </Button>
        </div>
        <div className="flex items-center text-[rgba(255,255,255,0.5)] gap-4 max-sm:mt-4 max-sm:self-start">
          Show{" "}
          <Select
            className="w-20"
            value={String(paginationOptions.pageSize)}
            onValueChange={(val) =>
              setOptions((prev) => ({
                ...prev,
                pageSize: +val,
                pageCount: Math.ceil(data && data.length / +val),
                pageIndex: 0,
              }))
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {countPages.map((count) => (
                <SelectItem
                  key={count}
                  value={String(count)}
                >
                  {count}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    );
  },
);

export default Pagination;

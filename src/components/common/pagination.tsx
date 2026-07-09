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

type PaginationProps = {
  pageSize: number;
  pageIndex: number;
  total: number;
  onPageSize: (v: number) => void;
  onPageIndex: (v: number) => void;
};

const Pagination = observer(
  ({
    pageSize,
    pageIndex,
    total,
    onPageIndex,
    onPageSize,
  }: PaginationProps) => {
    const countPages = [5, 10, 15, 20, 50];

    const pageCount = Math.ceil(total / pageSize);

    const canNextPage = pageIndex + 1 < pageCount;
    const canPreviousPage = pageIndex - 1 >= 0;

    const navigate = (amount: number) => onPageIndex(pageIndex + amount);

    return (
      <div className="mt-10 flex items-center justify-between px-8 max-xl:px-0 max-md:flex-col max-md:gap-4">
        <div className="flex items-center">
          <Button
            onClick={() => navigate(-1)}
            className={classNames(
              "text-white hover:text-secondary flex items-center",
              !canPreviousPage && "opacity-50 pointer-events-none",
            )}
            disabled={!canPreviousPage}
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
              value={pageIndex + 1}
              max={pageCount}
              min={1}
              onChange={(e) => onPageIndex(+e.target.value - 1)}
            />
            of {pageCount}
          </div>
          <Button
            onClick={() => navigate(1)}
            disabled={!canNextPage}
            className={classNames(
              "text-white hover:text-secondary",
              !canNextPage && "opacity-50 pointer-events-none",
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
            value={String(pageSize)}
            onValueChange={(val) => {
              onPageSize(+val);
              onPageIndex(0);
            }}
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

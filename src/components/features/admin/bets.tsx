import Pagination from "@/components/common/pagination";
import BetModel, { getBets } from "@/stores/bet.model";
import { BetsSortBy } from "@/stores/types";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import BetsTable from "./bets-table";

const Bets = observer(() => {
  const { bets: betsResponse } = BetModel;
  const [pageSize, setPageSize] = useState(5);
  const [pageIndex, setPageIndex] = useState(0);
  const [sortBy, setSortBy] = useState<{
    sortBy: BetsSortBy | null;
    sortAsc: boolean;
  }>({ sortAsc: false, sortBy: null });

  useEffect(() => {
    getBets({
      ...sortBy,
      pageIndex,
      pageSize,
    });
  }, [sortBy, pageSize, pageIndex]);

  const bets = betsResponse?.data;

  if (!bets) return null;
  return (
    <div className="w-full border-t border-primary flex flex-col pt-6 pb-8 max-xl:px-8">
      <div className="w-full flex items-center justify-between px-8 max-xl:px-0">
        <div className="flex flex-col">
          <span>Bets</span>
          <span className="opacity-50">Total: {bets?.length}</span>
        </div>
      </div>
      <BetsTable
        bets={bets}
        onSort={(s, asc) => setSortBy({ sortBy: s, sortAsc: asc })}
      />
      <Pagination
        total={betsResponse?.total}
        pageIndex={pageIndex}
        pageSize={pageSize}
        onPageIndex={setPageIndex}
        onPageSize={setPageSize}
      />
    </div>
  );
});

export default Bets;

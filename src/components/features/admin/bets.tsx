import Pagination from "@/components/common/pagination";
import BetModel, { getBets } from "@/stores/bet.model";
import { observer } from "mobx-react";
import { useEffect, useMemo, useState } from "react";
import BetsTable from "./bets-table";

const Bets = observer(() => {
  const { bets } = BetModel;
  const [pageSize, setPageSize] = useState(5);
  const [pageIndex, setPageIndex] = useState(0);
  useEffect(() => {
    getBets(null);
  }, []);

  const paginatedData = useMemo(
    () => bets?.slice(pageSize * pageIndex, pageSize * (pageIndex + 1)),
    [bets, pageIndex, pageSize],
  );

  if (!bets) return null;
  return (
    <div className="w-full border-t border-primary flex flex-col pt-6 pb-8 max-xl:px-8">
      <div className="w-full flex items-center justify-between px-8 max-xl:px-0">
        <div className="flex flex-col">
          <span>Bets</span>
          <span className="opacity-50">Total: {bets?.length}</span>
        </div>
      </div>
      <BetsTable bets={paginatedData} />
      <Pagination
        total={(bets ?? []).length}
        pageIndex={pageIndex}
        pageSize={pageSize}
        onPageIndex={setPageIndex}
        onPageSize={setPageSize}
      />
    </div>
  );
});

export default Bets;

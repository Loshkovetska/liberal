import Pagination from "@/components/common/pagination";
import BetModel, { getBets } from "@/stores/bet.model";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import BetsTable from "./bets-table";

const Bets = observer(() => {
  const { bets } = BetModel;
  const [showData, setShowData] = useState<any>();
  useEffect(() => {
    getBets(null);
  }, []);

  if (!bets) return null;
  return (
    <div className="w-full border-t border-primary flex flex-col pt-6 pb-8 max-xl:px-8">
      <div className="w-full flex items-center justify-between px-8 max-xl:px-0">
        <div className="flex flex-col">
          <span>Bets</span>
          <span className="opacity-50">Total: {bets?.length}</span>
        </div>
      </div>
      <BetsTable bets={showData} />
      <Pagination
        data={bets}
        get={setShowData}
      />
    </div>
  );
});

export default Bets;

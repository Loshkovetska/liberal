import BetModel, { getBets } from "@/stores/bet.model";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import BetsTable from "../BetsTable";
import Pagination from "../Pagination";
import "./bets.scss";

const Bets = observer(() => {
  const { bets } = BetModel;
  const [showData, setShowData] = useState<any>();
  useEffect(() => {
    getBets(null);
  }, []);

  if (!bets) {
    return <></>;
  }

  return (
    <div className="bets">
      <div className="bets__top">
        <div className="bets__top-col">
          <span className="bets__title">Bets</span>
          <span className="bets__count">Total: {bets?.length}</span>
        </div>
      </div>
      <BetsTable bets={showData} />
      <Pagination
        data={bets}
        get={(dt: any) => setShowData(dt)}
      />
    </div>
  );
});

export default Bets;

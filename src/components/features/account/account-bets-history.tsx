import { ArrowDown } from "@/assets/icons";
import { classNames, tableDate } from "@/lib/utils";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";

import BetsTable from "@/components/features/admin/bets-table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import BetModel, { getBets } from "@/stores/bet.model";
import { BetsSortBy, GetBetsParams } from "@/stores/types";
import UserModel from "@/stores/user.model";

const AccountBetsHistory = observer(() => {
  const [activeTime, setTime] = useState("all-time");
  const [activeDate, setDate] = useState([
    new Date().toDateString(),
    new Date(new Date().setDate(new Date().getDate() + 7)).toDateString(),
  ]);
  const [sortBy, setSortBy] = useState<{
    sortBy: BetsSortBy | null;
    sortAsc: boolean;
  }>({
    sortBy: null,
    sortAsc: false,
  });
  const { bets: betsResponse } = BetModel;

  const bets = betsResponse?.data ?? [];

  const timeSort = {
    "all-time": "All time",
    today: "Today",
    week: "Week",
    month: "Month",
    year: "Year",
  };

  useEffect(() => {
    const response: GetBetsParams = {
      userId: UserModel.user?.id,
      time: activeTime,
      ...sortBy,
    };

    if (activeTime === "week") {
      response.date = {
        min: activeDate[0],
        max: activeDate[1],
      };
    }

    getBets(response);
  }, [activeTime, activeDate, sortBy]);

  const goBack = () => {
    const dat = new Date(activeDate[0]);
    const newDate = [dat.toDateString(), activeDate[0]];
    setDate([...newDate]);
  };

  const goNext = () => {
    const dat = new Date(activeDate[1]);
    const dt = new Date(dat.setDate(dat.getDate() + 7));
    const newDate = [activeDate[1], dt.toDateString()];

    setDate([...newDate]);
  };

  return (
    <div className="h-full bg-foreaground3 pt-6 pb-25 max-lg:px-6">
      <div className="flex items-center justify-between pl-3 max-lg:pl-0 max-md:flex-col max-md:items-start">
        <div className="flex">
          {Object.entries(timeSort).map(([value, title], ind) => (
            <button
              className={classNames(
                "w-[88px] h-10 flex items-center justify-center cursor-pointer hover:bg-secondary hover:text-primary max-md:hidden",
                activeTime === value && "bg-secondary text-primary",
              )}
              key={ind}
              onClick={() => setTime(value)}
            >
              {title}
            </button>
          ))}
          <Select
            value={activeTime}
            onValueChange={setTime}
            className="md:hidden"
          >
            <SelectTrigger>
              <SelectValue defaultValue={timeSort[activeTime]} />
            </SelectTrigger>

            <SelectContent>
              {Object.entries(timeSort).map(([value, title]) => (
                <SelectItem
                  key={value}
                  value={value}
                >
                  {title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="w-50 flex items-center mr-12 max-md:self-end max-md:mt-6 max-md:mr-6 max-sm:self-center max-sm:mr-0">
          <ArrowDown
            className="size-4 min-w-4 cursor-pointer rotate-z-90"
            onClick={goBack}
          />
          <span className="mx-2 whitespace-nowrap select-none">{`${tableDate(activeDate[0])} - ${tableDate(activeDate[1])}`}</span>
          <ArrowDown
            className="size-4 min-w-4 cursor-pointer -rotate-z-90"
            onClick={goNext}
          />
        </div>
      </div>
      <BetsTable
        bets={bets}
        withUser={false}
        onSort={(s, asc) => setSortBy({ sortBy: s, sortAsc: asc })}
      />
    </div>
  );
});

export default AccountBetsHistory;

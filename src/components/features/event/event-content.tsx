import { Close } from "@/assets/icons";
import Button from "@/components/ui/button";
import { getEngDate } from "@/lib/utils";
import MatchModel, { getMatchByParams } from "@/stores/match.model";
import { Rate } from "@/stores/types";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import DateTimer from "./date-timer";
import EventTable from "./event-table";
import EventAside from "./event-side";
import EventBet from "./event-bet";

export type EventRate = {
  rat?: Rate;
  idMatch?: number;
  idPlayer?: number;
};

const EventContent = observer(() => {
  const { match } = MatchModel;
  const { pathname } = useLocation();
  const [show, setShow] = useState(true);
  const [rate, setRate] = useState<EventRate | null>();

  useEffect(() => {
    getMatchByParams({
      id: pathname.split("/").pop(),
    });
  }, []);

  if (!match) {
    return <div className="matches-content__error">Something goes wrong</div>;
  }

  return (
    <div className="grow bg-foreaground3 ml-4 max-xl:ml-0">
      <div className="border-2 border-primary px-6 py-5 flex justify-between items-center flex-wrap max-sm:flex-col max-sm:items-start">
        <span className="text-lg text-white uppercase">{match.title}</span>
        <div className="flex flex-wrap max-sm:mt-3 gap-8">
          <span className="text-white flex items-center">
            {getEngDate(match.dateTime)}
          </span>
          <DateTimer date={match.dateTime} />
        </div>
      </div>
      <div className="flex max-xl:flex-col">
        <div className="grow">
          <div className="pt-5 px-6 pb-[25px]">
            <div className="flex justify-between flex-wrap">
              <span className="text-white font-bold">Match odds</span>
              <div className="flex flex-wrap max-sm:mt-3 gap-6">
                <span className="flex text-xs items-center">
                  <span className="font-bold mr-1">Stake limit:</span>
                  {`${match.strokeLimit.min.toLocaleString()} - ${match.strokeLimit.max.toLocaleString()}`}
                </span>
                <span className="flex text-xs items-center">
                  <span className="font-bold mr-1">Max profit:</span>
                  {match.maxProfit.toLocaleString()}
                </span>
              </div>
            </div>
            <EventTable
              match={match}
              suspended={false}
              get={(value: EventRate) =>
                setRate({
                  ...value,
                })
              }
              rate={rate}
            />
            <EventBet
              rate={rate}
              cancel={() => setRate(null)}
              match={match}
            />
          </div>
          {show && (
            <div className="pt-5 px-6 pb-[25px]">
              <div className="flex justify-between flex-wrap">
                <span className="text-white font-bold">
                  BOOKMAKER 0 SEC NO COMM
                </span>
                <Button
                  variant="close"
                  onClick={() => setShow(false)}
                >
                  <Close />
                </Button>
              </div>
              <EventTable
                match={match}
                suspended
                rate={rate}
                get={(value: EventRate) => setRate({ ...value })}
              />
            </div>
          )}
        </div>
        <EventAside match={match} />
      </div>
    </div>
  );
});

export default EventContent;

import { Close } from "@/assets/icons";
import { EventCounter } from "@/components/features/event/event-counter";
import Button from "@/components/ui/button";
import { placeBet } from "@/stores/bet.model";
import UserModel from "@/stores/user.model";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";

const EventBet = observer((props: any) => {
  const [bets, setBets] = useState({
    rate: 0,
    stake: 0,
  });

  const rates = [500, 1000, 5000, 10000, 50000, 100000];

  useEffect(() => {
    if (props.rate) {
      setBets({
        ...bets,
        rate: props.rate.rat.count,
      });
    }
  }, [props.rate]);

  const addBet = () => {
    if (UserModel.user) {
      placeBet({
        userId: UserModel.user?.id,
        idPlayer: props.rate.idPlayer,
        idMatch: props.rate.idMatch,
        stake: bets.stake,
        rate: bets.rate,
      });
    } else alert("You need to login");
  };

  const getAmount = (num: number) => {
    return num > 1000 ? `+${Math.round(num / 1000)}k` : `+${num}`;
  };

  const onBetChange = (key: string, value: number) =>
    setBets((prev) => ({
      ...prev,
      [key]: Math.max(value, 0),
    }));

  return (
    <div className="flex flex-col gap-3 max-sm:gap-4">
      <div className="flex max-md:flex-wrap gap-2">
        <EventCounter
          value={bets.rate}
          placeholder="Rate"
          onChange={(v) => onBetChange("rate", v)}
        />
        <EventCounter
          value={bets.stake}
          min={props.match.strokeLimit.min}
          max={props.match.strokeLimit.max}
          placeholder="Stake"
          onChange={(v) => onBetChange("stake", v)}
        />
        <div className="flex max-md:-ml-1 max-md:flex-wrap">
          {rates.map((r, ind) => (
            <div
              className="cursor-pointer p-2 h-12 flex items-center justify-center bg-[rgba(255, 255, 255, 0.1)] ml-2 hover:bg-secondary max-md:mt-6 max-md:mx-1 max-sm:mt-4 max-sm:p-2 max-sm:text-xs max-sm:h-10"
              key={ind}
              onClick={() => {
                let stake = bets.stake;
                stake += r;
                if (
                  stake >= props.match.strokeLimit.min &&
                  stake <= props.match.strokeLimit.max
                ) {
                  setBets({
                    ...bets,
                    stake,
                  });
                }
              }}
            >
              {getAmount(r)}
            </div>
          ))}
          <Button
            variant="clear"
            className="max-sm:mt-4 max-md:mt-6"
            iconLeft={<Close />}
            onClick={() => {
              setBets({
                ...bets,
                stake: 0,
              });
            }}
          >
            Clear all
          </Button>
        </div>
      </div>
      <div className="flex justify-end gap-2 max-sm:justify-start">
        <Button
          variant="orange-border"
          onClick={() => {
            setBets({
              rate: 0,
              stake: 0,
            });
            props.cancel();
          }}
        >
          Cancel
        </Button>
        <Button
          variant="bet"
          onClick={addBet}
        >
          Place bet
        </Button>
      </div>
    </div>
  );
});

export default EventBet;

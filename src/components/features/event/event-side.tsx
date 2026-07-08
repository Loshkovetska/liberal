import { Edit } from "@/assets/icons";
import Button from "@/components/ui/button";
import CheckBox from "@/components/ui/checkbox";
import Switch from "@/components/ui/switch";
import { classNames } from "@/lib/utils";
import BetModel, { getBet } from "@/stores/bet.model";
import { Match } from "@/stores/types";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";

const EventAside = observer(({ match }: { match: Match }) => {
  const [isChecked, setChecked] = useState(false);
  const [isAccepted, setAccept] = useState(false);
  const [edit, setEditMode] = useState(false);
  const [average, setAverage] = useState(false);
  const [activeValue, setActive] = useState(-1);
  const { bet } = BetModel;
  const [values, setValues] = useState({
    num1: 20,
    num2: 50,
    num3: 100,
  });

  const [inputs, setInputs] = useState({
    num1: 20,
    num2: 50,
    num3: 100,
  });

  useEffect(() => {
    getBet({});
  }, []);

  return (
    <aside className="max-xl:w-full w-[336px] bg-foreaground3 border-2 border-primary">
      <div className="py-5 px-6">
        <div className="flex justify-between max-xl:justify-start max-xl:flex-wrap max-xl:gap-4">
          <div className="relative max-xl:mt-4">
            <Switch
              labelClass="flex items-center text-xs cursor-pointer"
              onValueChange={setChecked}
              value={isChecked}
              labelText="1 click betting"
            />
          </div>
          <div className="relative max-xl:mt-4">
            <CheckBox
              labelClass="flex items-center text-xs cursor-pointer"
              onValueChange={setAccept}
              value={isAccepted}
              labelText="Accept all odds"
            />
          </div>
        </div>
        {isChecked && (
          <div className="mt-4 flex flex-col">
            <div className="flex gap-2">
              {!edit ? (
                <>
                  <button
                    className={classNames(
                      "flex items-center justify-center w-[90px] h-12 cursor-pointer bg-[rgba(255, 255, 255, 0.1)] hover:bg-secondary max-sm:w-[80px] max-sm:h-10",
                      activeValue === values.num1 && "bg-secondary",
                    )}
                    onClick={() => setActive(values.num1)}
                  >
                    {values.num1}
                  </button>
                  <button
                    className={classNames(
                      "flex items-center justify-center w-[90px] h-12 cursor-pointer bg-[rgba(255, 255, 255, 0.1)] hover:bg-secondary max-sm:w-[80px] max-sm:h-10",
                      activeValue === values.num2 && "bg-secondary",
                    )}
                    onClick={() => setActive(values.num2)}
                  >
                    {values.num2}
                  </button>
                  <button
                    className={classNames(
                      "flex items-center justify-center w-[90px] h-12 cursor-pointer bg-[rgba(255, 255, 255, 0.1)] hover:bg-secondary max-sm:w-[80px] max-sm:h-10",
                      activeValue === values.num3 && "bg-secondary",
                    )}
                    onClick={() => setActive(values.num3)}
                  >
                    {values.num3}
                  </button>
                </>
              ) : (
                <>
                  <input
                    className="w-[90px] h-12 bg-[rgba(255, 255, 255, 0.1)] px-4 focus-within:outline-none active:outline-none hover:outline-none"
                    value={inputs.num1}
                    type="number"
                    max={999999}
                    min={0}
                    onChange={(e) =>
                      setInputs({
                        ...inputs,
                        num1: +e.target.value,
                      })
                    }
                  />
                  <input
                    className="w-[90px] h-12 bg-[rgba(255, 255, 255, 0.1)] px-4 focus-within:outline-none active:outline-none hover:outline-none"
                    value={inputs.num2}
                    type="number"
                    max={999999}
                    min={0}
                    onChange={(e) =>
                      setInputs({
                        ...inputs,
                        num2: +e.target.value,
                      })
                    }
                  />
                  <input
                    className="w-[90px] h-12 bg-[rgba(255, 255, 255, 0.1)] px-4 focus-within:outline-none active:outline-none hover:outline-none"
                    value={inputs.num3}
                    type="number"
                    max={999999}
                    min={0}
                    onChange={(e) =>
                      setInputs({
                        ...inputs,
                        num3: +e.target.value,
                      })
                    }
                  />
                </>
              )}
            </div>
            <div className="flex gap-2">
              <Button
                variant="edit"
                onClick={() => {
                  if (edit) {
                    setValues({
                      ...inputs,
                    });
                  }
                  setEditMode(!edit);
                }}
                iconLeft={!edit ? <Edit /> : undefined}
              >
                {!edit ? "Edit" : "Save"}
              </Button>
              {edit && (
                <Button
                  variant="edit"
                  onClick={() => setEditMode(!edit)}
                >
                  Cancel
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="py-5">
        <div>
          <div className="flex justify-between items-center px-6 max-xl:w-125 max-md:w-full max-sm:justify-start">
            <span className="max-sm:mr-4">Matched bets</span>
            <div className="relative max-xl:mt-0">
              <CheckBox
                labelClass="flex items-center text-xs cursor-pointer"
                onValueChange={setAverage}
                value={average}
                labelText="Average odds"
              />
            </div>
          </div>
          <div className="mt-3 flex flex-col max-xl:w-[500px] max-xl:px-6 max-md:w-full ">
            {match.players.map((pl, index) => (
              <div
                className="flex flex-col max-sm:flex-row"
                key={index}
              >
                <div
                  className={classNames(
                    "flex py-1.5 px-5 max-xl:w-full max-sm:flex-col max-sm:px-0",
                    !index && "md:bg-info [&>div]:text-info-light",
                    index + 1 === match.players.length &&
                      "md:bg-purple [&>div]:text-purple-light",
                  )}
                >
                  <div className="opacity-70 text-xs min-w-[104px] text-left grow w-[104px] max-sm:w-full max-sm:min-w-full max-sm:grow-0">
                    Bet for
                  </div>
                  <div className="opacity-70 text-xs w-[50px] min-w-[50px] text-center max-sm:text-left">
                    Odds
                  </div>
                  <div className="opacity-70 text-xs w-[50px] min-w-[50px] mx-4 text-center max-sm:text-left max-sm:mx-0">
                    Stake
                  </div>
                  <div className="opacity-70 text-xs w-[50px] min-w-[50px] text-center max-sm:text-left">
                    Profit
                  </div>
                </div>
                <div className="flex px-5 py-3 max-xl:w-full max-sm:flex-col max-sm:py-2">
                  <div className="text-xs w-[104px] min-w-[104px] text-left max-xl:grow">
                    {pl.title}
                  </div>
                  <div className="text-xs w-[50px] min-w-[50px] text-center max-sm:text-left">
                    £5.00
                  </div>
                  <div className="text-xs w-[50px] min-w-[50px] text-center max-sm:text-left mx-4 flex flex-col max-sm:mx-0 max-sm:flex-row">
                    <span className="text-xs max-sm:mr-2">£5.00</span>
                    <span className="text-xs font-bold">£5.00</span>
                  </div>
                  <div className="text-xs w-[50px] min-w-[50px] text-center max-sm:text-left">
                    £19.00
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-foreaground5 pt-4 pb-5">
        <div className="px-6">
          <span className="max-sm:mr-4">Unmatched bets</span>
        </div>
      </div>
    </aside>
  );
});

export default EventAside;

import { classNames } from "@/lib/utils";

type SwitchProps = {
  onValueChange: (value: boolean) => void;
  value: boolean;
  labelClass?: string;
  labelText: string;
};

const Switch = ({
  value,
  labelClass,
  labelText,
  onValueChange,
}: SwitchProps) => {
  return (
    <label className="flex items-center gap-3">
      <div className="cursor-pointer relative w-[42px] h-6 min-w-[42px] max-w-[42px] flex items-center rounded-[100px] bg-primary-dark px-0.75 py-0.5">
        <input
          type="checkbox"
          checked={value}
          onChange={() => onValueChange(!value)}
          className="absolute size-full invisible"
        />
        <div
          className={classNames(
            "size-5 rounded-full bg-secondary",
            value ? "translate-x-[90%]" : "translate-none",
          )}
        />
      </div>
      <span className={"label-text " + labelClass}>{labelText}</span>
    </label>
  );
};

export default Switch;

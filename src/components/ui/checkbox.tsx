import { Check } from "@/assets/icons";

type CheckboxProps = {
  onValueChange: (value: boolean) => void;
  value: boolean;
  labelClass?: string;
  labelText: string;
};

const CheckBox = ({
  value,
  labelClass,
  labelText,
  onValueChange,
}: CheckboxProps) => {
  return (
    <label className="flex items-center gap-2">
      <div className="cursor-pointer relative size-6 min-w-6 max-w-6 max-sm:size-5 max-sm:min-w-5 max-sm:max-w-5 flex items-center justify-center">
        <input
          type="checkbox"
          checked={value}
          onChange={() => onValueChange(!value)}
          className="absolute size-full invisible"
        />
        <div className="">{value && <Check className="text-secondary" />}</div>
      </div>
      <span className={"label-text " + labelClass}>{labelText}</span>
    </label>
  );
};

export default CheckBox;

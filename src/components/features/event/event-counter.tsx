import { AddBox, MinusBox } from "@/assets/icons";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";

type EventCounterProps = {
  value: string | number;
  placeholder: string;
  min?: number;
  max?: number;
  onChange: (v: number) => void;
};

export function EventCounter({
  value,
  placeholder,
  min,
  max,
  onChange,
}: EventCounterProps) {
  return (
    <Input
      wrapperClass="w-35 px-0.75 max-md:mt-6 max-sm:w-30"
      type="number"
      placeholder={placeholder}
      value={value}
      min={min}
      max={max}
      onChange={(e) => onChange(+e.target.value)}
      iconRight={
        <div className="flex flex-col justify-between">
          <Button
            variant="num"
            onClick={() => onChange(Number(value || 0) + 1)}
          >
            <AddBox className="max-sm:size-4" />
          </Button>
          <Button
            variant="num"
            disabled={!value}
            onClick={() => onChange(Number(value || 0) - 1)}
          >
            <MinusBox className="max-sm:size-4" />
          </Button>
        </div>
      }
    />
  );
}

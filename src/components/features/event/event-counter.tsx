import { AddBox, MinusBox } from "@/assets/icons";
import Button from "@/components/ui/button";

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
    <div className="w-35 h-12 px-0.75 bg-white text-primary flex items-center max-md:mt-6 max-sm:w-30 max-sm:h-10">
      <input
        type="number"
        className="no-spinner w-full bg-transparent outline-none focus-within:outline-none active:outline-none text-primary placeholder:text-primary/50"
        placeholder={placeholder}
        value={value}
        min={min}
        max={max}
        onChange={(e) => onChange(+e.target.value)}
      />
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
    </div>
  );
}

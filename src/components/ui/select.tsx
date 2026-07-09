import { ChevronDown } from "@/assets/icons";
import { useClickOutside } from "@/lib/hooks/use-click-outside";
import { classNames } from "@/lib/utils";
import { createContext, useContext, useRef, useState } from "react";
type SelectProps = {
  value: string;
  className?: string;
  onValueChange: (v: string) => void;
};

const SelectContext = createContext({
  value: "",
  isOpen: false,
  onOpenChange: () => {},
  onValueChange: (v: string) => {},
});

export const SelectTrigger = ({ children }: React.PropsWithChildren) => {
  const { isOpen, onOpenChange } = useContext(SelectContext);

  return (
    <button
      className="flex items-center gap-2 justify-between size-full p-2 pl-4 bg-primary-base"
      onClick={onOpenChange}
    >
      {children}
      <ChevronDown className={classNames("size-6", isOpen && "rotate-180")} />
    </button>
  );
};

export const SelectValue = ({
  defaultValue,
  placeholder,
}: {
  defaultValue?: string;
  placeholder?: string;
}) => {
  const { value } = useContext(SelectContext);
  return (
    <span className="text-white">{defaultValue || value || placeholder}</span>
  );
};

export const SelectItem = ({
  children,
  value,
}: React.PropsWithChildren<{ value: string }>) => {
  const { onValueChange } = useContext(SelectContext);
  return (
    <label
      className="px-4 py-2 text-nowrap cursor-pointer w-full text-primary bg-white flex items-center hover:bg-secondary"
      onClick={() => onValueChange(value)}
    >
      {children}
    </label>
  );
};

export const SelectContent = ({ children }: React.PropsWithChildren) => {
  const { isOpen } = useContext(SelectContext);

  return isOpen ? (
    <div
      className="w-full flex flex-col relative z-1 max-h-25 overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  ) : null;
};

export const Select = ({
  value,
  children,
  className,
  onValueChange,
}: React.PropsWithChildren<SelectProps>) => {
  const [isOpen, setOpen] = useState(false);

  const selectRef = useRef<HTMLDivElement>(null);

  const onOpenChange = () => setOpen((prev) => !prev);

  const onChange = (value: string) => {
    onValueChange(value);
    setOpen(false);
  };

  useClickOutside(isOpen, selectRef, onOpenChange);

  return (
    <SelectContext.Provider
      value={{
        value,
        onValueChange: onChange,
        isOpen,
        onOpenChange,
      }}
    >
      <div
        ref={selectRef}
        className={classNames(
          "h-10 min-w-[170px] w-[170px] relative cursor-pointer",
          className,
          isOpen && "block!",
        )}
      >
        {children}
      </div>
    </SelectContext.Provider>
  );
};

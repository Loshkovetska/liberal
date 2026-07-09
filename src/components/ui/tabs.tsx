import { classNames } from "@/lib/utils";
import { createContext, useContext } from "react";
import { Link } from "react-router";

const TabsContext = createContext({
  value: 0,
  onValueChange: (v: number) => {},
});

type TabProps = {
  href?: string;
  id: number;
  className?: string;
  activeClassName?: string;
};

export function Tab({
  href,
  children,
  className,
  id,
  activeClassName,
}: React.PropsWithChildren<TabProps>) {
  const { onValueChange, value } = useContext(TabsContext);
  return (
    <Link
      to={href}
      className={classNames(
        "text-nowrap flex items-center justify-center text-base w-[158px] px-8 py-5 cursor-pointer max-sm:text-sm max-sm:w-[130px] max-[375px]:w-[120px]",
        value === id && activeClassName,
        className,
      )}
      onClick={() => onValueChange(id)}
    >
      {children}
    </Link>
  );
}

export function Tabs({
  className,
  value,
  onValueChange,
  ...props
}: React.PropsWithChildren<React.HtmlHTMLAttributes<HTMLDivElement>> & {
  value: number;
  onValueChange: (v: number) => void;
}) {
  return (
    <TabsContext.Provider value={{ value, onValueChange }}>
      <div
        className={classNames(
          "flex relative overflow-hidden after:content-[''] after:w-[158px] after:h-1 after:bg-secondary after:absolute after:bottom-0 after:left-0",
          `after:translate-x-[${value * 158}px] after:max-sm:translate-x-[${value * 130}px] after:max-[375px]:translate-x-[${value * 120}px]`,
          className,
        )}
        {...props}
      />
    </TabsContext.Provider>
  );
}

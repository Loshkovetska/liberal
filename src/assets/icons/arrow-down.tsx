import { SvgProps } from "@/lib/type";

export const ArrowDown = (props: SvgProps) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m4 4.8 4 4 4-4 1.6.8L8 11.2 2.4 5.6z"
      fill="#fff"
    />
  </svg>
);

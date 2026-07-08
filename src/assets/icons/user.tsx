import { SvgProps } from "@/lib/type";
export const User = (props: SvgProps) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
      stroke="#000"
      strokeWidth={2}
      strokeMiterlimit={10}
    />
    <path
      d="M3.874 26.999a14.005 14.005 0 0 1 24.252 0"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

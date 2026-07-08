import { SvgProps } from "@/lib/type";

export const Search = (props: SvgProps) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m21 21-4.486-4.494zm-2-10.5a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0z"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
);

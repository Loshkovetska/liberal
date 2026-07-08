import { SvgProps } from "@/lib/type";
export const MinusBox = (props: SvgProps) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z"
      fill="#f7bd6b"
    />
    <path
      d="M13 13h4v-2H7v2z"
      fill="#f7bd6b"
    />
  </svg>
);

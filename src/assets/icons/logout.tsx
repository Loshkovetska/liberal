import { SvgProps } from "@/lib/type";

export const Logout = (props: SvgProps) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 5c0-1.1.9-2 2-2h8v2H5v14h8v2H5c-1.1 0-2-.9-2-2zm14.176 6L14.64 8.464l1.414-1.414 4.95 4.95-4.95 4.95-1.414-1.414L17.176 13H10.59v-2z"
      fill="currentColor"
    />
  </svg>
);

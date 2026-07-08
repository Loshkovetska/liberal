import { SvgProps } from "@/lib/type";

export const Eye = (props: SvgProps) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.172 7.308c.316.413.316.971 0 1.384-.996 1.3-3.384 3.975-6.172 3.975S2.824 9.99 1.83 8.692a1.13 1.13 0 0 1 0-1.384c.994-1.3 3.382-3.975 6.17-3.975s5.176 2.676 6.172 3.975"
      stroke="#10161b"
      strokeWidth={1.333}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
      stroke="#10161b"
      strokeWidth={1.333}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

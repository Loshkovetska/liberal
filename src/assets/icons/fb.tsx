import { SvgProps } from "@/lib/type";
export const Facebook = (props: SvgProps) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M4.382 0A4.373 4.373 0 0 0 0 4.382v15.236A4.373 4.373 0 0 0 4.382 24h8.258v-9.382h-2.481v-3.379h2.48V8.355c0-2.268 1.467-4.35 4.844-4.35 1.367 0 2.378.132 2.378.132l-.08 3.154s-1.03-.01-2.156-.01c-1.218 0-1.413.561-1.413 1.493v2.467h3.666l-.16 3.377h-3.506V24h3.406A4.373 4.373 0 0 0 24 19.618V4.382A4.373 4.373 0 0 0 19.618 0z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path
          fill="#fff"
          d="M0 0h24v24H0z"
        />
      </clipPath>
    </defs>
  </svg>
);

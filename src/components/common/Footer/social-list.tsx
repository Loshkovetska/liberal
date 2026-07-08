import { footerContent } from "@/lib/constants/footer";
import { Link } from "react-router";

export default function Social({
  list,
}: {
  list: typeof footerContent.social;
}) {
  return list.map((s) => (
    <Link
      to={s.href}
      key={s.href}
    >
      {s.icon}
    </Link>
  ));
}

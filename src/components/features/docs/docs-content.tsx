import { docsContent } from "@/lib/constants/docs";
import { Link } from "react-router";

export function DocsContent({
  subtexts,
  links,
  text,
  title,
}: Omit<typeof docsContent, "titles"> & { title: string }) {
  return (
    <>
      <h1 className="text-xl text-white">{title}</h1>
      {subtexts.map((t) => (
        <p
          className="mt-6 text-[rgba(255,255,255,0.5)] max-sm:text-sm"
          key={t}
        >
          {t}
        </p>
      ))}
      <p className="mt-6 text-[rgba(255,255,255,0.5)] max-sm:text-sm">
        {links.map((link) => (
          <Link
            to={link}
            key={link}
            className="line-clamp-1 block text-[rgba(255,255,255,0.5)] hover:text-secondary"
            target="_blank"
          >
            {link}
          </Link>
        ))}
      </p>
      <p className="mt-6 text-[rgba(255,255,255,0.5)] max-sm:text-sm">{text}</p>
    </>
  );
}

import { DocsAside } from "@/components/features/docs/docs-aside";
import { DocsContent } from "@/components/features/docs/docs-content";
import { docsContent } from "@/lib/constants/docs";

const Policy = ({ type }: { type: "privacy" | "terms" | "rules" }) => {
  return (
    <div className="mt-17.75 flex max-lg:flex-col max-sm:mt-12.5">
      <DocsAside />
      <div className="max-w-206 max-lg:max-w-full p-4">
        <DocsContent
          {...docsContent}
          title={docsContent.titles[type]}
        />
      </div>
    </div>
  );
};

export default Policy;

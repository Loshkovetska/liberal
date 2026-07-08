import Social from "@/components/common/footer/social-list";
import { footerContent } from "@/lib/constants/footer";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="w-full p-4 flex flex-col gap-15 max-sm:gap-8">
      <div className="flex justify-between max-md:flex-col max-md:items-center max-md:justify-center max-md:gap-6">
        <div className="flex items-center gap-8 max-sm:gap-6">
          <Social list={footerContent.social} />
        </div>
        <div className="flex gap-8 max-sm:gap-6">
          {footerContent.logos.map((logo) => (
            <img
              src={logo}
              key={logo}
              className="size-full"
            />
          ))}
        </div>
      </div>
      <div className="flex justify-between items-end max-md:flex-col max-md:items-center max-md:justify-center">
        <p className="text-sm text-white max-sm:text-xs">
          {footerContent.copyright}
        </p>
        <Link
          to={footerContent.policy.url}
          className="text-white underline max-sm:text-xs hover:text-primary2 max-md:mt-2"
        >
          {footerContent.policy.title}
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

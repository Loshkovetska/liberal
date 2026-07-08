import {
  Facebook as Fb,
  Gmail,
  Instagram,
  Telegram,
  Twitter,
  Whatsapp,
  Youtube,
} from "@/assets/icons";

import img from "@/assets/images/Group28.png";
import img1 from "@/assets/images/Group29.png";
import img2 from "@/assets/images/Group30.png";

const socialItems = [
  {
    icon: <Instagram />,
    href: "#",
  },
  {
    icon: <Fb />,
    href: "#",
  },
  {
    icon: <Gmail />,
    href: "#",
  },
  {
    icon: <Twitter />,
    href: "#",
  },
  {
    icon: <Whatsapp />,
    href: "#",
  },
  {
    icon: <Youtube />,
    href: "#",
  },
  {
    icon: <Telegram />,
    href: "#",
  },
];

export const footerContent = {
  social: socialItems,
  logos: [img, img1, img2],
  copyright: "© Liberalplay. 2026",
  policy: { title: "Privacy Policy", url: "/policy/privacy" },
};

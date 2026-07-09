import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import ScrollToTop from "@/components/common/scroll-to-top";
import Auth from "@/components/features/auth";
import Forgot from "@/components/features/auth/reset-password";
import { classNames } from "@/lib/utils";
import { authModel } from "@/stores/auth.model";
import { observer } from "mobx-react";
import { useRef } from "react";
import { Outlet, useLocation } from "react-router";

function Main() {
  const headerContent = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  return (
    <>
      <Header />
      <div ref={headerContent} />
      <ScrollToTop headerContent={headerContent} />
      <main
        className={classNames(
          "p-4 w-full grow max-md:p-2 max-md:mb-12",
          pathname.includes("404") && "p-0 max-md:pb-0",
        )}
      >
        <Outlet />
      </main>
      {authModel.getState().isAuthOpen && <Auth />}
      {authModel.getState().isForgotOpen && <Forgot />}
      <Footer />
    </>
  );
}

export default observer(Main);

import { Close } from "@/assets/icons";
import Social from "@/components/common/footer/social-list";
import Button from "@/components/ui/button";
import { Tab, Tabs } from "@/components/ui/tabs";
import { footerContent } from "@/lib/constants/footer";
import { authTabs } from "@/lib/constants/menu";
import { authModel } from "@/stores/auth.model";
import UserModel from "@/stores/user.model";
import { runInAction } from "mobx";
import { observer } from "mobx-react";
import { useState } from "react";
import Login from "./sign-in";
import Register from "./sign-up";

const Auth = observer(() => {
  const { setState } = authModel;
  const [currentTab, setTab] = useState(0);

  const onTabChange = (idx: number) => {
    setTab(idx);
    runInAction(() => {
      UserModel.message = "";
    });
  };

  return (
    <div
      className="w-screen h-screen bg-[rgba(16,22,27,0.8)] fixed overflow-auto inset-0"
      onClick={setState}
    >
      <div
        className="w-120 absolute left-1/2 top-1/2 -translate-1/2 bg-foreaground3 rounded max-sm:size-full max-sm:min-h-[685px] max-sm:left-0 max-sm:top-0 max-sm:translate-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pr-6 border-b-4 border-primary">
          <Tabs
            value={currentTab}
            onValueChange={onTabChange}
          >
            {authTabs.map((tab, idx) => (
              <Tab
                id={idx}
                href="#"
              >
                {tab.title}
              </Tab>
            ))}
          </Tabs>

          <Button
            variant="close"
            onClick={setState}
          >
            <Close className="size-6 text-secondary" />
          </Button>
        </div>
        {UserModel.message.length > 0 && (
          <div className="text-lg text-error pt-4 px-8 text-center font-semibold">
            {UserModel.message}
          </div>
        )}
        <div className="px-8 pt-8 pb-10 bg-foreaground3 max-sm:px-4">
          {!currentTab ? <Login /> : <Register />}
        </div>
        <div className="border-t border-primary pt-6 pb-10 px-8 bg-foreaground3 max-sm:px-4">
          <p className="text-lg mb-6 max-sm:mb-4">Wanna be closer to us?</p>
          <div className="flex flex-wrap gap-2 max-sm:mt-2">
            <Social list={footerContent.social} />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Auth;

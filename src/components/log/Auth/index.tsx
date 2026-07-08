import { Close } from "@/assets/icons";
import Social from "@/components/common/Footer/social-list";
import Button from "@/components/ui/button";
import { authTabs } from "@/lib/constants/menu";
import { classNames } from "@/lib/utils";
import { authModel } from "@/stores/auth.model";
import UserModel from "@/stores/user.model";
import { runInAction } from "mobx";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Login from "../Login";
import Register from "../Register";
import "./auth.scss";

const Auth = observer(() => {
  const { setState } = authModel;
  const [currentTab, setTab] = useState(0);
  const [classname, setClass] = useState(
    !currentTab ? "account-tabs--active-tab0" : "account-tabs--active-tab1",
  );

  useEffect(() => {
    setClass(
      !currentTab ? "account-tabs--active-tab0" : "account-tabs--active-tab1",
    );
  }, [currentTab]);

  return (
    <div
      className="w-screen h-screen bg-[rgba(16,22,27,0.8)] fixed overflow-auto"
      onClick={setState}
    >
      <div
        className="w-120 absolute left-1/2 top-1/2 -translate-1/2 bg-foreaground3 rounded"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pr-6 border-b-4 border-primary">
          <div className={classNames("account-tabs", classname)}>
            {authTabs.map((tab, ind) => (
              <Link
                to="#"
                className="account-tabs__item"
                key={ind}
                onClick={() => {
                  setClass(`account-tabs--active-tab${ind}`);
                  setTab(ind);
                  runInAction(() => {
                    UserModel.message = "";
                  });
                }}
              >
                {tab.title}
              </Link>
            ))}
          </div>
          <Button
            variant="close"
            onClick={setState}
          >
            <Close className="size-6" />
          </Button>
        </div>
        {UserModel.message.length > 0 && (
          <div className="auth-modal__model-error">{UserModel.message}</div>
        )}
        <div className="auth-modal__tab">
          {!currentTab ? <Login /> : <Register />}
        </div>
        <div className="auth-modal__bottom">
          <p className="auth-modal__text">Wanna be closer to us?</p>
          <div className="auth-modal__social">
            <Social />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Auth;

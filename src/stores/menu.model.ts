import { observable, runInAction } from "mobx";

const MenuModel = observable({
  isOpen: false,
});

const setState = () => {
  runInAction(() => {
    MenuModel.isOpen = !MenuModel.isOpen;
  });
};

const getState = () => MenuModel;

export const menuModel = { getState, setState };

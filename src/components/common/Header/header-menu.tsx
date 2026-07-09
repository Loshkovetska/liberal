import { Close, List as MenuSvg } from "@/assets/icons";
import Button from "@/components/ui/button";
import { menuModel } from "@/stores/menu.model";
import { observer } from "mobx-react";

const Menu = observer(() => {
  const { isOpen } = menuModel.getState();

  return (
    <Button
      onClick={menuModel.setState}
      className="w-20.5 h-20 hidden max-xl:flex max-sm:w-17.5 max-sm:h-15 text-white"
    >
      {!isOpen ? <MenuSvg /> : <Close className="size-8" />}
    </Button>
  );
});

export default Menu;

import { Close, List as MenuSvg } from "@/assets/icons";
import Button from "@/components/ui/button";
import { menuModel } from "@/stores/menu.model";
import { observer } from "mobx-react";
import { useEffect } from "react";

const Menu = observer(() => {
  const { isOpen } = menuModel.getState();

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (
        isOpen &&
        document.querySelector(".main-aside__content") &&
        !(document.querySelector(".main-aside__content") as Element).contains(
          e.target as Node,
        )
      ) {
        menuModel.setState();
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isOpen]);

  return (
    <Button
      onClick={menuModel.setState}
      className="w-20.5 h-20 hidden max-xl:flex max-sm:w-17.5 max-sm:h-15"
    >
      {!isOpen ? <MenuSvg /> : <Close className="rotate-z-45" />}
    </Button>
  );
});

export default Menu;

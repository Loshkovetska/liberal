import { useEffect } from "react";

export function useClickOutside(
  isOpen: boolean,
  elementRef: React.RefObject<HTMLElement>,
  handler: () => void,
) {
  useEffect(() => {
    if (!elementRef.current || !isOpen) {
      document.body.style.overflow = "auto";

      document.removeEventListener("mousedown", checkIfClickedOutside);
      return;
    }

    document.body.style.overflow = "hidden";

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isOpen, elementRef, handler]);

  function checkIfClickedOutside(e: MouseEvent) {
    if (isOpen && !elementRef.current.contains(e.target as Node)) {
      document.body.style.overflow = "auto";
      handler();
    }
  }
  return null;
}

import { useEffect, useRef } from "react";
import { useLocation } from "react-router";


const ScrollToTop =  ({headerContent}:{headerContent:any})=>{
  const {pathname} = useLocation();
  useEffect(() => {
    if(headerContent && headerContent.current){
      (headerContent.current as Element).scrollIntoView();
    }
  },[pathname]);

  return null;
}

export default ScrollToTop
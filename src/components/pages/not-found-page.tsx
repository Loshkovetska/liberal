import img1 from "@/assets/images/Group527.png";
import img2 from "@/assets/images/Group528.png";
import Button from "@/components/ui/button";
import { useNavigate } from "react-router";
const NotFound = () => {
  const history = useNavigate();
  return (
    <div className="size-full flex items-center justify-center relative overflow-hidden">
      <img
        src={img1}
        className="absolute -z-1 left-0 bottom-0 max-md:w-[200px] max-md:h-[350px] max-sm:-left-8 max-sm:-bottom-10"
      />
      <div className="flex items-center flex-col max-sm:w-[90%]">
        <h1 className="bg-linear-120 from-[#10161b1c] to-[#15212eba] text-[200px]/[300px] bg-clip-text text-transparent max-md:text-[170px] max-sm:text-[145px]/[145px]">
          404
        </h1>
        <span className="text-xl -mt-8 mb-4 max-md:-mt-[60px] text-white">
          Page not found
        </span>
        <p className="text-white/50 text-center ">
          The page you are looking for does not seem to exist
        </p>
        <Button
          variant="log"
          className="w-45 mt-10"
          onClick={() => history("/")}
        >
          Go to the mainpage
        </Button>
      </div>
      <img
        src={img2}
        className="absolute -z-1 right-8 top-8  max-sm:top-0 max-sm:right-20.5 max-sm:w-25 max-sm:h-25 max-sm:scale-75"
      />
    </div>
  );
};

export default NotFound;

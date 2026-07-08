import img from "@/assets/images/back-banner.png";
import MainAside from "@/components/features/main/main-aside";
import MainAsideGames from "@/components/features/main/main-aside-games";
import MainTab from "@/components/features/main/main-tab";
const MainPage = () => {
  return (
    <section className="w-full flex max-xl:flex-col">
      <MainAside />
      <div className="grow mx-4 max-xl:mx-0">
        <div className="w-full relative min-h-79.25 max-sm:h-full max-sm:min-h-[30vw] max-sm:max-h-[30vw] p-6 max-md:p-4 flex items-end">
          <img
            src={img}
            className="size-full absolute inset-0 object-cover"
          />
          <h1 className="w-93.75 text-5xl max-md:text-4xl max-sm:text-xl text-white max-md:w-[64%] z-1 relative">
            Your best sport banner ever
          </h1>
        </div>
        <MainTab />
      </div>
      <MainAsideGames />
    </section>
  );
};

export default MainPage;

import MainAside from "@/components/features/main/main-aside";
import EventContent from "../features/event/event-content";

const EventPage = () => {
  return (
    <section className="w-full flex max-xl:flex-col">
      <MainAside />
      <EventContent />
    </section>
  );
};

export default EventPage;

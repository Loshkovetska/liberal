import { Search as SearchSVG } from "@/assets/icons";
import Button from "@/components/ui/button";
import { getSportEvents } from "@/stores/sevent.model";
import { useState } from "react";

const Search = () => {
  const [inputValue, setValue] = useState("");
  return (
    <div className="w-full h-12 bg-primary-light flex items-center justify-between px-4">
      <input
        className="grow bg-transparent hover:outline-none focus-within:outline-none text-white pr-2 placeholder:text-sm placeholder:text-white/50 max-sm:h-10 max-sm:placeholder:text-xs"
        placeholder="Search events..."
        value={inputValue}
        onChange={(e) => setValue(e.target.value)}
      />

      <Button
        variant="search"
        onClick={() => getSportEvents(inputValue)}
      >
        <SearchSVG />
      </Button>
    </div>
  );
};

export default Search;

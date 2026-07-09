import { Search as SearchSVG } from "@/assets/icons";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { getSportEvents } from "@/stores/sevent.model";
import { useState } from "react";

const Search = () => {
  const [inputValue, setValue] = useState("");
  return (
    <Input
      variant="dark"
      placeholder="Search events..."
      value={inputValue}
      onChange={(e) => setValue(e.target.value)}
      iconRight={
        <Button
          variant="search"
          onClick={() => getSportEvents(inputValue)}
        >
          <SearchSVG />
        </Button>
      }
    />
  );
};

export default Search;

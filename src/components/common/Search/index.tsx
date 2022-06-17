import "./search.scss";
import {ReactComponent as SearchSVG} from "../../../img/icons/search.svg";
import { useState, useEffect } from "react";
import Button from "../Button";
import {getSportEvents} from "../../../stores/SportEventModel";

const Search  = ()=>{
    const [inputValue, setValue] = useState("");
    return(
        <div className="search">
            <input className="search-input" placeholder="Search events..."
            value={inputValue}
            onChange={(e)=>setValue(e.target.value)}/>
            
            <Button classname="button--search" content={<SearchSVG/>} click={
                ()=>getSportEvents(inputValue)
            }disabled={false}/>
        </div>
    )
}

export default Search;
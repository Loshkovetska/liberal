import { useEffect, useRef, useState} from "react";
import cn from 'classnames';
import "./Select.scss";

const Select  = ({defaultValue, data, change}:{defaultValue: any, data: any, change: (value: string)=>void})=>{

    const [state, setState] = useState({
        isSelectOpened: false,
        activeItem: 0,
        item: defaultValue 
    });

    const selectRef = useRef<HTMLDivElement>(null);

    const inputHandler = (e:any)=>{
        setState({
            ...state, item: e.target.textContent,
            isSelectOpened: !state.isSelectOpened

        })
        change(e.target.dataset.key);
    }

    const closeSelect = (e:any)=>{
        if(selectRef){
            if (selectRef.current && !selectRef.current.contains(e.target) && !e.target.classList.contains("auth-select")) {
                setState({
                    ...state, isSelectOpened: false
                })
            }
        }
    }
    useEffect(()=>{
        selectRef && document.addEventListener('mousedown',closeSelect);
        return ()=>  selectRef &&  document.removeEventListener('mousedown',closeSelect);
    })


        return(

                        <div ref={selectRef} className={cn("select",state.isSelectOpened && "select--active")} 
                        onClick={
                            (e)=>{
                                if((e.target as HTMLElement).classList.contains("select"))
                                setState({
                                    ...state, isSelectOpened: !state.isSelectOpened
                                })
                            }  
                        }>
                             <span className="select__text">{state.item}</span>
                                <div className="select__radios">
                                    {
                                        data.map((item:any,index:number)=>(
                                            <input type="radio" name="item" id={`item${index}`} key={index} title={item.title|| item} className="auth-select__radio"/>
                                        ))
                                    }
                                </div>
                                {state.isSelectOpened && <div className="select__labels">
                                    {
                                        data.map((item:any,index:number)=>(
                                            <label htmlFor={`item${index}`} className="select__option" key={index} data-key={item.key||item} onClick={(e)=>inputHandler(e)}>{item.title||item}</label>
                                        ))
                                    }
                                </div>}
                         </div>
        );
}

export default Select
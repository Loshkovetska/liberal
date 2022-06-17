import { runInAction, observable } from "mobx";


const MenuModel = observable({
    isOpen: false
})


export const setState = ()=>{

    runInAction(()=>{
        MenuModel.isOpen = !MenuModel.isOpen;
    })
}

export default MenuModel;
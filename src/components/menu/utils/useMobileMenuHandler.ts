import {useState} from "react";

const useMobileMenuHandler = () => {
    const [display, setDisplay] = useState<Boolean>(false);

    const menuHandler = (): void => {
        setDisplay(!display)
    }

    const delayMenuHandler = (ev: any): void => {
        ev.stopPropagation()
        setTimeout(()=>{
            setDisplay(false);
        },550)
    }

    return {
        display, menuHandler, delayMenuHandler
    }
}

export {
    useMobileMenuHandler
}

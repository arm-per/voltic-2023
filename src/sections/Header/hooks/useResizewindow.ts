import {useEffect, useState} from "react";
import {getViewport} from "../utils/get-viewport";

const useResizeWindow = (): string => {

    const firstState =  getViewport();

    const [viewport, setViewport] = useState<string>(firstState)

    useEffect(()=>{
        window.addEventListener('resize', () =>{
            const currentViewport =  getViewport();
            setViewport(currentViewport);
        })
        return () => (
            window.removeEventListener('resize', () =>{
                const currentViewport =  getViewport();
                setViewport(currentViewport);
            })
        )
    }, [])

    return viewport;
}

export {
    useResizeWindow
}

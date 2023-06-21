import {ReactElement} from "react";
import style from './signature.module.css';

const Signature = (): ReactElement => {
    return <>
        <div className={style.signature}>
            {`Voltic ${new Date().getFullYear()} | Todos los derechos reservados`}
        </div>
    </>
}

export {
    Signature
}

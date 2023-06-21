import {ReactElement} from "react";
import style from './input.module.css';

interface InputPros {
    type?: string;
    name: string;
    id: string;
    label?: string;
    value?: string;
}

const Input = ({type, name, id, label, value}: InputPros): ReactElement => {

    return (
        !(type === 'textarea') ?
            <div className={style.input}>
                <label htmlFor={id}>{label}</label>
                <input type={type} id={id} name={name} value={value}/>
            </div> : <div className={style.input}>
                <label htmlFor={id}>{label}</label>
                <textarea name={name} id={id}/>
            </div>
    )
}

export {Input};

import {ReactElement} from "react";
import style from './contactwrapper.module.css';
import {Form} from "../form/form";

const ContactWrapper = ({children, title}: any): ReactElement => {

    return <section className={style.wrapper}>
        <div>
            <h2>
                {title}
            </h2>
            <div className={style.grid}>
                {children}
                <Form/>
            </div>
        </div>
    </section>
}

export {
    ContactWrapper
}

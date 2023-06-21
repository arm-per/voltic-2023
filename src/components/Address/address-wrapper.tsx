import {ReactElement} from "react";
import style from './address.module.css';

const AddressWrapper = ({children, changeAddress, bg}: any): ReactElement => {

    console.log(bg)

    return (
        <article className={style.address}>
            <div className={style.addressContainer}>
                <div>
                    <div className={style.buttonContainer}>
                        <button className={bg && style.buttonSelected} onClick={()=> changeAddress(true)}>Puerto Peñasco</button>
                        <button className={!bg && style.buttonSelected} onClick={()=> changeAddress(false)}> Querétaro</button>
                    </div>

                    {children}
                </div>
            </div>

        </article>
    )
}

export {
    AddressWrapper
}

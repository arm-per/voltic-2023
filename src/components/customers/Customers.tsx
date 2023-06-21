import {ReactElement} from "react";
import style from './customers.module.css';

interface interfaceProps {
    logos: Array<string>
}

const Customers = ({logos}: interfaceProps):ReactElement => {

    return <div className={style.customer}>
        <h2>Nuestros clientes</h2>
        <div className={style.customerContainer}>
            {
                logos.map((logo, index) => {
                    return <img src={logo} key={"customer_" + index} alt="cliente"/>
                })
            }
        </div>
    </div>
}

export {
    Customers
}

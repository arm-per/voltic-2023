import {ReactElement} from "react";
import {Customers} from "../../components/customers/Customers";

import customer_02 from './customer_00002.jpg';
import customer_03 from './customer_00003.jpg';
import customer_04 from './customer_00004.jpg';
import customer_05 from './customer_00005.png';
import customer_06 from './customer_00006.png';
import customer_07 from './customer_00007.svg';
import customer_08 from './customer_00008.png';
import customer_09 from './customer_00009.png';
import customer_10 from './customer_00010.png';
import customer_11 from './customer_00011.svg';
import customer_12 from './customer_00012.jpg';
import customer_13 from './customer_00013.png';

const Clientes = (): ReactElement => {

    const our_costumers = [ customer_02, customer_03, customer_04, customer_05, customer_06, customer_07, customer_08, customer_09, customer_10, customer_11, customer_12, customer_13]

    return (
        <section id="clientes">
            <Customers logos={our_costumers}/>
        </section>
    );
}

export  {
    Clientes
}

import {ReactElement} from "react";

const Address = ({children, title, map, phone}: any):ReactElement => {

    const style = {
        fontSize: '24px',
        fontWeight: 'normal',
        fontStyle: 'normal'
    }

    return (
        <address>
            <h3 style={style}>{title}</h3>
            {children}
            <p>{phone}</p>
            <iframe
                src={map}
                width="600" height="300" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"/>
        </address>
    )
}

export {Address}

import {ReactElement, useState, memo} from "react";
import {ContactWrapper} from "../../components/contact";
import {AddressWrapper, Address} from "../../components/Address";

const Contacto = (): ReactElement => {

    const [address, setAddress] = useState<Boolean>(true);
    const [active, setActive] = useState<Boolean>(true);

    const style = {
        fontWeight: 'bold',
        marginBottom: 0,
    }

    const addressStyle = {
        margin: 0,
    }

    const addressHandler = (newState: Boolean): void => {
        setAddress(newState);
        setActive(newState);
    }


    return (
        <section id="contacto">
            <ContactWrapper title="Contáctanos">
                <AddressWrapper changeAddress={addressHandler} bg={active}>
                    {address &&
                        <Address
                            title="Puerto Peñasco"
                            map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13630.66145899676!2d-113.53742643144113!3d31.34061351562361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x812ba50a5f68193f%3A0xea1da84d387f4bdd!2sPuerto%20Yavaros%20389%2C%20Jos%C3%A9%20L%C3%B3pez%20Portillo%2C%2083552%20Puerto%20Pe%C3%B1asco%2C%20Son.!5e0!3m2!1sen!2smx!4v1684773748185!5m2!1sen!2smx"
                            phone="442 706 7663"
                        >
                            <div style={style}>
                                <p style={addressStyle}>
                                    Calle Salvador Cabrales y Puerto Yavaros #389
                                </p>
                                <p style={addressStyle}>
                                    Col. López Portillo CP 83550
                                </p>
                            </div>
                            <p>
                                Puerto Peñasco, Sonora
                            </p>
                        </Address>
                    }
                    {!address &&
                        <Address
                            title="Querétaro"
                            map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1867.9185699012994!2d-100.39947176121916!3d20.553843395244897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d3451cd1dd184b%3A0x15ba6dabe137030a!2sC.%20Huizaches%20155%2C%20Colinas%20del%20Sur%2C%2076900%20Venceremos%2C%20Qro.!5e0!3m2!1sen!2smx!4v1684864385639!5m2!1sen!2smx"
                            phone="442 706 7663"
                        >
                            <div style={style}>
                                <p style={addressStyle}>
                                    Calle Huizaches #T 15
                                </p>
                                <p style={addressStyle}>
                                    Col. Colinas del Sur
                                </p>
                            </div>
                            <p>
                                Querétaro, Qro.
                            </p>
                        </Address>
                    }
                </AddressWrapper>
            </ContactWrapper>
        </section>
    )
}

export default memo(Contacto);

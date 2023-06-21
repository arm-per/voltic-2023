import {ReactElement} from "react";
import {Input} from "./input";

const Form = (): ReactElement => {
    return (
        <form action="../mail.php">
            <Input
                name={"name"}
                id={'name'}
                label={'Nombre'}
                type={'text'}
            />
            <Input
                name={"phone"}
                id={'phone'}
                label={'Teléfono'}
                type={'phone'}
            />
            <Input
                name={"email"}
                id={'email'}
                label={'Correo Electrónico'}
                type={'email'}
            />
            <Input
                name={"project"}
                id={'project'}
                label={'Cuéntanos sobre tu proyecto'}
                type={'textarea'}
            />
            <Input
                name={"project"}
                id={'project'}
                type={'submit'}
                value={'Enviar'}
            />
        </form>
    )
}

export {
    Form
}

import { UseFormRegister } from "react-hook-form";
import { ContainerInput, ErrorMessage, InputDefault } from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    label?: string;
    name: string;
    error?: string;
    register: UseFormRegister<any>,
    requiredMessage?: string
    width?: string
    widthContainer?: string
    padding?: string
}

const Input = ({
    name, 
    error, 
    register, 
    requiredMessage,
    ...rest
}: InputProps) => {
    return (
        <ContainerInput
            widthContainer={rest.widthContainer}
            padding={rest.padding}
        >
            <p>{rest.label}</p>

            <InputDefault  
                {...rest} 
                {...register(name, { required: requiredMessage })} 
                width={rest.width}
            />            

            {error && (
                <ErrorMessage>{error}</ErrorMessage>
            )}
        </ContainerInput>
    )
}

export default Input;
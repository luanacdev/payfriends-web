import { UseFormRegister } from "react-hook-form";
import { SigninInput, SigninInputContainer } from "../../../pages/Signin/styles";
import { ErrorMessage } from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    label: string;
    name: string;
    error?: string;
    register: UseFormRegister<any>,
    requiredMessage?: string
}

const Input = ({label, name, error, register, requiredMessage, ...rest}: InputProps) => {
    return (
        <SigninInputContainer>
            <p>{label}</p>

            <SigninInput  {...rest} {...register(name, { required: requiredMessage })}/>            

            {error && (
                <ErrorMessage>{error}</ErrorMessage>
            )}
        </SigninInputContainer>
    )
}

export default Input;
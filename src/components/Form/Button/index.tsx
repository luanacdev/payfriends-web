import { ButtonSyles } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild: boolean;
}

export const Button: React.FC<ButtonProps> = ({children, asChild=false, ...rest}) => {
    return (
        <ButtonSyles {...rest}>
            {children}
        </ButtonSyles>
    )
}
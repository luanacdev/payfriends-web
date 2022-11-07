import { ButtonDefault } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean;
    bgColor?: string;
    transitionColor?: string;
    whi?: string;
    hei?: string;   
}

export const Button: React.FC<ButtonProps> = ({children, asChild=false, ...rest }) => {
    return (
        <ButtonDefault 
            bgColor={rest.bgColor}
            transitionColor={rest.transitionColor}
            whi={rest.whi}
            hei={rest.hei}
            {...rest}>
            {children}
        </ButtonDefault>
    )
}
import { ButtonDefault } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean;
    bgColor?: string;
    transitionColor?: string;
    wid?: string;
    hei?: string;  
    mt?: string;
    mb?: string;
    fontColor?: string;
}

export const Button: React.FC<ButtonProps> = ({children, asChild=false, ...rest }) => {
    return (
        <ButtonDefault 
            bgColor={rest.bgColor}
            transitionColor={rest.transitionColor}
            wid={rest.wid}
            hei={rest.hei}
            mt={rest.mt}
            mb={rest.mb}
            fontColor={rest.fontColor}
            {...rest}
        >
            {children}
        </ButtonDefault>
    )
}
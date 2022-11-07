import { X } from "phosphor-react";
import { ButtonCloseModal, ButtonDefault } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean;
    bgColor?: string;
    transitionColor?: string;
    whi?: string;
    hei?: string;  
    mt?: string;
    mb?: string;
    closeModal?: boolean;
}

export const Button: React.FC<ButtonProps> = ({children, asChild=false, ...rest }) => {
    return (
        <>
        {
            rest.closeModal ?
                <ButtonCloseModal>
                    <X size={24} />
                </ButtonCloseModal>
            :
                <ButtonDefault 
                    bgColor={rest.bgColor}
                    transitionColor={rest.transitionColor}
                    whi={rest.whi}
                    hei={rest.hei}
                    mt={rest.mt}
                    mb={rest.mb}
                    {...rest}
                >
                    {children}
                </ButtonDefault>
        }
        </>
    )
}
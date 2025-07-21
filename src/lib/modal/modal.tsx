import styled from "styled-components";
import { Button } from "../button";
import { ButtonIcon } from "../button";
import { InputText } from "../input-text";

interface IModalProps {
    title?: string;
    primaryButtonText?: string;
    secondaryButtonText?: string;
    children?: React.ReactNode;
}

const StyledModal = styled.div<IModalProps>
`
    padding: ${props => props.theme.spacing.paddings.large};
    display: flex;
    // display: inline-flex;
    flex-direction: column;
    gap: ${props => props.theme.spacing.outer.grouped};
    min-width: 240px;
    max-width: 600px;
    border: 1px solid;
    border-color: ${props => props.theme.colors.border.neutral.calm};
    border-radius: ${props => props.theme.borderRadius.componentBase};

    .modal-header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        & > .modal-title {
            font-family: ${props => props.theme.typography.fontFamily.heading};
            font-size: ${props => props.theme.typography.fontSize.heading.h3};
            line-height: ${props => props.theme.typography.lineHeight.heading.h3};
            font-weight: ${props => props.theme.typography.fontWeight.bold};
            color: ${props => props.theme.colors.textIcon.neutral.loud};
        }
    }
    
    .modal-body {
        display: flex;
        flex-direction: column;
        gap: ${props => props.theme.spacing.outer.related};
    }

    .modal-footer {
        display: flex;
        flex-direction: row;
        gap: ${props => props.theme.spacing.outer.related};
    }
`;

export const Modal: React.FC<IModalProps> = ({
    title, 
    primaryButtonText, 
    secondaryButtonText, 
    children
}) => {
    return (
    <StyledModal 
        title={title}
        primaryButtonText={primaryButtonText}
        secondaryButtonText={secondaryButtonText}
    >
        <div className="modal-header">
            <span className="modal-title">Регистрация</span>
            <ButtonIcon appearance="ghost" size="xl" icon="close"/>
        </div>
        <div className="modal-body">
            <InputText label="Логин" placeholder="Введите логин" required/>
            <InputText label="Пароль" placeholder="Введите пароль" required/>
            {children}
        </div>
        <div className="modal-footer">
            <Button text="Зарегистрировать" appearance="primaryBase" size="xl"/>
            <Button text="Отмена" appearance="secondary" size="xl"/>
        </div>
    </StyledModal>);
};
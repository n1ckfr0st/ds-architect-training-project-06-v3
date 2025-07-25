import styled from "styled-components";
import { Icon, iconsType } from "../icon";

// MAIN INTERFACE

interface IButtonProps {
    
    /**
     * Визуальный вес компонента
     */
    appearance?: "primaryBase" | "primaryDerivate" | "secondary" | "ghost";
    
    /**
     * Физический размер компонента (для разных устройств)
     */
    size?: "xl" | "xs";
    
    /**
     * Делает кнопку недоступной для взаимодействия
     */
    disabled?: boolean;
    
    /**
     * Отображает процесс вызванный нажатием
     */
    loading?: boolean;
    
    /**
     * Отображает иконку перед текстом
     */
    iconBefore?: iconsType;
    
    /**
     * Отображает иконку после текста
     */
    iconAfter?: iconsType;

    /**
     * Наполнение текстом
     */
    text?: string;
}

// MAIN STYLES

const StyledButton = styled.button<IButtonProps> 
`
    border: 1px solid transparent;
    background: none;
    border-radius: ${(props) => props.theme.borderRadius.mini};
    display: inline-flex;
    flex-direction: row;
    gap: ${(props) => props.theme.spacing.inner.close};
    justify-content: center;
    align-items: center;
    padding: unset;
    transition: ${(props) => props.theme.animation.base};
    &:focus {
        box-shadow: ${(props) => props.theme.focus};
    }
    

// PROPS $ STYLES

    // APPEARANCE PROPS

    ${(props) => props.appearance === "primaryBase" && 
    `
        &:enabled {
            background-color: ${props.theme.colors.bg.interact.green.enabled};
            color: ${props.theme.colors.textIcon.inverted};
        }
        &:hover {
            background-color: ${props.theme.colors.bg.interact.green.hover};
        }
        &:active {
            background-color: ${props.theme.colors.bg.interact.green.active};
        }
        &:focus {
            background-color: ${props.theme.colors.bg.interact.green.focus};
        }
        &:disabled {
            background-color: ${props.theme.colors.bg.interact.green.disabled};
        }
    `}

    ${(props) => props.appearance === "primaryDerivate" && 
    `
        &:enabled {
            background-color: ${props.theme.colors.bg.interact.gray.enabled};
            color: ${props.theme.colors.textIcon.inverted};
        }
        &:hover {
            background-color: ${props.theme.colors.bg.interact.gray.hover};
        }
        &:active {
            background-color: ${props.theme.colors.bg.interact.gray.active};
        }
        &:focus {
            background-color: ${props.theme.colors.bg.interact.gray.focus};
        }
        &:disabled {
            background-color: ${props.theme.colors.bg.interact.gray.disabled};
        }
    `}

    ${(props) => props.appearance === "secondary" && 
    `
        &:enabled {
            background-color: ${props.theme.colors.bg.interact.lighWeight.enabled};
            color: ${props.theme.colors.textIcon.interact.enabled};
            border-color: ${props.theme.colors.border.interact.enabled};
        }
        &:hover {
            background-color: ${props.theme.colors.bg.interact.lighWeight.hover};
            color: ${props.theme.colors.textIcon.interact.hover};
            border-color: ${props.theme.colors.border.interact.hover};
        }
        &:active {
            background-color: ${props.theme.colors.bg.interact.lighWeight.active};
            color: ${props.theme.colors.textIcon.interact.active};
            border-color: ${props.theme.colors.border.interact.active};
        }
        &:focus {
            background-color: ${props.theme.colors.bg.interact.lighWeight.focus};
            color: ${props.theme.colors.textIcon.interact.focus};
            border-color: ${props.theme.colors.border.interact.focus};
        }
        &:disabled {
            background-color: ${props.theme.colors.bg.interact.lighWeight.disabled};
            color: ${props.theme.colors.textIcon.interact.disabled};
            border-color: ${props.theme.colors.border.interact.disabled};
        }
    `}
    
    ${(props) => props.appearance === "ghost" && 
    `
        &:enabled {
            color: ${props.theme.colors.textIcon.interact.enabled};
        }
        &:hover {
            background-color: ${props.theme.colors.bg.interact.lighWeight.hover};
            color: ${props.theme.colors.textIcon.interact.hover};
        }
        &:active {
            background-color: ${props.theme.colors.bg.interact.lighWeight.active};
            color: ${props.theme.colors.textIcon.interact.active};
        }
        &:focus {
            background-color: ${props.theme.colors.bg.interact.lighWeight.focus};
            color: ${props.theme.colors.textIcon.interact.focus};
        }
        &:disabled {
            background-color: ${props.theme.colors.bg.interact.lighWeight.disabled};
            color: ${props.theme.colors.textIcon.interact.disabled};
        }
    `}

    ${(props) => props.disabled &&
    `
        &:disabled {
            background-color: ${props.theme.colors.bg.interact.lighWeight.disabled};
            color: ${props.theme.colors.textIcon.interact.disabled};
            border-color: ${props.theme.colors.border.interact.disabled};
            cursor: not-allowed;
        }
    `}
    
    // SIZE PROPS

    ${(props) => props.size === "xl" &&
    `
        height: ${props.theme.spacing.widthHeight.base};
        padding: 0 ${props.theme.spacing.paddings.default};
        font-size: ${props.theme.typography.fontSize.componet.base};
        line-height: ${props.theme.typography.lineHeight.componet.base};
        font-weight: ${props.theme.typography.fontWeight.regular};
    `}
    ${(props) => props.size === "xs" &&
    `
        height: ${props.theme.spacing.widthHeight.small};
        padding: 0 ${props.theme.spacing.paddings.compact};
        font-size: ${props.theme.typography.fontSize.componet.small};
        line-height: ${props.theme.typography.lineHeight.componet.small};
        font-weight: ${props.theme.typography.fontWeight.regular};
    `}
`;

/**
 * Используется как первичный призыв к действию, а также для перехода к другим разделам сайта.
 */
export const Button: React.FC<IButtonProps> = ({
    appearance, 
    size, 
    disabled, 
    loading, 
    iconBefore, 
    iconAfter, 
    text = "buttonText"
}) => {
    return <StyledButton 
        appearance={appearance} 
        size={size} 
        disabled={disabled} 
        loading={loading}
        iconBefore={iconBefore}
        iconAfter={iconAfter}
    >
        {iconBefore && <Icon size={size === "xl" ? 20 : 16} iconName={iconBefore} />}
        {text}
        {iconAfter && <Icon size={size === "xl" ? 20 : 16} iconName={iconAfter} />}
    </StyledButton>;
};